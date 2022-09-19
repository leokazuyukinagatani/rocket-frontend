
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";

import { Container, ButtonBack, Content } from "./styles";

import { FiArrowLeft } from "react-icons/fi";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export function Update() {
  const { id } = useParams();
  const MySwal = withReactContent(Swal);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [height, setHeight] = useState("");
  const [mass, setMass] = useState("");
  const [diameter, setDiameter] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  async function handUpdateRocket() {
    if(!name || !description || !height || !mass || !diameter){
      return toast.error("Preencha todos os campos");
    }
    
    try{
     
      await api.put("/rockets",{
        id,
        name,
        description,
        height,
        diameter,
        mass,
        photo
      });
      toast.success("Rocket atualizado com sucesso!",navigate("/"));

    }catch(error){
      if(error.response){
        return toast.error(error.response.data.message);
      }else {
        return toast.error("Não foi possível atualizar o rocket.");
      }
    }
 
  }

  async function handleRemoveRocket() {
    const result = await MySwal.fire({
      title: 'Tem certeza que deseja deletar?',
      text: "Você não podera reverter esta ação!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#11dd44',
      cancelButtonColor: '#d33',
      background:"#000",
      confirmButtonText: 'Sim, apague!',
      color: "#fff",
      iconColor: "#f00"
    })
    console.log(result.isConfirmed);
   
      if (result.isConfirmed) {
        try{
          await api.delete(`/rockets/${id}`);
        }catch(error){
          if(error.data){
            toast.error(error.data);
          }
          else{
            toast.error("Não foi possível deletar o rocket.")
          }
        }
        MySwal.fire(
          { title: 'Deletado!',
          text: 'Seu rocket foi deletado com sucesso.',
          icon: 'success',
          background: "#000",
          color: "#fff",
          didClose: () => {
            navigate("/");
          }
        })
      }
    
  }
  
  

  useEffect(() => {
  
    async function fetchRocket(){
      try{
        const { data } = await api.get(`/rockets/${id}`);

        setName(data.name);
        setDescription(data.description);
        setHeight(data.height);
        setDiameter(data.diameter);
        setMass(data.mass);
        setPhoto(data.photo)

      }catch(error){
        if(error.data){
          toast.error(error.data.message);
        }else {
          toast.error("Não foi possível localizar o rocket");
        }

      } 
     
    }

    fetchRocket();
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
        <h1>Editar Rocket</h1>
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
              value={height}
              type="number"
            />
            <Input
              placeholder="Massa"
              onChange={e => setMass(e.target.value)}
              value={mass}
              type="number"
            />

            <Input
              placeholder="Diâmetro"
              onChange={e => setDiameter(e.target.value)}
              value={diameter}
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
          <Button title="Deletar" onClick={handleRemoveRocket}/>

          <Button title="Salvar" onClick={handUpdateRocket}/>
       </div>
       </Content>
      
      </form>
    
  </Container>
 );
}