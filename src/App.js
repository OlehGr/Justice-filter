import './style.css';
import Filter from "./components/Filter/FilterContainer";
import Products from "./components/Products/ProductsContainer";
import Search from "./components/Search/SearchContainer";
import ModalWind from "./components/modalWind/ModalWind";
import OpenBtn from "./components/OpenBtn/OpenBtn";

function App(props) {


    return (
        <>
            <ModalWind />
            <div className='wrapper'>
                <div className={'search'}>
                    <Search />
                    <OpenBtn />
                </div>
                <Filter />
                <Products />
            </div>
        </>
    )
}

export default App;
