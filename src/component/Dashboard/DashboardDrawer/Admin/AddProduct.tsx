import Button from "@/component/Button";
import DropDown from "@/component/DropDown/DropDown";
import BForm from "@/component/Forms/BForm";
import FileUpload from "@/component/Forms/FileUpload";
import { Input } from "@/component/Forms/Input";
import { foodCategories } from "@/constanc/constant";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";

const AddProduct = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<string>("Select Category");

  const HandleToSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <BForm onSubmit={HandleToSubmit}>
      <div className=" grid grid-cols-2">
        <div className=" space-y-3">
          <div className=" space-y-2">
            <label className=" font-semibold" htmlFor="Product Name">
              Product Name
            </label>
            <Input name="Name" edit="" type="text" />
          </div>
          <div className=" space-y-2">
            <label className=" font-semibold" htmlFor="Category">
              Category
            </label>
            <DropDown
              setCategory={setCategory}
              category={category}
              open={open}
              setOpen={setOpen}
              items={foodCategories}
            />
          </div>
          <div className=" space-y-2">
            <label className=" font-semibold" htmlFor="Price">
              Price
            </label>
            <Input name="Price" edit="" type="number" />
          </div>
          <div className=" space-y-2">
            <label className=" font-semibold" htmlFor="Discount Price">
              Discount Price
            </label>
            <Input name="DiscountPrice" edit="" type="number" />
          </div>
          <div className=" space-y-2">
            <label className=" font-semibold" htmlFor="Discount End Date">
              Discount End Date
            </label>
            <Input name="DiscountEndDate" edit=" " type="date" />
          </div>
        </div>
        <div>
          <FileUpload type="file" name="Image" edit="" />
        </div>
      </div>
      <button
        className={"uppercase font-bold px-10 bg-black text-white py-2 mt-8"}
      >
        Submit
      </button>
    </BForm>
  );
};

export default AddProduct;
