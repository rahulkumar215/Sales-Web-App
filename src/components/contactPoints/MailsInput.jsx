import { useState } from "react";

const MailsInput = () => {
  const [status, setStatus] = useState("");
  const [remark, setRemark] = useState("");

  return (
    <div className="mb-4 grid gap-4 text-[1.4rem]">
      <label htmlFor="mail-status" className="block font-medium text-gray-700">
        Mail Status
      </label>
      <select
        id="mail-status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-indigo-600 focus:border-indigo-500 focus:ring-indigo-500"
      >
        <option value="">Select</option>
        <option>Cold Mail Done</option>
        <option>Introductory Mail Done</option>
        <option>Follow-Up on Cold Mail Done</option>
        <option>Follow-Up on Introductory Mail Done</option>
      </select>

      <label
        htmlFor="mail-remark"
        className="mt-4 block font-medium text-gray-700"
      >
        Remark
      </label>
      <textarea
        id="mail-remark"
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-indigo-600 focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  );
};

export default MailsInput;
