// import React, { Component } from "react";

// type CountState = {
//   count: number;
// };

// type CountProps = {
//   title?: string;
// };

// class Counter extends Component<CountProps, CountState> {
//   constructor(props: CountProps) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount(): void {}

//   handleClick = (
//     e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
//   ) => {
//     console.log(e.clientX, e.clientY);

//     this.setState(({ count }) => ({ count: ++count }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>
//           {this.props.title}
//           {this.state.count}
//         </h1>
//         <button onClick={this.handleClick}>+1</button>
//         <a href="/" onClick={this.handleClick}>
//           Link
//         </a>
//       </div>
//     );
//   }
// }

// const App = () => {
//   return <Counter title="Title Counter: " />;
// };

// export default App;

//------------------------------------------------------

import React, { Component } from "react";

class Form extends Component {
  handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.currentTarget);
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted!");
    
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Simple text:</label>
        <input type="text" name="text" onFocus={this.handleFocus} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default function App() {
  return <Form />;
}
