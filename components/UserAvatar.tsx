import { User } from "next-auth";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {
  className?: string;
  user: Pick<User, "name" | "image">;
};

const UserAvatar = ({ user, ...props }: Props) => {
  return (
    <Avatar {...props}>
      {user.image ? (
        <AvatarImage src={user.image} />
      ) : (
        <AvatarFallback>{user.name}</AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
