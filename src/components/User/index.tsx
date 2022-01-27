import React from "react";

interface IProps {
  name: string;
  username: string;
  index: number;
}

export const User = ({ name, username, index }: IProps) => (
  <li className="px-6 py-2 border-b border-gray-200 w-full text-left text-lg text-gray-400 tracking-wide font-medium">
    <span>{index + 1}</span>
    <span className="mx-2 text-black">{name}</span>
    <span>@{username}</span>
  </li>
);
