import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    inputs: {
      input0: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
      input9: ''
    }
  }

  handleChange = (event) => {
    const inputs = {
      ...this.state.inputs,
      [event.target.name]: event.target.value
    };
    this.setState({inputs})
  }

  handleSubmit = () => {
    fetch('http://localhost:5000', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.inputs)
    })
    .then(response => response.json())
    .then(msg => console.log(msg))
    .catch(err => console.log("error"))
  }

  render (){
    const inputs = [];

    for (let i = 0; i < 10; i++) {
      inputs.push(
        <div key={i}>
         <label>HTML{i}</label>
         <input name={"input"+i} onChange={this.handleChange}  />
        </div>
      )
    }

    return (
      <div className="App">
        <h2>Agency 73 Test</h2>
        <h6>Enter full website url (include https://) to scrape the html from that page and save to a local file.</h6>

        <form>
          {inputs}
          <button type="button" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
