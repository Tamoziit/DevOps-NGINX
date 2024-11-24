# DevOps-NGINX
NGINX concepts exploration

* Command to generate SSL certificates using openssl
```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx-selfsigned.key -out nginx-selfsigned.crt
```

* Command to spin up the containers
```bash
docker-compose up --build
```
* Visit https://loalhost:443 or http://localhost:8080 to explore the application & see NGINX load balancing in action

* Command to spin down the containers
```bash
docker-compose down
```