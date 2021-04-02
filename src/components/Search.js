import React, { Component } from "react";
import "../css/Search.css";
import Content from "./Content";
import { fetchCurrentLocation } from "../api";

class Search extends Component {
  state = {
    city: "",
    data: {},
  };

  async componentDidMount() {
    // navigator.geolocation.getCurrentPosition(function (position) {
    //   console.log("Latitude is :", position.coords.latitude);
    //   console.log("Longitude is :", position.coords.longitude);
    // });
    // const data = await fetchCurrentLocation();
    // this.setState({ data });
  }

  handleChange = (event) => {
    this.setState({ city: event.target.value });
  };

  handleKeyDown = async (event) => {
    const { city } = this.state;
    console.log(event.key);
    if (event.key === "Enter") {
      if (city) {
        const data = await fetchCurrentLocation({ city });
        this.setState({ data });
      }
    }
  };

  render() {
    const { data } = this.state;
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <input
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          className="search"
          type="text"
        />
        <Content data={data} />
      </div>
    );
  }
}

export default Search;
