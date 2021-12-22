import React from 'react';

// const Form = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Button is clicked');
//   }

//   return(
//     <form onClick={handleSubmit}>
//       <button type="submit">
//         Submit
//       </button>
//     </form>
//   )
// }

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, id){
    e.preventDefault();
    console.log('Button is clicked'+ id);
  };

  render() {
    return(
      <form onSubmit={(e) => this.handleSubmit(e, '1')}>
        <button type="submit">
          Submit
        </button>
      </form>
    )
  }

}

export default Form;
