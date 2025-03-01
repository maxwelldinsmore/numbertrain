import express from "express";
import cors from "cors";
import scoreRecord from "./scoreRecord.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", scoreRecord);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});