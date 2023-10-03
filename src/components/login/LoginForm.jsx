import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { defaultUser } from "../../utils/constants/user";
import { login } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import iconTrello from "../../assets/icons/trello_icon.svg";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (email === defaultUser.email && password === defaultUser.password) {
      dispatch(login());
      navigate("/trello");
    } else {
      console.log("Email или Password не провильно");
    }
  };

  return (
    <>
      <CartLoginStyle>
        <Trello>
      
          <img src={iconTrello} alt="trello"/>
          <h1>Trello</h1>
        </Trello>

        <BlockContentStyle>
          <h2>Вход в Trello</h2>
          <input
            type="email"
            placeholder="Adik@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="adiktrello"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Продолжить</button>
        </BlockContentStyle>
      </CartLoginStyle>
    </>
  );
};

export default RegistrationForm;

const Trello = styled.div`
display:flex;
gap: 15px;
  img{
    width: 40px;
  }
  h1{
    font-size: 40px;
    color: #374754;
  }
`

const CartLoginStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(139, 161, 188, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BlockContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: white;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  width: 100%;
  h2 {
    color: #3d5264;
  }
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 16px;
  }
  button {
    padding: 10px 20px;
    background-color: #1a960e;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    width: 325px;
  }
`;
