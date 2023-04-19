import Display from "../Display";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Search from "../Search";
import ListItemsSales from "../list_components/Items_Sales";
import Sales from "./Sales";

function itemsSales(item) {
    return (
      <Sales
        img={item.img}
        type={item.type}
        city={item.city}
        district={item.district}
        cod={item.cod}
        size={item.size}
        price={item.price}
        model={item.model}
        sale={item.sale}
      />
    );
  }

function IndexSales() {
  return (
    <div>
      <Navbar />
      <Display />
      <Search />
      {ListItemsSales.map(itemsSales)}
      <Footer />
    </div>
  );
}

export default IndexSales;