import type {IInputField} from "../../utils";

export const InputField = ({fieldName, fieldType, label, placeholder, value, onChange, error}: IInputField) => {
  return (
    <div className={'space-y-2'}>
      <label htmlFor={fieldName}
             className={'flex items-center gap-2 text-sm leading-none font-medium'}>
        {label}
      </label>
      <input type={fieldType}
             className={`h-12 px-3 py-1 bg-gray-200 rounded-xl placeholder:text-muted-foreground flex w-full text-base md:text-sm ${error ? 'border-2 border-destructive' : 'border-none'}`}
             id={fieldName}
             placeholder={placeholder}
             value={value}
             onChange={onChange}
      />
      <span className={'text-gray-500 text-sm'}>{error}</span>
    </div>
  );
}
