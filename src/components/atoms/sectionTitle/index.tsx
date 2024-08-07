import { SectionTitleProps } from './types';
import { StyledSectionTitle } from './styled';

const SectionTitle = ({ children }: SectionTitleProps) => {
  return <StyledSectionTitle>{children}</StyledSectionTitle>;
};

export default SectionTitle;
