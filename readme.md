# User CRUD Application

This is a simple Node.js application written in TypeScript that provides CRUD (Create, Read, Update, Delete) functionality for managing user data using MongoDB with Mongoose. The application uses ESM modules for better code organization and Jest for testing.

## Getting Started

To get started with the application, follow the instructions below.

### Prerequisites

- Node.js (version 15.11.0 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/adilkhansatemirov/infijoy-test-app.git
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following env variables:

   - Set the `MONGO_URI` environment variable to the connection URL of your MongoDB instance. You can do this by either:
     - Creating a `.env` file in the project root directory and adding the following line:
       ```
       MONGO_URI=mongodb+srv://adilkhansatemirov:testpass0@cluster0.fr8uhqe.mongodb.net/infijoy-test-app?retryWrites=true&w=majority
       NODE_ENV=development
       PORT=5000
       ```
     - In case if database connection fails because your DNS host doesn't support `srv` records use this URI:
       ```
       MONGO_URI=mongodb://adilkhansatemirov:testpass0@ac-oxpofjo-shard-00-00.fr8uhqe.mongodb.net:27017,ac-oxpofjo-shard-00-01.fr8uhqe.mongodb.net:27017,ac-oxpofjo-shard-00-02.fr8uhqe.mongodb.net:27017/infijoy-test-app?ssl=true&replicaSet=atlas-1vwkvb-shard-0&authSource=admin&retryWrites=true&w=majority
       ```

4. Start the application:

   ```
   npm start
   ```

   The application should now be running on http://localhost:5000.

5. To run the tests:

   ```
   npm test
   ```

## API Endpoints

The application provides the following API endpoints for managing users:

- `GET /api/users`: Retrieve all users.
- `GET /api/users/:id`: Retrieve a single user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:id`: Update an existing user.
- `DELETE /api/users/:id`: Delete a user.

