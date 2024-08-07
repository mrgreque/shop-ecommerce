import styled from 'styled-components';

const StyledCustomLeftArrow = styled.button`
  position: absolute;
  left: 1em;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background: transparent;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  background-color: #ded7f1;
  border-radius: 50%;
  padding: 0.3em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCustomRightArrow = styled.button`
  position: absolute;
  right: 1em;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background: transparent;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  background-color: #ded7f1;
  border-radius: 50%;
  padding: 0.3em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { StyledCustomLeftArrow, StyledCustomRightArrow };
