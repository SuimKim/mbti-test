const FormInput = ({ inputType, placeholder, onChange, name, value }) => {
  return (
    <input
      type={inputType}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      className="w-full p-4 border border-gray-300 rounded-lg"
    />
  );
};

export default FormInput;
