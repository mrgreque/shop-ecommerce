type Highlight = {
  title: string;
  link: string;
  value: string;
};

type Subcategory = {
  name: string;
  link: string;
};

type Category = {
  name: string;
  subcategories: Subcategory[];
  highlights: Highlight[];
};

export type SubCategoryContainerProps = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  selectedCategory: Category;
};
