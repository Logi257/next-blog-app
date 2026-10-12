import mongoose from "mongoose";
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://logeshblog:blog123@cluster0.7vcgqsi.mongodb.net/blog-app",
  );
  console.log(mongoose.connection.host);
};
