"use client";

import Loader from "@components/Loader";
import { GroupOutlined, PersonOutline } from "@mui/icons-material";
import { useSession } from "next-auth/react";
import { CldUploadButton } from "next-cloudinary";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import FileUploadIcon from "@mui/icons-material/FileUpload";
const GroupInfo = () => {
  const [loading, setLoading] = useState(true);
  const [chat, setChat] = useState({});
  const { data: session } = useSession();
  const currentUser = session?.user;
  const { chatId } = useParams();

  const getChatDetails = async () => {
    try {
      const res = await fetch(`/api/chats/${chatId}`);
      const data = await res.json();
      setChat(data);
      setLoading(false);
      reset({
        name: data?.name,
        groupPhoto: data?.groupPhoto,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (chatId) {
      getChatDetails();
    }
  }, [chatId]);

  const {
    register,
    watch,
    setValue,
    reset,
    handleSubmit,
    formState: { error },
  } = useForm();

  const uploadPhoto = (result) => {
    setValue("groupPhoto", result?.info?.secure_url);
  };

  const router = useRouter();

  const updateGroupChat = async (data) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/chats/${chatId}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setLoading(false);

      if (res.ok) {
        router.push(`/chats/${chatId}`);
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      {chat?.members?.filter((member) => member?._id === currentUser?._id)
        ?.length > 0 ? (
        <div className="profile-page">
          <h1 className="text-heading3-bold">Chỉnh sửa thông tin nhóm</h1>

          <form
            className="edit-profile"
            onSubmit={handleSubmit(updateGroupChat)}
          >
            <div className="input">
              <input
                {...register("name", {
                  required: "Group chat name is required",
                })}
                type="text"
                placeholder="Group chat name"
                className="input-field"
              />
              <GroupOutlined sx={{ color: "#737373" }} />
            </div>
            {error?.name && (
              <p className="text-red-500">{error.name.message}</p>
            )}

            <div className="flex items-center justify-between">
              <img
                src={watch("groupPhoto") || "/assets/group.png"}
                alt="profile"
                className="w-40 h-40 rounded-full"
              />
              <CldUploadButton
                options={{ maxFiles: 1 }}
                onUpload={uploadPhoto}
                uploadPreset="i96i6rvi"
              >
                <div className="flex items-center gap-1">
                  <FileUploadIcon />
                  <p className="text-body-bold">Tải ảnh lên</p>
                </div>
              </CldUploadButton>
            </div>

            <div className="flex flex-wrap gap-3">
              {chat?.members?.map((member, index) => (
                <p className="selected-contact" key={index}>
                  {member.username}
                </p>
              ))}
            </div>

            <button className="btn" type="submit">
              Save Changes
            </button>
          </form>
        </div>
      ) : (
        router.push("/chats")
      )}
    </>
  );
};

export default GroupInfo;
