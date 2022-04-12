import React from "react";
import { Auth, Text, View } from "aws-amplify";

const Authentication = (props) => {
  function signOut() {
    Auth.signOut()
      .then(() => {
        props.onStateChange("signedOut", null);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }
  return (
    <View>
      <Text>Hello World</Text>
      <Text onPress={signOut}>Sign Out</Text>
    </View>
  );
};

export default Authentication;
