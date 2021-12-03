const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send({
        "_status": "working",
        "_version": "0.0.1"
    });
});

app.listen(port, () => {
    console.log(`API working on http://localhost:${port}`);
});