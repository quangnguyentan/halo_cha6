"use client";

import { Logout } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar = () => {
  const pathname = usePathname();

  const handleLogout = async () => {
    signOut();
    router.push("/");
  };

  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="bottom-bar">
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
        className="flex items-center gap-4 cursor-pointer"
      >
        <h3 className="font-semibold">Đăng xuất</h3>
        <Logout sx={{ color: "#737373" }} />
      </div>

      <Link href="/profile" className="flex items-center gap-4">
        <h3 className="font-semibold">Hồ sơ</h3>
        <img
          src={user?.profileImage || "/assets/person.jpg"}
          alt="profile"
          className="profilePhoto"
        />
      </Link>
    </div>
  );
};

export default BottomBar;
