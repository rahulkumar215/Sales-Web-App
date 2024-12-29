import { useState } from "react";
import Button from "../universal/Button";
import AddCompany from "./AddCompany";
import Search from "./Search";
import Overlay from "./Overlay";
import CompanyTable from "./CompanyTable";
import { v4 as uuidv4 } from "uuid";
import EditCompany from "./EditCompany";

function Company() {
  const [showModal, setShowModal] = useState(false);
  const [companies, setCompanies] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [editObj, setEditObj] = useState();

  // Derived state. These are the companies that will actually be displayed
  const searchedCompanies =
    searchQuery.length > 0
      ? companies.filter((comp) =>
          comp.name.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : companies;

  const handleAddCompanies = (data) => {
    const newData = data.map((comp) => ({
      id: uuidv4(),
      name: comp,
    }));
    setCompanies((prev) => [...prev, ...newData]);
  };

  const handleDelComp = (id) => {
    setCompanies((prev) => prev.filter((comp) => comp.id !== id));
  };

  const handleShowEditCompModel = (id, name) => {
    setShowEditModal(true);
    setEditObj({ id, name });
  };

  const handleEditComp = (id, name) => {
    setCompanies((prev) =>
      prev.map((company) =>
        company.id === id ? { ...company, name } : company,
      ),
    );
  };

  return (
    <div className="row-start-1 row-end-3 grid grid-cols-2 grid-rows-[max-content_max-content_1fr] items-center p-8">
      <Button
        className="col-start-1 col-end-3"
        onClick={() => setShowModal(true)}
      >
        Add Company
      </Button>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CompanyTable
        companies={searchedCompanies}
        onDelComp={handleDelComp}
        handleShowEditCompModel={handleShowEditCompModel}
      />

      {showModal && (
        <>
          <Overlay onClick={() => setShowModal(false)} />
          <AddCompany
            onClick={() => setShowModal(false)}
            onAddCompanies={handleAddCompanies}
          />
        </>
      )}

      {showEditModal && (
        <>
          <Overlay onClick={() => setShowEditModal(false)} />
          <EditCompany
            data={editObj}
            onEdit={handleEditComp}
            onClick={() => setShowEditModal(false)}
          />
        </>
      )}
    </div>
  );
}

export default Company;
