import type React from "react";

function FormInput (Props: {type: string, placeholder: string, value?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void}){
    return (
  <input 
  value={Props.value}
  onChange={Props.onChange} 
  className="bg-gray-700 text-violet-100 placeholder:text-violet-500 border border-violet-500 focus:outline-none focus:ring-2 focus:ring-slate-500 text-lg" type={Props.type} placeholder={Props.placeholder} />
)
}
export default FormInput;