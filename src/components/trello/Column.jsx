import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTask,
  removeColumnFromList,
  updateColumnTitle,
} from "../../redux/slices/columnSlice";
import Task from "./Task";
import { styled } from "styled-components";
import menuRemove from "../../assets/icons/2menu_more_icon.png";

const Column = ({ column, onAddTask }) => {
  const [newTaskText, setNewTaskText] = useState("");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editedTitle, setEditedTitle] = useState(column.title);
  const [cardsOpen, setCardsOpen] = useState(true);
  const [openmodal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTaskText.trim() === "") {
      return;
    }
    const newTask = {
      id: Date.now(),
      text: newTaskText,
    };

    dispatch(addTask({ columnId: column.id, task: newTask }));
    // onAddTask(column.id);
    setNewTaskText("");
    setCardsOpen(true);
  };

  const handleRemoveTask = (columnId) => {
    dispatch(removeColumnFromList({ columnId }));
    setOpenModal(false);
  };

  const openModalHandle = () => {
    setOpenModal(true);
  };

  const handleSaveTitle = () => {
    if (editedTitle.trim() !== "") {
      dispatch(
        updateColumnTitle({ columnId: column.id, newTitle: editedTitle })
      );
    }
    setIsEditingTitle(false);
  };

  const handleOpenCards = () => {
    setCardsOpen(false);
  };

  return (
    <Container>
      {isEditingTitle ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onBlur={handleSaveTitle}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSaveTitle();
            }
          }}
          autoFocus
        />
      ) : (
        <CardsStyled>
          <h3 onClick={() => setIsEditingTitle(true)}>{column.title}</h3>

          {openmodal && (
            <ModalContainer onClick={()=>setOpenModal(false)}>
              <ModalContent>
                <button onClick={()=>handleRemoveTask(column.id)}>
                  Архивировать колонку
                </button>
              </ModalContent>
            </ModalContainer>
          )}

          <img onClick={openModalHandle} src={menuRemove} alt="delete" />
        </CardsStyled>
      )}
      <div>
        {column.tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>

      {cardsOpen ? (
        <ButtonStyle onClick={handleOpenCards}>Добавить карточку</ButtonStyle>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
            width: "100%",
            margin: "10px",
          }}
        >
          <input
            style={{
              width: "99%",
              height: "8vh",
              border: "none",
              borderRadius: "7px",
              textAlign: "center",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
            type="text"
            placeholder="Ввести заголовок для этой карточки"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />
          <button
            style={{
              width: "150px",
              height: "35px",
              borderRadius: "5px",
              border: "none",
              color: "white",
              backgroundColor: "blue",
            }}
            onClick={handleAddTask}
          >
            Добавить карточку
          </button>
        </div>
      )}
    </Container>
  );
};

export default Column;

const Container = styled.div`
  padding: 3px;
  margin: 15px;
  border: none;
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: #d9dce7;
  border-radius: 10px;
  height: fit-content;
`;

const CardsStyled = styled.div`
  display: flex;
  gap: 200px;
  img {
    width: 25px;
  }
`;
const ButtonStyle = styled.button`
font-size: 15px;
font-weight:700;
  width: 100%;
  height: 5vh;
  border: none;
  color:blue;
  background-color: #d9dce7;
  &:hover{
    background-color:#c3c9dd;
    color: #092788;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top:90px;
  left:305px ;
  width: 35%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  /* display: flex;
  justify-content: center;
  align-items: center; */
  z-index: 100; 
 
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  button{
    font-size: 15px;
    font-weight:700;
    border: none;
    width: 15rem;
    height: 4vh;
    background-color:white;
  }
`;
