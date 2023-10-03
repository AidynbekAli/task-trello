
import backImage from "../../assets/image/703e3aefd9500eff0f63294bc383ac2a.jpeg";
import { styled } from "styled-components";
import Header from "./header/Header";
import CardsTrello from "./CardColonki";
import { useSelector } from "react-redux";
import { useState } from "react";





const Trello = () => {
  const [searchText, setSearchText] = useState(""); 

  const columns = useSelector((state) => state.columns.columns);

  const filteredColumns = columns.filter((column) =>
    column.title.toLowerCase().includes(searchText.toLowerCase())
  );
  
  return (
    <>
      <Container>
        <Header onSearch={setSearchText}  />
        <CardsTrello  filteredColumns={filteredColumns} />
      </Container>
    </>
  );
};

export default Trello;

const Container = styled.div`
  background-image:url(${backImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100vh;
`;
