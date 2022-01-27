import { User } from "../User";
import { IUser } from "../../types/user";

interface IProps {
  users?: IUser[];
}

export const UserList = ({ users }: IProps) => (
  <div className="flex justify-center pt-4">
    <ul className="bg-white rounded-lg w-120 text-gray-900 border-t border-gray-200">
      {users?.map(({ username, name }, index) => (
        <User name={name} username={username} index={index} />
      ))}
    </ul>
  </div>
);
