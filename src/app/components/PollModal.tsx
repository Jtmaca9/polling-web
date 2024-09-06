import Poll from "@/models/Poll";

type PollModalProps = {
  poll: Poll;
  onClose: () => void;
  onGoToPoll: () => void;
};

function PollModal({ poll, onClose, onGoToPoll }: PollModalProps) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-md shadow-2xl max-w-lg w-full m-4 relative">
        <div className="px-7 py-5">
          <button
            className="absolute top-5 right-4 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="text-2xl font-extrabold mb-6 text-gray-900">
            {poll.title}
          </h2>
          <p className="mb-4 text-gray-700">
            <strong>Description:</strong> {poll.description}
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Location:</strong> {poll.location}
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Author:</strong> {poll.author}
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Date:</strong> {poll.date}
          </p>
          <p className="mb-6 text-gray-700">
            <strong>Status:</strong>{" "}
            <span
              className={`px-3 py-1 rounded-full text-white font-bold ${
                poll.status === "Open" ? "bg-green-400" : "bg-red-400"
              }`}
            >
              {poll.status}
            </span>
          </p>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white w-full mb-[-2px] py-4 rounded-b-md font-bold text-lg transition-colors duration-200"
          onClick={onGoToPoll}
        >
          Go to Poll
        </button>
      </div>
    </div>
  );
}

export default PollModal;
