import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { updateColumnTitle } from "../../redux/slices/columnSlice";

const Task = ({ task }) => {
    const [isEditTask, setIsEditTask]=useState(false)
    const [editTask, setEditTas]=useState(task.text)
    const dispatch = useDispatch();

    const handleSaveTask = () => {
        if (editTask.trim() !== "") {
          dispatch(
            updateColumnTitle({ columnId: task.id, newTitle: editTask })
          );
        }
        setIsEditTask(false);
      };

  return <TaskStyled>{task.text}</TaskStyled>;
};

export default Task;

const TaskStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 2vh;
  padding: 10px;
  margin: 5px;
  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
