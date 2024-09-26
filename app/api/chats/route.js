import { pusherServer } from "@lib/pusher";
import Chat from "@models/Chat";
import User from "@models/User";
import { connectToDB } from "@mongodb";

export const POST = async (req) => {
  try {
    await connectToDB();

    const body = await req.json();

    const {
      currentUserId,
      members,
      isGroup,
      name,
      groupPhoto,
      chatIdGroup,
      outGroup,
    } = body;
    // Define "query" to find the chat
    const query = isGroup
      ? { isGroup, name, groupPhoto, members: [currentUserId, ...members] }
      : { members: { $all: [currentUserId, ...members], $size: 1 } };
    let chat = await Chat.findOne(query);
    if (!chat && outGroup) {
      const findUser = await Chat.findById(chatIdGroup);
      console.log(findUser);
      // if (findUser) {
      //   const updatedChat = await Chat.findByIdAndUpdate(
      //     chatIdGroup,
      //     { members: updatedMembers },
      //     { new: true }
      //   );
      //   console.log(updatedChat);
      // }
    }
    if (!chat && !currentUserId) {
      const findUser = await Chat.findById(chatIdGroup);
      if (findUser) {
        const updatedChat = await Chat.findByIdAndUpdate(
          chatIdGroup,
          {
            members: [...findUser?.members, ...members],
          },
          { new: true }
        );
        console.log(updatedChat);
      }
    }
    if (!chat && currentUserId) {
      console.log("xyz");
      chat = await new Chat(
        isGroup ? query : { members: [currentUserId, ...members] }
      );

      await chat.save();

      const updateAllMembers = chat.members.map(async (memberId) => {
        await User.findByIdAndUpdate(
          memberId,
          {
            $addToSet: { chats: chat._id },
          },
          { new: true }
        );
      });
      Promise.all(updateAllMembers);

      /* Trigger a Pusher event for each member to notify a new chat */
      chat.members.map(async (member) => {
        await pusherServer.trigger(member._id.toString(), "new-chat", chat);
      });
    }

    return new Response(JSON.stringify(chat), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Failed to create a new chat", { status: 500 });
  }
};

export const PUT = async (req) => {
  try {
    await connectToDB();

    const body = await req.json();

    const { currentUserId, chatIdGroup, outGroup, joinGroup, deleteGroup } =
      body;
    let findUser;
    if (outGroup) {
      findUser = await Chat.findById(chatIdGroup);
      if (findUser) {
        const updatedMembers = findUser?.members?.filter(
          (memberId) => memberId?.toString() !== currentUserId?.toString()
        );
        const updateUser = await Chat.findByIdAndUpdate(
          chatIdGroup,
          { members: updatedMembers },
          { new: true }
        );

        if (updateUser && updateUser?.members?.length === 0) {
          await Chat.findByIdAndDelete(chatIdGroup);
        }
      }
    }
    if (joinGroup) {
      findUser = await Chat.findById(chatIdGroup);
      if (findUser) {
        await Chat.findByIdAndUpdate(
          chatIdGroup,
          {
            members: [...findUser?.members, currentUserId],
          },
          { new: true }
        );
      }
    }
    if (deleteGroup) {
      const deleteAll = await Chat.findByIdAndDelete(chatIdGroup);
      console.log(deleteAll);
    }

    return new Response(JSON.stringify(findUser), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Failed to create a new chat", { status: 500 });
  }
};

export const GET = async (req, res) => {
  try {
    await connectToDB();

    const allChats = await Chat.find();
    console.log(allChats.length);
    return new Response(JSON.stringify(allChats), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to get all users", { status: 500 });
  }
};
