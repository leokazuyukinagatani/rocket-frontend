import { Container, Content } from "./styles";
import { Button } from '../Button';
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export function Section({ title, isButton, children }) {
  const navigate = useNavigate();
  function handleAddMovie() {
    navigate("/new")
  }
  
  
  return(
    <Container>
      <div className="header">
        <h2>{title}</h2>
        {
          isButton &&
          <Button title="Adicionar rocket" icon={FiPlus} onClick={handleAddMovie}/>
        }
      </div>
      <Content>
        {children}
      </Content>
    </Container>
  );
}