const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, My Server!');
});

router.get('/getData', (req, res) => {
    const dataFromBrowser = req.query.number;
    if (dataFromBrowser == null){
        res.send('Lack of Parameter');    
    } else if (isNaN(dataFromBrowser)){
        res.send('Wrong Parameter');
    } else {
        res.send((((1 + Number(req.query.number)) * Number(req.query.number))/2).toString());
    }
});

module.exports = router;
