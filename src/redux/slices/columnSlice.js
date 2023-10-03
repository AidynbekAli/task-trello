// src/features/columnsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const columnsSlice = createSlice({
  name: "columns",
  initialState: {
    columns: [],
    create: false,
  },
  reducers: {
    addColumn: (state, action) => {
      state.columns.push(action.payload);
    },
    addTask: (state, action) => {
      const { columnId, task } = action.payload;
      const column = state.columns.find((col) => col.id === columnId);
      if (column) {
        column.tasks.push(task);
      }
    },
    removeColumnFromList: (state, action) => {
      const { columnId } = action.payload;
      state.columns = state.columns.filter((col) => col.id !== columnId);
    },
    updateColumnTitle: (state, action) => {
      const { columnId, newTitle } = action.payload;
      const columnToUpdate = state.columns.find((col) => col.id === columnId);
      if (columnToUpdate) {
        columnToUpdate.title = newTitle;
      }
    },
    createToggleHandler: (state) => {
      return { ...state, create: !state.create };
    },
  },
});

export const {
  addColumn,
  addTask,
  updateColumnTitle,
  removeColumnFromList,
  createToggleHandler,
} = columnsSlice.actions;
export default columnsSlice;
