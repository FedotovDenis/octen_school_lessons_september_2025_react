import { FC } from 'react';
type MyComponentPropType = { text: string };
import './MyComponent.css';

const MyComponent: FC<MyComponentPropType> = ({text}) => {
  return (
      <div className={'target'}>
          {text}
        </div>
  );
};
export default MyComponent;