# Demo: Angular inside Spring Boot project

this repo serves and angular front-en from a Spring Boot project.

## Running the Project

### For Local run: 
1. Install front-end dependencies:   
`cd src\main\resources\frontend && npm install`
2. Launch the app: `mvnw spring-boot:run`

### For Deployment:
1. Build it: `mvn package`
2. Run from baove build: `java -jar demo-0.0.1-SNAPSHOT.jar`


## Available end-points
1. Served from Spring Boot: http://localhost:8080/hello
2. Served from Angular: http://localhost:8080

