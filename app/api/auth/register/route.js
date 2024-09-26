import User from "@models/User";
import { connectToDB } from "@mongodb";
import { hash } from "bcryptjs";
import randomstring from "randomstring";
export const POST = async (req, res) => {
  try {
    await connectToDB();

    const body = await req.json();

    const { username, password, code, role } = body;
    const existingUserName = await User.findOne({ username });
    if (existingUserName) {
      return new Response("Tên đã tồn tại", {
        status: 400,
      });
    }

    const hashedPassword = await hash(password, 10);
    let hashCode = randomstring.generate({
      length: 6,
      charset: "numeric",
    });
    const newUser = await User.create({
      username,
      fullName: username,
      password: hashedPassword,
      code: role && hashCode,
      role: role ? "employee" : "user",
      codeAddFriends: code && code,
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
