import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  compiler: string,
  framework: string,
};

const Hello: React.FC<Props> = (props) => {
  return (
    <>
      <span>{props.compiler}</span>
      <span>{props.framework}</span>
    </>
  );
}


ReactDOM.render(<Hello compiler="typescript" framework="react"/>, document.querySelector("#app"));
