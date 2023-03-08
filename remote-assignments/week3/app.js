const express = require('express');
const app = express();
const mainRoutes = require('./routes');

app.use(mainRoutes);
app.use(express.static('public'))

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});


