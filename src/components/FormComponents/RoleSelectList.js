import Field from "redux-form/lib/Field"
import SelectList from 'react-widgets/'

function RoleSelectList({input, meta, ...props}) {
    return <input type={'radio'} {...input}/>
}

export default RoleSelectList