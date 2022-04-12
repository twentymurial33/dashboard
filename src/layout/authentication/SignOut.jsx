import { Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator, Grid, Flex } from "@aws-amplify/ui-react";

async function SignOut() {
  try {
    await Auth.SignOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Grid templateColumns={{ base: "1fr 0", medium: "1fr 1fr" }}>
          <Flex justifyContent="center">
            <Authenticator>
              {({ signOut, user }) => (
                <main>
                  <h1>Hello {user.username}</h1>
                  <button onClick={signOut}>Sign out</button>
                </main>
              )}
            </Authenticator>
          </Flex>
        </Grid>
      )}
    </Authenticator>
  );
}
//     <div>
//       <button onClick={this.SignOut} className="signOutButton">
//         SignOut
//       </button>
//     </div>
//   );
// }

export default SignOut;
