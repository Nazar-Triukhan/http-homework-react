import { Component } from 'react'
import './App.css'
import { fetchImg } from './api'
import Searchbar from './Components/Searchbar/Searchbar'
import ImageGallery from './Components/ImageGallery/ImageGallery'
import Loader from './Components/Loader/Loader'
import Button from './Components/Button/Button'
import Modal from './Components/Modal/Modal'

class App extends Component {

  state = {
    images: [], 
    query: '', 
    page: 1, 
    loading: false,
    selectetImg: null,
  }

  componentDidUpdate(_, prevState) {
    if(prevState.query !== this.state.query){
      this.loadImg()

    }
  }

  loadImg = () => {
    const {query, page, } = this.state

    if(query === ''){
      return
    }

    this.setState({
      loading: true
    })

    fetchImg(query, page)
    .then(data => this.setState((prev) => ({images: [...prev.images, ...data.hits]})))
    .finally(() => this.setState({loading: false}))
  }

  hendelSearch = (query) => {
    this.setState({
      query: query,
      images: [], 
      page: 1
    })
  }

  loadMore = () => {
    this.setState((prev) => ({
      page: prev.page + 1,

    }),() => {
      this.loadImg()
    })
  }

  closeModal = () => {
    this.setState({
      selectetImg: null, 
    })
  }
  
  modalOpen = (largeImageURL) => {
    this.setState({
      selectetImg: largeImageURL, 
    })
  }

  render () {
    const {images, loading, selectetImg} = this.state
    return (
      <>
        <Searchbar onSudmit={this.hendelSearch}/>
        {loading && <Loader />}
        <ImageGallery images={images} onImageClick={this.modalOpen}/>
        {images.length > 0 && <Button onClick={this.loadMore}/>}
        {selectetImg && <Modal imageBig={selectetImg} closeModal={this.closeModal}/>}

      </>
    )
  }
}

export default App