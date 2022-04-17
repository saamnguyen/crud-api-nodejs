import express from "express";

const router = express.Router();

const users = [
	{
		firstName: "John",
		lastName: "Doe",
		age: 25,
	},
];

router.get("/", (req, res) => {
	res.send(users);
});

router.post("/", (req, res) => {
	console.log("POST SEND");
	res.send("POST");
});

export default router;
