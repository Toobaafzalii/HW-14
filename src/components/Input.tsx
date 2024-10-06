import React, { useState } from "react";
import validateInput from "../utils/validator";

const Input: React.FC<Iprops> = (props) => {
  const [error, setError] = useState("");
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const errorText = validateInput(e.target.value, props.validation);
    setError(errorText);
    props.onValueChange(e);
  };

  return (
    <div className="py-5 h-28">
      <label
        htmlFor={`${props.label}`}
        className="block text-lg font-bold leading-6 text-gray-900"
      >
        {`${props.label}`}
      </label>
      <div className="relative mt-2 rounded-md shadow-md">
        <input
          name={`${props.name}`}
          type={`${props.type}`}
          placeholder={`${props.placeHolder}`}
          aria-invalid="true"
          aria-describedby={`${props.name}-error`}
          onChange={onValueChange}
          className={`block w-full rounded-m border-2 border-solid py-2 pl-2 pr-10 text-gray-900 ring-1 ring-inset placeholder:text-gray-600 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
            error
              ? "focus:outline-red-500 focus:border-red-500"
              : " border-blue-400"
          }`}
        />
      </div>

      {error && (
        <p
          id={`${props.name}-error`}
          className="mt-2 text-md font-semibold text-red-700"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
