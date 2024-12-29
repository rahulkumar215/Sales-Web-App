/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../universal/Button";
import TrashIcon from "../../assets/trash.svg?react";
import Input from "./Input";

// Define the input fields for the company form
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

function EditCompany({ data, onEdit, onClick }) {
  const [formData, setFormData] = useState({
    ...data,
    additionalContacts: data.additionalContacts.map(
      (contact, index) => contact[`additionalContactPoint${index + 1}`],
    ),
  });

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

    onEdit(data.id, dataToSend);
    onClick();
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

  const handleCancel = () => {
    onClick();
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
    <div className="absolute left-2/4 top-2/4 z-20 grid max-h-[80vh] min-w-[40vw] max-w-[80vw] -translate-x-2/4 -translate-y-2/4 grid-cols-1 grid-rows-[max-content_1fr_max-content] rounded-3xl bg-white p-6">
      <h2 className="mb-4 text-[1.6rem] font-semibold">Edit Company</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        style={{ scrollbarWidth: "thin", overflowX: "hidden" }}
      >
        {inputFields.map(({ label, key, type, required }) => (
          <Input
            key={key}
            label={label}
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
            className="bg-green-500 text-white hover:bg-green-600"
          >
            Submit
          </Button>
          <Button
            className="bg-gray-500 hover:bg-gray-600"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditCompany;

// import { useState } from "react";
// import Button from "../universal/Button";

// function EditCompany({ data, onEdit, onClick }) {
//   const [companyName, setCompanyName] = useState(data.name);

//   const handleCancel = () => {
//     setCompanyName("");
//     onClick();
//   };

//   const handleSubmit = () => {
//     onEdit(data.id, companyName);
//     onClick();
//   };

//   return (
//     <div className="absolute left-2/4 top-2/4 z-20 mx-auto size-[35rem] -translate-x-2/4 -translate-y-2/4 rounded-md bg-white p-4 text-[1.4rem] shadow-md">
//       <h2 className="mb-4 text-[1.6rem] font-semibold">Edit Company</h2>
//       <div className="mb-4">
//         <label htmlFor="companyName" className="mb-2 block text-gray-700">
//           Company Name
//         </label>
//         <input
//           id="companyName"
//           type="text"
//           className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={companyName}
//           onChange={(e) => setCompanyName(e.target.value)}
//         />
//       </div>
//       <div className="flex justify-end space-x-2">
//         <Button
//           className="bg-gray-500 hover:bg-gray-600"
//           onClick={handleCancel}
//         >
//           Cancel
//         </Button>
//         <Button onClick={handleSubmit}>Submit</Button>
//       </div>
//     </div>
//   );
// }

// export default EditCompany;
