import './styles/app.scss';

import * as React from "react";
import * as ReactDOM from "react-dom";

interface AppProps {
  name: string
}

const App2 = (props: AppProps) => <h1>{props.name}</h1>;

class App extends React.Component<AppProps, undefined> {
  render() {
    const { name } = this.props;

    return (
      <div style={{ paddingTop: "60px" }}>
        <nav className="pt-navbar pt-fixed-top">
          <div className="pt-navbar-group pt-align-left">
            <div className="pt-navbar-heading">Blueprint</div>
            <input className="pt-input" placeholder="Search files..." type="text" />
          </div>
          <div className="pt-navbar-group pt-align-right">
            <button className="pt-button pt-minimal pt-icon-home">Home</button>
            <button className="pt-button pt-minimal pt-icon-document">Files</button>
            <span className="pt-navbar-divider"></span>
            <button className="pt-button pt-minimal pt-icon-user"></button>
            <button className="pt-button pt-minimal pt-icon-notifications"></button>
            <button className="pt-button pt-minimal pt-icon-cog"></button>
          </div>
        </nav>
        <h1>{name}</h1>
      </div>
    );
  }
}

ReactDOM.render(<App name="My World!!" />, document.getElementById("root"));
