const express = require('express')
const app = express()
const morgan = require("morgan")

app.use(morgan('short'))

app.get("/",(req, res)=>{
	console.log("responded to root")
	res.send("responded to root route")
})

app.get("/users",(req, res)=>{

	var user1 = {
		firstName: "Stephen",
		lastName: "Curry"
	}

	var user2 = {
		firstName: "Kevin",
		lastName: "Durant"
	}

	res.json([user1, user2])

	//res.send("users")
})

app.listen(3000,()=>{
	console.log("server is up and listening!");
})