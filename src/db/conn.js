const async = require("hbs/lib/async");
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/ujjwalemployeeRegistration"
    );
    console.log("connection succesfull");
  } catch (error) {
    console.log(error);
  }
};
connection();
