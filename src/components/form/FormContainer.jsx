import { Button } from "../Button";

const FormContainer = ({ titleLabel, children, onSubmit, buttonName }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
      <h1 className="text-2xl font-bold mb-6">{titleLabel}</h1>
      <form
        className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md relative"
        onSubmit={onSubmit}
      >
        {children}
        <div className="flex justify-end">
          <Button label={buttonName} />
        </div>
      </form>
    </div>
  );
};

export default FormContainer;
