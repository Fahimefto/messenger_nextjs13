"use client";
import React, { FormEvent, useState } from "react";

function InputMessage() {
  const [input, setInput] = useState("");
  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    setInput("");
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