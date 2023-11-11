"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <Button
      onClick={() =>
        signOut({
          callbackUrl: "/",
        })
      }
    >
      Logout
    </Button>
  );
};

export default Logout;
