import React, {useState, FC} from 'react';

export enum CardVariant {
    outlined = 'outline',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    children?: React.ReactChild | React.ReactNode;
    variant: CardVariant;
    onClick: (num: number) => void; //если функция не возвращает параметрі ставим void
} 

const Card: FC<CardProps> =
    ({  width,
        height,
        onClick,
        variant,
        children
        
    }) => {
        const [state, setState] = useState(0);
  return (
      <div style={{
          width, height, border: variant === CardVariant.outlined ? '1px solid grey' : 'none',
          background: variant === CardVariant.primary ? 'lightgrey' : ''
      }}
      onClick={()=>onClick(state)}
      >
        {children}
    </div>
  )
};

export default Card;