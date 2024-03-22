"use client";

import { useState } from "react";
import AuthorAvatar from "./author-avatar";
import Link from "next/link";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleUserMenu = () => {
    setIsOpen(!isOpen);
  };

  const userMenuItems = [
    {
      label: "Profile",
      href: "#",
    },
    {
      label: "Sign out",
      href: "#",
    },
  ];

  return (
    <>
      <button
        onClick={toggleUserMenu}
        className="flex text-sm bg-white rounded-full md:me-0"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <AuthorAvatar picture="assets/user-icon.png"></AuthorAvatar>
      </button>
      {isOpen && (
        <div
          className="absolute right-20 top-24 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
          id="user-dropdown"
        >
          <ul className="py-2" aria-labelledby="user-menu-button">
            {userMenuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default UserMenu;
