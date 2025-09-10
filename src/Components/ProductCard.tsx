import type { IProduct } from "../Interfaces/IProduct";

interface ProductCardProps {
  product: IProduct;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex m-5">
      <h1 className="mr-3">{product.id}.</h1>
      <div>
        <h1>{product.name}</h1>
        <h1>{product.price.toFixed(2)}</h1>
      </div>
    </div>
  );
}
export default ProductCard;
