import { app } from "./app.js";
import conectDB from "./db/index.js";

conectDB()
  .then(() => {
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () =>
      console.log(`⚙️ APP is running is PORT http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.log("Databse connetion FAILD: ", error);
  });
