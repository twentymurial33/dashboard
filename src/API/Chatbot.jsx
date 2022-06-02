import React, { useEffect } from "react";
import Amplify, { Interactions, AmplifyTheme } from "aws-amplify";
import "./Chatbot.css";
import { AmplifyChatbot } from "@aws-amplify/ui-react/legacy";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

Amplify.configure({
  Auth: {
    identityPoolId: "us-east-1_pHKQVIvJc",
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
};

function Chatbot() {
  const handleChatComplete = (event) => {
    const { data, err } = event.detail;
    if (data) console.log("Chat fulfilled!", JSON.stringify(data));
    if (err) console.error("Chat failed:", err);
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
      botName="yourBotName"
      botTitle="My ChatBot"
      welcomeMessage="Hello, how can I help you?"
      theme={myTheme}
    />
  );
}
export default Chatbot;
