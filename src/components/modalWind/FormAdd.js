import '../../style.css'
import {useForm} from "react-hook-form";

export default function FormAdd (props) {
    const { register, handleSubmit } = useForm();

    return (
        <div className={'form-container'}>
            <button className={'back'} onClick={props.setWind}><img src="https://raw.githubusercontent.com/0leja/widget/main/img/btns/close-btn.svg" alt="Закрыть"/></button>
            <form className={'form'} onSubmit={handleSubmit(data => {
                props.addProduct(data)
                props.setWind()
            })}>
                <h2 className={'form-title'}>Заполните все поля</h2>
                <input {...register('name', {required: true})} placeholder={'Название'} className={'text-input'}  />
                <input {...register('desc', {required: true})} placeholder={'Описание'} className={'text-input'} />
                <div className={'row'}>
                    <select {...register("kind", {required: true})} className={'select-input'}>
                        <option value="food">Еда</option>
                        <option value="cloth">Одежда</option>
                        <option value="tech">Техника</option>
                    </select>
                    <button className={'btn-submit'} type={"submit"}>Отправить</button>
                </div>
            </form>
        </div>
    )
}

