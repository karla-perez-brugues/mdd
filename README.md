# Monde de Dév

This application is a social network intended for developers where they have a dashboard with articles in connection with the topics they subscribed to.
They can read and post articles but also comment them.

## Back

Make sure Java is installed and check the version with `java -version`. This application requires Java 11.

### Data base

Make sure mysql is installed with `mysql -V`.  
Create a new database named `mdd`.  
Then, at the root of the project, create a file named `.env` with these properties and fill them according to your configuration :
- `SPRING_DATASOURCE_URL`
- `SPRING_DATASOURCE_USERNAME`
- `SPRING_DATASOURCE_PASSWORD`
- `JWT_SECRET`
- `JWT_EXPIRATION`

The different tables will be created automatically when the development server is started.

### Start the API

Go inside the backend folder
> cd mdd/back

Install dependencies
> mvn clean install

Start backend
> mvn spring-boot:run

The API is running on `http://localhost:3001`.

## Front

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

### Start the application

Go inside the frontend folder
> cd mdd/front

Install dependencies
> npm install

Start frontend
> ng serve

Navigate to `http://localhost:4200/`.

## Dependencies

### Back

- Spring Web
- Spring Data JPA
- MySQL Driver
- Spring Security
- Spring Validation
- JWT
- Model Mapper

### Front

- RxJS
- Angular Router
- Angular Forms
- Angular Material