import React from "react";
import Image from "next/image";

const Checkbox = ({ checked = false, onChange, children }) => {
  return (
    <div
      className="flex items-start cursor-pointer text-[13px] font-sans group"
      onClick={() => onChange && onChange(!checked)}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
        className="absolute w-[1px] h-[1px] p-0 overflow-hidden whitespace-nowrap border-none"
      />
      <span className="relative inline-flex items-center justify-center">
        <svg
          width="32"
          height="32"
          fill={checked ? "#474747" : "none"}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:hidden"
        >
          <path
            d="M2.2547 9.03808C2.2547 2.59984 2.61551 21.756 2.61551 28.1764C2.61551 30.3114 11.7886 29.6059 13.1876 29.6059C14.1439 29.6059 16.3753 27.9812 17.0886 28.7379C17.9745 29.6777 18.4973 29.6252 19.8148 29.7074C20.1336 29.7273 22.0225 30.3562 22.2603 30.558C22.9198 31.1177 24.1895 30.8557 25.0466 30.8557C26.3886 30.8557 30.2784 31.6001 30.2784 29.7074C30.2784 25.3776 30.4856 21.0136 30.6392 16.7784C30.7452 13.8533 31 10.7523 31 7.88978C31 6.80528 31 5.72078 31 4.63627C31 3.07648 30.5401 3.29659 29.1959 3.29659C26.8604 3.29659 24.3412 3.38173 22.1801 2.33968C21.2821 1.90665 20.6553 1.76553 19.6344 1.76553C18.4221 1.76553 17.4334 1 16.2067 1C11.7566 1 7.30659 1.73171 2.85656 1.73171C-0.311948 1.73171 1.32283 2.32447 2.31534 4.21968C2.82897 5.20046 2.2547 9.29877 2.2547 9.03808Z"
            stroke="#474747"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <svg
          width="45"
          height="43"
          viewBox="0 0 45 43"
          fill={checked ? "#474747" : "none"}
          xmlns="http://www.w3.org/2000/svg"
          className="hidden lg:block"
        >
          <path
            d="M8.31556 38.141C8.31556 29.3665 7.7984 20.7843 7.7984 11.9854C7.7984 11.3417 3.62152 5.74063 2.88532 4.40023C1.46273 1.81011 -0.880459 1 3.66107 1H22.7962C24.5545 1 25.9716 2.04623 27.7093 2.04623C29.1726 2.04623 30.071 2.23909 31.3582 2.8309C34.4557 4.25504 38.0666 4.13868 41.4142 4.13868C43.3408 4.13868 44 3.83785 44 5.96957V10.416C44 14.3282 43.6348 18.5662 43.4828 22.5639C43.2627 28.3519 42.9657 34.3161 42.9657 40.2335C42.9657 42.8201 37.3904 41.8028 35.4668 41.8028C34.2383 41.8028 32.4184 42.1609 31.4731 41.3959C31.1322 41.1201 28.4248 40.2607 27.9679 40.2335C26.0794 40.1211 25.3302 39.1929 24.0604 37.9085C23.038 36.8743 21.8397 37.0948 20.469 37.0948C18.4636 37.0948 8.31556 41.0589 8.31556 38.141Z"
            stroke="#474747"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        {checked && (
          <>
            <Image src="/checkmark.svg" alt="" width={20} height={20} className="absolute lg:hidden" />
            <Image src="/checkmark.svg" alt="" width={26} height={26} className="absolute left-3 hidden lg:block" />
          </>
        )}
      </span>
      <span className="ml-7 w-full">{children}</span>
    </div>
  );
};

export default Checkbox;