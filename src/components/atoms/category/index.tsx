import { CategoryProps } from './types';
import { StyledCategory } from './styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Category = ({ name, onChangeCategory }: CategoryProps) => {
  return (
    <StyledCategory
      onMouseEnter={() => {
        onChangeCategory(name);
      }}
    >
      {name}
      <KeyboardArrowDownIcon />
    </StyledCategory>
  );
};

export default Category;
