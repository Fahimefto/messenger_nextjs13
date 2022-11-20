"use client";
import React, { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { Message } from "../typings";
function InputMessage() {
  const [input, setInput] = useState("");
  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    const messageToSend = input;
    setInput("");
    const id = uuid();
    const message: Message = {
      id: id,
      message: messageToSend,
      created_at: Date.now(),
      user_name: "Fahim",
      profile_pic:
        "https://res.cloudinary.com/dtcjz5osi/image/upload/v1668951092/messenger/Blue_With_Sparkles_Cleaning_Service_Logo_2_hm0zn0.png",
      email: "fahimifto@yahoo.com",
    };

    const uploadMessage = async () => {
      const res = await fetch("/api/admessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
    };
  };
  return (
    <form
      className="flex fixed bottom-0 z-50 w-full px-10 py-5 space-x-2 border-t  border-gray-300"
      onSubmit={addMessage}
    >
      <input
        type="text"
        placeholder="Type a message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={!input}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
}

export default InputMessage;
