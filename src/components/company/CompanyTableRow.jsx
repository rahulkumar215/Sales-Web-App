// CompanyTableRow.js
import Button from "../universal/Button";
import EditIcon from "../../assets/edit.svg?react";
import TrashIcon from "../../assets/trash.svg?react";

// eslint-disable-next-line react/prop-types
const CompanyTableRow = ({ company, handleEdit, handleDelete }) => (
  <tr key={company.id} className="border-t">
    <td className="px-4 py-2">{company.industry}</td>
    <td className="px-4 py-2">{company.product}</td>
    <td className="px-4 py-2">{company.companyName}</td>
    <td className="px-4 py-2">{company.contactPersonName}</td>
    <td className="px-4 py-2">{company.designation}</td>
    <td className="px-4 py-2">{company.officialEmail}</td>
    <td className="px-4 py-2">{company.alternateEmail}</td>
    <td className="px-4 py-2">{company.contactNo}</td>
    <td className="px-4 py-2">{company.whatsappNo}</td>
    <td className="px-4 py-2">{company.alternateContactNo}</td>
    <td className="px-4 py-2">
      {company.additionalContacts?.length > 0 ? (
        <ul>
          {company.additionalContacts.map((contact, index) => (
            <li key={index}>{contact[`additionalContactPoint${index + 1}`]}</li>
          ))}
        </ul>
      ) : (
        "No Additional Contacts"
      )}
    </td>
    <td className="px-4 py-2">
      <Button type="" className="p-0" onClick={() => handleEdit(company)}>
        <EditIcon className="size-[2rem] fill-blue-600" />
      </Button>
      <Button type="" className="p-0" onClick={() => handleDelete(company.id)}>
        <TrashIcon className="size-[2rem] stroke-red-600" />
      </Button>
    </td>
  </tr>
);

export default CompanyTableRow;
