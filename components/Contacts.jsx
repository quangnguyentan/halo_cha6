"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import GroupIcon from "@mui/icons-material/Group";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import toast from "react-hot-toast";
import ChatBox from "./ChatBox";
import ChatList from "./ChatList";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
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

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [chats, setChats] = useState([]);
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const { data: session } = useSession();
  const currentUser = session?.user;

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
  const getChats = async () => {
    try {
      const res = await fetch(
        search !== ""
          ? `/api/users/${currentUser._id}/searchChat/${search}`
          : `/api/users/${currentUser._id}`
      );
      const data = await res.json();
      setChats(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (currentUser) getContacts();
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [currentUser, search]);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (currentUser) {
        getChats();
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [currentUser, search]);
  /* SELECT CONTACT */
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [addGroup, setAddGroup] = useState(false);
  const isGroup = selectedContacts.length > 1;
  const handleSelect = (contact) => {
    //select a user to chat
    if (selectedContacts.includes(contact)) {
      setSelectedContacts((prevSelectedContacts) =>
        prevSelectedContacts.filter((item) => item !== contact)
      );
    } else {
      // select users then create a group to chat
      setSelectedContacts((prevSelectedContacts) => [
        ...prevSelectedContacts,
        contact,
      ]);
    }
  };

  /* ADD GROUP CHAT NAME */
  const [name, setName] = useState("");

  const router = useRouter();

  /* CREATE CHAT */
  // const createChat = async (contact) => {
  //   // select users then create a group to chat
  //   setSelectedContacts(contact);
  //   console.log(setSelectedContacts);
  //   if (selectedContacts.includes(contact)) {
  //     setSelectedContacts((prevSelectedContacts) =>
  //       prevSelectedContacts.filter((item) => item !== contact)
  //     );
  //     const res = await fetch("/api/chats", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         currentUserId: currentUser._id,
  //         members: selectedContacts.map((contact) => contact._id),
  //         isGroup,
  //         name,
  //       }),
  //     });
  //     const chat = await res.json();
  //     console.log(chat);
  //     if (res.ok) {
  //       router.push(`/chats/${chat._id}`);
  //     }
  //   }
  // };
  const handleContactClick = async (contact) => {
    // Cập nhật danh sách các liên hệ đã chọn
    const updatedContacts = selectedContacts.includes(contact)
      ? selectedContacts.filter((item) => item !== contact)
      : [...selectedContacts, contact];

    setSelectedContacts(updatedContacts);

    // Nếu danh sách liên hệ không phải là một nhóm và không có nhiều hơn một người, thoát
    if (updatedContacts.length === 0) {
      console.log("No contacts selected.");
      return;
    }

    // Tạo hoặc tìm kiếm phòng trò chuyện
    try {
      const res = await fetch("/api/chats", {
        method: "POST",
        body: JSON.stringify({
          currentUserId: currentUser._id,
          members: updatedContacts.map((contact) => contact._id),
          isGroup,
          name,
        }),
      });
      const chat = await res.json();

      if (res.ok) {
        // Nếu tạo thành công, chuyển hướng đến phòng mới tạo
        router.push(`/chats/${chat._id}`);
      } else {
        console.error("Failed to create chat:", chat);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const createGroupChat = async () => {
    const res = await fetch("/api/chats", {
      method: "POST",
      body: JSON.stringify({
        currentUserId: currentUser._id,
        members: selectedContacts.map((contact) => contact._id),
        isGroup,
        name,
      }),
    });
    const chat = await res.json();
    if (res.ok) {
      router.push(`/chats/${chat._id}`);
    }
  };
  console.log(selectedContacts);
  return loading ? (
    <Loader />
  ) : (
    <div className="create-chat-container">
      <div className="">
        <div className="">
          <div>
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
                        Tên nhóm chat
                      </p>
                      <input
                        placeholder="Nhập tên nhóm..."
                        className="input-group-name border-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center w-full justify-end gap-4">
                      <button
                        className="text-sm font-semibold"
                        onClick={() => setOpen(false)}
                      >
                        Hủy
                      </button>
                      <button
                        className="text-sm font-semibold"
                        onClick={() => {
                          if (name.length > 0) {
                            setAddGroup(true);
                          } else {
                            toast.error("Bạn chưa nhập tên nhóm chat");
                          }
                        }}
                      >
                        Tiếp tục
                      </button>
                    </div>
                  </div>
                )}
              </Box>
            </Modal>
            <Modal
              open={addGroup}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {addGroup && (
                  <div className="w-full flex flex-col gap-4 h-[340px]">
                    <input
                      autoFocus
                      autoComplete="off"
                      placeholder="Search contact..."
                      className="input-search w-full border"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />

                    <div className="flex flex-col flex-1 gap-5 overflow-y-scroll custom-scrollbar">
                      {selectedContacts?.map((selected, index) => (
                        <div
                          key={index}
                          className="contact"
                          // aria-disabled={selectedContacts.length === 0}
                          onClick={(e) => handleSelect(selected)}
                        >
                          {selectedContacts.find(
                            (item) => item === selected
                          ) ? (
                            <CheckCircle sx={{ color: "red" }} />
                          ) : (
                            <RadioButtonUnchecked />
                          )}
                          <img
                            src={selected?.profileImage || "/assets/person.jpg"}
                            alt="profile"
                            className="profilePhoto"
                          />
                          <p className="text-base-bold">{selected?.username}</p>
                        </div>
                      ))}
                      {search &&
                        contacts.map((user, index) => (
                          <>
                            {user?.username === search && (
                              <div
                                key={index}
                                className="contact"
                                aria-disabled={selectedContacts.length === 0}
                                onClick={(e) => {
                                  handleSelect(user);
                                  setSearch("");
                                }}
                              >
                                {selectedContacts?.length > 0 ? (
                                  <div>
                                    {selectedContacts?.find(
                                      (select) => select?._id == user?._id
                                    ) ? (
                                      ""
                                    ) : (
                                      <div className="contact">
                                        {selectedContacts.find(
                                          (item) => item === user
                                        ) ? (
                                          <CheckCircle sx={{ color: "red" }} />
                                        ) : (
                                          <RadioButtonUnchecked />
                                        )}
                                        <img
                                          src={
                                            user?.profileImage ||
                                            "/assets/person.jpg"
                                          }
                                          alt="profile"
                                          className="profilePhoto"
                                        />
                                        <p className="text-base-bold">
                                          {user?.username}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <div className="flex gap-2 items-center">
                                    {selectedContacts.find(
                                      (item) => item === user
                                    ) ? (
                                      <CheckCircle sx={{ color: "red" }} />
                                    ) : (
                                      <RadioButtonUnchecked />
                                    )}
                                    <img
                                      src={
                                        user?.profileImage ||
                                        "/assets/person.jpg"
                                      }
                                      alt="profile"
                                      className="profilePhoto"
                                    />
                                    <p className="text-base-bold">
                                      {user?.username}
                                    </p>
                                  </div>
                                )}
                              </div>
                            )}
                          </>
                        ))}
                    </div>
                    <div className="flex items-center w-full justify-end gap-4">
                      <button
                        className="text-sm font-semibold"
                        onClick={() => {
                          setSearch("");
                          setAddGroup(false);
                          setName("");
                          setSelectedContacts([]);
                        }}
                      >
                        Hủy
                      </button>
                      <button
                        className="text-sm font-semibold"
                        disabled={selectedContacts.length === 0}
                        onClick={() => {
                          if (selectedContacts.length <= 1) {
                            toast.error("Cần chọn 2 người trở lên");
                          } else {
                            setSearch("");
                            createGroupChat();
                          }
                        }}
                      >
                        Tạo
                      </button>
                    </div>
                  </div>
                )}
              </Box>
            </Modal>
          </div>
        </div>
        {addGroup ? (
          ""
        ) : (
          <div className="contact-list">
            <div className="flex items-center justify-end">
              {/* <p className="text-body-bold w-1/2">Người liên hệ</p> */}
              <div className="sm:w-1/2 md:hidden px-2">
                <button
                  className="flex gap-2 w-full items-center "
                  onClick={handleOpen}
                >
                  <GroupIcon />
                  <p className="font-semibold ">Tạo nhóm</p>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1/4 max-sm:flex-none max-sm:hidden">
                <button
                  className="flex gap-2 w-full items-center "
                  onClick={handleOpen}
                >
                  <GroupIcon />
                  <p className="text-small-medium font-semibold">Tạo nhóm</p>
                </button>
              </div>
              <div className="lg:w-3/4 max-sm:w-full max-sm:px-2">
                <input
                  autoFocus
                  autoComplete="off"
                  placeholder="Tìm người liên hệ..."
                  className="input-search w-full border"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col  flex-1 gap-5 overflow-y-scroll custom-scrollbar relative">
              {search.length > 0 ? (
                ""
              ) : (
                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ArrowDropDownIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography sx={{ fontWeight: 700 }}>
                        Danh sách bạn bè
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {contacts && contacts?.length > 0 ? (
                          contacts?.map((user, index) => (
                            <div
                              key={index}
                              className={`contact `}
                              aria-disabled={selectedContacts.length === 0}
                              onClick={(e) => handleContactClick(user)}
                            >
                              {user?.codeAddFriends === currentUser?.code && (
                                <div className="flex gap-4 items-center">
                                  <img
                                    src={
                                      user?.profileImage || "/assets/person.jpg"
                                    }
                                    alt="profile"
                                    className="profilePhoto"
                                  />
                                  <p className="text-base-bold">
                                    {user?.username}
                                  </p>
                                </div>
                              )}
                              {user?.code === currentUser?.codeAddFriends && (
                                <div className="flex gap-4 items-center">
                                  <img
                                    src={
                                      user?.profileImage || "/assets/person.jpg"
                                    }
                                    alt="profile"
                                    className="profilePhoto"
                                  />
                                  <p className="text-base-bold">
                                    {user?.username}
                                  </p>
                                </div>
                              )}
                            </div>
                          ))
                        ) : (
                          <h3 className="font-semibold">
                            Chưa có bất kì bạn bè nào! Hãy nhập mã giới thiệu ở
                            trong hồ sơ hoặc tìm kiếm để chat
                          </h3>
                        )}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion defaultExpanded>
                    <AccordionSummary
                      expandIcon={<ArrowDropDownIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <Typography sx={{ fontWeight: 700 }}>
                        Danh sách chat
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <ChatList />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )}

              <div
                className={`${
                  search
                    ? "absolute w-full p-2 top-0  rounded-md flex flex-col gap-4"
                    : ""
                }`}
              >
                {contacts.length === 0 && chats.length === 0 && (
                  <div className="w-full h-screen  rounded-xl  font-semibold ">
                    Không tìm thấy liên hệ nào
                  </div>
                )}
                {search &&
                  chats &&
                  chats.length > 0 &&
                  chats?.map((chat, index) => (
                    <div>
                      {chat?.name === search && (
                        <ChatBox
                          hidden
                          chat={chat}
                          index={index}
                          currentUser={currentUser}
                          currentChatId={chat?._id}
                        />
                      )}
                    </div>
                  ))}

                {search &&
                  contacts &&
                  contacts?.length > 0 &&
                  contacts?.map((user, index) => (
                    <div
                      key={index}
                      className={`contact ${
                        user?.username === search
                          ? "bg-blue-2 rounded-xl px-2 py-2"
                          : ""
                      }  `}
                      aria-disabled={selectedContacts.length === 0}
                      onClick={(e) => handleContactClick(user)}
                    >
                      {user?.username === search && (
                        <>
                          <img
                            src={user?.profileImage || "/assets/person.jpg"}
                            alt="profile"
                            className="profilePhoto"
                          />
                          <p className="text-base-bold">{user?.username}</p>
                        </>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
