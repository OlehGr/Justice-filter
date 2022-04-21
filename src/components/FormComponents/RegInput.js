
function RegInput({input, meta, ...props}) {


    const isError = meta.error && meta.touched
    return (
        <div className={'input-area'}>
            <input {...input} className={props.className + (isError ? ' error-view' : '')} placeholder={props.placeholder}/>
            <span className={'error-message' + (isError ? ' error-message--active' : '')}>{meta.error}</span>
        </div>
    )
}


export default RegInput