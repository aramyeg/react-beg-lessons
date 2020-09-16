import React, {useState} from 'react';
import styles from '../Styles/local.module.css';

function ChildComponent() {

  const arr = [ 'StringA', 'StringB'];

  const a = arr[0];
  const b = arr[1];

  // const [ a, b] = [ 'StringA', 'StringB'];



  return(
    <h2 className={styles.customHeader}> Child Component </h2>
  )
};

export default ChildComponent;