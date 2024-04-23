import { useEffect, useRef, useState } from "react";

const DropDown = ({ items, setCategory, category, open, setOpen }: any) => {
  const dropDownRef = useRef(null);

  return (
    <div
      ref={dropDownRef}
      className="relative mx-auto text-white w-full"
    >
      <div
        onClick={() => setOpen((prev: string) => !prev)}
        className="mx-auto flex w-full items-center justify-between  bg-white px-6 py-2 border border-[#1B8EF8]"
      >
        <h1 className="font-medium text-gray-600">{category}</h1>
        <svg
          className={`${open ? "-rotate-180" : "rotate-0"} duration-300`}
          width={25}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M7 10L12 15L17 10"
              stroke="#4B5563"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <ul
        className={`${
          open ? "visible" : "invisible"
        } absolute top-12 z-50 w-full space-y-1 rounded-sm`}
      >
        {items.map((item: any, idx: any) => (
          <li
            onClick={(event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
              const target = event.target as HTMLLIElement;
              const value = target.textContent;
              setCategory(value as string);
              setOpen(false);
            }}
            key={idx}
            className={`rounded-sm bg-[#a2e233] p-2 ${
              open ? "opacity-100 duration-500" : "opacity-0 duration-200"
            } hover:bg-[#aef533]`}
            style={{ transform: `translateX(${open ? 0 : (idx + 1) * 20}px)` }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
