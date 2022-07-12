import React, { Component } from "react";

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input_value: "",
    };
  }

  view = (event) => {
    this.setState({input_value:this.state.input_value+event.target.value });
    console.log(this.state.input_value)
  };

  Result = () => {
    let total_result = eval(this.state.input_value);
    this.setState({
      input_value:total_result,
    })
  }

  AC = () => {
    this.setState({
      input_value:"",
    })
  }
  
  Remove = () => {
    this.setState({
      input_value:this.state.input_value.substring(0, this.state.input_value.length - 1),
    })
  }

  render() {
    return (
      <div className="main_container">
        <div>
          <input type="text" id="result" value={this.state.input_value} style={{fontSize:"20px"}}/>
        </div>
        <div className="main_box">
          <button value="" className="long_button" onClick={this.AC}>AC</button>
          <button value="" className="button_normal" onClick={this.Remove}>DEL</button>
          <button value="/" className="button_normal" onClick={this.view}>/</button>
        </div>

        <div className="main_box">
          <button value={1} className="button_normal" onClick={this.view}>1</button>
          <button value="2" className="button_normal" onClick={this.view}>2</button>
          <button value="3" className="button_normal" onClick={this.view}>3</button>
          <button value="*" className="button_normal" onClick={this.view}>*</button>
        </div>

        <div className="main_box">
          <button value={4} className="button_normal" onClick={this.view}>4</button>
          <button value="5" className="button_normal" onClick={this.view}>5</button>
          <button value="6" className="button_normal" onClick={this.view}>6</button>
          <button value="+" className="button_normal" onClick={this.view}>+</button>
        </div>

        <div className="main_box">
          <button value={7} className="button_normal" onClick={this.view}>7</button>
          <button value="8" className="button_normal" onClick={this.view}>8</button>
          <button value="9" className="button_normal" onClick={this.view}>9</button>
          <button value="-" className="button_normal" onClick={this.view}>-</button>
        </div>

        <div className="main_box">
          <button value="." className="button_normal" onClick={this.view}>.</button>
          <button value="0" className="button_normal" onClick={this.view}>0</button>
          <button value="" className="long_button" onClick={this.Result}>=</button>
        </div>
      </div>
    );
  }
}
