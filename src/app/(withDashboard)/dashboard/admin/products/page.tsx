import { TProduct } from "@/Types/Global";
import Table from "@/component/Table";
import React from "react";

const page = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}products`);
  const data = await res.json();

  return (
    <div className=" border w-full mx-auto">
      <table className=" w-full mx-auto shadow-md border border-gray-100 my-6">
        <thead>
          <tr className="bg-[#000000] text-white">
            <th className="py-4 px-6 text-lg text-left border-b">Image</th>
            <th className="py-4 px-6 text-lg text-left border-b">Name</th>
            <th className="py-4 px-6 text-lg text-left border-b">Category</th>
            <th className="py-4 px-6 text-lg text-left border-b">Price</th>
            <th className="py-4 px-6 text-lg border-b text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product: TProduct) => (
            <Table key={product?._id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
