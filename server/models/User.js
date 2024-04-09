import mongoose from "mongoose";

// Defines the schema for user data, including fields: name, email, password, and date.
const UserSchema = new mongoose.Schema({
  /**
   * name: Specifies the name field with a string type that is required.
   *  email: Specifies the email field with a string type that is required and unique.
   *  password: Specifies the password field with a string type that is required.
   * date: Specifies the date field with a date type, and its default value is set to the current date and time
   */
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Defines User model based on UserSchema
const User = mongoose.model("user", UserSchema);

// Exports user model
export default User;
