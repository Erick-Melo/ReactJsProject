import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

export default function GenericSmallAlert({ open, text, type, duration }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (open) {
      setProgress(100);
      const interval = setInterval(() => {
        setProgress((prev) => Math.max(prev - 100 / (duration / 100), 0));
      }, 100);
      const timeout = setTimeout(() => {
        setProgress(0);
      }, duration);
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [open, duration]);
  return (
    <div className={`${open ? "flex" : "hidden" } absolute top-5 right-5 rounded-md`}>
      <div
        className={`${
          type == "danger"
            ? "bg-red-500" :
            type == "warning" ?
            "bg-yellow-500"
            : type == "success"
            ? "bg-green-500"
            : "bg-blue-500"
        }  flex-row items-center p-2 rounded-md z-20`}>
        <span className="inline-block whitespace-nowrap align-middle text-lg mt-1 font-semibold text-white">
          {text}
        </span>
        <div
          className="absolute bottom-0 left-0 h-1 bg-white transition-all mb-1"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
