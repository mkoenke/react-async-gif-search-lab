import React from "react"

class GifSearch extends React.Component {
  state = { searchValue: "" }

  localChangeHandler = (e) => {
    console.log(e.target.value)
    this.setState({ searchValue: e.target.value })
  }

  localSubmitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state.searchValue)
  }
  render() {
    return (
      <form onSubmit={this.localSubmitHandler}>
        <input type="text" onChange={this.localChangeHandler} />
        <button>Search</button>
      </form>
    )
  }
}

export default GifSearch
