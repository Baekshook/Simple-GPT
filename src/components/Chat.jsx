import axios from "axios";
import { useState } from "react";

const Chat = () => {
  const [question, setQuestion] = useState("");

  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        "https://holy-fire-2749.fly.dev/chat",
        {
          question: "안녕?",
        },
        {
          headers: {
            Authorization: "Bearer BLOCKCHAINSCHOOL3",
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center text-white">
      <form onSubmit={onSubmitChat}>
        <input
          className="text-black"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input className="ml-3" type="submit" value="검 색" />
      </form>
    </div>
  );
};

export default Chat;
