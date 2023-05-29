import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectToDatabase from "./database.js";
import adminRoutes from "./Routes/adminRoutes.js"
import authenticationRoutes from "./Routes/authenticationRoutes.js"
import cashierRoutes from "./Routes/cashierRoutes.js"

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

connectToDatabase();

app.use('/authentication', authenticationRoutes);
app.use('/cashier', cashierRoutes);
app.use('/admin', adminRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server listening on port http://localhost:" + process.env.PORT);
});