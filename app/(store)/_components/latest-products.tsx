import LatestProductCard from "@/components/card/latest-product";

const LatestProducts = () => {
  return (
    <div>
          <h2 className="font-Rale text-4xl mb-8">Latest Products</h2>
          <div className="my-12 flex justify-between items-center flex-wrap">
              <LatestProductCard />
              <LatestProductCard />
              <LatestProductCard />
          </div>
    </div>
  );
};

export default LatestProducts;
