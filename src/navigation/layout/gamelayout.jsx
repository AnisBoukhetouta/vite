import { Component } from "react";
import classes from "./gamelayout.module.css";

import GameNavbar from "../navbar/gameNavbar";
import GameSidebar from "../sidebar/gameSidebar";

class gameLayout extends Component {
  state = { showSidebar: false };

  sidebarClosedHandler = () => {
    this.setState({ showSidebar: false });
  };

  toggleSidebarHandler = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  render() {
    return (
      <div className={classes.content}>
        <GameNavbar toggleSidebar={this.toggleSidebarHandler} />
        <GameSidebar
          open={this.state.showSidebar}
          closed={this.sidebarClosedHandler}
        />
        <div className={classes.mainContent}>{this.props.children}</div>
      </div>
    );
  }
}

export default gameLayout;
