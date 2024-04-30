import { createContext } from "react";
import { IUser } from "../../utils/interface";

interface IUserContext {
  users: Array<IUser>;
  setUsers?: (value: IUser[]) => void;
}

const UserContext = createContext<IUserContext>({
  users: [],
  setUsers: (value: IUser[]) => {},
});

export default UserContext;
