import type {IInputField} from "../../utils";

export const InputField = ({fieldName, fieldType, label, placeholder}: IInputField) => {
  return (
    <div className={'space-y-2'}>
      <label htmlFor={fieldName}
             className={'flex items-center gap-2 text-sm leading-none font-medium'}>
        {label}
      </label>
      <input type={fieldType}
             className={'placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 border px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] h-12 bg-gray-200 border-none rounded-xl'}
             id={fieldName} placeholder={placeholder}
      />
    </div>
  );
}
