import mongoose from "mongoose";

export const dbConnection = () => {
  console.log(process.env.MONGO_URI+"  ////");
  mongoose
    .connect(process.env.MONGO_URI || "mongodb+srv://komalme7:9654718243@cluster0.3598ibe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      dbName: "MERN_JOB_SEEKING",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
