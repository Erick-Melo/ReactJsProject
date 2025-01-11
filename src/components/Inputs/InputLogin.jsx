export default function InputLogin({ name, type, placeholder}) {
  return (
    <input
      className="w-full bg-transparent border-b-2 border-gray-400 px-2 mb-5 focus-visible:outline-none py-1"
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={name == "password" ? "new-password" : "off"}
    />
  );
}
