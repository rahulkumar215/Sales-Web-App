import CallStatusInput from "./CallStatusInput";
import MailsInput from "./MailsInput";
import LinkedInMessageInput from "./LinkedInMessageInput";
import InterestStatusInput from "./InterestStatusInput";
import ContactTableData from "./ContactTableData";
import Button from "../universal/Button";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function UpdateContactStatus({ contact }) {
  const [contactStatus, setContactStatus] = useState(contact);

  return (
    <div
      style={{ scrollbarWidth: "thin" }}
      className="absolute left-2/4 top-2/4 z-20 grid max-h-[90vh] w-[80vw] min-w-[60rem] max-w-[80vw] -translate-x-2/4 -translate-y-2/4 grid-cols-1 grid-rows-[max-content_1fr_max-content] overflow-scroll overflow-x-hidden bg-white p-6"
    >
      <div className="bg-white p-6">
        <h1 className="mb-4 text-[2.5rem] font-bold text-indigo-600">
          Inside Sales Executive Activity Form
        </h1>

        <div className="mb-4 grid grid-cols-2 gap-6">
          <div>
            <h2 className="mb-4 border-b-[1px] border-b-indigo-600 p-2 text-[2rem] font-semibold">
              Contact Point
            </h2>
            <div className="overflow-x-auto">
              <table className="h-[70vh] max-h-full min-w-full bg-white text-[1.4rem]">
                <tbody>
                  <ContactTableData keyId="Industry" value={contact.industry} />
                  <ContactTableData
                    className="bg-gray-50"
                    keyId="Product"
                    value={contact.product}
                  />
                  <ContactTableData
                    keyId="Company Name"
                    value={contact.companyName}
                  />
                  <ContactTableData
                    className="bg-gray-50"
                    keyId="Contact Person"
                    value={contact.contactPersonName}
                  />
                  <ContactTableData
                    keyId="Designation"
                    value={contact.designation}
                  />
                  <ContactTableData
                    className="bg-gray-50"
                    keyId="Official Email"
                    value={contact.officialEmail}
                  />
                  <ContactTableData
                    keyId="Alternate Email"
                    value={contact.alternateEmail}
                  />
                  <ContactTableData
                    className="bg-gray-50"
                    keyId="Contact No"
                    value={contact.contactNo}
                  />
                  <ContactTableData
                    keyId="WhatsApp No"
                    value={contact.whatsappNo}
                  />
                  <ContactTableData
                    className="bg-gray-50"
                    keyId="Alternate Contact No"
                    value={contact.alternateContactNo}
                  />
                  {contact.additionalContacts.map((item, i) => {
                    return (
                      <ContactTableData
                        key={i}
                        className={i % 2 === 0 ? "" : "bg-gray-50"}
                        keyId={`Additional Contact Point ${i + 1}`}
                        value={item[`additionalContactPoint${i + 1}`]}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="mb-4 border-b-[1px] border-b-indigo-600 p-2 text-[2rem] font-semibold">
              Activity Form
            </h2>

            <div className="grid p-4">
              <div className="mb-4 grid w-1/2 grid-cols-2 gap-4 text-[1.4rem]">
                <div className="">
                  <label
                    htmlFor="activity-date"
                    className="block font-medium text-gray-700"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="activity-date"
                    className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-indigo-500 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="activity-time"
                    className="block font-medium text-gray-700"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    id="activity-time"
                    className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-indigo-500 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <CallStatusInput />
              <InterestStatusInput />
              <MailsInput />
              <LinkedInMessageInput />

              <div className="sticky bottom-0 mt-6 grid grid-cols-[max-content_max-content] gap-4 justify-self-end">
                <Button className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                  Submit
                </Button>
                <Button type="gray">Cancel</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateContactStatus;

// {Object.entries(contact).map(([key, value], i) => {
//     if (Array.isArray(value)) {
//       return value.map((item, j) =>
//         Object.entries(item).map(([key, value], k) => {
//           return (
//             <ContactTableData
//               key={`${i}-${k}`}
//               keyId={key}
//               value={value}
//             />
//           );
//         }),
//       );
//     } else {
//       return (
//         <ContactTableData key={i} keyId={key} value={value} />
//       );
//     }
//   })}
