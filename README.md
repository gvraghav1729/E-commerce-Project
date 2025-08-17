# E-commerce Platform with Microservices

This project is a simple, scalable e-commerce platform built using a microservices architecture. It demonstrates the separation of concerns by breaking down the application into independent services for catalog, authentication, orders, and payments. The backend is powered by Node.js and Express, with communication handled via both REST and gRPC endpoints.

## Overview

The platform is designed to simulate a real-world e-commerce application. It consists of four core, independent microservices that work together to provide a seamless user experience. The frontend is a responsive web application built with standard HTML and JavaScript, which integrates with the backend services to provide a complete shopping experience.

This project highlights the ability to design, develop, and deploy a distributed system while overcoming common development challenges like inter-service communication, dependency management, and cross-origin resource sharing (CORS).

---

## Key Features

* **Microservices Architecture**: The application is broken down into four distinct services:
    * **Catalog Service**: Manages all product-related operations (CRUD).
    * **Auth Service**: Handles user authentication, registration, and profile management.
    * **Order Service**: Processes customer orders and manages their lifecycle.
    * **Payment Service**: Manages payment transactions and confirmation.
* **Dual API Protocols**: Services communicate using both **RESTful APIs** for synchronous HTTP requests and **gRPC** for high-performance, low-latency inter-service communication.
* **Independent Services**: Each microservice is developed and can be deployed independently, allowing for greater scalability and maintainability.
* **Responsive Frontend**: A clean user interface built with HTML and JavaScript that seamlessly integrates with the backend services.

---

## Architecture

The system is designed around a microservices architecture, where each service has a single responsibility. This separation allows for independent development, deployment, and scaling of each part of the application.

1.  **Catalog Service**: Manages products, categories, and inventory.
2.  **Auth Service**: Handles all user-related concerns, including sign-up, login, and token generation.
3.  **Order Service**: Takes care of creating and managing user orders. It communicates with the Catalog Service to verify product availability.
4.  **Payment Service**: Processes payments for orders. It interacts with the Order Service to update the payment status of an order.

Services expose both REST and gRPC endpoints to communicate with the frontend and with each other.


---

## Technology Stack

* **Backend**: Node.js, Express.js
* **Inter-service Communication**: gRPC, REST
* **Frontend**: HTML, JavaScript
* **API Testing**: Postman
---

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

* [Node.js and npm](https://nodejs.org/) installed.
* [Git](https://git-scm.com/) installed.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone <your-repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies for each service:**
    You will need to navigate into each service's directory and install its dependencies.
    ```sh
    # Example for the catalog service
    cd catalog-service
    npm install

    # Repeat for auth-service, order-service, and payment-service
    ```

3.  **Set up environment variables:**
    Each service may require its own `.env` file for configuration (e.g., database connection strings, ports, secret keys). Create a `.env` file in each service's root directory and add the necessary variables.

4.  **Run the services:**
    Start each microservice in a separate terminal window.
    ```sh
    # Example for the catalog service
    cd catalog-service
    npm start
    ```

5.  **Run the frontend:**
    Open the `index.html` file in your browser to interact with the application.

---

## Challenges & Solutions

During development, several technical challenges were encountered and successfully resolved:

* **gRPC Compilation on Windows**: The `grpc-tools` package often faces compilation issues on Windows. This was resolved by ensuring all necessary build tools (like `windows-build-tools`) were installed and correctly configured, and by using compatible versions of Node.js and gRPC libraries.
* **Dependency Mismatches**: Managing dependencies across multiple microservices led to version conflicts. This was addressed by carefully managing `package.json` files and using tools like `npm ls` to identify and resolve inconsistencies.
* **CORS Issues**: Cross-Origin Resource Sharing (CORS) errors occurred when the frontend tried to communicate with the backend services. This was fixed by implementing the `cors` middleware in each Express service to allow requests from the frontend's origin.

These challenges were overcome through testing, debugging, and research, ensuring the final application is robust and functional.
