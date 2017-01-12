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
      <h1>{name}</h1>
    );
  }
}

ReactDOM.render(<App2 name="My World!!" />, document.getElementById("root"));
