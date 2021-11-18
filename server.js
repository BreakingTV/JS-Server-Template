const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/assets`));
app.locals.basedir = `${__dirname}/assets`;

app.set('views', __dirname + '/views');
app.get('/', (req, res) => res.render('index.pug'))

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`=============================`)
    console.log(`Server is online!`)
    console.log(`locate on: http://localhost:${port}`)
    console.log(`=============================`)
});
