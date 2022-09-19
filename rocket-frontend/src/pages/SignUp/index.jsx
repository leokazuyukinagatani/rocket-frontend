import { useState } from 'react'
import { FiMail ,FiLock, FiUser,FiArrowLeft} from 'react-icons/fi'
import { Container, Form, Background} from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import {useNavigate } from 'react-router-dom'

import { api } from '../../services/api';
import isEmail from 'validator/lib/isEmail';
import { toast } from 'react-toastify';

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){

    if(!name || !email || !password){
      toast.error("error");
      return;
    }
    if(!isEmail(email)){

      return toast.error("Email invalido");
    }
    
    api.post("/users",{ name, email, password })
    .then(() => {
      navigate("/");
    })
    .catch( error => {
      if(error.response){
        toast.error("Preencha todos os campos.");
      }else{
        toast.error("Não foi possivel cadastrar o usuário.");
      }
    });
  }
  function handleSignIn(){
    navigate(-1);
  }

  return(
    <Container>
      <Form>
        <h1>Rocket</h1>
        <p>Aplicação para cadastrar seus foguetes.</p>
        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />
        <Button title="Cadastrar" onClick={handleSignUp} />
        <Button title="Voltar para o login" icon={FiArrowLeft} className="btn-login" onClick={handleSignIn} />
      </Form>
      <Background/>

    </Container>
  )
}