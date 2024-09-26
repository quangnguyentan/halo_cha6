import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(
      "mongodb+srv://tanquanga6k10:CpdAVLjkbtX5chAq@shopdientu.l5fgtvm.mongodb.net/shopdientu?retryWrites=true&w=majority",
      {
        dbName: "HaloChat",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    isConnected = true;

    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.log(error);
  }
};
