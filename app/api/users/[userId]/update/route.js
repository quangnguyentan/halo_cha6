import User from "@models/User";
import { connectToDB } from "@mongodb";

export const POST = async (req, { params }) => {
  try {
    await connectToDB();

    const { userId } = params;

    const body = await req.json();

    const { profileImage, fullName } = body;
    const findAllUser = await User.find();
    const userExists = findAllUser?.some(
      (user) =>
        userId?.toString() !== user?._id?.toString() &&
        user?.fullName === fullName
    );
    if (userExists) {
      return new Response("Tên đã tồn tại", {
        status: 400,
      });
    }
    let updatedUser;
    updatedUser = await User.findByIdAndUpdate(
      userId,
      { fullName, profileImage },
      { new: true }
    );

    return new Response(JSON.stringify(updatedUser), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to update user", { status: 500 });
  }
};
