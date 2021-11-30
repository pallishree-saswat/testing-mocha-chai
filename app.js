const express = require("express")
const app = express();

const port = 8000;

// app.get('/', (req,res) => {
//     res.send("hello world")
// })

app.use('/user', require('./routes/user'))

app.listen(port , () => {
    console.log(`server is running on ${port}`)
})