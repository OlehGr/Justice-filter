import {connect} from "react-redux";
import {changeFilter} from "../../store/reducers/productsReducer";
import Filter from "./Filter";

let mapStateToProps = state => {
    return {
        checkedList: state.production.checkedList
    }
}

export default connect(mapStateToProps, {changeFilter})(Filter)