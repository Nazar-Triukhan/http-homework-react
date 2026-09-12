import { Component } from "react";
import style from './Button.module.css'

class Button extends Component {


    render () {
        const {onClick} = this.props
        return (
            <button onClick={onClick} type="button" className={style.button}>load more</button>
        )
    }
}

export default Button