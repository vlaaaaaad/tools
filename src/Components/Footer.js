import React, { useState, useEffect } from 'react';
import '../Styles/Footer.css';

export default function Footer() {
  return (
    <div className="footerBody">
      <div className="name">I-Tools</div>
      <div className="menu">
        <ul>
          <li>Доставка</li>
          <li>Акции</li>
        </ul>
        <ul>
          <li>Избранные</li>
          <li>Корзина</li>
        </ul>
        <ul>
          <li>Сравнение</li>
          <li>Оплата</li>
        </ul>
      </div>
      <div className="info">
        <a href="#">Служба поддержки</a>
        <a href="tel:+38(063)-770-07-70" className="bold">
          +38(063)-770-07-70
        </a>
        <p>
          Звоните нам с 9:00 до 21:00.
          <br /> Без выходных.
        </p>
        <a href="#" className="bold">
          I-Tools@gmail.com
        </a>
      </div>
    </div>
  );
}
