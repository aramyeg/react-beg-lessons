import React, {Component} from 'react';
import '../Styles/main.css';
import ChildComponent from './ChildComponent';
import styles from '../Styles/app.module.css';
import styled,  { css } from 'styled-components';


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: red;
  margin: 0 1em;
  padding: 0.25em 1em;
  
  ${console.log(123)}
  ${props =>
  props.primary &&
  css`
      background: palevioletred;
      color: white;
    `};
`;



class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      colorClass : styles.yellowClass,
    }
  }

  handleColorChange = () => {

    if(this.state.colorClass === styles.greenClass){
      this.setState({
        colorClass : styles.yellowClass
      })
    }
    else{
      this.setState({
        colorClass : styles.greenClass
      })
    }

  };

  render() {

    return (
      <>
        <h1 className={this.state.colorClass}>
          Hello World!
        </h1>

        <h2 >
          Hello World!
        </h2>

        <ChildComponent />

        <Button>Styled Button</Button>
        <Button primary={true} onClick={this.handleColorChange}>change color</Button>
      </>
    );
  }
}

export default App;
