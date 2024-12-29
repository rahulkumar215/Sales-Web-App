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

// import { useState } from "react";
// import Button from "../universal/Button";
// import EditIcon from "../../assets/edit.svg?react";
// import TrashIcon from "../../assets/trash.svg?react";

// // eslint-disable-next-line react/prop-types
// const CompanyTable = ({ companies, onDelComp, handleShowEditCompModel }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const entriesPerPage = 18;

//   const indexOfLastEntry = currentPage * entriesPerPage;
//   const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
//   const currentEntries = companies?.slice(indexOfFirstEntry, indexOfLastEntry);

//   const totalPages = Math.ceil(companies?.length / entriesPerPage);

//   const handleEdit = (id, name) => {
//     handleShowEditCompModel(id, name);
//   };

//   const handleDelete = (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this company?",
//     );
//     if (confirmDelete) {
//       onDelComp(id);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="col-start-1 col-end-3 mt-4 self-start text-[1.4rem]">
//       <table className="min-w-full rounded-xl border border-gray-300 bg-white shadow">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="px-4 py-2 text-left text-gray-600">Company Name</th>
//             <th className="px-4 py-2 text-left text-gray-600">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {companies?.length > 0 &&
//             currentEntries.map((company) => (
//               <tr key={company.id} className="border-t">
//                 <td className="px-4 py-2">{company.name}</td>
//                 <td className="px-4 py-2">
//                   <Button
//                     type=""
//                     className="p-0"
//                     onClick={() => handleEdit(company.id, company.name)}
//                   >
//                     <EditIcon className="size-[2rem] fill-blue-600" />
//                   </Button>
//                   <Button
//                     type=""
//                     className="p-0"
//                     onClick={() => handleDelete(company.id)}
//                   >
//                     <TrashIcon className="size-[2rem] stroke-red-600" />
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//       <div className="mt-4 flex items-center justify-between">
//         <div className="flex items-center space-x-4 text-gray-400">
//           <p>
//             Showing {currentEntries.length} of {companies?.length} entries |
//             Page {currentPage} of {totalPages}
//           </p>
//         </div>
//         <div className="flex space-x-2">
//           <Button
//             onClick={handlePrevious}
//             type="gray"
//             disabled={currentPage === 1}
//           >
//             Prev
//           </Button>
//           <Button
//             onClick={handleNext}
//             type="lightgray"
//             disabled={currentPage === totalPages || totalPages === 0}
//           >
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompanyTable;
