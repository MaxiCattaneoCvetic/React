import style from './lista.module.css'

function Lista (props) {
    return(
        <ul className={style.ul}>{props.children}</ul>
    )

}

export default Lista