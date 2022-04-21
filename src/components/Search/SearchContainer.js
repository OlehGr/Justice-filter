import {connect} from "react-redux";
import {changeSearch} from "../../store/reducers/productsReducer";
import Search from "./Search";

let mapStateToProps = state => {
    return {
        value: state.production.searchValue
    }
}

export default connect(mapStateToProps, {changeSearch})(Search)