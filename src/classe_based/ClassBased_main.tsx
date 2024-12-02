import { Component } from "react";

interface State {
  data?: string;
  count: number;
}

export default class ClassBasedMain extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = { count: 0 }; // Initialize state
    console.log("Constructor called");
  }

  componentDidMount(): void {
    console.log("ComponentDidMount called");
    // Simulate an API call
    setTimeout(() => this.setState({ data: "Hello, World!" }), 1000);
  }

  componentDidUpdate(
    _prevProps: Readonly<object>,
    _prevState: Readonly<State>,
    snapshot?: { prevCount: number } | null
  ): void {
    console.log("ComponentDidUpdate called");
    if (snapshot) {
      console.log("Previous count:", snapshot.prevCount);
    }
  }

  componentWillUnmount(): void {
    console.log("ComponentWillUnmount called");
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>ClassBasedMain</h1>
        <p>Data: {this.state.data || "Loading..."}</p>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment Count
        </button>
      </div>
    );
  }
}
