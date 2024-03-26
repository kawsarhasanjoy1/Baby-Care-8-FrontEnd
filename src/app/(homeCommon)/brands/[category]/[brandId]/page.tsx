import { TProduct } from "@/Types/Global";
import BrandHeader from "@/component/BrandHeader";
import DetailsCard from "@/component/DetailsCard";
import React from "react";

const BrandDetails = async ({
  params,
}: {
  params: { category: string; brandId: string };
}) => {

  const res = await fetch(`${process.env.BACKEND_URL}product/${params.brandId}`);
  const data = await res.json();
  

  return (
    <div>
      <BrandHeader name="Brads" category={params.category} image={data.image} />
      <div className=" my-20">
        {data.map((product: TProduct) => (
          <DetailsCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
