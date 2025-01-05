"use client";

import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

function profileAvatar() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/sign-in`,
        })
      }
    >
      Keluar
    </Button>
  );
}

export default profileAvatar;
