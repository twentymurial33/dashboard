import React, { useEffect } from "react";
import Amplify, { Interactions, AmplifyTheme } from "aws-amplify";
import "./Chatbot.css";
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
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to ChatBot Demo</h1>
      </header>
      <AmplifyChatbot
        title="Banking Bot"
        theme={myTheme}
        botName="PersonalBanker"
        welcomeMessage="Welcome, how can I help you today?"
      />
    </div>
  );
}
export default Chatbot;
