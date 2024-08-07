import { TextField } from '@mui/material';
import styled from 'styled-components';

const StyledTextField = styled(TextField)<{ flex: number }>`
  margin: 0 10em;
  flex: ${(props) => props.flex};
  background-color: #f5f5f5;
  border-radius: 0.3em;

  &:focus {
    border-color: #8c83ad;
  }
`;

export { StyledTextField };
