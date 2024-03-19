import { Input } from "@/components/ui/input"
import { TextVerySmall } from "../ui/texts";
import { Label } from "../ui/label";

const InputText = ({ label = '', id = '', helperText = '', className = '', inputClassName = '', ...props }) => {
  return (
    <div className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input id={id} className={`${label ? 'mt-1' : ''} ${inputClassName}`} {...props} />
      {helperText && <TextVerySmall className={'mt-2 mx-3'}>{helperText}</TextVerySmall>}
    </div>
  );
};

export default InputText;