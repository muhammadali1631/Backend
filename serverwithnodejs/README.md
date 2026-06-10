# First Node.js HTTP Server

This is my first backend project built with Node.js. The project demonstrates how to create a basic HTTP server and handle simple routing without using any external frameworks.

## Project Setup

### 1. Initialize the Project

```bash
npm init -y
```

### 2. Enable ES Modules

Add the following to `package.json`:

```json
{
  "type": "module"
}
```

### 3. Add a Development Script

```json
{
  "scripts": {
    "dev": "node index.js"
  }
}
```

### 4. Run the Server

```bash
npm run dev
```

## Features

* Create an HTTP server using Node.js
* Handle multiple routes
* Home Route (`/`)
* About Route (`/about`)
* Contact Route (`/contact`)
* 404 Not Found response for unknown routes

## Technologies Used

* Node.js
* HTTP Module
* JavaScript (ES Modules)

## Learning Outcome

In this project, I learned:

* How to initialize a Node.js project
* How to configure ES Modules
* How to create an HTTP server
* How routing works in Node.js
* How to handle requests and responses

🚀 This is the first step in my backend development journey.
