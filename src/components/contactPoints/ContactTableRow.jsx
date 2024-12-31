/* eslint-disable react/prop-types */
import Button from "../universal/Button";
import EditIcon from "../../assets/edit.svg?react";

const ContactTableRow = ({ contact, handleUpdate }) => (
  <tr key={contact.id} className="border-t">
    <td className="px-4 py-2">{contact.industry}</td>
    <td className="px-4 py-2">{contact.product}</td>
    <td className="px-4 py-2">{contact.companyName}</td>
    <td className="px-4 py-2">{contact.contactPersonName}</td>
    <td className="px-4 py-2">{contact.designation}</td>
    <td className="px-4 py-2">{contact.officialEmail}</td>
    <td className="px-4 py-2">{contact.alternateEmail}</td>
    <td className="px-4 py-2">{contact.contactNo}</td>
    <td className="px-4 py-2">{contact.whatsappNo}</td>
    <td className="px-4 py-2">{contact.alternateContactNo}</td>
    <td className="px-4 py-2">
      {contact.additionalContacts?.length > 0 ? (
        <ul>
          {contact.additionalContacts.map((contact, index) => (
            <li key={index}>{contact[`additionalContactPoint${index + 1}`]}</li>
          ))}
        </ul>
      ) : (
        "No Additional Contacts"
      )}
    </td>
    <td className="px-4 py-2">{contact.insideSalesExecutive}</td>
    <td className="px-4 py-2">{contact.callStatus || ""}</td>
    <td className="px-4 py-2">{contact.callRemarks || ""}</td>
    <td className="px-4 py-2">{contact.interestStatus || ""}</td>
    <td className="px-4 py-2">{contact.interestRemarks || ""}</td>
    <td className="px-4 py-2">{contact.mailStatus || ""}</td>
    <td className="px-4 py-2">{contact.mailRemarks || ""}</td>
    <td className="px-4 py-2">{contact.linkedInStatus || ""}</td>
    <td className="px-4 py-2">{contact.linkedInRemarks || ""}</td>
    <td className="px-4 py-2">
      <Button type="" className="p-0" onClick={() => handleUpdate(contact)}>
        <EditIcon className="size-[2rem] fill-blue-600" />
      </Button>
    </td>
  </tr>
);

export default ContactTableRow;
