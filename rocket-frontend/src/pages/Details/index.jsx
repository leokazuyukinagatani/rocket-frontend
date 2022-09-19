import { Header } from "../../components/Header/index.jsx";
import { Container } from "./styles.js";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api.js";
import { useAuth } from "../../hooks/auth.jsx";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import {FiArrowLeft} from 'react-icons/fi';

export function Details() {

  const params = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  function handleNavigate() {
    navigate(-1);
  }
  function handleEdit() {
    navigate(`/update/${data.id}`);
  }

  useEffect(()=>{
    async function fetchRockets(){
      const response = await api.get(`/rockets/${params.id}`);
      setData(response.data);
    } 
    
    fetchRockets(); 
  },[])

  return(
    <Container>
      <Header/>
      
      <div className="buttons">
        <Button title="Voltar" onClick={handleNavigate} icon={FiArrowLeft}/>          
        <Button title="Editar" onClick={handleEdit}/>
      </div>
      {
        data &&
        <div className="content">
          <Card data={data}/>
        </div>
      }


      
    </Container>
  );
}