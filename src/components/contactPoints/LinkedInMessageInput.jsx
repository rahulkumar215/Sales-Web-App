import { useState } from "react";

const LinkedInMessageInput = () => {
  const [status, setStatus] = useState("");
  const [remark, setRemark] = useState("");

  return (
    <div className="mb-4 grid gap-4 text-[1.4rem]">
      <label
        htmlFor="linkedin-status"
        className="block font-medium text-gray-700"
      >
        LinkedIn Message Status
      </label>
      <select
        id="linkedin-status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-indigo-600 focus:border-indigo-500 focus:ring-indigo-500"
      >
        <option value="">Select</option>
        <option>Cold Message Done</option>
        <option>Introductory Message Done</option>
        <option>Follow-Up on Cold Message Done</option>
        <option>Follow-Up on Introductory Mail Done</option>
        <option>Conversation on LinkedIn</option>
      </select>

      <label
        htmlFor="linkedin-remark"
        className="mt-4 block font-medium text-gray-700"
      >
        Remark
      </label>
      <textarea
        id="linkedin-remark"
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-indigo-600 focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  );
};

export default LinkedInMessageInput;
