import http from 'k6/http'
import { sleep, check } from 'k6'

export const options = {
    stages: [
        { duration: '1m', target: 100 },
        { duration: '2m', target: 100 },
        { duration: '1m', target: 0 }
    ],
    thresholds: {
        http_req_duration: ['p(95)<2000'],
        http_req_failed: ['rate<0.01']
    }
}
export default function () {
    const loginUrl = 'http://172.16.16.49:4000/auth/login';
    const loginData = {
        employee_code: "admin",
        password: "12345678"
    }
    const loginRequestOptions = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const loginResponse = http.post(loginUrl, JSON.stringify(loginData), loginRequestOptions);
    const authToken = loginResponse.json().token;

    const url = 'http://172.16.16.49:4000/appointments'

    const payload = JSON.stringify({
        status: 1,
        setupId: 'C53B453E-F36B-1410-88F1-006C8A03256D',
        refuseId: null
    })

    const headers = {
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        }
    }

    const res = http.post(url, payload, headers)


    check(res, {
        'status should be 201': (r) => r.status === 201
    })

    sleep(1)
}
