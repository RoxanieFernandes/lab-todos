import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/todos")
  .then((x) =>
    console.log(`Connect to Mongo! Database name: ${x.connections[0].name}`)
  )
  .catch((err) => console.error(err));