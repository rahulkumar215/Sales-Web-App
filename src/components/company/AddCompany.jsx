import { useState } from "react";
import FileUpload from "./FileUpload";
import Button from "../universal/Button";
import CompanyInput from "./CompanyInput";

// eslint-disable-next-line react/prop-types
const AddCompany = ({ onClick, onAddCompanies }) => {
  const [companyInputs, setCompanyInputs] = useState([""]);

  const handleAddInput = () => {
    setCompanyInputs([...companyInputs, ""]); // Add a new empty input
  };

  const handleInputChange = (index, value) => {
    const updatedInputs = [...companyInputs];
    updatedInputs[index] = value; // Update the value of the specific input
    setCompanyInputs(updatedInputs);
  };

  const handleFileData = (data) => {
    setCompanyInputs(data);
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", companyInputs);
    alert("Data saved successfully!");
    onAddCompanies(companyInputs);
    onClick();
  };

  const handleCancel = () => {
    setCompanyInputs([""]); // Clear inputs
  };
  const handleDelInput = (index) => {
    setCompanyInputs((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="absolute left-2/4 top-2/4 z-20 grid h-[80vh] w-[80vw] -translate-x-2/4 -translate-y-2/4 grid-cols-1 grid-rows-[max-content_max-content_1fr_max-content] rounded-3xl bg-white p-6">
      <h3 className="mb-6 rounded-2xl bg-gray-200 py-1 text-center text-[2rem] font-semibold">
        Create Company
      </h3>

      {/* File Upload */}
      <FileUpload onFileData={handleFileData} />

      {/* Company Name Inputs */}
      <div
        style={{ scrollbarWidth: "thin", overflowX: "hidden" }}
        className="mt-6 flex flex-col gap-4 overflow-scroll"
      >
        {companyInputs.map((value, index) => (
          <CompanyInput
            key={index}
            value={value}
            handleInputChange={handleInputChange}
            index={index}
            handleDelInput={handleDelInput}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-6 grid grid-cols-[max-content_max-content_max-content] gap-4">
        <Button
          className="rounded bg-green-500 px-6 py-2 text-white hover:bg-green-600"
          onClick={handleAddInput}
        >
          + Add Company
        </Button>
        <Button className="hover:bg-blue-600" onClick={handleSubmit}>
          Submit
        </Button>
        <Button
          type="secondary"
          className="hover:bg-red-600"
          onClick={() => {
            handleCancel();
            onClick();
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default AddCompany;

// import FileUpload from "./FileUpload";

// function AddComapny() {
//   return (
//     <div className="absolute left-2/4 top-2/4 z-20 min-h-[80vh] min-w-[80vw] -translate-x-2/4 -translate-y-2/4 rounded-3xl bg-white p-6">
//       <h3 className="mb-6 rounded-2xl bg-gray-200 py-1 text-center text-[2rem] font-semibold">
//         Create Company
//       </h3>
//       <FileUpload>Import Companies from Excel</FileUpload>
//     </div>
//   );
// }

// export default AddComapny;
