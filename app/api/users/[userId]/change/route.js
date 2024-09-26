import User from "@models/User";
import { connectToDB } from "@mongodb";
import { compare, hash } from "bcryptjs";

export const POST = async (req, { params }) => {
  try {
    await connectToDB();

    const body = await req.json();

    const { oldPassword, newPassword } = body;
    const { userId } = params;

    const getUser = await User.findById(userId);
    const isPassword = await compare(oldPassword, getUser?.password);
    if (!isPassword) {
      return new Response("Mật khẩu cũ không đúng", {
        status: 400,
      });
    }

    const hashedPassword = await hash(newPassword, 10);

    const searchedChat = await User.findByIdAndUpdate(
      userId,
      {
        password: hashedPassword,
      },
      { new: true }
    );
    return new Response(JSON.stringify(searchedChat), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to search chat", { status: 500 });
  }
};
