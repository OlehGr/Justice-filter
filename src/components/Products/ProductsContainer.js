import {connect} from "react-redux";
import {filter} from "../../store/reducers/productsReducer";
import Products from "./Products";

function ProductsContainer(props) {

    const products = filter(props.products, props.checked, props.search)

    return <Products products={products} />
}




let mapStateToProps = state => {
    return {
        checked: state.production.checkedList,
        search: state.production.searchValue,
        products: state.production.products
    }
}

export default connect(mapStateToProps, {})(ProductsContainer)