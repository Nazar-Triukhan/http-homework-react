import { Component } from "react";
import style from './Searchbar.module.css'

class Searchbar extends Component {
  state = {
    query: "",
  };

  hendelChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  hendelSudmit = (e) => {
    e.preventDefault()

    if(this.state.query.trim() === ''){
      return
    }

    this.props.onSudmit(this.state.query)
  }

  render() {

    const {query} = this.state
    return (
      <header className="searchbar">
        <form className={style.form}
        onSubmit={this.hendelSudmit}
        >
          <button type="submit" className={style.btn}>
            <span className="button-label">Search</span>
          </button>

          <input
          onChange={this.hendelChange}
          value={query}
            className={style.input}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
