import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3049;
const user = {
    firstName: "Hendrick",
    lastName: "Denzmann",
    accessGroups: ["loggedInUsers", "members"],
};
app.get("/", (req, res) => {
    res.send(user);
});
app.listen(PORT, () => {
    console.log(`listening to API on http://localhost:${PORT}`);
});
