

//checked={value == '2'}
import {registerThunk} from "../../../redux/regReducer";
import RegForm from "./RegForm/RegForm";
import {connect} from "react-redux";


function RegPage(props) {


    return (
        <main className={'main'}>
            <div>
                <div className={'reg-container'}>
                    <RegForm onSubmit={props.registerThunk} />
                </div>
            </div>
        </main>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerThunk: data => dispatch(registerThunk(data))
    }
}

export default connect(null, mapDispatchToProps)(RegPage)