export default function InputField({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder = "",
    required = false,
    maxLength,
    inputMode,
}) {
 return (
    <div className="flex flex-col gap-1.5">
        <label
        htmlFor={name}
        className="text-sm font-semibold text-slate-700"
        >
        {label}
        </label>
 <input
    id={name}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    maxLength={maxLength}
    inputMode={inputMode}
    className="rounded-lg border border-slate-300 bg-white px-3 py-2.5
    text-slate-900 outline-none transition
    placeholder:text-slate-400
    focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
 />
 </div>
 );
}