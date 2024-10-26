import React, { Component } from "react";

class SearchBar extends Component {
  handleSearch = (event) => {
    if (event.key === "Enter") {
      this.props.onSearch(event.currentTarget.value);
    }
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Enter city name"
        onKeyDown={this.handleSearch}
      />
    );
  }
}

export default SearchBar;
