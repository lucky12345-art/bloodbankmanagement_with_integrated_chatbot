import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("CONNECTED");
  process.exit(0);
})
.catch((err) => {
  console.log("FAILED");
  console.log(err);
  process.exit(1);
});