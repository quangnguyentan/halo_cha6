"use client";

import { Logout } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const TopBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="topbar z-20">
      <Link href="/chats">
        <img src="/assets/logo.png" alt="logo" className="logo" />
      </Link>

      <div className="menu ">
        {/* <Link
          href="/chats"
          className={`${
            pathname === "/chats" ? "text-red-1" : ""
          } text-heading4-bold`}
        >
          Messenger
        </Link> */}
        {/* <Link
          href="/contacts"
          className={`${
            pathname === "/contacts" ? "text-red-1" : ""
          } text-heading4-bold`}
        >
          Contacts
        </Link> */}

        <div
          onClick={handleLogout}
          className="flex items-center gap-4 cursor-pointer "
        >
          <h3 className="font-semibold">Đăng xuất</h3>
          <Logout sx={{ color: "#737373" }} />
        </div>

        <Link href="/profile" className="flex items-center gap-4 ">
          <h3 className="font-semibold">Hồ sơ</h3>
          <img
            src={user?.profileImage || "/assets/person.jpg"}
            alt="profile"
            className="profilePhoto"
          />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
