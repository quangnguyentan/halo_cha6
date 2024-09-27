"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiDollarSign, FiMoreHorizontal } from "react-icons/fi";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import CodeIcon from "@mui/icons-material/Code";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Modal from "@mui/material/Modal";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  EmailOutlined,
  LockOutlined,
  PersonOutline,
} from "@mui/icons-material";
import Loader from "@components/Loader";
import Link from "next/link";
import useSWR from "swr";
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
export const revalite = 60;
export const Customer = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [editEmployye, setEditEmployye] = useState(false);
  const [idEdit, setIdEdit] = useState("");
  let handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const [openPut, setOpenPut] = useState(false);
  let handleClosePut = () => {
    setOpenPut(false);
    localStorage.removeItem("username");
    localStorage.removeItem("code");
  };
  const { data: session } = useSession();
  const currentUser = session?.user;
  const [value, setValue] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const URL = "/api/users";
  const { data } = useSWR(URL, fetcher);
  const users = [];
  for (const key in data) {
    users.push(data[key]);
  }
  const getContacts = async () => {
    try {
      const res = await fetch(
        search !== "" ? `/api/users/searchContact/${search}` : "/api/users"
      );

      const data = await res.json();
      setContacts(data.filter((contact) => contact._id !== currentUser._id));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, role: true }),
    });

    if (res.ok) {
      setOpen(false);
      reset();
      router.push("/dashboard");
      toast.success("Tạo nhân viên thành công");
      setLoading(false);
    }

    if (!res.ok) {
      const errorMessage = await res.text();
      toast.error(errorMessage);
    }
  };
  const onEdit = async (userId, data) => {
    setLoading(true);
    const res = await fetch(`/api/users/${userId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
    if (res.ok) {
      setOpenPut(false);
      setEditEmployye(false);
      reset();
      router.push("/dashboard");
      toast.success("Chỉnh sửa nhân viên thành công");
      setLoading(false);
    }

    if (!res.ok) {
      const errorMessage = await res.text();
      toast.error(errorMessage);
    }
  };
  const onDelete = async (userId) => {
    setLoading(true);
    const res = await fetch(`/api/users/${userId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      router.push("/dashboard");
      toast.success("Xóa nhân viên thành công");
      setLoading(false);
    }

    if (!res.ok) {
      const errorMessage = await res.text();
      toast.error(errorMessage);
    }
  };

  // const fetcher = (url) => fetch(url).then((res) => res.json());
  // const { data, error, isLoading } = useSWR("/api/users", fetcher, {
  //   revalidateIfStale: false,
  //   revalidateOnFocus: false,
  //   revalidateOnReconnect: false,
  //   refreshInterval: 1000,
  // });
  // console.log("data", data);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (currentUser) getContacts();
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [currentUser, search, loading]);
  const handleClick = (id, contact) => {
    setIdEdit(id);
    setValue(contact);
    setOpenPut(true);
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="px-4 grid gap-3 grid-cols-12">
      <div className="col-span-12 p-4 rounded border border-stone-300">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-1.5 font-medium">
            <FiDollarSign /> Quản lí nhân viên
          </h3>
          <button
            className="text-sm text-violet-500 hover:underline"
            onClick={() => setOpen(true)}
          >
            Thêm nhân viên
          </button>
        </div>
        <table className="w-full table-auto">
          <TableHead />

          <tbody>
            {contacts?.map((contact) => (
              <>
                {contact?.code && (
                  <TableRow
                    onClick={() => handleClick(contact?._id, contact)}
                    sku={contact?.username}
                    date={contact?.role}
                    price={contact?.code}
                    order={1}
                    key={contact?._id}
                  />
                )}
              </>
            ))}
          </tbody>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {open && (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <p className="text-body-bold text-center">
                      Tạo nhân viên mới
                    </p>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                      <div>
                        <div className="input">
                          <input
                            {...register("username", {
                              required: "Tên là bắt buộc",
                              validate: (value) => {
                                if (value.length < 3) {
                                  return "Tên phải lớn hơn 3 kí tự";
                                }
                              },
                            })}
                            type="text"
                            placeholder="Tên đăng nhập"
                            className="input-field"
                          />
                          <PersonOutline sx={{ color: "#737373" }} />
                        </div>
                        {errors.username && (
                          <p className="text-red-500">
                            {errors.username.message}
                          </p>
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
                                  !value.match(
                                    /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/
                                  )
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
                          <p className="text-red-500">
                            {errors.password.message}
                          </p>
                        )}
                      </div>

                      <button className="button" type="submit">
                        Tạo
                      </button>
                    </form>
                  </div>
                  <div className="flex items-center w-full justify-end gap-4">
                    <button
                      className="text-sm font-semibold"
                      onClick={() => setOpen(false)}
                    >
                      Quay về
                    </button>
                  </div>
                </div>
              )}
            </Box>
          </Modal>
          <Modal
            open={openPut}
            onClose={handleClosePut}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {openPut && (
                <>
                  {editEmployye ? (
                    ""
                  ) : (
                    <>
                      <h3 className="w-full text-center text-heading3-bold">
                        Cài đặt
                      </h3>
                      <div className="flex flex-col justify-center gap-4 py-4">
                        <div
                          // href={`/chats/${chatId}/group-info`}
                          className="w-full rounded-lg  px-2 py-4 font-semibold bg-blue-500 text-white cursor-pointer"
                        >
                          <div
                            className="items-center flex gap-2 "
                            onClick={() => {
                              setEditEmployye(true);
                            }}
                          >
                            <ModeEditIcon />
                            <button>Chỉnh sửa nhân viên</button>
                          </div>
                        </div>
                        <div
                          className="w-full rounded-lg items-center flex gap-2 px-2 py-4 font-semibold bg-red-500 text-white  cursor-pointer"
                          onClick={() => {
                            onDelete(idEdit);

                            setOpenPut(false);
                            router.push(`/dashboard`);
                          }}
                        >
                          <DeleteForeverIcon />
                          <button>Xóa nhân viên</button>
                        </div>
                        <div
                          className="flex w-full items-center justify-end p-2 cursor-pointer"
                          onClick={() => setOpenPut(false)}
                        >
                          <h3 className="font-semibold">Quay về</h3>
                        </div>
                      </div>
                    </>
                  )}
                  {editEmployye && (
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-3">
                        <p className="text-body-bold text-center">
                          Chỉnh sửa nhân viên
                        </p>
                        <form
                          className="form"
                          onSubmit={() =>
                            handleSubmit(
                              onEdit(idEdit, {
                                username: watch("username"),
                                code: watch("code"),
                                password: watch("password"),
                              })
                            )
                          }
                        >
                          <div>
                            <div className="input">
                              <input
                                defaultValue={value?.username}
                                {...register("username", {
                                  required: "Tên là bắt buộc",
                                  validate: (value) => {
                                    if (value.length < 3) {
                                      return "Tên phải lớn hơn 3 kí tự";
                                    }
                                  },
                                })}
                                type="text"
                                placeholder="Tên đăng nhập"
                                className="input-field"
                              />
                              <PersonOutline sx={{ color: "#737373" }} />
                            </div>
                            {errors.username && (
                              <p className="text-red-500">
                                {errors.username.message}
                              </p>
                            )}
                          </div>

                          <div>
                            <div className="input">
                              <input
                                defaultValue={value?.code}
                                {...register("code")}
                                type="text"
                                placeholder="Mã giới thiệu"
                                className="input-field"
                              />
                              <CodeIcon sx={{ color: "#737373" }} />
                            </div>
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
                                      !value.match(
                                        /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/
                                      )
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
                              <p className="text-red-500">
                                {errors.password.message}
                              </p>
                            )}
                          </div>

                          <button className="button" type="submit">
                            Chỉnh sửa
                          </button>
                        </form>
                      </div>
                      <div className="flex items-center w-full justify-end gap-4">
                        <button
                          className="text-sm font-semibold"
                          onClick={() => setEditEmployye(false)}
                        >
                          Quay về
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </Box>
          </Modal>
        </table>
      </div>
    </div>
  );
};

const TableHead = () => {
  return (
    <thead>
      <tr className="text-sm font-normal text-stone-500">
        <th className="text-start p-1.5">Tên đăng nhập</th>
        <th className="text-start p-1.5">Vai trò</th>
        <th className="text-start p-1.5">Mã giới thiệu</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({ cusId, sku, date, price, order, onClick }) => {
  return (
    <tr className={order % 2 ? "bg-stone-100 text-sm" : "text-sm"}>
      <td className="p-1.5">{sku}</td>
      <td className="p-1.5">{date}</td>
      <td className="p-1.5">{price}</td>
      <td className="w-8">
        <button
          className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8"
          onClick={onClick}
        >
          <FiMoreHorizontal />
        </button>
      </td>
    </tr>
  );
};
