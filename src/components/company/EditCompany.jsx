import { useState } from "react";
import Button from "../universal/Button";

function EditCompany({ data, onEdit, onClick }) {
  const [companyName, setCompanyName] = useState(data.name);

  const handleCancel = () => {
    setCompanyName("");
    onClick();
  };

  const handleSubmit = () => {
    onEdit(data.id, companyName);
    onClick();
  };

  return (
    <div className="absolute left-2/4 top-2/4 z-20 mx-auto size-[35rem] -translate-x-2/4 -translate-y-2/4 rounded-md bg-white p-4 text-[1.4rem] shadow-md">
      <h2 className="mb-4 text-[1.6rem] font-semibold">Edit Company</h2>
      <div className="mb-4">
        <label htmlFor="companyName" className="mb-2 block text-gray-700">
          Company Name
        </label>
        <input
          id="companyName"
          type="text"
          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button
          className="bg-gray-500 hover:bg-gray-600"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
}

export default EditCompany;
