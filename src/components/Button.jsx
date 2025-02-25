export const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-400 text-white py-2 px-6 rounded-full hover:bg-red-200 transition hover:text-[#FF5A5F]"
    >
      {label}
    </button>
  );
};

export const BlueButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-400 text-white py-2 px-6 rounded-full hover:bg-blue-200 transition hover:text-[#5abaff]"
    >
      {label}
    </button>
  );
};
