# Review Section API

This project implements a RESTful API for managing reviews. It includes functionalities for user registration, login, and token-based authentication for review-related operations (Create, Read, Update, Delete). MongoDB is used as the database.

## Features

*   **User Management:**
    *   User Registration (`/auth/register`)
    *   User Login (`/auth/login`) - Returns a JWT token upon successful login.
*   **Review Management (Authenticated Endpoints):**
    *   **Create Review (`POST /reviews`):** Save review image URL (or handle image upload), number of stars (1-5), review title, and number of students who watched.
    *   **Get All Reviews (`GET /reviews`):** Retrieve a list of all reviews.
    *   **Get Single Review (`GET /reviews/:id`):** Retrieve a specific review by its ID.
    *   **Update Review (`PUT /reviews/:id`):** Update all fields of a specific review.
    *   **Delete Review (`DELETE /reviews/:id`):** Delete a specific review by its ID.
*   **Authentication:**
    *   JWT (JSON Web Token) based authentication.
    *   Protected review endpoints require a valid token in the `Authorization` header (Bearer token) or as a cookie.
*   **Database:**
    *   MongoDB for data persistence.
*   **Frontend Integration:**
    *   Designed to be consumed by a React frontend to display and manage reviews.

## Technologies Used

*   **Backend:** Node.js, Express.js (or your chosen framework)
*   **Database:** MongoDB (with Mongoose ODM recommended)
*   **Authentication:** JSON Web Tokens (e.g., `jsonwebtoken` npm package)
*   **Image Handling:** (Specify your strategy, e.g., Cloudinary, AWS S3, or local storage with a public URL path)
*   **Password Hashing:** bcrypt.js (or similar)

## Prerequisites

*   Node.js (v14.x or later recommended)
*   npm or yarn
*   MongoDB instance (local or cloud-based like MongoDB Atlas)
*   Postman (for API testing)

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <your-project-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root of your project and add the following variables:
    ```env
    NODE_ENV = "development"
    PORT = 8080
    MONGO_URI = mongodb+srv://admin:admin@cluster0.dcn45.mongodb.net/task?retryWrites=true&w=majority&appName=Cluster0
    JWT_SECRET = 'mysecret'

    ```
    *Replace placeholder values with your actual credentials.*

4.  **Start the server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    The API should now be running on `http://localhost:PORT` (e.g., `http://localhost:8080`).
