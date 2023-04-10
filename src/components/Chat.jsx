import React from "react";

export default function Chat() {
  const onSubmitChat = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" bg-black min-h-screen flex justify-center items-center text-white">
      <form onSubmit={onSubmitChat}>
        <input className="text-black" type="text" />
        <input className="ml-3" type="submit" value="검색" />
      </form>
    </div>
  );
}
