function Button({ children, style = "", action, disabled = false }) {
  const base =
    ` focus:outline-none focus:shodow focus:shadow-gray-800 px-3 py-1 shadow-lg ${
      disabled
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700"
    } capitalize rounded-lg text-white text-sm sm:text-lg` + style;
  return (
    <button onClick={action} className={base} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
