import React from "react"

class GifList extends React.Component {
  arrayOfGifs = () => {
    return this.props.apiResponse.map((gifObj) => (
      <li>
        <img src={gifObj.images.original.url} alt={gifObj.title} />
      </li>
    ))
  }
  render() {
    return (
      <div>
        <ul>{this.arrayOfGifs()}</ul>
      </div>
    )
  }
}
export default GifList
