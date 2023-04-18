import './App.css';
import Display from './components/Display';
import Footer from './components/Footer';
import List from './components/List';
import Navbar from './components/Navbar';
import Search from './components/Search';
import './components/list_components/items'
import ListItems from './components/list_components/items';

function items(item){
  return(
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


function App() {
  return (
  <div>
    <Navbar />
    <Display />
    <Search />
    {ListItems.map(items)}
    <Footer />
    </div>
  )
}


export default App;
