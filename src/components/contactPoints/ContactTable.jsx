/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../universal/Button";
import ContactTableHeader from "./ContactTableHeader";
import ContactTableRow from "./ContactTableRow";

function ContactTable({ contacts, handleUpdate }) {
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 20;

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = contacts?.slice(indexOfFirstEntry, indexOfLastEntry);

  const totalPages = Math.ceil(contacts?.length / entriesPerPage);

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
          <ContactTableHeader />
          <tbody>
            {contacts?.length > 0 &&
              currentEntries.map((contact) => (
                <ContactTableRow
                  key={contact.id}
                  contact={contact}
                  handleUpdate={handleUpdate}
                />
              ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 text-gray-400">
          <p>
            Showing {currentEntries.length} of {contacts?.length} entries | Page{" "}
            {currentPage} of {totalPages}
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
}

export default ContactTable;
