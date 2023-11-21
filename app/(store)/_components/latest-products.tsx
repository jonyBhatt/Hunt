import LatestProductCard from "@/components/card/latest-product";
import prisma from "@/lib/db/prisma";

const LatestProducts = async () => {
  const products = await prisma.store.findMany();
  return (
    <div>
      <h2 className="font-Rale text-4xl mb-8">Latest Products</h2>
      <div className="my-12 flex justify-between items-center flex-wrap">
        {products.map((product) => (
          <LatestProductCard
            key={product.id}
            title={product.title}
            url={product.imageUrl}
            cost={product.cost}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
