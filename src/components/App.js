import React from "react";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav>Home</nav>
        <Home
          username={user.name}
          city={user.city}
          color={user.color}
        />
        <About
          bio={user.bio}
          links={user.links}
        />
      </div>
    );
  }
}

export default App;
