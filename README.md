# Reservation System
A web app that enables the YDRC staff to coordinate the reservation process in their organization between all of them.

# Brief Summary of key requirements / features
   - User must be authorized to using the website.
   - Services should be able to contain all facilities in YDRC.
   - Each facility should be able to present all events, and can booked a new event on it.
  - Events should be able to see it all details.
  - Events should be able to approve by admin. 

# Features
### Main functionality
  - User Login by shared username and password. 
  - Viewing all facilities in YDRC.
  - Select Facility.
    - Enable to see the events and its details.
    - Book a new event by the calendar, and fill in details.
  - Enable the admin to approve the pending events. 

# Key technologies
  - React.js
    - Create React App - https://reactjs.org/docs/create-a-new-react-app.html 
    - React Router - https://www.npmjs.com/package/react-router
    - React Big Calendar - https://www.npmjs.com/package/react-big-calendar
  - Express.js
  - Sequelize.js - http://docs.sequelizejs.com/ 
  - Axios - https://www.npmjs.com/package/axios

# Architecture
  - ### The website has two parts
      - **Client** (React.js): view all facilities on YDRC, each facility view all it's events, and can choose an event to see its details, and can use the react big calendar book an event, and fill its details.  
      - **Server** (Express.js, Sequelize.js): build the server and the database. Then, the routes that will add data (Login, book form) to the database or get data (services, events, event details, event status) from the database. Plus, ensure the user is authorized to use the website.

  - ### Code structure
      - Client folder contains the components folder that contains the react components for the app.
      - Server folder contains the server, and router that contains all app endpoints.
      - Database folder contains all the models and relations of the app database.
      - The website begins with server/app.js.

# User Guide
**Development Setup**
- Make sure you have Node 8 and NPM>5 installed
    ```sh
     node --version; npm --version
    ```
- Clone the project, and cd to its directory.
   ```sh
     cd ReservationSystem
  ```
- Run npm i to install npm deps.
    ```sh
     npm i
    ```
- Run npm run dev to build and run the project.
    ```sh
     npm run dev
    ```
**Demo**
https://reservation-system-ydrc.herokuapp.com/

**Login**

 (Shared accounts for tests _username / password_)
  
  - To try this as admin _manager / 482106_
  - To try this as normal user _staff / 482106_

# How to use Reservation System website
 - Login with username and password.
 - Select one of YDRC facilities.
 - Using Calendar can book new events and fill it details.
 - Can see the facility and it's events details. 
 - As an admin user can approve the pending events. 
