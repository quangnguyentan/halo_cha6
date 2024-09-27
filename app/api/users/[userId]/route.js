import Chat from "@models/Chat";
import Message from "@models/Message";
import User from "@models/User";
import { connectToDB } from "@mongodb";
import { hash } from "bcryptjs";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const { userId } = params;
    const allChats = await Chat.find({ members: userId })
      .sort({ lastMessageAt: -1 })
      .populate({
        path: "members",
        model: User,
      })
      .populate({
        path: "messages",
        model: Message,
        populate: {
          path: "sender seenBy",
          model: User,
        },
      })
      .exec();

    return new Response(JSON.stringify(allChats), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to get all chats of current user", {
      status: 500,
    });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    // const currentUserId = params.userId
    // const query = params.query

    const { userId } = params;
    console.log(userId);
    const searchedChat = await User.findByIdAndDelete(userId);
    return new Response(JSON.stringify(searchedChat), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to search chat", { status: 500 });
  }
};
export const PUT = async (req, { params }) => {
  try {
    await connectToDB();

    // const currentUserId = params.userId
    // const query = params.query
    const body = await req.json();

    const { username, password, code } = body;
    const { userId } = params;
    console.log(code);
    let getUser = await User.find();
    getUser?.filter((user) => {
      if (user?._id.toString() !== userId.toString()) {
        if (user?.username === username)
          throw new Error("Tên đăng nhập đã tồn tại");
      }
    });

    const hashedPassword = await hash(password, 10);
    const searchedChat = await User.findByIdAndUpdate(
      userId,
      {
        fullName: username,
        code: code,
        username,
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
