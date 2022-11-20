import React from "react";
import MessageList from "./MessageList";
import InputMessage from "./InputMessage";

function HomePage() {
  return (
    <main>
      {/* message list  */}
      <MessageList />
      {/* input message */}
      <InputMessage />
    </main>
  );
}

export default HomePage;
