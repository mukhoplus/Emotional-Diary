import { useState } from "react";
import MyButton from "./MyButton";

const sortOptionList = [
  { value: "lastest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const filterOptionList = [
  { value: "all", name: "전체" },
  { value: "good", name: "기쁨" },
  { value: "soso", name: "보통" },
  { value: "bad", name: "슬픔" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const [sortType, setSortType] = useState("lastest");
  const [filter, setFilter] = useState("all");

  const getProcessedDiaryList = () => {
    const compare = (a, b) => {
      if (sortType === "lastest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const filterCallback = (it) => {
      if (filter === "good") return parseInt(it.emotion) > 3;
      else if (filter === "soso") return parseInt(it.emotion) === 3;
      else if (filter === "bad") return parseInt(it.emotion) < 3;
    };

    const copyList = JSON.parse(JSON.stringify(diaryList));
    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallback(it));
    const sortedList = filteredList.sort(compare);

    return sortedList;
  };

  return (
    <div>
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />

      <ControlMenu
        value={filter}
        onChange={setFilter}
        optionList={filterOptionList}
      />

      <MyButton type={"positive"} text={"새 일기 쓰기"} onClick={}/>

      {getProcessedDiaryList().map((it) => (
        <div key={it.id}>
          {it.content} {it.emotion}
        </div>
      ))}
    </div>
  );
};

export default DiaryList;
