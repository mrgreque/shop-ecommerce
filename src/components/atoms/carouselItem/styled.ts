import styled from 'styled-components';
import { Box } from '@mui/material';
import { Column } from '../../global/styled';
import { Link } from 'react-router-dom';

const StyledThumbnail = styled(Box)`
  min-width: 8.5em;
  height: 28em;
  background-size: cover;
  background-position: center;
  border-radius: 0.625em;
  margin-right: 1em;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 85%;
  object-fit: cover;
  cursor: pointer;
`;

const StyledColumn = styled(Column)`
  align-items: center;
`;

const StyledTitle = styled(Link)`
  font-size: 1.2em;
  font-weight: 600;
  margin-top: 0.5em;
  color: #454545;
  text-decoration: none;
`;

const StyledValue = styled.p`
  font-size: 0.9em;
  margin-top: 0.2em;
  color: #7b7b7b;
`;

export { StyledThumbnail, StyledImage, StyledColumn, StyledTitle, StyledValue };
