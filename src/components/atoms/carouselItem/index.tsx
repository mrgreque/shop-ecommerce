import { CarouselItemProps } from './types';
import {
  StyledColumn,
  StyledImage,
  StyledThumbnail,
  StyledTitle,
  StyledValue,
} from './styled';
import { normalizeTitleToUrl } from '../../../helpers/NormalizeToRoute';
import { useNavigate } from 'react-router-dom';

const CarouselItem = ({ image, title, value }: CarouselItemProps) => {
  const url = `/hot-list/${normalizeTitleToUrl(title)}`;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };
  return (
    <StyledThumbnail>
      <StyledImage src={image} draggable="false" onClick={handleClick} />

      <StyledColumn>
        <StyledTitle to={url}>{title}</StyledTitle>
        <StyledValue>{value}</StyledValue>
      </StyledColumn>
    </StyledThumbnail>
  );
};

export default CarouselItem;
