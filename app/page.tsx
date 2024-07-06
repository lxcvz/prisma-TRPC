"use client";
import { trpc } from "@/server/client.";
import { useState } from "react";

export default function Home() {
  const getUsers = trpc.user.getUsers.useQuery();
  const addUser = trpc.user.addUser.useMutation({
    onSettled: () => {
      getUsers.refetch();
    },
  });

  const [name, setName] = useState("");
  const [race, setRace] = useState("");

  return (
    <main className="flex flex-col items-center justify-center">
      {JSON.stringify(getUsers.data)}
      <div className="flex flex-col gap-3">
        name:{" "}
        <input
          type="text"
          className="border"
          onChange={(e) => setName(e?.target.value)}
        />
        {""}
        race:{" "}
        <input
          type="text"
          className="border"
          onChange={(e) => setRace(e?.target.value)}
        />
        <button
          className="border"
          onClick={() => addUser.mutate({ name, race })}
        >
          Add
        </button>
      </div>
    </main>
  );
}
