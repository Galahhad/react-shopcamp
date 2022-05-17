import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import styles from "./MainContent.module.css";

const Product = (props) => {

  const [value, setValue] = useState(false);

  const clickValue = () => {
    setValue(!value);
  }

  return (
    <div className={styles.productCard}>
      <div className={styles.imgWrap}>
  <Card.Img variant="top" src={props.img} className={styles.productImg} alt="Картинка"/>
  </div>
  <Card.Body>
    <Card.Text>
      <div className={styles.text_content}>
      <p className={styles.new_price}>{props.newPrice}</p>
      <p className={styles.old_price}>{props.oldPrice}</p>
      </div>
    <Card.Title>
      <h1 className={styles.title_text}>{props.title}</h1>
    </Card.Title>
    </Card.Text>
    <Button disabled={value} className={styles.buy_button} onClick={clickValue}>{!value ? "Купить" : "В корзине"}</Button>
    
  </Card.Body>
</div>
  );
};

export default Product;