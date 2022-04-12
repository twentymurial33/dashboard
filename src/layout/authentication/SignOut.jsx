import { Auth } from "aws-amplify";

async function SignOut() {
  try {
    await Auth.SignOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
  return (
    <div>
      <button onClick={this.SignOut} className="signOutButton">
        SignOut
      </button>
    </div>
  );
}

export default SignOut;
