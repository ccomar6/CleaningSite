const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Hello from the server side',
    });
});

app.listen(5500, () => {
    console.log('App running on port 3000...');
});

// const amount = 12

// if(amount < 10){
//     console.log('small number');
// }
// else{
//     console.log('large number');
// }

// console.log(`hey it's my first node app!!!`);