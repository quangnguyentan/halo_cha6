import User from "@models/User";
import { connectToDB } from "@mongodb";
import { hash } from "bcryptjs";

export const POST = async (req, res) => {
  try {
    await connectToDB();

    const body = await req.json();

    const { username, email, password, code } = body;
    const existingUserName = await User.findOne({ username });
    const existingEmal = await User.findOne({ email });
    if (existingUserName) {
      return new Response("Username already exists", {
        status: 400,
      });
    }
    if (existingEmal) {
      return new Response("Email already exists", {
        status: 400,
      });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new Response(JSON.stringify(newUser), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to create a new user", {
      status: 500,
    });
  }
};
