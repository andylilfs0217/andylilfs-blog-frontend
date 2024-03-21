import React from "react";
import Container from "./container";
import { Avatar, Link } from "@mui/material";

const Navbar = () => {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <Container>
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
            <Link href="/" className="hover:underline">
              Andy's Blog
            </Link>
            .
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          {/* <Link
            className={
              currentPath === "/about" ? "underline" : "hover:underline"
            }
            href="/about"
          >
            About
          </Link> */}
          <Avatar alt="User Avatar" src="assets/user-icon.png"></Avatar>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
