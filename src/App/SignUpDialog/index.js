import * as React from 'react';
import Dialog from './Dialog';

const SignUpDialog = () => {
  const [username, setUsername] = React.useState('');
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSignUp = () => {
    console.log(`${username} is signed up`);
  }
  const Comment = () => (
    <p>
      No Comment
    </p>
  )

  return(
    <Dialog
      title="Mars Exploration Program"
      message="How we should refer to you?"
      comment={
        <Comment />
      }
    >
      <input value={username} onChange={handleChange}/>
      <button onClick={handleSignUp}>
        Sign Me Up!
      </button>
    </Dialog>
  )
}

export default SignUpDialog;
