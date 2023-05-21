import { Component } from 'react';
import styles from './App.module.css';
import Searchbar from 'components/Searchbar';
import Modal from 'components/Modal';
import ImageGallery from 'components/ImageGallery';

class App extends Component {
  state = {
    images: [],
    showModal: false,
    isLoading: false,
    error: null,
  }

  toggleModal = () => {
    this.setState(prevState => ({showModal: !prevState.showModal}))
  }

  getImage = value => {
    console.log(value);
  }

  render() {
    const { showModal } = this.state;

    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.getImage}/>
        <ImageGallery/>
        {showModal && <Modal onClose={this.toggleModal}/>}
      </div>
    )
  }
}

export default App;