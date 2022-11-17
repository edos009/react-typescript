import React, { Component } from "react";

type CountState = {
  count: number;
};

type CountProps = {
  title?: string;
};

class Counter extends Component<CountProps, CountState> {
  constructor(props: CountProps) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount(): void {}

  handleClick = () => {
    this.setState(({ count }) => ({ count: ++count }));
  };

  render() {
    return (
      <div>
        <h1>
          {this.props.title}
          {this.state.count}
        </h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}

const App = () => {
  return <Counter title="Title Counter: " />;
};

export default App;
