const express = require('express');
const app = express();

app.get("/", (req, res) => res.json({title:'Hello World!!'}));

app.listen(3000, ()=> console.log('Server Started!'));