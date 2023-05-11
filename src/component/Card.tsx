import React, {FC} from 'react';

export enum CardVariant {
    outlined = 'outline',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    children?: React.ReactChild| React.ReactNode
    variant: CardVariant
} 

const Card: FC<CardProps> =
    ({  width,
        height,
        variant,
        children
        
    }) => {
  return (
      <div style={{
          width, height, border: variant === CardVariant.outlined ? '1px solid grey' : 'none',
          background: variant === CardVariant.primary ? 'lightgrey' : ''
      }} >
        {children}
    </div>
  )
};

export default Card;