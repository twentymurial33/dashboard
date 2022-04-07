import { Auth, Amplify } from "aws-amplify";
import { withAuthenticator, SignOut } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports.js";
Amplify.configure(awsExports);

async function SignOut() {
  try {
    await Auth.SignOut({ global: true });
  } catch (error) {
    console.log("error signing out: ", error);
  }
  return (
    <div>
      <button onClick={SignOut}>SignOut</button>;
    </div>
  );
}

export default withAuthenticator(SignOut);
