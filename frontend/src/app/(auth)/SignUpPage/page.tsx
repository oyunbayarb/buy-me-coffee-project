import {CreateEmailPassword, CreateUserName} from "./components";

export default function createAccountPage() {
  return (
    <div>
      <CreateUserName></CreateUserName>
      <CreateEmailPassword></CreateEmailPassword>
    </div>
  );
}
