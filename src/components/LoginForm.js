import React, { Component } from 'react';
import { Button ,Card ,CardSection,Input } from './common'


class LoginForm extends Component {
  state = { email: '', password: '' };
  render() {
    return (
      <Card>
         <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
         </CardSection>
         <CardSection>
         <Input
            secureTextEntry
           placeholder="password"
           label="password"
           value={this.state.password}
           onChangeText={password => this.setState({ password })}
         />
         </CardSection>
         <CardSection>
          <Button>Login In </Button>
         </CardSection>
      </Card>
    )
  }
}

export default LoginForm;
