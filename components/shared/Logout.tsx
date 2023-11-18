"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const Logout = ({ className}:{className:string}) => {
  return (
    <Button
      onClick={() =>
        signOut({
          callbackUrl: "/",
        })
      }
      className={className}
    >
      Logout
    </Button>
  );
};

export default Logout;
