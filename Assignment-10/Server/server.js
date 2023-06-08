const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const { default: mongoose } = require('mongoose');
const app = express();
require('dotenv').config();
const bookManagement = require("./routes/book");



app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(helmet());


app.use("/", bookManagement);


const port = process.env.PORT || 3000;
mongoose

    .connect(process.env.DATABASE)
    .then(()=>{
        app.listen(port, () =>{
            console.log(`Server Running On Port${port}`);
        });
    })
    .catch((err) => console.log(err));