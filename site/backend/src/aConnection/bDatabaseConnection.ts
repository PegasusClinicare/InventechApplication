import mongoose from "mongoose";


const databaseConnection = () => {
  const DB_URL = "mongodb+srv://Inventech:Inventech@cluster0.7pvd6.mongodb.net/";

  mongoose.set("strictQuery", true);
  mongoose
    .connect(DB_URL, { dbName: 
      process.env.ENVIRONMENT === "Development" ? "InventechApplicationDevelopment" :
      process.env.ENVIRONMENT === "Production" ? "InventechApplicationProduction" :
      "InvalidDatabaseInventech" 
    })
    // .connect(DB_URL, { dbName: "KisnaApplication" })
    .then(response => {
      console.log(`Great... MongoDB connected on server ${response.connection.host} at ${response.connection.name}`);
    })
  // .catch(error => {
  //   console.log(error);
  // })
}

export default databaseConnection;
