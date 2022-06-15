import React, { useEffect } from "react";
import "./Chatbot.css";
import Amplify, { AmplifyTheme } from "aws-amplify";
import { AmplifyChatbot } from "@aws-amplify/ui-react/legacy";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

Amplify.configure({
  Auth: {
    identityPoolId: "us-east-1:d06b4bc7-574f-47ec-8ad5-d373e5700686",
    region: "us-east-1",
  },
  Interactions: {
    bots: {
      BookTrip: {
        name: "BookTrip",
        alias: "TSTALIASID",
        region: "us-east-1",
      },
    },
  },
});

const myTheme = {
  ...AmplifyTheme,
  // sectionHeader: {
  //   ...AmplifyTheme.sectionHeader,
  //   backgroundColor: "#ff6600",
  // },
};

function Chatbot() {
  const handleChatComplete = (event) => {
    const { data, err } = event.detail;
    if (data) console.log("Chat fulfilled!", JSON.stringify(data));
    if (err) console.error("Chat failed:", err);
    console.log(data, err);
  };

  useEffect(() => {
    const chatbotElement = document.querySelector("amplify-chatbot");
    chatbotElement.addEventListener("chatCompleted", handleChatComplete);

    return function cleanup() {
      chatbotElement.removeEventListener("chatCompleted", handleChatComplete);
    };
  }, []);
  return (
    <AmplifyChatbot
      title="Book Trip"
      theme={myTheme}
      botName="BookTrip"
      welcomeMessage="Hello, how can I help you?"
      clearOnComplete={true}
      conversationModeOn={true}
    />
  );
}

export default Chatbot;
