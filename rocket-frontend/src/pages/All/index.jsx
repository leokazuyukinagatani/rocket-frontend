import { Container } from './styles'
import { FiLogIn } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from "../../services/api.js";
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

export function All() {

  const [data, setData] = useState(null);
  const navigate = useNavigate();

  function handleNavigate() {
    navigate('/login');
  }
  useEffect(() => {
    async function fetchRockets() {
      try {
        const response = await api.get('/rockets/all');
        setData(response.data);
      } catch(error){
        if(error.response){
          return toast.error(error.response.data.message);
        }else {
          return toast.error("Não foi possível localizar os rockets.");
        }
      }
    }
    fetchRockets();
    console.log(data);

  },[])

  return(
    <Container>

      <Button className="btn-all" title="Faça seu login" onClick={handleNavigate} icon={FiLogIn}/>
    
      {
        data && data.map((rocket, index)=>(
          <Card 
            key={index}
            data={rocket}/>
          ))
          
        }
    
    
    </Container>
  )
}