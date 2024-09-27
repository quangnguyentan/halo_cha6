import React from "react";
import useSWR from "swr";

const Chat = () => {
  const { data, error, isLoading } = useSWR("/api/users");
  console.log(data);
  return (
    <div>
      {data?.map((el) => (
        <div>
          <h1>{el?.username}</h1>
        </div>
      ))}
    </div>
  );
};

export default Chat;
