import CompanyInput from "./CompanyInput";

// eslint-disable-next-line react/prop-types
const AddCompany = ({ closeModel, onAddCompany, data, onEdit }) => {
  return (
    <div className="absolute left-2/4 top-2/4 z-20 grid max-h-[80vh] w-[80vw] min-w-[60rem] max-w-[80vw] -translate-x-2/4 -translate-y-2/4 grid-cols-1 grid-rows-[max-content_1fr_max-content] rounded-3xl bg-white p-6">
      <h3 className="mb-6 rounded-2xl bg-gray-200 py-1 text-center text-[2rem] font-semibold">
        Create Company
      </h3>

      {/* Company Inputs */}
      <CompanyInput
        onAddCompany={onAddCompany}
        closeModel={closeModel}
        data={data}
        onEdit={onEdit}
      />
    </div>
  );
};

export default AddCompany;
