import { useState } from "react";

const CallStatusInput = () => {
  const [status, setStatus] = useState("");
  const [remark, setRemark] = useState("");

  return (
    <div className="mb-4 grid gap-4 text-[1.4rem]">
      <label htmlFor="call-status" className="block font-medium text-gray-700">
        Call Status
      </label>
      <select
        id="call-status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-indigo-600 focus:border-indigo-500 focus:ring-indigo-500"
      >
        <option value="">Select</option>
        <option>Call Connected</option>
        <option>Busy</option>
        <option>Wrong Number</option>
        <option>Switch Off</option>
      </select>

      <label
        htmlFor="call-remark"
        className="mt-4 block font-medium text-gray-700"
      >
        Remark
      </label>
      <textarea
        id="call-remark"
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-indigo-600 focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  );
};

export default CallStatusInput;
