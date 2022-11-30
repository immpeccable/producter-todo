import React, { useState } from "react";

import {
  AddButton,
  BottomSection,
  HeaderWrapper,
  InputSection,
  InputWrapper,
  Item,
  ItemText,
  LeftSide,
  RootWrapper,
  RoundCheckButton,
  TickImage,
  TodoItemSection,
  RightSide,
} from "./StyledHome";

import Tick from "./check.png";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = () => {
    if (newItem !== "") {
      setItems([...items, { text: newItem, checked: false }]);
      setNewItem("");
      document.getElementById("input-id").value = "";
    }
  };

  const handleCheck = (index) => {
    let newItems = [...items];
    let newItem = { ...items[index] };
    newItem = { ...newItem, checked: !newItem.checked };
    newItems[index] = newItem;
    console.log("new items", newItems);
    setItems(newItems);
  };
  const handleClear = () => {
    let newItems = items.filter((item) => {
      return !item.checked;
    });
    setItems(newItems);
  };
  return (
    <RootWrapper>
      <HeaderWrapper>Daily To Do List</HeaderWrapper>
      <InputSection>
        <InputWrapper
          id="input-id"
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
          placeholder="Add new list item"
        />
        <AddButton onClick={handleSubmit}>Add</AddButton>
      </InputSection>
      <TodoItemSection>
        {items.map((item, index) => (
          <Item>
            <RoundCheckButton
              isChecked={item.checked}
              onClick={() => {
                handleCheck(index);
              }}
            >
              {item.checked && <TickImage alt="tick" src={Tick} />}
            </RoundCheckButton>
            <ItemText isChecked={item.checked}>{item.text}</ItemText>
          </Item>
        ))}
      </TodoItemSection>
      <BottomSection>
        <LeftSide>{items.length + " items selected"}</LeftSide>
        <RightSide onClick={handleClear}>Clear All</RightSide>
      </BottomSection>
    </RootWrapper>
  );
}

export default App;
