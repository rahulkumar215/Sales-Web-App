import { useState } from "react";

const InterestStatusInput = () => {
  const [status, setStatus] = useState("");
  const [followUpDate, setFollowUpDate] = useState("");
  const [followUpTime, setFollowUpTime] = useState("");
  const [remark, setRemark] = useState("");

  return (
    <div className="mb-4 grid gap-4 text-[1.4rem]">
      <label
        htmlFor="interest-status"
        className="block font-medium text-gray-700"
      >
        Interest Status
      </label>
      <select
        id="interest-status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-indigo-600 focus:border-indigo-500 focus:ring-indigo-500"
      >
        <option value="">Select</option>
        <option>Interested</option>
        <option>Not Interested</option>
        <option>Call Later</option>
        <option>Follow-Up Option</option>
      </select>

      {status === "Follow-Up Option" && (
        <div className="mb-4 mt-4 grid w-1/2 grid-cols-2 items-center gap-4 text-[1.4rem]">
          <div>
            <label
              htmlFor="follow-up-date"
              className="block font-medium text-gray-700"
            >
              Follow-Up Date
            </label>
            <input
              type="date"
              id="follow-up-date"
              value={followUpDate}
              onChange={(e) => setFollowUpDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-indigo-600 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="follow-up-time"
              className="block font-medium text-gray-700"
            >
              Follow-Up Time
            </label>
            <input
              type="time"
              id="follow-up-time"
              value={followUpTime}
              onChange={(e) => setFollowUpTime(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-indigo-600 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
      )}

      <label
        htmlFor="interest-remark"
        className="mt-4 block font-medium text-gray-700"
      >
        Remark
      </label>
      <textarea
        id="interest-remark"
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-indigo-600 focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  );
};

export default InterestStatusInput;
