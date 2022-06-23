// const mongoose = require("mongoose")
// mongoose.connect("mongodb+srv://camila:camila@cluster0.twfnnhm.mongodb.net/?retryWrites=true&w=majority", {

// }).then(() => {
//     console.log("db esta connectado")
// }).catch((error) => console.log(error))

import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3000"
})

export default api;