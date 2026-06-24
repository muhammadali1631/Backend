# Frontend ↔ Backend Connection with CORS 🚀

This project demonstrates how to connect a frontend application with a backend server using Express.js and CORS.

## Project Structure

```text
connect-backend-with-frontend/
│
├── client/          # Frontend (Vite + JavaScript)
│
└── server/          # Backend (Express.js)
```

## Tech Stack

### Frontend

* Vite
* JavaScript
* Axios

### Backend

* Node.js
* Express.js
* CORS
* Nodemon

---

## Features

### Backend

* Create an Express server
* Configure CORS
* Enable JSON parsing with `express.json()`
* Handle GET requests
* Handle POST requests
* Access request body using `req.body`
* Send JSON responses

### Frontend

* Built with Vite and JavaScript
* Uses Axios for API requests
* Communicates with the Express server

---

## How Frontend and Backend Communicate

1. Frontend sends HTTP requests using Axios.
2. Backend receives requests through Express routes.
3. CORS allows requests from the frontend origin.
4. Backend processes the request.
5. Response is sent back to the frontend.

---

## Backend Example

### GET Request

```javascript
app.get('/', (req, res) => {
    res.json({
        name: "Ali",
        age: 19
    });
});
```

### POST Request

```javascript
app.post('/', (req, res) => {
    const data = req.body;
    console.log(data);

    res.send({
        success: true
    });
});
```

---

## CORS Configuration

```javascript
app.use(cors({
    origin: "http://localhost:5173"
}));
```

This allows the frontend running on Vite (`localhost:5173`) to access the backend API.

---

## Packages Used

### Server

```bash
npm install express cors nodemon
```

### Client

```bash
npm install axios
```

---

## Running the Project

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

---

## Learning Outcomes

By building this project, I learned:

* ✔ How frontend and backend communicate
* ✔ What CORS is and why it is needed
* ✔ How to configure CORS in Express.js
* ✔ How to create GET and POST APIs
* ✔ How to access request data using `req.body`
* ✔ How to send JSON responses
* ✔ How to consume APIs with Axios
* ✔ How to connect a Vite frontend with an Express backend

---

## Technologies Used

* Node.js
* Express.js
* CORS
* JavaScript
* Vite
* Axios

---

🚀 Part of my Backend Learning Journey.
