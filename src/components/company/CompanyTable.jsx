/* eslint-disable react/prop-types */
// CompanyTable.js
import { useState } from "react";
import CompanyTableHeader from "./CompanyTableHeader";
import CompanyTableRow from "./CompanyTableRow";
import Button from "../universal/Button";

// eslint-disable-next-line react/prop-types
const CompanyTable = ({ companies, onDelComp, handleShowEditCompModel }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 20;

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = companies?.slice(indexOfFirstEntry, indexOfLastEntry);

  const totalPages = Math.ceil(companies?.length / entriesPerPage);

  const handleEdit = (company) => {
    handleShowEditCompModel(company);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this company?",
    );
    if (confirmDelete) {
      onDelComp(id);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="col-start-1 col-end-3 mt-4 self-start text-[1.4rem]">
      <div
        style={{ scrollbarWidth: "thin" }}
        className="max-h-[75vh] overflow-scroll"
      >
        <table className="min-w-full rounded-xl bg-white text-[1.3rem]">
          <CompanyTableHeader />
          <tbody>
            {companies?.length > 0 &&
              currentEntries.map((company) => (
                <CompanyTableRow
                  key={company.id}
                  company={company}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 text-gray-400">
          <p>
            Showing {currentEntries.length} of {companies?.length} entries |
            Page {currentPage} of {totalPages}
          </p>
        </div>
        <div className="flex space-x-2">
          <Button
            onClick={handlePrevious}
            type="gray"
            disabled={currentPage === 1}
          >
            Prev
          </Button>
          <Button
            onClick={handleNext}
            type="lightgray"
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyTable;
