# Express.js Fundamentals 🚀

This folder contains my hands-on practice while learning Express.js as part of my Backend Development journey.

## Topics Covered

### ✅ Creating an Express Server

Learned how to:

* Import Express
* Create an Express application
* Define a PORT
* Start the server

---

### ✅ GET and POST Routes

Implemented:

* `GET /` route
* `POST /` route

Learned how to:

* Handle requests and responses
* Use `express.json()` middleware
* Access data from `req.body`

**File:** `index.js`

---

### ✅ Sending JSON Responses

Created an endpoint that returns JSON data.

Example:

```js
GET /data
```

Response:

```json
{
  "name": "Ali",
  "role": "Programmer"
}
```

**File:** `index.js`

---

## Request Parameters (`req.params`)

Learned how to create dynamic routes and access route parameters.

Example:

```js
GET /users/:id
```

Features:

* Retrieve all users
* Retrieve a single user by ID
* Handle non-existing users

Examples:

```bash
GET /users
GET /users/1
GET /users/3
```

**File:** `reqwithparams.js`

---

## Query Parameters (`req.query`)

Learned how to access query parameters from the URL.

Example:

```js
GET /search?name=Ali&role=Programmer
```

Response:

```json
{
  "name": "Ali",
  "role": "Programmer"
}
```

**File:** `reqwithquery.js`

---

## Nodemon

Learned how to use Nodemon to automatically restart the server whenever files are changed.

Installed with:

```bash
npm install nodemon
```

Package.json script:

```json
"scripts": {
  "dev": "nodemon index.js"
}
```

Run the server:

```bash
npm run dev
```

---

## Files

```text
express/
│
├── index.js              # Express server, GET, POST and JSON response
├── reqwithparams.js      # Route parameters (req.params)
├── reqwithquery.js       # Query parameters (req.query)
├── package.json
└── README.md
```

---

## Technologies Used

* Node.js
* Express.js
* Nodemon
* JavaScript (ES Modules)

---

## Learning Outcomes

By completing these examples, I learned:

* ✔ Creating an Express server
* ✔ Creating GET routes
* ✔ Creating POST routes
* ✔ Accessing request body using `req.body`
* ✔ Sending JSON responses
* ✔ Working with route parameters using `req.params`
* ✔ Working with query parameters using `req.query`
* ✔ Using Nodemon for automatic server restart

---

🚀 Backend Learning Journey Continues...
