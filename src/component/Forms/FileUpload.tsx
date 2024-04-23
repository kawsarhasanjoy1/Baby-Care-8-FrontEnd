import { TInput } from "@/Types/Global";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FaUpload } from "react-icons/fa";

const FileUpload = ({ name, type, edit }: TInput) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="border-2 border-dotted w-[300px] h-[300px] ">
          <FaUpload {...field} />
          <input className=" border w-10 " type={type} />
        </div>
      )}
    />
  );
};

export default FileUpload;
