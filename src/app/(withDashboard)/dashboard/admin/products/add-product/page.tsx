/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import AddProduct from "@/component/Dashboard/DashboardDrawer/Admin/AddProduct";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const page = () => {
  const path = usePathname().split("/");
  return (
    <div>
      <div className=" flex justify-between">
        <h1 className=" text-xl font-bold ">Add Product</h1>
        <div className=" flex gap-4">
          <Link
            className=" text-yellow-500 hover:underline hover:duration-500"
            href={`/dashboard/${path[2]}`}
          >
            {path?.[1]}
          </Link>{" "}
          {">"}
          <Link
            className=" text-yellow-500 hover:underline hover:duration-500"
            href={`/dashboard/${path[2]}`}
          >
            {path?.[2]}
          </Link>{" "}
          {">"}
          <Link
            className=" text-yellow-500 hover:underline hover:duration-500"
            href={"/dashboard/admin/products"}
          >
            {path?.[3]}
          </Link>{" "}
          {">"}
          <Link
            className=" text-yellow-500 hover:underline hover:duration-500"
            href={`/dashboard/${path[2]}/${path[3]}/${path[4]}`}
          >
            {path?.[3]}
          </Link>
        </div>
      </div>
      <div>
        <AddProduct />
      </div>
    </div>
  );
};

export default page;
