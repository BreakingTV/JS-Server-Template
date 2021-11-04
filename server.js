const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`=============================`)
    console.log(`Server is online!`)
    console.log(`locate on: http://localhost:${port}`)
    console.log(`=============================`)
});