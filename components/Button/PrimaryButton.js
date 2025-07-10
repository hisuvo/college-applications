export default function PrimaryButton({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
