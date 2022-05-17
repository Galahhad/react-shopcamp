import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./MainContent.module.css";

const Product = (props) => {


  const [buy, setBuy] = useState(false);

  const setClick = () => {
    setBuy(!buy)
  }

  return (
    <div className={buy ? styles.opacityMode : styles.productCard}>
      <div className={styles.imgWrap}>
  <Card.Img variant="top" src={props.img} className={styles.productImg} alt="Картинка"/>
  </div>
  <Card.Body>
    <Card.Text>
      <div className={styles.text_content}>
      </div>
    <Card.Title>
      <div className={styles.title_text}>{props.title}</div>
      <span className={styles.new_price}>{props.newPrice}</span>
      <span className={styles.old_price}>{props.oldPrice}</span>
    </Card.Title>
    </Card.Text>
    <Button disabled={buy} variant="primary" onClick={setClick} className={styles.buy_button}>{buy ? props.buyed : props.buy}</Button>
  </Card.Body>
</div>
  );
};

export default Product;