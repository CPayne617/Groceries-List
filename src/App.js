
import './App.css';
import React from 'react'

class App extends React.Component {

  state = {
    list: ['juices', 'beef', 'cookies']
  }

  updatedList = () => {
    this.setState({
      list: ['water', ...this.state.list]
    })
  }
  removeItem = (index) => {
    this.setState({
      list: this.state.list.filter((_, i) => i !== index)
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          {
            this.state.list.map((item) => {
              return (
                <h1>{item}</h1>
              )
            })
          }
        </div>
        <button onClick={this.updatedList}>Add item</button>
        <button onClick={() => this.removeItem(0)}>Remove items</button>
      </div>
    )
  }
}
export default App;
