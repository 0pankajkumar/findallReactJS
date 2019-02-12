import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



  
  render() {
    return (
    <>
      <form onSubmit={this.handleSubmit}>
          <label>
          Enter Paragraph:
          <textarea name="paragraph" rows="10" cols="30" value={this.state.value} onChange={this.handleChange}> 
          </textarea>
          </label>
      </form>
    </>
    );
  }
}



class InputWord extends React.Component {
  constructor(props) {

  }

  render() {
    return (
    <>
      <form onSubmit={this.handleSubmit}>
          
          <label>
          Enter Paragraph:
          <textarea name="paragraph" rows="10" cols="30" value={this.state.value} onChange={this.handleChange}> 
          </textarea>
          </label>

          <label>
          Enter Word/s to be searched:
          <input type="text" name="word" value={this.state.value} onChange={this.handleChange} /> 
          </label>
          
        <input type="submit" value="Submit" />
      </form>
    </>
    );
  }
}


class App extends React.Component {
  render() {
    return (
      <div className="area">
        <div className="input-para">
          <InputPara />
        </div>
        <div className="input-word">
          <InputWord />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
