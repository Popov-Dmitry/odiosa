import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full px-5 min-h-[calc(100vh_-_80px_-_591px_-_60px)] lg:min-h-[calc(100vh_-_96px_-_158px_-_120px)]">
      <div className="w-20 h-20 lg:w-28 lg:h-28 border-4 border-t-black rounded-full animate-spin" />
    </div>
  );
};

export default Spinner;