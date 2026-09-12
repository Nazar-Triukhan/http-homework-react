import { Component } from "react";
import style from './ImageGalleryItem.module.css'

class ImageGalleryItem extends Component {
  render() {
    const {webformatURL, tags,largeImageURL, onImageClick} = this.props
    return (
      <li>
        <img className={style.img} src={webformatURL} alt={tags} onClick={() => onImageClick(largeImageURL)}/>
      </li>
    );
  }
}

export default ImageGalleryItem;
