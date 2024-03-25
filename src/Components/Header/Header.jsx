import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/icons/logo.svg';
import phone from '../../assets/icons/header/phone.svg';

const HeaderWrapper = styled.header`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    column-gap: 30px;

    a::before {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #ccc;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    
    a:hover::before {
      transform: scaleX(1);
    }
  }

  a {
    font-size: 14px;
    line-height: 123%;
    color: #fff;
    position: relative;
    text-decoration: none;
  }

  div {
    display: flex;
    align-items: center;
    column-gap: 15px;

    a {
      font-weight: 600;
      font-size: 18px;
      letter-spacing: 0.02em;
      color: #fff;
      transition: color 0.3s ease;

      &:hover {
        color: #ccc;
      }
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
      <nav>
        <ul>
          <li><a href="#">Обо мне</a></li>
          <li><a href="#">Наставничество</a></li>
          <li><a href="#">Мероприятия</a></li>
          <li><a href="#">Кейсы</a></li>
          <li><a href="#">Отзывы</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>
      <div>
        <img src={phone} alt="phone number" />
        <a href="tel:+73451233445">8-345-123-34-45</a>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
