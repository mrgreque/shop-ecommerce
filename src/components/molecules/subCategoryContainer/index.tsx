import { SubCategoryContainerProps } from './types';
import {
  StyledSubCategory,
  StyledSubCategoryLink,
  StyledSubCategoryTitle,
} from './styled';
import { Column, Row } from '../../global/styled';
import HeaderHighlight from '../../atoms/headerHighlight';

const SubCategoryContainer = ({
  onMouseEnter,
  onMouseLeave,
  selectedCategory,
}: SubCategoryContainerProps) => {
  return (
    <StyledSubCategory onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Row align="flex-start">
        <Column width="10em">
          <StyledSubCategoryTitle>
            {selectedCategory.name}
          </StyledSubCategoryTitle>

          {selectedCategory.subcategories.map((subcategory) => (
            <StyledSubCategoryLink to={subcategory.link}>
              {subcategory.name}
            </StyledSubCategoryLink>
          ))}
        </Column>

        <Column>
          <Row margin="0 0 0 10em">
            {selectedCategory.highlights.map((highlight) => (
              <HeaderHighlight
                image={highlight.link}
                title={highlight.title}
                value={highlight.value}
                category={selectedCategory.name}
              />
            ))}
          </Row>
        </Column>
      </Row>
    </StyledSubCategory>
  );
};

export default SubCategoryContainer;
