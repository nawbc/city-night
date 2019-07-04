import React, { Component, Suspense } from "react";
import { Citation } from '../../../../components/exports';
const LazyPDFDocument = React.lazy(() => import("./pdf"));

class App extends Component {
  state = {
    name: "",
    showPDFPreview: false
  };

  handleClick = () => this.setState({ showPDFPreview: true });

  handleNameChange = event => this.setState({ name: event.target.value });

  render() {
    const greeting = `Hello ${this.state.name}`;

    return (
      <div className="App">
        <input
          placeholder="Enter your name"
          type="text"
          onChange={this.handleNameChange}
        />
        <button onClick={this.handleClick}>Generate PDF</button>
        {
					this.state.showPDFPreview?
						<Citation
							src={import('./pdf')}
						></Citation>: null
        }
      </div>
    );
  }
}

export default  App;
