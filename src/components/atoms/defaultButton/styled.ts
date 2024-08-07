import styled from 'styled-components';

const StyledButton = styled.button<{
  width?: string;
  height?: string;
  color?: string;
}>`
  background-color: ${(props) =>
    props.color === 'primary' ? '#454545' : 'transparent'};
  color: ${(props) => (props.color === 'primary' ? '#fff' : '#454545')};
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #454545;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  &:hover {
    background-color: ${(props) =>
      props.color === 'primary' ? '#000' : 'transparent'};
    color: ${(props) => (props.color === 'primary' ? '#fff' : '#000')};
    border: 2px solid #000;
  }
`;

export { StyledButton };
