const SET_USERS = 'SET_USERS';
const CHANGE_FILTER_VAL = 'CHANGE_FILTER_VAL';
const CHANGE_SEARCH_VAL = 'CHANGE_SEARCH_VAL';
const SET_WIND = 'SET_WIND';
const ADD_PRODUCT = 'ADD_PRODUCT';



let initisleState = {
    products: [
        {id: 1, kind: 'food' ,name: 'Хлеб', desc: 'Очень вкусный хлеб их натуральных ингридиентов'},
        {id: 2, kind: 'tech'  ,name: 'Ноутбук', desc: 'Импортозамещение ноутбуков всех западных производителей'},
        {id: 3, kind: 'cloth'  ,name: 'Кофта', desc: 'Красивая из материалов сохраняющих тепло'},
        {id: 4, kind: 'food'  ,name: 'Кофе', desc: 'Растворимый кофе российского производство'},
        {id: 5, kind: 'food'  ,name: 'Колбаса', desc: 'Натуральный мясной продукт не из туалетной бумаги'},
        {id: 6, kind: 'cloth'  ,name: 'Футболка', desc: 'Футболка из натурального белорусского хлопка'},
        {id: 7, kind: 'tech'  ,name: 'Планшет', desc: 'Тонкий планшет, почти не старый'},
    ],
    checkedList: [],

    isOpened: false


}

const ProductsReducer = (state = initisleState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                products: [...action.products]
            }
        case CHANGE_FILTER_VAL:
            debugger
            let newCheckedList
            if(!state.checkedList.some(checked => checked === action.checked)) newCheckedList = [...state.checkedList, action.checked]
            else newCheckedList = state.checkedList.filter(checked => checked !== action.checked)

            return {
                ...state,
                checkedList: [...newCheckedList]
            }
        case CHANGE_SEARCH_VAL:

            return {
                ...state,
                searchValue: action.val
            }
        case SET_WIND:
            return {
                ...state,
                isOpened: !state.isOpened
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, {id: state.products.length, kind: action.kind, name: action.name, desc: action.desc}]
            }

        default:
            return {...state}
    }
}

export const filter = (products, checked, search) => {
    const values = checked

    if(products.length) {
        if(search) {
            let Filteredproducts = products.filter( product => product.name.toLocaleLowerCase().includes( search.toLocaleLowerCase() ) )
            if(values.length) return Filteredproducts.filter(product => values.some( checked => checked === product.kind ))
            return [...Filteredproducts]
        } else {
            if(values.length) {
                let Filteredproducts = products.filter(product => values.some( checked => checked === product.kind ))
                return [...Filteredproducts]
            }
            return [...products]
        }

    }

    return []
}


export const setUsers = (products) => {
    return {type: SET_USERS, products: products}
}

export const changeFilter = (checked) => {
    return {type: CHANGE_FILTER_VAL, checked: checked}
}

export const changeSearch = (val) => {
    return {type: CHANGE_SEARCH_VAL, val: val}
}

export const setWind = () => {
    return {type: SET_WIND}
}

export const addProduct = (product) => {
    return {type: ADD_PRODUCT, name: product.name, kind: product.kind, desc: product.desc}
}

export default ProductsReducer