import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Rocket } from '../../components/Rocket';
import { Button } from '../../components/Button';
import { FiPlus } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

import { Input } from '../../components/Input';

export function Home() {

  const[rockets, setRockets] = useState([]);
  const[search, setSearch] = useState("");
  

  
  const navigate = useNavigate();
  
  function handleDetails(id) {
    navigate(`/details/${id}`);
  }
  
  useEffect(() => {
    async function fetchRockets(){
      try{
        const response = await api.get(`/rockets?title=${search}`);
        console.log(response);
        setRockets(response.data);
      }catch(error){
        if(error.data){
          toast.error(error.data.message);
        }
        else{
          toast.error("não foi possível encontrar o rocket solicitado");
        }
      }
    }

    fetchRockets();
  },[search]);

  return(
    <Container>
      <Header>
       <Input placeholder="Pesquisar pelo nome" value={search} onChange={e => setSearch(e.target.value)} />
      </Header>
      <Content>
        <Section title="Meus Rockets" isButton>

          {
            rockets && rockets.map((rocket) =>(
              <Rocket key={rocket.id} data={rocket}
              onClick={() => handleDetails(rocket.id)}
              /> 
            ))
          }
          
        </Section>
      </Content>
    </Container>
  )
}