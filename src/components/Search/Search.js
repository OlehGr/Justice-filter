export default function Search(props) {
    const change = e => {
        e.preventDefault()
        props.changeSearch(e.currentTarget.value)
    }

    return (
        <div>
            <input type={'text'} value={props.value} onChange={change} placeholder={'Поиск...'}/>
        </div>
    )
}