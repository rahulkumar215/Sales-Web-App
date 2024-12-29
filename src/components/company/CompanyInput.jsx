import TrashIcon from "../../assets/trash.svg?react";
import Button from "../universal/Button";

// eslint-disable-next-line react/prop-types
function CompanyInput({ value, handleInputChange, index, handleDelInput }) {
  return (
    <div className="flex items-center gap-4">
      <label className="text-[1.3rem] font-medium text-gray-700">
        Company Name :
      </label>
      <input
        type="text"
        className="flex-1 rounded-xl border border-gray-300 p-2 text-[1.4rem] focus:outline-blue-500"
        value={value}
        onChange={(e) => handleInputChange(index, e.target.value)}
      />
      <Button type="" onClick={() => handleDelInput(index)}>
        <TrashIcon className="size-[2.5rem] stroke-red-600" />
      </Button>
    </div>
  );
}

export default CompanyInput;
