import express from "express";
import { v4 as uuidv4 } from "uuid";

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
	const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

	console.log("POST SEND");

	const user = req.body;

	const userWithID = { ...user, id: userId };

	users.push(userWithID);

	res.send(`User ${userWithID.firstName} added!!!`);
});

export default router;
