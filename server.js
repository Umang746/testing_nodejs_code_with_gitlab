const express = require("express")
const app = express()

function lw(req,res){
	res.send("Welcome to web page")
	console.log("client connected..")

}

app.get("/data",lw)
app.listen(3000)
