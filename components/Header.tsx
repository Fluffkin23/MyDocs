import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HeaderProps } from "@/types";

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="header">
      <Link href="/" className="md:flex-1">
        <Image
          className="hidden md:block"
          src="/assets/icons/logo.svg"
          alt="Logo with Name"
          width={120}
          height={32}
        />
        <Image
          className="mr-2 md:hidden"
          src="/assets/icons/logo-icon.svg"
          alt="Logo without Name"
          width={32}
          height={32}
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
