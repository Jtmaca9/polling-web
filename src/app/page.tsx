"use client";

import React, { useState } from "react";
import Poll from "@/models/Poll";

import PollModal from "./components/PollModal";
import PollTable from "@/components/PollTable";

const polls = [
  {
    id: 1,
    title: "Poll 1 is a long title of a long poll.",
    description:
      "Description for Poll 1, this is a long description. Description for Poll 1, this is a long description. Description for Poll 1, this is a long description.",
    location: "Location 1",
    author: "Author 1",
    date: "2023-10-01",
    status: "Open",
    votedOn: false,
  },
  {
    id: 2,
    title: "Poll 2",
    description: "Description for Poll 2",
    location: "Location 2",
    author: "Author 2",
    date: "2023-10-02",
    status: "Closed",
    votedOn: false,
  },
  {
    id: 3,
    title: "Poll 3",
    description: "Description for Poll 3",
    location: "Location 3",
    author: "Author 3",
    date: "2023-10-03",
    status: "Open",
    votedOn: true,
  },
];

export default function Home() {
  const [selectedPoll, setSelectedPoll] = useState<Poll | null>(null);

  const handleRowClick = (poll: Poll) => {
    setSelectedPoll(poll);
  };

  const closeModal = () => {
    setSelectedPoll(null);
  };

  return (
    <div className="container mx-auto px-2 md:px-4 py-8">
      <h1 className="text-2xl font-bold pb-8 w-full text-center">
        Current Polls
      </h1>
      <PollTable polls={polls} handleRowClick={handleRowClick} />
      {selectedPoll && (
        <PollModal
          poll={selectedPoll}
          onClose={closeModal}
          onGoToPoll={() => {}}
        />
      )}
    </div>
  );
}
