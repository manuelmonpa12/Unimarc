import  ProductCard  from "./ProductCard";

export default function  ProductList({ products }) {

  let newProducts = []

  if (!products) return (newProducts = []);

  newProducts = products.map((p) => ({
    id: p.productId,
    name: p.productName,
    price: p.items[0]?.sellers[0]?.commertialOffer.Price,
    stock: 0,
    img: p.items[0]?.images[0]?.imageUrl,
    description: p.description
  }));


  return (
    <div className="row rows-cols-1 row-cols-md-5 g-5">
      {newProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
