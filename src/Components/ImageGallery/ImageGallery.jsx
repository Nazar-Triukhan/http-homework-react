import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import style from './ImageGallery.module.css'

class ImageGallery extends Component {
  render() {
    const {images, onImageClick} = this.props
    return (
    <ul className={style.list}>{
          images.map((e) => {
            return (
             <ImageGalleryItem onImageClick={onImageClick} largeImageURL={e.largeImageURL} key={e.id} webformatURL={e.webformatURL} tags={e.tags}/>
            )
          })
        }
    </ul>
    )
  }
}

export default ImageGallery
