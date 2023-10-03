import React, { useState } from "react";
import { styled } from "styled-components";
import menu from "../../../assets/icons/icons8-circled-menu-24.png";
import trelloicon from "../../../assets/icons/icons8-trello-50.png";
import uvIcon from "../../../assets/icons/icons8-notification-50.png";
import infoIcon from "../../../assets/icons//icons8-info-64.png";
import contactIcon from "../../../assets/icons/account_avatar_icon.svg";
import { createToggleHandler } from "../../../redux/slices/columnSlice";
import { useDispatch } from "react-redux";

const primaryBackgroundColor = "#46536A";
const buttonBackgroundColor = "#ffffff33";
const textColor = "white";

const Header = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    onSearch(text);
  };

  const clickFunc = () => {
    dispatch(createToggleHandler());
  };

  return (
    <HeaderStyle>
      <nav>
        <img src={menu} alt="Меню" />
        <img src={trelloicon} alt="Логотип Trello" />
        <h1>Trello</h1>
        <select>
          <option>Рабочие пространства</option>
          <option>Не карайсын</option>
        </select>
        <select>
          <option>Недавние</option>
          <option>Эчтеке жок</option>
        </select>
        <select>
          <option>В избранном</option>
          <option>Дальше кетевер</option>
        </select>
        <select>
          <option>Шаблоны</option>
          <option>Бутту</option>
        </select>
      </nav>
      <CreateButton onClick={clickFunc}>Создать</CreateButton>
      <nav>
        <input
          type="text"
          placeholder="Поиск колонок"
          value={searchText}
          onChange={handleSearchChange}
        />
        <img src={uvIcon} alt="Уведомления" />
        <img src={infoIcon} alt="Информация" />
        <img src={contactIcon} alt="Контакты" />
      </nav>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${primaryBackgroundColor};
  width: 100%;
  box-sizing: content-box;
  h1 {
    font-size: 30px;
    color: ${textColor};
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  select {
    background: none;
    border: none;
    font-size: 1rem;
    color: ${textColor};
    option{
      color:blue;
    }
  }

  @media (max-width: 1200px) {
    select {
      display: none;
    }
  }

  nav {
    display: flex;
    gap: 1.2rem;
    margin: 0.6rem;
  }
  input {
    width: 250px;
    padding: 5px;
    border: none;
    border-radius: 5px;
  }
  img {
    all: unset;
    width: 2rem;
    max-height: 100%;
    flex-shrink: 0;
  }
`;

const CreateButton = styled.button`
  width: 5rem;
  height: 2.5rem;
  border: none;
  border-radius: 8px;
  color: ${textColor};
  background-color: ${buttonBackgroundColor};
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${textColor};
    color: ${primaryBackgroundColor};
    cursor: pointer;
  }
`;
