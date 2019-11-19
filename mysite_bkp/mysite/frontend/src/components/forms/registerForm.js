import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from "reactstrap";

export class RegisterForm extends Component {
  render() {
    return (
      <Container className="Register">
        <Form>
          <FormGroup>
            <Label for="exampleEmail">E-mail</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="pw">Senha</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Digite sua Senha"
            />
          </FormGroup>
          <FormGroup>
            <Label for="pwconf">Confirme sua Senha</Label>
            <Input
              type="pwconf"
              name="pwconf"
              id="pwconf"
              placeholder="Confirme sua Senha"
            />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default RegisterForm;
