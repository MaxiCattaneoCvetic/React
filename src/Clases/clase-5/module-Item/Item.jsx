import style from './item.module.css'

function Item (props){

    return(
            <li>{props.children}</li>
    )

}

export default Item