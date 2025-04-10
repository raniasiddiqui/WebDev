## CRUD API with Promises

This project demonstrates how to implement a basic CRUD (Create, Read, Update, Delete) API using Express.js and simulate asynchronous behavior using JavaScript Promises.

### 📌 Tasks Overview
#### In server.js, the following API endpoints have been implemented:

✅ Task 1: Implement CRUD Routes
1. GET /items
- Retrieves a list of all items.

- Response: Array of item objects.

2. POST /items
- Adds a new item.

- Request Body: JSON object containing item data.

- Response: The newly created item object.

3. GET /items/:id
- Retrieves a specific item by its unique ID.

- Response: Single item object.

4. PUT /items/:id
- Updates an existing item by its ID.

- Request Body: Updated item data.

- Response: The updated item object.

5. DELETE /items/:id
- Deletes an item by its ID.

- Response: Success message or deleted item confirmation.

⏳ Task 2: Introduce Promises

To simulate asynchronous operations, all CRUD actions in server.js have been wrapped in JavaScript Promises.
This allows:

- Simulating delays or server processing time.

- Each route handler now returns a Promise and uses .then() or async/await for handling responses.


