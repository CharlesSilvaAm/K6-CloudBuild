# K6 com Pipeline CloudBuild
<p align="center">
  <img src="https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F1854%2F7061cda4-6e39-409b-a9e6-d3a308a1ce43.png" alt="K6" width="800"/>
  <img src="https://static.vecteezy.com/system/resources/previews/012/697/298/large_2x/3d-javascript-logo-design-free-png.png" alt="JavaScript" width="800"/>
  <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*rjkefn0Vnv6bZ_EuutgkNg.png" alt="CloudBuild" width="800"/>
</p>

# Tecnologias utilizadas:

JS
npm
k6
docker
Grafana
Cloud Build (Google Cloud) 

# Estrutura de arquivos
📦Cloud-Console-Sample-Build
┣ 📂img
┃ ┗ 📜results.png
┣ 📂scripts
┃ ┣ 📂tests
┃ ┃ ┣ 📜signup-list.js
┃ ┃ ┣ 📜signup-load.js
┃ ┃ ┗ 📜signup-smoke.js
┃ ┃ ┣ 📜signup-stress.js
┃ ┃ ┗ 📜test.js
┣ 📜.gitignore
┣ 📜cloudbuild.yaml
┣ 📜docker-compose.yml
┣ 📜Dockerfile
┣ 📜README.md

# Exemplos de execução
```bash
-  Pré-requisitos:
Instalação k6
Instalação docker/docker-compose
Sem docker, influxdb e grafana:
Com npm:
npm run test.js
Sem npm:
k6 run -e env=PRD tests/test.js
Com docker, grafana:
Com npm:
npm docker:up
docker-compose up -d influxdb grafana && docker-compose run k6 run -e env=PRD tests/test.js