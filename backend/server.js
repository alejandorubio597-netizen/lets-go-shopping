const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
res.send("API Let's Go Shopping funcionando")
})

app.listen(5000,()=>{
console.log("Servidor corriendo en puerto 5000")
})
