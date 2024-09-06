"use client";

import PollTable from "@/components/PollTable";
import Image from "next/image";

const polls = [
  {
    id: 1,
    title: "Poll 1",
    description:
      "Description for Poll 1, this is a long description. Description for Poll 1, this is a long description. Description for Poll 1, this is a long description.",
    location: "Location 1",
    author: "Author 1",
    date: "2023-10-01",
    status: "Open",
    votedOn: true,
  },
];

function Profile() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full bg-white p-8 absolute h-70">
        <div className="text-center">
          <Image
            className="mx-auto h-24 w-24 rounded-full"
            src="https://placehold.co/96x96.png"
            alt="Profile Picture"
            width={96}
            height={96}
          />
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            John Doe
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Software Engineer at XYZ Company
          </p>
        </div>
      </div>
      <div className="w-full max-w-screen-lg mt-72 relative">
        <h1 className="text-lg font-bold w-full my-4 text-center">
          Voting history
        </h1>
        <PollTable polls={polls} handleRowClick={() => {}} />
      </div>
    </div>
  );
}

export default Profile;
