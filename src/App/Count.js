import * as React from 'react';

const Count = () => {
  const [count, setCount] = React.useState(0);

  return(
    <div>
      <p>{`You clicked ${count} times.`}</p>
      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  )
}

export default Count;
