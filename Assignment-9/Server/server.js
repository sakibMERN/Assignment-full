const express = require('express');
const helmet = require('helmet');
const { default: mongoose } = require('mongoose');
const app = express();
require('dotenv').config();


const port = process.env.PORT || 3000;
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(helmet());



mongoose

    .connect(process.env.DATABASE)
    .then(()=>{
        app.listen(port, () =>{
            console.log(`Server Running On Port${port}`);
        });
    })
    .catch((err) => console.log(err));