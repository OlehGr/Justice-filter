import { Field, reduxForm } from 'redux-form';
import {
    checkClassName,
    checkEmail,
    checkForChose,
    checkForNull, checkGit,
    checkMaxWidth30,
    checkNames, checkPhone
} from "../../../utils/validators/validators";
import RegInput from "../../../FormComponents/RegInput";
import RoleSelectList from "../../../FormComponents/RoleSelectList";
import Fields from "redux-form/lib/Fields";

function RegForm(props) {



    return (
        <form className={'reg-form'} onSubmit={props.handleSubmit} >
            <Field className={'reg-input form-control'} name={'login'}  placeholder={'Эл. почта'} component={RegInput} validate={[checkForNull, checkMaxWidth30, checkEmail]} />
            <Field className={'reg-input form-control'} name={'password'}  placeholder={'Пароль'} component={RegInput} validate={[checkForNull, checkMaxWidth30]} />
            <Field className={'reg-input form-control'} name={'name'}  placeholder={'Имя'} component={RegInput} validate={[checkForNull, checkMaxWidth30, checkNames]} />
            <Field className={'reg-input form-control'} name={'surname'}  placeholder={'Фамилия'} component={RegInput} validate={[checkForNull, checkMaxWidth30, checkNames]} />
            <Field className={'reg-input form-control'} name={'aftername'}  placeholder={'Отчество'} component={RegInput} validate={[checkForNull, checkMaxWidth30, checkNames]} />
            <Field className={'reg-input form-control'} name={'class'}  placeholder={'Номер группы'} component={RegInput} validate={[checkForNull, checkMaxWidth30, checkClassName]} />
            <Field className={'reg-input form-control'} name={'github'}  placeholder={'GitHub'} component={RegInput} validate={[checkForNull, checkMaxWidth30, checkGit]} />
            <Field className={'reg-input form-control'} name={'phone'}  placeholder={'Телефон: 89007005544'} component={RegInput} validate={[checkForNull, checkMaxWidth30, checkPhone]} />
            <div className="form-check">
                <Field name="role" value={'student'} type={'radio'} component={RoleSelectList}  />
                <label className="form-check-label" htmlFor="student">
                    Student
                </label>
            </div>
            <div className="form-check">
                <Field name="role" value={'employer'} type={'radio'} component={RoleSelectList}  />
                <label className="form-check-label" htmlFor="employer">
                    Employer
                </label>
            </div>


            {/*<RoleSelectList type="radio" name="role" />*/}
            {/*<div className="form-file">*/}
            {/*    <Field name={'file'} type="file" className="form-file-input" id="customFile" component="input" />*/}
            {/*    <label className="form-file-label" htmlFor="customFile">*/}
            {/*        <span className="form-file-text">Выберите аватар</span>*/}
            {/*        <span className="form-file-button"></span>*/}
            {/*    </label>*/}
            {/*</div>*/}
            <div>
                <button type={'submit'}>
                    Зарегестрироваться
                </button>
            </div>
        </form>
    )
}





export default reduxForm({form: 'register'})(RegForm)