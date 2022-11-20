import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

function Header() {
  const session = true;
  if (session)
    return (
      <header className="sticky top-0 bg-white flex justify-between z-50 items-center p-5 shadow-sm">
        <div className="flex space-x-2 items-center">
          <Image
            className="rounded-full mx-2 object-contain"
            src="https://res.cloudinary.com/dtcjz5osi/image/upload/v1668951092/messenger/Blue_With_Sparkles_Cleaning_Service_Logo_2_hm0zn0.png"
            height={50}
            width={50}
            alt="Profile picture"
          />
          <div>
            <p className="text-blue-500">Logged in as</p>
            <p className="font-bold text-lg">Fahim Iftekhar</p>
          </div>
        </div>
        <LogoutButton />
      </header>
    );

  return (
    <header className="sticky top-0 bg-white flex justify-center z-50 items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex items-center space-x-5">
          <Image
            src="https://res.cloudinary.com/dtcjz5osi/image/upload/v1668951092/messenger/Blue_With_Sparkles_Cleaning_Service_Logo_2_hm0zn0.png"
            height={80}
            width={80}
            alt="Logo"
          />
          <p className="text-blue-500  ">Welcome to Messenger+</p>
        </div>
        <Link
          href="/auth/signin"
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In{" "}
        </Link>
      </div>
    </header>
  );
}

export default Header;
