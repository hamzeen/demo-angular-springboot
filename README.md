# Demo: Angular inside Spring Boot project

this repo serves an Angular front-end from within a Spring Boot project.
&nbsp;
\
&nbsp;




## 1. Running the Project

The project could be built in 2 ways. One for local (dev) build & 
another for production using build artefact(s). Below you find the steps 
for both of them.


### 1.1. For Local run: 
1. Install front-end dependencies:   
`cd src\main\resources\frontend && npm install`
2. Launch the app: `mvnw spring-boot:run`

### 1.2. For Deployment:
* Build: `mvn package`
* Run abve build: `java -jar demo-0.0.1-SNAPSHOT.jar`

&nbsp;
\
&nbsp;

## 2. Available end-points
1. Served from Spring Boot: http://localhost:8080/hello
2. Served from Angular: http://localhost:8080

\
&nbsp;

## 3. References:

* Spring Boot: https://spring.io/guides/gs/spring-boot/  
* Angular & Spring Boot in a Single Project: https://www.baeldung.com/spring-boot-angular-web
