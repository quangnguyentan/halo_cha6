"use client";

import {
  EmailOutlined,
  LockOutlined,
  PersonOutline,
} from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

const Form = ({ type }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const onSubmit = async (data) => {
    if (type === "register") {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/");
      }

      if (!res.ok) {
        const errorMessage = await res.text();
        toast.error(errorMessage);
      }
    }

    if (type === "login") {
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (res.ok) {
        router.push("/chats");
      }

      if (res.error) {
        toast.error("Sai tên đăng nhập hoặc mật khẩu");
      }
    }
  };

  return (
    <div className="auth">
      <div className="content">
        <img src="/assets/logo.png" alt="logo" className="logo" />

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="input">
              <input
                defaultValue=""
                {...register("username", {
                  required: "Tên là bắt buộc",
                  validate: (value) => {
                    if (value.length < 3) {
                      return "Tên phải lớn hơn 3 kí tự";
                    }
                  },
                })}
                type="text"
                placeholder="Tên tài khoản"
                className="input-field"
              />
              <PersonOutline sx={{ color: "#737373" }} />
            </div>
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>

          <div>
            <div className="input">
              <input
                defaultValue=""
                {...register("password", {
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
                placeholder="Mật khẩu"
                className="input-field"
              />
              <LockOutlined sx={{ color: "#737373" }} />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          {type === "register" && (
            <div>
              <div className="input">
                <input
                  defaultValue=""
                  {...register("code")}
                  type="text"
                  placeholder="Mã giới thiệu"
                  className="input-field"
                />
                <CodeIcon sx={{ color: "#737373" }} />
              </div>
              {/* {errors.code && (
                <p className="text-red-500">{errors.code.message}</p>
              )} */}
            </div>
          )}
          <button className="button" type="submit">
            {type === "register" ? "Đăng kí" : "Bắt đầu chat"}
          </button>
        </form>

        {type === "register" ? (
          <Link href="/" className="link">
            <p className="text-center">Đã có tài khoản? Đăng nhập ở đây</p>
          </Link>
        ) : (
          <Link href="/register" className="link">
            <p className="text-center">Không có tài khoản? Đăng kí ở đây</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Form;
