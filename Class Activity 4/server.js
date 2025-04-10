const express = require("express");
const app = express();
app.use(express.json());

let items = [{ id: 1, name: "Sample Item1" }, { id: 2, name: "Sample Item2" }, { id: 3, name: "Sample Item3" }];

function asyncOp(operation, item = null) {
    return new Promise((resolve, reject) => {
        console.log(`Performing ${operation}...`);
        setTimeout(() => {
            if (Math.random() > 0.2) { // 80% chance of success
                console.log(`${operation} succeeded!`);
                resolve(item);
            } else {
                console.log(`${operation} failed!`);
                reject(new Error(`${operation} failed!`));
            }
        }, 2000);
    });
}

// Retrieve all items
app.get("/items", (req, res) => {
    asyncOp("GET /items")
        .then(() => res.json(items))
        .catch(err => res.status(500).send({ error: err }));
});

app.post("/items", (req, res) => {
    if (!req.body.name) {
        return res.status(400).send({ error: "Missing 'name' in request body" });
    }

    const newItem = req.body;
    newItem.id = items.length + 1; // Simple logic for new ID

    asyncOp("POST /items", newItem)
        .then(item => {
            items.push(item);
            res.status(201).json(item);
        })
        .catch(err => res.status(500).send({ error: err }));
});

app.get("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).send({ error: "Invalid ID format" });
    }
    const item = items.find(i => i.id === id);
    if (!item) {
        return res.status(404).send({ error: "Item not found" });
    }
    asyncOp("GET /items/:id", item)
        .then(() => res.json(item))
        .catch(err => res.status(500).send({ error: err }));
});

app.put("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).send({ error: "Invalid ID format" });
    }
    if (!req.body.name) {
        return res.status(400).send({ error: "Missing name in request body" });
    }
    const item = items.find(i => i.id === id);
    if (!item) {
        return res.status(404).send({ error: "Item not found" });
    }

    item.name = req.body.name;
    asyncOp("PUT /items/:id", item)
        .then(newItem => res.json(newItem))
        .catch(err => res.status(500).send({ error: err }));
});

app.delete("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).send({ error: "Invalid ID format" });
    }

    const itemIndex = items.findIndex(i => i.id === id);
    if (itemIndex === -1) {
        return res.status(404).send({ error: "Item not found" });
    }

    const removedItem = items.splice(itemIndex, 1);
    asyncOp("DELETE /items/:id", removedItem)
        .then(() => res.status(204).send())
        .catch(err => res.status(500).send({ error: err }));
});

app.listen(3000, () => console.log("Server running on port 3000"));

