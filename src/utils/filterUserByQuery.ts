import { IUser } from "../types/user";

export const filterUserByQuery = (users: IUser[], query: string) =>
  users?.filter(
    (user) =>
      user.name.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query)
  );
