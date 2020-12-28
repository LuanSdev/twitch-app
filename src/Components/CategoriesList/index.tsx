import React from 'react';

import data from './data';

import { Container, CategoryContainer, CategoryImage, CategoryName, CategoryStatus, RedCircle, Info, List } from './styles';

interface  _ItemProps{
  item: typeof data[0]
}

const CategoriesList: React.FC = () => {
  const CategoryItem: React.FC<_ItemProps> = ({item}) => (
    <CategoryContainer>
      <CategoryImage source={item.source}/>
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle/>
        <Info>12</Info>
      </CategoryStatus>
    </CategoryContainer>
  )

  return (
    <List>
      {
        data.map(item => (
          <CategoryItem key={item.name} item={item}/>
        ))
      }
    </List>
  );
};

export default CategoriesList;
