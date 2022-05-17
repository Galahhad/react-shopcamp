import React, {useState} from 'react';
import styles from "./MainContent.module.css";
import { Button } from 'react-bootstrap';
import { Offcanvas } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product';

const MainContent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={styles.center}>
      <Button variant="primary" onClick={handleShow}>
        <GiHamburgerMenu/>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h1>Товары</h1>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className={styles.products_list}>
            <li>Гаджеты и аксессуары</li>
            <li>Бытовая техника</li>
            <p>Прочее</p>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    <div className={styles.product}>
      <Product
      img="https://images.macrumors.com/t/PJemPEph0tylNgWFGNZ8o-JjfcI=/2769x/article-new/2013/09/16-inch-macbook-pro.jpg"
      title="Mac Book Pro"
      newPrice="299 000₽"
      oldPrice="311 000₽"
      />
      <Product
      img="https://www.notebookcheck-ru.com/fileadmin/Notebooks/Samsung/Galaxy_M31s/4_zu_3_Samsung_Galaxy_M31s.jpg"
      title="Samsung Galaxy A51"
      newPrice="97 990₽"
      oldPrice="105 999₽"
      />
      <Product
      img="https://regulmoto.ru/upload/iblock/5f3/5f3b362ce151902fbc78f53a35173003.jpg"
      title="Ducati Neron X51"
      newPrice="599 999₽"
      oldPrice="675 900₽"
      />
      <Product
      img="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/ip-3_large.jpg"
      title="Iphone 11 Black"
      newPrice="76 990₽"
      oldPrice="90 677₽"
      />
      <Product
      img="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/130776-1_large.jpg"
      title="Samsung Galaxy Z-Flip"
      newPrice="275 900₽"
      oldPrice="299 900₽"
      />
      <Product
      img="https://cdn.cimri.io/image/1000x1000/appleipadprogb_491928407.jpg"
      title="IPad Pro"
      newPrice="80 000₽"
      oldPrice="99 990₽"
      />
      </div>
    </div>
  );
};

export default MainContent;