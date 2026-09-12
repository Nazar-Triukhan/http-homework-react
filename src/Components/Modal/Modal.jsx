import { Component } from "react";
import style from './Modal.module.css'

class Modal extends Component {

    componentDidMount () {
        window.addEventListener('keydown', this.hendelEskClick)
    }

    componentWillUnmount () {
        window.removeEventListener('keydown', this.hendelEskClick )

    }

    hendelEskClick = (e) => {
        if(e.key === 'Escape'){
            this.props.closeModal()
        }
    }

    hendelBackdrop = (e) => {
        if(e.target === e.currentTarget){
            this.props.closeModal()
        }
    }

    render () {
        const {imageBig} = this.props
        return (
            <div className={style.backdrop} onClick={this.hendelBackdrop}>
                <div className={style.modal}>
                    <img src={imageBig} alt="" />
                </div>
            </div>
        )
    }
}

export default Modal