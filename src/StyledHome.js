import styled from "styled-components";

export const RootWrapper = styled.div`
  max-width: 768px;
  margin: 5em auto 2em auto;
  @media screen and (max-width: 768px) {
    margin: 5em 1em 2em 1em;
  }
`;

export const HeaderWrapper = styled.div`
  color: var(--dark-blue);
  font-weight: 700;
  font-size: 2.6rem;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3em;
  justify-content: center;
  border: 2px solid var(--border-color);
  padding-right: 0.5em;
  border-radius: 6px;
`;

export const InputWrapper = styled.input`
  padding: 1.5em 2em 1.5em 1em;
  width: 100%;
  border: none;
`;

export const AddButton = styled.button`
  background-color: var(--light-blue);
  font-size: 1.1.rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 1em 2em;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

export const TodoItemSection = styled.div`
  margin: 3em 0 0 1em;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  min-height: 40vh;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
`;
export const RoundCheckButton = styled.button`
  border-radius: 50%;
  border: 2px solid var(--border-color);
  background-color: ${(props) =>
    props.isChecked ? "var(--check-color)" : "white"};
  height: 32px;
  width: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemText = styled.div`
  color: ${(props) =>
    props.isChecked ? "var(--checked-text-color)" : "var(--text-color)"};
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
  &:hover {
    color: ${(props) => (props.isChecked ? "auto" : "var(--light-blue)")};
  }
  font-weight: 600;
`;

export const TickImage = styled.img`
  height: 12px;
  width: auto;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid var(--border-color);
  padding: 1.5em 1em;
  margin-top: 3em;
`;

export const LeftSide = styled.div`
  color: var(--bottom-text-color);
  font-size: 1rem;
  font-weight: 500;
`;

export const RightSide = styled.div`
  color: var(--bottom-text-color);
  font-weight: 500;
  cursor: pointer;
`;
