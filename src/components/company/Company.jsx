import { useState } from "react";
import Button from "../universal/Button";
import AddCompany from "./AddCompany";
import Search from "../universal/Search";
import CompanyTable from "./CompanyTable";
import { v4 as uuidv4 } from "uuid";
import Overlay from "../universal/Overlay";

const dummyData = [
  {
    id: 1,
    industry: "Technology",
    product: "Software Solutions",
    companyName: "Tech Innovators Ltd",
    contactPersonName: "John Doe",
    designation: "CEO",
    linkedinUrl: "https://linkedin.com/in/johndoe",
    officialEmail: "john.doe@techinnovators.com",
    alternateEmail: "johndoe.personal@gmail.com",
    contactNo: "+1 555-123-4567",
    whatsappNo: "+1 555-123-4567",
    alternateContactNo: "+1 555-987-6543",
    insideSalesExecutive: "Emily Smith",
    additionalContacts: [
      { additionalContactPoint1: "http://www.williams.com/" },
      { additionalContactPoint2: "http://www.mueller-cole.info/" },
    ],
  },
  {
    id: 2,
    industry: "Healthcare",
    product: "Medical Equipment",
    companyName: "HealthTech Solutions",
    contactPersonName: "Jane Smith",
    designation: "CTO",
    linkedinUrl: "https://linkedin.com/in/janesmith",
    officialEmail: "jane.smith@healthtech.com",
    alternateEmail: "jane.personal@gmail.com",
    contactNo: "+1 555-234-5678",
    whatsappNo: "+1 555-234-5678",
    alternateContactNo: "+1 555-876-5432",
    insideSalesExecutive: "Michael Johnson",
    additionalContacts: [
      { additionalContactPoint1: "http://www.brown.com/" },
      { additionalContactPoint2: "http://www.clark.info/" },
    ],
  },
  {
    id: 3,
    industry: "Retail",
    product: "POS Systems",
    companyName: "Retail Edge Ltd",
    contactPersonName: "Michael Brown",
    designation: "Head of Sales",
    linkedinUrl: "https://linkedin.com/in/michaelbrown",
    officialEmail: "michael.brown@retailedge.com",
    alternateEmail: "michael.brown@gmail.com",
    contactNo: "+1 555-345-6789",
    whatsappNo: "+1 555-345-6789",
    alternateContactNo: "+1 555-765-4321",
    insideSalesExecutive: "Sarah Davis",
    additionalContacts: [
      { additionalContactPoint1: "http://www.white.com/" },
      { additionalContactPoint2: "http://www.green.biz/" },
    ],
  },
  {
    id: 4,
    industry: "Education",
    product: "E-learning Platforms",
    companyName: "EduPro Services",
    contactPersonName: "Lisa Green",
    designation: "Marketing Manager",
    linkedinUrl: "https://linkedin.com/in/lisagreen",
    officialEmail: "lisa.green@edupro.com",
    alternateEmail: "lisa.green@gmail.com",
    contactNo: "+1 555-456-7890",
    whatsappNo: "+1 555-456-7890",
    alternateContactNo: "+1 555-654-3210",
    insideSalesExecutive: "David Wilson",
    additionalContacts: [
      { additionalContactPoint1: "http://www.johnson.org/" },
      { additionalContactPoint2: "http://www.miller.net/" },
    ],
  },
  {
    id: 5,
    industry: "Finance",
    product: "Investment Tools",
    companyName: "FinancePro Inc.",
    contactPersonName: "Tom Wilson",
    designation: "Financial Advisor",
    linkedinUrl: "https://linkedin.com/in/tomwilson",
    officialEmail: "tom.wilson@financepro.com",
    alternateEmail: "tom.wilson@gmail.com",
    contactNo: "+1 555-567-8901",
    whatsappNo: "+1 555-567-8901",
    alternateContactNo: "+1 555-543-2109",
    insideSalesExecutive: "Karen White",
    additionalContacts: [
      { additionalContactPoint1: "http://www.anderson.org/" },
      { additionalContactPoint2: "http://www.harris.net/" },
    ],
  },
];

function Company() {
  const [showModal, setShowModal] = useState(false);
  const [companies, setCompanies] = useState(dummyData);
  const [searchQuery, setSearchQuery] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [editObj, setEditObj] = useState();

  // Derived state. These are the companies that will actually be displayed
  const searchedCompanies =
    searchQuery.length > 0
      ? companies.filter((comp) =>
          Object.values(comp)
            .flatMap((value) =>
              Array.isArray(value)
                ? value.flatMap((item) => Object.values(item))
                : value,
            )
            .join(" ")
            .toLowerCase()
            .includes(searchQuery.toLowerCase()),
        )
      : companies;

  function handleAddCompanies(data) {
    console.log(data);
    const newData = {
      id: uuidv4(),
      ...data,
    };
    console.log(newData);
    setCompanies((prev) => [...prev, newData]);
  }

  const handleDelComp = (id) => {
    setCompanies((prev) => prev.filter((comp) => comp.id !== id));
  };

  const handleShowEditCompModel = (company) => {
    setShowEditModal(true);
    setEditObj(company);
    console.log(company);
  };

  const handleEditComp = (id, data) => {
    setCompanies((prev) =>
      prev.map((company) => (company.id === id ? { id, ...data } : company)),
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
      <Search
        className="mt-4"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <CompanyTable
        companies={searchedCompanies}
        onDelComp={handleDelComp}
        handleShowEditCompModel={handleShowEditCompModel}
      />

      {showModal && (
        <>
          <Overlay onClick={() => setShowModal(false)} />
          <AddCompany
            closeModel={() => setShowModal(false)}
            onAddCompany={handleAddCompanies}
          />
        </>
      )}

      {showEditModal && (
        <>
          <Overlay onClick={() => setShowEditModal(false)} />
          <AddCompany
            data={editObj}
            onEdit={handleEditComp}
            closeModel={() => setShowEditModal(false)}
          />
        </>
      )}
    </div>
  );
}

export default Company;
