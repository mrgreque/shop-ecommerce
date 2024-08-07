import styled from 'styled-components';
import { Column } from '../../global/styled';
import { Link } from 'react-router-dom';

const StyledHeaderHighlight = styled.div``;

const StyledHighlightImage = styled.img`
  height: 15em;
  width: 11em;
  object-fit: cover;
  cursor: pointer;
  margin-right: 1em;
`;

const StyledHighlightColumn = styled(Column)`
  align-items: center;
`;

const StyledHighlightTitle = styled(Link)`
  font-size: 1em;
  font-weight: 600;
  margin-top: 0.2em;
  color: #000;
  text-decoration: none;
  cursor: pointer;
`;

const StyledHighlightValue = styled.div`
  font-size: 0.9em;
  margin-top: 0.1em;
  color: #7b7b7b;
`;

export {
  StyledHeaderHighlight,
  StyledHighlightImage,
  StyledHighlightColumn,
  StyledHighlightTitle,
  StyledHighlightValue,
};
