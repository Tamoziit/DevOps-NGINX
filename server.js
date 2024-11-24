const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log("Request served by Node App.");
});

app.listen(PORT, () => {
    console.log(`Node App listening on port: ${PORT}`);
});