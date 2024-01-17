import mongoose from "mongoose";

const conectDB = async () => {
  try {
    const connetionInstaints = await mongoose.connect(process.env.DB_URI);
    console.log(
      "⚙️ Database connection successfull DB HOST:",
      connetionInstaints.connection.host
    );
  } catch (error) {
    console.error("Databse connection error !!!", error);
    process.exit(1);
  }
};
export default conectDB;
