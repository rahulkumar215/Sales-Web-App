// eslint-disable-next-line react/prop-types

function Input({
  label,
  type,
  formData,
  keyId,
  handleInputChange,
  required,
  options,
  className,
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className="flex flex-col gap-4">
        <label className="text-[1.3rem] font-medium text-gray-700">
          {required && <span className="text-red-600">* </span>}
          {label}
        </label>
        {type === "select" ? (
          <select
            className="flex-1 rounded-xl border border-gray-300 bg-white p-2 text-[1.4rem] text-gray-700 focus:border-blue-500 focus:outline-none"
            value={formData[keyId] || ""}
            required={required}
            onChange={(e) => handleInputChange(keyId, e.target.value)}
          >
            <option value="" disabled>
              Select an option
            </option>
            {options.map((option, idx) => (
              <option
                key={idx}
                value={option}
                className="bg-white text-gray-700 hover:bg-blue-100"
              >
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            className="flex-1 rounded-xl border border-gray-300 p-2 text-[1.4rem] focus:outline-blue-500"
            value={formData[keyId]}
            required={required}
            onChange={(e) => handleInputChange(keyId, e.target.value)}
          />
        )}
      </div>
    </div>
  );
}

export default Input;

// function Input({ label, type, formData, keyId, handleInputChange, required }) {
//   return (
//     <div className="flex flex-col gap-1">
//       <div className="flex flex-col gap-4">
//         <label className="text-[1.3rem] font-medium text-gray-700">
//           {required && <span className="text-red-600">* </span>}
//           {label}
//         </label>
//         <input
//           type={type}
//           className="flex-1 rounded-xl border border-gray-300 p-2 text-[1.4rem] focus:outline-blue-500"
//           value={formData[keyId]}
//           required={required}
//           onChange={(e) => handleInputChange(keyId, e.target.value)}
//         />
//       </div>
//     </div>
//   );
// }
