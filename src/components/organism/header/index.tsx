import { useMemo, useState } from 'react';
import { StyledHeader, StyledNav } from './styled';
import { Row } from '../../global/styled';
import Category from '../../atoms/category';
import SubCategoryContainer from '../../molecules/subCategoryContainer';
import HeaderActions from '../../molecules/headerActions';
import { mockedCategories } from '../../../mock/categories';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    window.pageYOffset > 0 ? setScrolled(true) : setScrolled(false);
  };

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isSubcategoryHovered, setIsSubcategoryHovered] = useState(false);
  const [selectedCategoryName, setSelectedCategoryName] = useState<string>('');

  const handleMouseEnterCategory = () => {
    setIsHovered(true);
  };

  const handleMouseLeaveCategory = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 200);
  };

  const handleMouseEnterSubcategory = () => {
    setIsSubcategoryHovered(true);
  };

  const handleMouseLeaveSubcategory = () => {
    setTimeout(() => {
      setIsSubcategoryHovered(false);
    }, 200);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategoryName(category);
  };

  const selectedCategory = useMemo(() => {
    return mockedCategories.find(
      (category) => category.name === selectedCategoryName,
    );
  }, [selectedCategoryName]);

  return (
    <StyledHeader scrolled={scrolled}>
      <StyledNav>
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            width: '8em',
          }}
        />

        <Row
          onMouseEnter={handleMouseEnterCategory}
          onMouseLeave={handleMouseLeaveCategory}
        >
          {mockedCategories.map((category) => (
            <Category
              name={category.name}
              onChangeCategory={handleSelectCategory}
            />
          ))}
        </Row>
        {(isHovered || isSubcategoryHovered) && selectedCategory && (
          <SubCategoryContainer
            onMouseEnter={handleMouseEnterSubcategory}
            onMouseLeave={handleMouseLeaveSubcategory}
            selectedCategory={selectedCategory}
          />
        )}

        <HeaderActions />
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
