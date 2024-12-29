import TrashIcon from "../../assets/trash.svg?react";
import Button from "../universal/Button";
import { useState } from "react";
import Input from "./Input";

const inputFields = [
  { label: "🌐 Industry", key: "industry", type: "text", required: true },
  { label: "📦 Product", key: "product", type: "text", required: true },
  {
    label: "🏢 Company Name",
    key: "companyName",
    type: "text",
    required: true,
  },
  {
    label: "👨‍💼 Contact Person Name",
    key: "contactPersonName",
    type: "text",
    required: true,
  },
  {
    label: "🎓 Designation",
    key: "designation",
    type: "text",
    required: true,
  },
  {
    label: "🔗 LinkedIn URL",
    key: "linkedinUrl",
    type: "url",
    required: true,
  },
  {
    label: "📧 Official Email",
    key: "officialEmail",
    type: "email",
    required: true,
  },
  {
    label: "📧 Alternate Email",
    key: "alternateEmail",
    type: "email",
    required: false,
  },
  {
    label: "📞 Contact No",
    key: "contactNo",
    type: "tel",
    required: true,
  },
  {
    label: "💬 WhatsApp Number",
    key: "whatsappNo",
    type: "tel",
    required: true,
  },
  {
    label: "📞 Alternate Contact No",
    key: "alternateContactNo",
    type: "tel",
    required: false,
  },
];

// eslint-disable-next-line react/prop-types
function CompanyInput({ onAddCompany, closeModel }) {
  const [formData, setFormData] = useState({
    industry: "",
    product: "",
    companyName: "",
    contactPersonName: "",
    designation: "",
    linkedinUrl: "",
    officialEmail: "",
    alternateEmail: "",
    contactNo: "",
    whatsappNo: "",
    alternateContactNo: "",
    additionalContacts: [],
  });

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const addAdditionalContact = () => {
    setFormData((prev) => ({
      ...prev,
      additionalContacts: [...prev.additionalContacts, ""],
    }));
  };

  const handleAdditionalContactChange = (index, value) => {
    const updatedContacts = [...formData.additionalContacts];
    updatedContacts[index] = value;
    setFormData((prev) => ({
      ...prev,
      additionalContacts: updatedContacts,
    }));
  };

  const removeAdditionalContact = (index) => {
    const updatedContacts = formData.additionalContacts.filter(
      (_, i) => i !== index,
    );
    setFormData((prev) => ({
      ...prev,
      additionalContacts: updatedContacts,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      additionalContacts: formData.additionalContacts.map((contact, index) => ({
        [`additionalContactPoint${index + 1}`]: contact,
      })),
    };

    console.log(dataToSend);
    onAddCompany(dataToSend);
    closeModel();
  };

  return (
    <form
      className="flex flex-col gap-4"
      style={{ scrollbarWidth: "thin", overflowX: "hidden" }}
      onSubmit={handleSubmit}
    >
      {inputFields.map(({ label, key, type, required }) => (
        <Input
          label={label}
          key={key}
          keyId={key}
          type={type}
          formData={formData}
          required={required}
          handleInputChange={handleInputChange}
        />
      ))}

      {formData.additionalContacts.map((contact, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div className="flex items-center gap-4">
            <label className="text-[1.3rem] font-medium text-gray-700">
              Additional Contact Point {index + 1}:
            </label>
            <input
              type="text"
              className="flex-1 rounded-xl border border-gray-300 p-2 text-[1.4rem] focus:outline-blue-500"
              value={contact}
              onChange={(e) =>
                handleAdditionalContactChange(index, e.target.value)
              }
            />
            <Button type="" onClick={() => removeAdditionalContact(index)}>
              <TrashIcon className="size-[2.5rem] stroke-red-600" />
            </Button>
          </div>
        </div>
      ))}

      <div className="sticky bottom-0 mt-4 flex gap-4 bg-white bg-opacity-70">
        <Button onClick={addAdditionalContact}>
          + Add Additional Contact Point
        </Button>
        <Button
          behaviour="submit"
          className="rounded-xl bg-green-500 p-2 text-[1.4rem] text-white"
        >
          Submit
        </Button>
        <Button
          className="rounded-xl bg-red-500 p-2 text-[1.4rem] text-white"
          onClick={closeModel}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default CompanyInput;
