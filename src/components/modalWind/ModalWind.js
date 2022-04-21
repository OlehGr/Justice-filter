import {connect} from "react-redux";
import FormAdd from "./FormAdd";
import {addProduct, setWind} from "../../store/reducers/productsReducer";

function ModalWind(props) {

    return (
        <>
            {props.isOpened && <FormAdd setWind={props.setWind} addProduct={props.addProduct} />}
        </>
    )
}

let mapStateToProps = state => {
    return {isOpened: state.production.isOpened}
}

export default connect(mapStateToProps, {setWind, addProduct})(ModalWind)