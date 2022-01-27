import * as React from 'react';

const Count = () => {
  const [count, setCount] = React.useState(0);

  //By using the Hook, you tell React that your component needs to do sth after render
  //By default it runs both after the first render and after every update
  React.useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

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
