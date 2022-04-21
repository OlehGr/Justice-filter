import {Link, NavLink} from "react-router-dom";

function Header(props) {



    return (
        <header className="header">
            <div className="header__left">
                <a href="main.html" className="main__page__btn btn active__page">Главная</a>
                <a href="indexes/vacation__page.html" className="vacation__page__btn btn">Вакансии</a>
                <a href="indexes/announcements__page.html" className="announcements__page__btn btn">Объявления</a>
                <a href="indexes/companies__page.html" className="companies__page__btn btn">Компании</a>
            </div>
            <div className="header__right">
                <Auth isLogin={props.isLogin} email={props.email}/>
            </div>
        </header>
    )
}

function Auth(props) {
    if(props.isLogin) {
        return (
            <>
                <NavLink  style={{color: '#fff'}} to="/">{props.email}</NavLink>
            </>
        )
    } else {
        return (
            <>
                <NavLink  style={{color: '#fff'}} to="/register">Зарегистрироваться</NavLink>
            </>
        )
    }
}

export default Header