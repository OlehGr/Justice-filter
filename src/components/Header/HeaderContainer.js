import {connect} from "react-redux";
import {setAuthThunk} from "../../redux/authReducer";
import {useEffect} from "react";
import Header from "./Header";

function HeaderContainer (props) {
    useEffect(() => {
        if (!props.isLogin) {
            props.setAuthThunk()
        }
    })

    return <Header {...props} />
}

const mapStateToProps = state => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        name: state.auth.name,
        isLogin: state.auth.isLogin
    }
}

export default connect(mapStateToProps, {
    setAuthThunk
})(HeaderContainer)