import "../App.css";
import Display from "./Display";
import Footer from "./Footer";
import List from "./List";
import Navbar from "./Navbar";
import Search from "./Search";
import "./list_components/items";
import ListItems from "./list_components/items";

function items(item) {
  return (
    <List
      img={item.img}
      type={item.type}
      city={item.city}
      district={item.district}
      cod={item.cod}
      size={item.size}
      price={item.price}
      model={item.model}
    />
  );
}

function Index() {
  return (
    <div>
      <Navbar />
      <Display />
      <Search />
      
      {ListItems.map(items)}
      <Footer />
    </div>
  );
}

export default Index;
