function Message({ text, appear = false, style = "" }) {
  const base = `capitalize shadow shadow-black absolute ${
    appear ? "opacity-1 message" : "opacity-1 top-[-50%]"
  }  transition-all duration-700 left-[17%] w-2/3 px-4 py-9 text-center bg-gray-300/30 text-xl`;
  return <div className={base + style}>{text}</div>;
}

export default Message;
