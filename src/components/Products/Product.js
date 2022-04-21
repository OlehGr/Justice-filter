export default function Product({name, desc}) {

    return (
        <div className='product'>
            <div className={'explain'}>Название:</div>
            <p>{name}</p>
            <div className={'explain'}>Описание:</div>
            <p>{desc}</p>
        </div>
    );
}