import React from "react"
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

class GifListContainer extends React.Component {
  state = { apiResponse: [] }

  submitHandler = (searchValue = "dogs") => {
    console.log(searchValue)

    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=O13JWpTYjktPriTj864et6OnU2cYpg0G&rating=g`
    )
      .then((response) => response.json())
      .then((data) => {
        const threeResults = data.data.slice(0, 3)
        this.setState({ apiResponse: threeResults }, () =>
          console.log("State after fetch:", this.state)
        )
        console.log(threeResults)
      })
  }
  componentDidMount() {
    this.submitHandler()
  }
  render() {
    return (
      <div>
        <GifList apiResponse={this.state.apiResponse} />
        <GifSearch submitHandler={this.submitHandler} />
      </div>
    )
  }
}
export default GifListContainer
