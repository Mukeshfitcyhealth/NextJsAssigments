import { RemixiconComponentType } from "@remixicon/react";

interface TextInputProps {
  IconLeft?: RemixiconComponentType;
  IconRight?: RemixiconComponentType;
  ariaLabel?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  hint?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  label: string;
  placeholder?: string;
  type: "email" | "password" | "text";
}

const classes = {
  error: "font-normal text-red-600",
  hint: "font-normal text-neutral-500",
  icon: "absolute text-neutral-400",
  iconError: "absolute text-red-600",
  iconLeft: "left-3.5 h-5 w-5",
  iconRight: "right-3.5 h-4 w-4",
  input : 'focus:outline-none border-searchBorder-default lg:w-[170px]',
  inputError: "focus:ring-red-200 focus:border-red-600",
  inputFocus: "focus:ring-indigo-200 focus:border-indigo-600",
  inputWrapper: "border-[1.5px]  border-searchBorder-default items-center flex relative bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none  ",
  label: `flex max-w-[100%] w-[300px] flex-col gap-y-1.5 font-medium text-sm text-neutral-700
    lg:max-w-[250px] lg:w-[250px]  xl:max-w-[400px] xl:w-[400px] xs:w-[300px] mx-auto mt-4  lg:m-0`,
};

export default function TextInput({
  IconLeft,
  IconRight,
  onChange,
  ariaLabel,
  error,
  hint,
  isDisabled,
  isRequired,
  label,
  placeholder,
  type,
//   classess,
}: TextInputProps) {
  const inputClasses = `
    
    ${classes.input} 
    ${error ? classes.inputError : classes.inputFocus} 
    ${IconLeft ? "pl-[42px]" : ""} 
    ${IconRight ? "pr-[38px]" : ""}
  `;

  return (
    <label aria-label={ariaLabel} className={classes.label}>
      {label}
      <div className={classes.inputWrapper}>
        {IconLeft && (
          <IconLeft className={`${classes.icon} ${classes.iconLeft}`} />
        )}
        <input
          aria-invalid={!!error}
          aria-required={isRequired}
          className={inputClasses}
          disabled={isDisabled}
          onChange={onChange}
          placeholder={placeholder}
          required={isRequired}
          tabIndex={isDisabled ? -1 : 0}
          type={type}
        />
        {IconRight && (
          <IconRight
            className={`${error ? classes.iconError : classes.icon} ${classes.iconRight}`}
          />
        )}
      </div>
      {!error && hint && <span className={classes.hint}>{hint}</span>}
      {error && <span className={classes.error}>{error}</span>}
    </label>
  );
}
