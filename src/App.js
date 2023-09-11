import React, { useReducer, useRef } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

const reducer = (state, action) => {
  let newState = [];

  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }

  return newState;
};

export const DiaryStateContext = React.createContext(); // State 데이터를 Provider로 하위 컴포넌트에 전달
export const DiaryDispatchContext = React.createContext(); // Dispatch 함수를 Provider로 하위 컴포넌트에 전달(Dispatch : Action을 발생시키는 함수)

const dummyData = [
  { id: 1, emotion: 1, content: "오늘의 일기 1번", date: 1694069928838 },
  { id: 2, emotion: 4, content: "오늘의 일기 2번", date: 1694069930000 },
  { id: 3, emotion: 5, content: "오늘의 일기 3번", date: 1694070000000 },
  { id: 4, emotion: 5, content: "오늘의 일기 4번", date: 1694070000001 },
  { id: 5, emotion: 2, content: "오늘의 일기 5번", date: 1694070000002 },
];

function App() {
  const [data, dispatch] = useReducer(reducer, [...dummyData]);

  const dataId = useRef(0);

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: ++dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  const onRemove = (targetId) => {
    dispatch({
      type: "REMOVE",
      targetId,
    });
  };

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
