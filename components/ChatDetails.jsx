"use client";

import { useState, useEffect, useRef } from "react";
import Loader from "./Loader";
import {
  AddPhotoAlternate,
  CheckCircle,
  RadioButtonUnchecked,
} from "@mui/icons-material";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { CldUploadButton } from "next-cloudinary";
import MessageBox from "./MessageBox";
import { pusherClient } from "@lib/pusher";
import { Box, Modal } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { headers } from "@next.config";
import { useRouter } from "next/navigation";
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

const ChatDetails = ({ chatId }) => {
  const [loading, setLoading] = useState(true);
  const [chat, setChat] = useState({});
  const [otherMembers, setOtherMembers] = useState([]);
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const { data: session } = useSession();
  const currentUser = session?.user;
  const [search, setSearch] = useState("");
  const [chats, setChats] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [membersId, setMembersId] = useState([]);
  const isGroup = selectedContacts.length >= 1;
  const router = useRouter();
  const handleSelect = (contact) => {
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
  const createGroupChat = async () => {
    setLoading(true);
    const res = await fetch("/api/chats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        members: selectedContacts.map((contact) => contact._id),
        isGroup,
        chatIdGroup: chat?._id,
      }),
    });
    const response = await res.json();
    console.log(res.ok);
    setOpen(false);
    setSelectedContacts([]);
    setLoading(false);
  };
  const getContacts = async () => {
    try {
      const res = await fetch(
        search !== "" ? `/api/users/searchContact/${search}` : "/api/users"
      );

      const data = await res.json();
      setContacts(data.filter((contact) => contact._id !== chat?.members));
      // setContacts(
      //   data?.members?.filter((member) => member._id !== currentUser._id)
      // );
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (currentUser) getContacts();
  }, [currentUser, search]);
  const [text, setText] = useState("");

  const getChatDetails = async () => {
    try {
      const res = await fetch(`/api/chats/${chatId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setChat(data);
      setOtherMembers(
        data?.members?.filter((member) => member._id !== currentUser._id)
      );
      setMembersId(data?.members?.map((member) => member._id));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser && chatId) getChatDetails();
  }, [currentUser, chatId, loading]);

  const sendText = async () => {
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatId,
          currentUserId: currentUser._id,
          text,
        }),
      });

      if (res.ok) {
        setText("");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && text.length > 0) {
      sendText();
    }
  };
  const sendPhoto = async (result) => {
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatId,
          currentUserId: currentUser._id,
          photo: result?.info?.secure_url,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    pusherClient.subscribe(chatId);

    const handleMessage = async (newMessage) => {
      setChat((prevChat) => {
        return {
          ...prevChat,
          messages: [...prevChat.messages, newMessage],
        };
      });
    };

    pusherClient.bind("new-message", handleMessage);

    return () => {
      pusherClient.unsubscribe(chatId);
      pusherClient.unbind("new-message", handleMessage);
    };
  }, [chatId]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat?.messages]);
  return loading ? (
    <Loader />
  ) : (
    <div className="pb-20">
      <div className="chat-details">
        <div className="chat-header">
          {chat?.isGroup ? (
            <>
              <Link href={`/chats/${chatId}/group-info`}>
                <img
                  src={chat?.groupPhoto || "/assets/group.png"}
                  alt="group-photo"
                  className="profilePhoto"
                />
              </Link>

              <div
                className="flex items-center justify-between w-full"
                onClick={() => setOpen(true)}
              >
                <div className="text">
                  <p>
                    {chat?.name} &#160; &#183; &#160; {chat?.members?.length}{" "}
                    members
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <PersonAddIcon />
                  <button>Thêm thành viên</button>
                </div>
              </div>
            </>
          ) : (
            <>
              <img
                src={otherMembers[0]?.profileImage || "/assets/person.jpg"}
                alt="profile photo"
                className="profilePhoto"
              />
              <div className="text">
                <p>{otherMembers[0]?.username}</p>
              </div>
            </>
          )}
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {open && (
              <div className="w-full flex flex-col gap-4 h-[340px]">
                <input
                  placeholder="Search contact..."
                  className="input-search w-full border"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <div className="flex flex-col flex-1 gap-5 overflow-y-scroll custom-scrollbar">
                  {contacts
                    ?.filter((contact) => !membersId?.includes(contact?._id))
                    .map((contact, index) => (
                      <div
                        key={index}
                        className="contact"
                        aria-disabled={selectedContacts.length === 0}
                        onClick={(e) => handleSelect(contact)} // Use 'contact' instead of 'user'
                      >
                        {selectedContacts.find((item) => item === contact) ? (
                          <CheckCircle sx={{ color: "red" }} />
                        ) : (
                          <RadioButtonUnchecked />
                        )}
                        <img
                          src={contact.profileImage || "/assets/person.jpg"}
                          alt="profile"
                          className="profilePhoto"
                        />
                        <p className="text-base-bold">{contact.username}</p>
                      </div>
                    ))}
                </div>
                <div className="flex items-center w-full justify-end gap-4">
                  <button
                    className="text-sm font-semibold"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    Hủy
                  </button>
                  <button
                    className="text-sm font-semibold"
                    disabled={selectedContacts.length === 0}
                    onClick={() => {
                      if (selectedContacts.length <= 0) {
                        toast.error("Cần chọn 1 người trở lên");
                      } else {
                        createGroupChat();
                      }
                    }}
                  >
                    Thêm
                  </button>
                </div>
              </div>
            )}
          </Box>
        </Modal>
        <div className="chat-body">
          {chat?.messages?.map((message, index) => (
            <MessageBox
              key={index}
              message={message}
              currentUser={currentUser}
            />
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="send-message">
          <div className="prepare-message">
            <CldUploadButton
              options={{ maxFiles: 1 }}
              onUpload={sendPhoto}
              uploadPreset="i96i6rvi"
            >
              <AddPhotoAlternate
                sx={{
                  fontSize: "35px",
                  color: "#737373",
                  cursor: "pointer",
                  "&:hover": { color: "red" },
                }}
              />
            </CldUploadButton>

            <input
              type="text"
              placeholder="Write a message..."
              className="input-field"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyDown}
              required
            />
          </div>

          <div
            onClick={() => {
              if (text.length > 0) {
                sendText();
              }
            }}
          >
            <img src="/assets/send.jpg" alt="send" className="send-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetails;
