// eslint-disable-next-line react/prop-types
function ContactTableData({ className = "", keyId, value }) {
  function isValidURL(value) {
    const urlRegex =
      /\b(?:https?|ftp):\/\/(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^\s]*)?\b/;
    return urlRegex.test(value);
  }

  function isValidEmail(value) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
  }

  return (
    <tr className={className}>
      <td className="px-4 py-2 font-medium text-black opacity-70">{keyId}</td>
      <td className="px-4 py-2 text-gray-900">
        {isValidURL(value) && (
          <a href={value} target="_blank" className="text-blue-600 underline">
            {value}
          </a>
        )}
        {isValidEmail(value) && (
          <a
            href={`mailto:${value}`}
            target="_blank"
            className="text-blue-600 underline"
          >
            {value}
          </a>
        )}
        {!isValidEmail(value) && !isValidURL(value) && value}
      </td>
    </tr>
  );
}

export default ContactTableData;
