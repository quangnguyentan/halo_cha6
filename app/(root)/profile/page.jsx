"use client";

import Loader from "@components/Loader";
import { LockOutlined, PersonOutline } from "@mui/icons-material";
import { useSession } from "next-auth/react";
import { CldUploadButton } from "next-cloudinary";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import toast from "react-hot-toast";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import Chat from "@components/Chat";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Profile = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
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
    formState: { errors },
  } = useForm();

  const uploadPhoto = (result) => {
    setValue("profileImage", result?.info?.secure_url);
  };

  const updateUser = async (data) => {
    try {
      const res = await fetch(`/api/users/${user._id}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(res);
      if (res.ok) {
        setLoading(false);
        // window.location.reload();
      }
      if (!res.ok) {
        const errorMessage = await res.text();
        toast.error(errorMessage);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = async (data) => {
    console.log(data);

    const res = await fetch(`/api/users/${user?._id}/change`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setOpen(false);
      reset();
      toast.success("Đổi mật khẩu thành công");

      // router.push("/");
    }

    if (!res.ok) {
      const errorMessage = await res.text();
      toast.error(errorMessage);
    }
  };
  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="profile-page pb-10">
        <h1 className="text-heading3-bold">Chỉnh sửa thông tin</h1>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {open && (
              <form className="form" onSubmit={handleSubmit(onChange)}>
                <h3 className="font-semibold text-heading3-bold">
                  Đổi mật khẩu
                </h3>
                <div>
                  <div className="input">
                    <input
                      defaultValue=""
                      {...register("oldPassword", {
                        required: "Mật khẩu là bắt buộc",
                        validate: (value) => {
                          if (
                            value.length < 5 ||
                            !value.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)
                          ) {
                            return "Mật khẩu phải có ít nhất 5 ký tự và chứa ít nhất một ký tự đặc biệt";
                          }
                        },
                      })}
                      type="password"
                      placeholder="Mật khẩu cũ"
                      className="input-field"
                    />
                    <LockOutlined sx={{ color: "#737373" }} />
                  </div>
                  {errors.oldPassword && (
                    <p className="text-red-500">{errors.oldPassword.message}</p>
                  )}
                </div>

                <div>
                  <div className="input">
                    <input
                      defaultValue=""
                      {...register("newPassword", {
                        required: "Mật khẩu là bắt buộc",
                        validate: (value) => {
                          if (
                            value.length < 5 ||
                            !value.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)
                          ) {
                            return "Mật khẩu phải có ít nhất 5 ký tự và chứa ít nhất một ký tự đặc biệt";
                          }
                        },
                      })}
                      type="password"
                      placeholder="Mật khẩu mới"
                      className="input-field"
                    />
                    <LockOutlined sx={{ color: "#737373" }} />
                  </div>
                  {errors.newPassword && (
                    <p className="text-red-500">{errors.newPassword.message}</p>
                  )}
                </div>

                <button className="button" type="submit">
                  Đổi mật khẩu
                </button>
              </form>
            )}
          </Box>
        </Modal>
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
            <div className="input">
              <input
                {...register("fullName", {
                  required: "Tên là bắt buộc",
                })}
                defaultValue={
                  user?.fullName?.length > 0 ? user?.fullName : user?.username
                }
                type="text"
                placeholder="Tên người dùng"
                className="input-field"
              />
              <PersonOutline sx={{ color: "#737373" }} />
            </div>
            {errors?.fullName && (
              <p className="text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            {user?.role !== "user" && user?.role !== "admin" && (
              <div className="flex items-center gap-4 ">
                <h3 className="font-semibold ">Mã giới thiệu của bạn:</h3>
                <h3 className="font-semibold ">{user?.code}</h3>
              </div>
            )}
            {user?.role === "user" || user?.role === "admin" ? (
              <div className="flex items-center justify-end w-full">
                <h3
                  className="font-semibold cursor-pointer"
                  onClick={() => setOpen(true)}
                >
                  Đổi mật khẩu
                </h3>
              </div>
            ) : (
              <h3
                className="font-semibold cursor-pointer"
                onClick={() => setOpen(true)}
              >
                Đổi mật khẩu
              </h3>
            )}
          </div>

          <button className="btn" type="submit">
            Lưu thay đổi
          </button>
        </form>
      </div>
    </>
  );
};

export default Profile;
