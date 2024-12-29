import { useState } from "react";
import * as XLSX from "xlsx";
import Button from "../universal/Button";

// eslint-disable-next-line react/prop-types
const FileInput = ({ children, onFileData }) => {
  const [fileName, setFileName] = useState("No file chosen");
  const [error, setError] = useState("");

  const handleDownload = () => {
    // Sample data
    const sampleData = [
      ["Company Name"], // Header row
      ["Company A"], // Row 1
      ["Company B"], // Row 2
      ["Company C"], // Row 3
    ];

    // Create a worksheet and workbook
    const worksheet = XLSX.utils.aoa_to_sheet(sampleData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sample Data");

    // Write the workbook and trigger download
    XLSX.writeFile(workbook, "company_sample_data.xlsx");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setFileName("No file chosen");
      setError("");
      return;
    }

    const validMimeTypes = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
    ];

    if (!validMimeTypes.includes(file.type)) {
      setFileName("Invalid file type");
      setError("Please upload a valid Excel file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // Check if the uploaded file has only one column
      if (jsonData.some((row) => row.length > 1)) {
        setError("The uploaded Excel file must contain only one column.");
        setFileName(file.name);
      } else {
        const companyNames = jsonData.slice(1).map((row) => row[0]); // Skip the header
        if (companyNames.some((name) => typeof name !== "string")) {
          setError("Invalid data format in file.");
        } else {
          onFileData(companyNames); // Pass the data back to the parent component
          setFileName(file.name);
          setError("");
        }
      }
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="h-fit">
      <h4 className="mb-4 text-[1.6rem] text-black">{children}</h4>
      <div className="flex w-fit flex-col gap-2 rounded border border-black border-opacity-50 p-4">
        <div className="flex items-center gap-4">
          <label className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-[1.3rem] text-white hover:bg-blue-600">
            Choose File
            <input
              type="file"
              className="hidden"
              accept=".xls,.xlsx"
              onChange={handleFileChange}
            />
          </label>
          <span className="text-[1.3rem] text-gray-600">{fileName}</span>
          <Button
            className="!bg-green-700 hover:!bg-green-800"
            onClick={handleDownload}
          >
            Download Sample Data
          </Button>
        </div>
        {error && <p className="text-[1.3rem] text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default FileInput;
