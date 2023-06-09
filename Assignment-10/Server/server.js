const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const { default: mongoose } = require('mongoose');
const router = require('./routes/product');
const app = express();
require('dotenv').config();





app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(helmet());


app.use("/", router)


const port = process.env.PORT || 3000;
mongoose

    .connect(process.env.DATABASE)
    .then(()=>{
        app.listen(port, () =>{
            console.log(`Server Running On Port${port}`);
        });
    })
    .catch((err) => console.log(err));