<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Omega Health - Backend Service

## Overview

This is the central backend service for the Omega Health platform. It is designed to be a robust, scalable, and secure API that serves as the backbone for both the **Omega Health Web Application** and the **Omega Health Android App**.

This service handles all core business logic, data management, user authentication, and integration with third-party services, providing a single source of truth for all client applications.

---

## Features

-   **Client Agnostic**: A unified REST API to support multiple clients (web, mobile) from a single codebase.
-   **User Authentication**: Secure user registration and login using JSON Web Tokens (JWT).
-   **Hospital Management**: CRUD (Create, Read, Update, Delete) operations for hospital data, including location, services, and available doctors.
-   **Content Management**: Endpoints for managing dynamic content like health tips and user testimonials.
-   **Media Uploads**: Integration with Cloudinary for efficient and scalable image and video storage.
-   **Scalable Architecture**: Built with a modular and service-oriented structure to make it easy to add new features in the future.

---

## Tech Stack

-   **Framework**: [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety and better developer experience.
-   **Database**: [PostgreSQL](https://www.postgresql.org/) for reliable and structured data storage.
-   **ORM**: [Prisma](https://www.prisma.io/) for intuitive and safe database access.
-   **Authentication**: JSON Web Tokens (JWT)
-   **Validation**: [Zod](https://zod.dev/) for validating API request data.

---

## API Design

The API is designed following RESTful principles. All responses are in JSON format. The base URL for the API will be structured as follows:

-   **Production**: `https://api.omegahealth.com/v1`
-   **Development**: `http://localhost:8080/api/v1`

### Authentication

The API uses a `Bearer Token` for authenticating protected routes. After a user logs in, a JWT is generated and must be included in the `Authorization` header of subsequent requests.

**Example**: `Authorization: Bearer <your_jwt_token>`

---

## API Endpoints

Here is a summary of the core API endpoints.

#### Auth

-   `POST /auth/register`: Register a new user.
-   `POST /auth/login`: Log in a user and receive a JWT.

#### Hospitals

-   `GET /hospitals`: Get a list of all hospitals.
-   `GET /hospitals/:id`: Get details for a single hospital.

#### Health Tips

-   `GET /tips`: Get a list of all health tips.

#### Testimonials

-   `GET /testimonials`: Get a list of user testimonials.

#### User Profile (Protected)

-   `GET /profile`: Get the profile of the currently logged-in user.
-   `PUT /profile`: Update the profile of the currently logged-in user.
-   `POST /profile/picture`: Upload a new profile picture (integrates with Cloudinary).

---

## Getting Started (for Developers)

Follow these instructions to get the backend service running on your local machine for development and testing.

### Prerequisites

-   Node.js (v18 or later)
-   NPM or Yarn
-   PostgreSQL database running locally or on a server
-   A Cloudinary account (for media uploads)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/omega-health-backend.git
    cd omega-health-backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add the following variables. Replace the placeholder values with your actual configuration.
    ```env
    # Application
    PORT=8080

    # Database
    DATABASE_URL="postgresql://user:password@localhost:5432/omegahealth?schema=public"

    # JWT
    JWT_SECRET="your-super-secret-jwt-key"
    JWT_EXPIRES_IN="1d"

    # Cloudinary
    CLOUDINARY_CLOUD_NAME="your-cloud-name"
    CLOUDINARY_API_KEY="your-api-key"
    CLOUDINARY_API_SECRET="your-api-secret"
    ```

4.  **Run database migrations:**
    Prisma will use the `schema.prisma` file to create the necessary tables in your database.
    ```bash
    npx prisma migrate dev
    ```

5.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The server will start on the port specified in your `.env` file (e.g., `http://localhost:8080`).

---

## Project Structure

The project follows a standard structure for a Node.js API to keep the code organized and maintainable.

```bash
/src
|-- /controllers   # Handles incoming requests and sends responses
|-- /routes        # Defines the API routes and links them to controllers
|-- /services      # Contains the core business logic
|-- /models        # Data models or schemas (if not using Prisma schema directly)
|-- /middlewares   # Custom middleware (e.g., auth, error handling)
|-- /config        # Configuration files (e.g., database, cloudinary)
|-- /utils         # Utility functions
|-- app.ts         # Main application file where everything is initialized
|-- server.ts      # The entry point of the application
