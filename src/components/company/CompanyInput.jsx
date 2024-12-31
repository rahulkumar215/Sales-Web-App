import { useState } from "react";
import Input from "./Input";
import Button from "../universal/Button";
import TrashIcon from "../../assets/trash.svg?react";

// eslint-disable-next-line react/prop-types
function CompanyInput({ onAddCompany, closeModel, data, onEdit }) {
  console.log(data);

  const [formData, setFormData] = useState(
    data
      ? {
          ...data,
          additionalContacts: data.additionalContacts?.map(
            (contact, index) => contact[`additionalContactPoint${index + 1}`],
          ),
        }
      : {
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
          insideSalesExecutive: "",
          additionalContacts: [],
        },
  );

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
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

    if (data) {
      onEdit(data.id, dataToSend);
    } else {
      onAddCompany(dataToSend);
    }
    closeModel();
  };

  const addAdditionalContact = () => {
    setFormData((prev) => ({
      ...prev,
      additionalContacts: [...prev.additionalContacts, ""],
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

  const handleAdditionalContactChange = (index, value) => {
    const updatedContacts = [...formData.additionalContacts];
    updatedContacts[index] = value;
    setFormData((prev) => ({
      ...prev,
      additionalContacts: updatedContacts,
    }));
  };

  return (
    <form
      className="grid gap-4"
      style={{ scrollbarWidth: "thin", overflowX: "hidden" }}
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="🌐 Industry"
          keyId="industry"
          type="text"
          formData={formData}
          required={true}
          handleInputChange={handleInputChange}
        />
        <Input
          label="📦 Product"
          keyId="product"
          type="text"
          formData={formData}
          required={true}
          handleInputChange={handleInputChange}
        />
      </div>
      <Input
        label="🏢 Company Name"
        keyId="companyName"
        type="text"
        formData={formData}
        required={true}
        handleInputChange={handleInputChange}
      />
      <div className="grid grid-cols-3 gap-4">
        <Input
          label="👨‍💼 Contact Person Name"
          keyId="contactPersonName"
          type="text"
          formData={formData}
          required={true}
          handleInputChange={handleInputChange}
        />
        <Input
          label="🎓 Designation"
          keyId="designation"
          type="text"
          formData={formData}
          required={true}
          handleInputChange={handleInputChange}
        />
        <Input
          label="🔗 LinkedIn URL"
          keyId="linkedinUrl"
          type="url"
          formData={formData}
          required={true}
          handleInputChange={handleInputChange}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="📧 Official Email"
          keyId="officialEmail"
          type="email"
          formData={formData}
          required={true}
          handleInputChange={handleInputChange}
        />
        <Input
          label="📧 Alternate Email"
          keyId="alternateEmail"
          type="email"
          formData={formData}
          required={false}
          handleInputChange={handleInputChange}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Input
          label="📞 Contact No"
          keyId="contactNo"
          type="tel"
          formData={formData}
          required={true}
          handleInputChange={handleInputChange}
        />
        <Input
          label="💬 WhatsApp Number"
          keyId="whatsappNo"
          type="tel"
          formData={formData}
          required={true}
          handleInputChange={handleInputChange}
        />
        <Input
          label="📞 Alternate Contact No"
          keyId="alternateContactNo"
          type="tel"
          formData={formData}
          required={false}
          handleInputChange={handleInputChange}
        />
      </div>
      <Input
        label="👩‍💻 Inside Sales Executive"
        keyId="insideSalesExecutive"
        type="select"
        options={["John Doe", "Jane Smith", "Chris Johnson", "Emma Davis"]}
        formData={formData}
        required={true}
        handleInputChange={handleInputChange}
      />

      <div className="grid grid-cols-2 gap-4">
        {formData.additionalContacts.map((contact, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="grid grid-cols-2 items-center">
              <label className="col-start-1 col-end-1 row-start-1 row-end-2 text-[1.3rem] font-medium text-gray-700">
                Additional Contact Point {index + 1}:
              </label>
              <input
                type="text"
                className="col-start-1 col-end-3 row-start-2 row-end-3 flex-1 rounded-xl border border-gray-300 p-2 text-[1.4rem] focus:outline-blue-500"
                value={contact}
                onChange={(e) =>
                  handleAdditionalContactChange(index, e.target.value)
                }
              />
              <Button
                type=""
                className="justify-self-end"
                onClick={() => removeAdditionalContact(index)}
              >
                <TrashIcon className="size-[2.5rem] stroke-red-600" />
              </Button>
            </div>
          </div>
        ))}
      </div>

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

// const inputFields = [
//   { label: "🌐 Industry", key: "industry", type: "text", required: true },
//   { label: "📦 Product", key: "product", type: "text", required: true },
//   {
//     label: "🏢 Company Name",
//     key: "companyName",
//     type: "text",
//     required: true,
//   },
//   {
//     label: "👨‍💼 Contact Person Name",
//     key: "contactPersonName",
//     type: "text",
//     required: true,
//   },
//   {
//     label: "🎓 Designation",
//     key: "designation",
//     type: "text",
//     required: true,
//   },
//   {
//     label: "🔗 LinkedIn URL",
//     key: "linkedinUrl",
//     type: "url",
//     required: true,
//   },
//   {
//     label: "📧 Official Email",
//     key: "officialEmail",
//     type: "email",
//     required: true,
//   },
//   {
//     label: "📧 Alternate Email",
//     key: "alternateEmail",
//     type: "email",
//     required: false,
//   },
//   {
//     label: "📞 Contact No",
//     key: "contactNo",
//     type: "tel",
//     required: true,
//   },
//   {
//     label: "💬 WhatsApp Number",
//     key: "whatsappNo",
//     type: "tel",
//     required: true,
//   },
//   {
//     label: "📞 Alternate Contact No",
//     key: "alternateContactNo",
//     type: "tel",
//     required: false,
//   },
//   {
//     label: "👩‍💻 Inside Sales Executive",
//     key: "insideSalesExecutive",
//     type: "select",
//     options: ["John Doe", "Jane Smith", "Chris Johnson", "Emma Davis"],
//     required: true,
//   },
// ];

// {inputFields.map(({ label, key, type, required, options }) => (
//   <Input
//     label={label}
//     key={key}
//     keyId={key}
//     type={type}
//     options={options}
//     formData={formData}
//     required={required}
//     handleInputChange={handleInputChange}
//   />
// ))}
