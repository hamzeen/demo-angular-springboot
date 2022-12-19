# Demo: Angular inside Spring Boot project

this repo serves and angular front-en from a Spring Boot project.

## 1. Running the Project

### 1.1. For Local run: 
1. Install front-end dependencies:   
`cd src\main\resources\frontend && npm install`
2. Launch the app: `mvnw spring-boot:run`

### 1.2. For Deployment:
1. Build it: `mvn package`
2. Run from baove build: `java -jar demo-0.0.1-SNAPSHOT.jar`


## 2. Available end-points
1. Served from Spring Boot: http://localhost:8080/hello
2. Served from Angular: http://localhost:8080

### References:

Spring Boot: https://spring.io/guides/gs/spring-boot/
Angular and Spring Boot in a Single Project: https://www.baeldung.com/spring-boot-angular-web
