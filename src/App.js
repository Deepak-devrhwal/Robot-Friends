import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";

// import { render } from "react-dom";
import { robots } from "./robots";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });

    // console.log(xp);
  };
  render() {
    const xp = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={xp} />
      </div>
    );
  }
}
export default App;
