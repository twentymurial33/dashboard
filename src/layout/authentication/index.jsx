import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function SignOut() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <div>
          {/* <h1>You have Logged Out. {user.username}</h1> */}
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}
