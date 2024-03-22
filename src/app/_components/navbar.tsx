import React from "react";
import Container from "./container";
import Link from "next/link";
import UserMenu from "./user-menu";

const Navbar = () => {
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
          <UserMenu />
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
