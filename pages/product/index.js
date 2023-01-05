import { useProduct } from "../../shared/hooks/useProduct";
import Banner from "./components/Banner";
import Carrusel from "./components/Carrusel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ProductList } from "./components/ProductList";
import SubNavbar from "./components/SubNavbar";
import Target from "./components/Target";

export default function Product() {
  const { data } = useProduct(`/api/products`);

  if (data && data.length == 0) return null;

  return (
    <div>
      <Navbar />
      <SubNavbar />
      <Target />
      <Carrusel />
      <div className="content-products">
        <div>{data && <ProductList products={data} />}</div>
      </div>
      <Banner/>
      <Footer />
    </div>
  );
}
