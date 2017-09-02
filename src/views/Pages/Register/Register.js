import React, {Component} from "react";
import {Container, Row, Col, Card, CardBlock, CardFooter, Button, Input, InputGroup, InputGroupAddon} from "reactstrap";

class Register extends Component {
    constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };

    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this); }


    firstNameChange(event) {
    this.setState({
      firstName: event.target.value});
    console.log(this.state.firstName)
  }

  lastNameChange(event) {
    this.setState({
      lastName: event.target.value});
    console.log(this.state.lastName)
  }

  emailChange(event) {
    this.setState({
      email: event.target.value});
    console.log(this.state.email)
  }

   passwordChange(event) {
    this.setState({
      password: event.target.value});
    console.log(this.state.password)
  }
    usernameChange(event) {
    this.setState({
      password: event.target.value});
    console.log(this.state.password)
  }

  buttonClicked() {
    console.log('this button had been clicked');
}





  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBlock className="card-body p-4">
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <InputGroup className="mb-3">
                    <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                    <Input type="text" onChange={this.firstNameChange} placeholder="First Name"/>
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                    <Input type="text" onChange={this.lastNameChange} placeholder="Last Name"/>
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroupAddon>@</InputGroupAddon>
                    <Input type="text" onChange={this.usernameChange} placeholder="User Name"/>
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroupAddon>@</InputGroupAddon>
                    <Input type="text" onChange={this.emailChange} placeholder="Email"/>
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                    <Input type="password"  onChange={this.emailChange} placeholder="Password"/>
                  </InputGroup>
                  <div className='text-center'>
                  <Button className="btn-success" 
                  onClick={this.buttonClicked.bind(this)}>Submit</Button>
                  </div>
                
                  
                </CardBlock>
                <CardFooter className="p-4">
                  <Row>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;

// class Register extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// export default Register;
