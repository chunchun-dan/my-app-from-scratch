import * as React from 'react';

const Clock = () => {
  const [clock, setClock] = React.useState(new Date());

  React.useEffect(() => {
    setInterval(() => setClock(new Date()), 1000);
  }, [clock]);

  return(
    <div>
      <h1>
        {'Hello World!'}
      </h1>
      <h2>{`It is ${clock.toLocaleTimeString()}`}</h2>
    </div>
  )

}

export default Clock;
