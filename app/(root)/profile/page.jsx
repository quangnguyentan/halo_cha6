"use client";

import Loader from "@components/Loader";
import { PersonOutline } from "@mui/icons-material";
import { useSession } from "next-auth/react";
import { CldUploadButton } from "next-cloudinary";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const Profile = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      reset({
        username: user?.username,
        profileImage: user?.profileImage,
      });
    }
    setLoading(false);
  }, [user]);

  const {
    register,
    watch,
    setValue,
    reset,
    handleSubmit,
    formState: { error },
  } = useForm();

  const uploadPhoto = (result) => {
    setValue("profileImage", result?.info?.secure_url);
  };

  const updateUser = async (data) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/${user._id}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="profile-page">
      <h1 className="text-heading3-bold">Chỉnh sửa thông tin</h1>

      <form className="edit-profile" onSubmit={handleSubmit(updateUser)}>
        <div className="flex items-center justify-between gap-8">
          <img
            src={
              watch("profileImage") ||
              user?.profileImage ||
              "/assets/person.jpg"
            }
            alt="profile"
            className="w-40 h-40 rounded-full "
          />
          <CldUploadButton
            options={{ maxFiles: 1 }}
            onUpload={uploadPhoto}
            uploadPreset="i96i6rvi"
          >
            <div className="flex items-center gap-2">
              <FileUploadIcon />
              <p className="text-body-bold">Tải ảnh lên</p>
            </div>
          </CldUploadButton>
        </div>
        <div className="flex items-center gap-4 ">
          <h3 className="font-semibold ">Tên tài khoản:</h3>
          <h3 className="font-semibold ">{user?.username}</h3>
        </div>
        <div className="flex items-center gap-4 ">
          <h3 className="font-semibold ">Mã giới thiệu của bạn:</h3>
          {user?.code && <h3 className="font-semibold ">{user?.code}</h3>}
        </div>

        <button className="btn" type="submit">
          Lưu thay đổi
        </button>
      </form>
    </div>
  );
};

export default Profile;
