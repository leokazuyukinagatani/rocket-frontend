
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";

import { Container, ButtonBack, Content } from "./styles";

import { FiArrowLeft } from "react-icons/fi";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function New() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [height, setHeight] = useState("");
  const [mass, setMass] = useState("");
  const [diameter, setDiameter] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  async function handleNewRocket() {
    if(!name || !description || !height || !mass || !diameter){
      return toast.error("Preencha todos os campos");
    }
    
    try{
     
      await api.post("/rockets",{
        name,
        description,
        height,
        diameter,
        mass,
        photo
      });
      toast.success("Rocket cadastrado com sucesso!",navigate("/"));

    }catch(error){
      if(error.response){
        return toast.error(error.response.data.message);
      }else {
        return toast.error("Não foi possível cadastrar o rocket.");
      }
    }
 
  }
  
  function handleClearRocket() {
    setName("");
    setDescription("");
    setHeight("");
    setDiameter("");
    setMass("");
    setPhoto("");
  }

  useEffect(() => {
  
  },[]);
  return(
  <Container>
    <Header/>
        <ButtonBack to="/">
            <FiArrowLeft/>
            Voltar
        </ButtonBack>
      <form>
       <Content>
        <h1>Novo Rocket</h1>
        <section>
          <Input 
              placeholder="Nome" 
              onChange={e => setName(e.target.value)}
              value={name}
            />
          <div className="col-3">
            <Input
              placeholder="Altura"
              onChange={e=> setHeight(e.target.value)}
              type="number"
            />
            <Input
              placeholder="Massa"
              onChange={e => setMass(e.target.value)}
              type="number"
            />

            <Input
              placeholder="Diâmetro"
              onChange={e => setDiameter(e.target.value)}
              type="number"
            />
          </div>
          <Textarea 
            placeholder="Descrição"
            onChange={e => setDescription(e.target.value)}
            value={description}
            />   
          <Input 
            placeholder="URL da imagem do rocket" 
            onChange={e => setPhoto(e.target.value)}
            value={photo}
          />
        </section>
        <div className="buttons">
          <Button title="Limpar" onClick={handleClearRocket}/>

          <Button title="Salvar" onClick={handleNewRocket}/>
       </div>
       </Content>
      
      </form>
    
  </Container>
 );
}