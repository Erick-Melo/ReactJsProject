export default function InputInternal({
  name,
  type,
  placeholder,
  autoComplete,
}) {
  return (
    <input
      className="w-full bg-transparent border border-gray-400 p-2 focus-visible:outline-none rounded-md min-w-[300px]"
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
    />
  );
}
