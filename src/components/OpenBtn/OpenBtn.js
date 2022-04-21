import {connect} from "react-redux";
import {setWind} from "../../store/reducers/productsReducer";

function OpenBtn(props) {

    return <button onClick={props.setWind} className={'add-btn'}>Добавить</button>
}

export default connect(null, {setWind})(OpenBtn)