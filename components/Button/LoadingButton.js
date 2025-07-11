export default function LoadingButton({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
