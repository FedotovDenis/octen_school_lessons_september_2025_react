import { FC, ReactNode} from 'react';
import './MyComponent.css';

type MyComponentPropType = {
    text: string;
    children?: ReactNode;
};


const MyComponent: FC<MyComponentPropType> = ({title, children}) => {
  return (
      <div className='text-3xl font-bold underline0'>
          <h3>{title}</h3>
          <p>{children}</p>
        </div>
  );
};
export default MyComponent;