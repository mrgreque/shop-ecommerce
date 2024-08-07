import { HeaderHighlightProps } from './types';
import {
  StyledHeaderHighlight,
  StyledHighlightColumn,
  StyledHighlightImage,
  StyledHighlightTitle,
  StyledHighlightValue,
} from './styled';
import { useNavigate } from 'react-router-dom';
import { normalizeTitleToUrl } from '../../../helpers/NormalizeToRoute';

const HeaderHighlight = ({
  image,
  title,
  value,
  category,
}: HeaderHighlightProps) => {
  const url = `/${category.toLocaleLowerCase()}/${normalizeTitleToUrl(title)}`;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };

  return (
    <StyledHeaderHighlight>
      <StyledHighlightImage src={image} onClick={handleClick} />

      <StyledHighlightColumn>
        <StyledHighlightTitle to={url}>{title}</StyledHighlightTitle>
        <StyledHighlightValue>{value}</StyledHighlightValue>
      </StyledHighlightColumn>
    </StyledHeaderHighlight>
  );
};

export default HeaderHighlight;
