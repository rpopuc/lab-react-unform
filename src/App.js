import React from 'react';
import * as Yup from 'yup';
import { Form, Scope, Input } from '@rocketseat/unform';

const initialData = {
  name: 'Diego',
  address: {
    street: 'Rua Guilherme Gemballa',
    number: '260',
  }
}

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  address: Yup.object().shape({
    number: Yup.string().min(3, 'Número precisa ter 3 dígitos').required('Campo obrigatório')
  })
})

function App() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <Form schema={schema} onSubmit={handleSubmit} initialData={initialData}>
      <Input name="name" label="Nome: " /><br/>
      <Scope path="address">
        <Input name="street" label="Rua: " /><br/>
        <Input name="number" label="Número: " /><br/>
      </Scope>

      <button type="submit">Enviar</button>
    </Form>
  );
}

export default App;
