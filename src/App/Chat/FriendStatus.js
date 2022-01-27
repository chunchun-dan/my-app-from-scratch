import * as React from 'react';

const FriendStatus = (friend) => {
  const [isOnline, setIsOnline] = React.useState();

  const handleStatusChange = (status) => {
    setIsOnline(status.isOnline);
  };

  React.useEffect(() => {
    ChatAPI.subscribeToFriendStatus(
      friend.id,
      handleStatusChange,
    )
    //Requires cleanup after a component renders
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(
        friend.id,
        handleStatusChange
      )
    }
  });

  if (isOnline === undefined) {
    return <div>{'Loading'}</div>;
  };

  return(
    <div>
      {isOnline ? 'Online' : 'Offline';}
    </div>
  );
}

export default FriendStatus;
