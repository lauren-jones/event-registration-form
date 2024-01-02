import { useState } from "react";
import { validationResult } from "../types/validationResult";

interface InputProps {
  label: string;
  value: string;
  onChange: (valule: string) => void;
  placeholder?: string;
  validationResult: validationResult;
  setValidationResult: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
  validationResult,
  setValidationResult,
}) => {
  const [isDirty, setIsDirty] = useState(false);

  return (
    <div className="flex flex-col gap-[6px]">
      <label className="text-textPrimary text-sm font-medium md:text-base">
        {label}
      </label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          setValidationResult(e.target.value);
          onChange(e.target.value);
        }}
        onBlur={(e) => {
          setIsDirty(true);
          setValidationResult(e.target.value);
        }}
        className={`appearance-none text-textPrimary font-normal text-base border rounded bg-bgPrimary px-[14px] py-[10px] md:text-lg ${
          isDirty && !validationResult.isValid
            ? "border-action"
            : "border-focus"
        } focus:outline-none`}
      />
      {isDirty && !validationResult.isValid && (
        <p className="text-sm font-medium text-action md:text-base">
          {validationResult.validationMessages[0]}
        </p>
      )}
    </div>
  );
};
