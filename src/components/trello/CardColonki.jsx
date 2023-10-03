import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addColumn, addTask } from "../../redux/slices/columnSlice";
import Column from "./Column";
import { styled } from "styled-components";
import plusIcon from "../../assets/icons/icons8-plus.svg";
import removeIcon from "../../assets/icons/icons8-x-50.png";


function CardsTrello({filteredColumns}) {
  const [cardShow, setCardShow] = useState(true);
  const [newList, setNewList] = useState("");

  const { columns, create } = useSelector((state) => state.columns);
  const dispatch = useDispatch();

  const handleAddColumn = () => {
    if (newList.trim() !== "") {
      const newColumn = {
        id: Date.now(),
        title: newList,
        tasks: [],
      };
      setNewList("");
      dispatch(addColumn(newColumn));
      setCardShow(true);
    }
  };

  const handleAddTask = (columnId) => {
    const newTask = {
      id: Date.now(),
      
    };
    dispatch(addTask({ columnId, task: newTask }));
  };

  const handleAddNewList = () => {
    setCardShow(false);
  };

  return create ? (
    <CardList>
      {filteredColumns.map((column) => (
        <Column key={column.id} column={column} onAddTask={handleAddTask} />
      ))}
      {cardShow ? (
        <CardButton onClick={handleAddNewList}>
          <img src={plusIcon} alt="plus" />
          <h2>
            {columns.length ? "Добавьте еще одну колонку" : "Добавить список"}{" "}
          </h2>
        </CardButton>
      ) : (
        <Cards>
          <input
            type="text"
            value={newList}
            placeholder="Ввести заголовок списка"
            onChange={(e) => setNewList(e.target.value)}
          />
          <div className="addColon">
            <button onClick={handleAddColumn}>Добавить список</button>
            <img
              onClick={() => setCardShow(true)}
              src={removeIcon}
              alt="remove"
            />
          </div>
        </Cards>
      )}
    </CardList>
  ) : null;
}

export default CardsTrello;

const CardList = styled.div`
  display: flex;
`;
const Cards = styled.div`
  padding: 10px;
  margin: 15px;
  border: none;
  /* width: 300px; */
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  height: 80px;
  background-color: white;
  border-radius: 20px;

  input {
    width: 250px;
    height: 50vh;
    border-radius: 5px;
    border: 2px solid blue;
    padding: 5px;
  }

  .addColon {
    display: flex;
    gap: 10px;
    img {
      width: 30px;
    }
    button {
      width: 150px;
      height: 35px;
      border-radius: 5px;
      border: none;
      color: white;
      background-color: #4741f7;
      &:hover {
        background-color: #0f0a94;
      }
    }
  }
`;

const CardButton = styled.button`
  /* opacity: 80%; */
  padding: 20px;
  margin: 15px;
  border: none;
  /* width: 300px; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 80px;
  background-color: rgba(119, 166, 210, 0.5);
  border-radius: 20px;
  &:hover {
    background-color: rgba(40, 76, 107, 0.5);
  }
  h2 {
    color: #f3efef;
  }
  img {
    width: 35px;
  }
`;
