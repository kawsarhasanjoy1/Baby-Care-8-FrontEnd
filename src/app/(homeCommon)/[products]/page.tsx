import { TProduct } from "@/Types/Global";
import BrandHeader from "@/component/BrandHeader";
import Filter from "@/component/Filter";
import ProductsCard from "@/component/ProductsCard";

const page = async (props: {
  params: { products: string };
  searchParams: any;
}) => {
  const search = props.searchParams;
 
  const queryUrl = new URLSearchParams(search).toString();
  const res = await fetch(`${process.env.BACKEND_URL}products?${queryUrl}`);
  const data = await res.json();
  return (
    <div>
      <BrandHeader
        category=""
        name="Products"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqM0ejZgV7MwGv0kxaKMTVd7wg2gvAcsZaWw&usqp=CAU"
      />

      <div className=" grid md:grid-cols-12 gap-10 mt-10">
        <div className=" md:col-span-2 sticky top-0">
          <Filter />
        </div>
        <div className=" grid grid-cols-1 md:col-span-10 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
          {/* <div ref={dropDownRef} className="relative mx-auto w-fit text-white">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="rounded-sm bg-sky-600 px-6 py-2"
            >
              Category
            </button>
            <ul
              className={`${
                open ? "visible" : "invisible"
              } absolute top-12 z-50 w-full space-y-1 rounded-sm`}
            >
              {brands.map((item, idx) => (
                <Link
                  href={{
                    pathname: "products",
                    query: { category: item },
                  }}
                  key={idx}
                >
                  <li
                    key={idx}
                    className={`rounded-sm bg-sky-400 p-2 ${
                      open
                        ? "opacity-100 duration-500"
                        : "opacity-0 duration-200"
                    } hover:bg-sky-500`}
                    style={{
                      transform: `translateX(${open ? 0 : (idx + 1) * 20}px)`,
                    }}
                  >
                    {item}
                  </li>
                </Link>
              ))}
            </ul>
          </div> */}

          {data.map((product: TProduct) => (
            <ProductsCard key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
