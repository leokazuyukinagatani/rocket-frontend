import { Container } from './styles';
export function Card({ data, ...rest }) {
  const rocketURL = data.photo ? data.photo : "https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-erro-404_114360-1811.jpg?w=1060&t=st=1663553011~exp=1663553611~hmac=c7c2f511a47e3c3016ccad4eb7811312e0a9d68607ba7b335640e11ee043170b" ; 
  return (
    <Container>
       
        <img src={rocketURL} />  
        <div className="content">
          <h1>{data.name}</h1>
          <h3>Descrição:</h3>
          <div className="text">{data.description}</div>
          <h3>Dados Técnicos:</h3>
          <span className="info">Diametro: {data.diameter}</span>
          <span className="info">Altura: {data.height}</span>
          <span className="info">Massa: {data.mass}</span>
        </div>
    </Container>
    
  );
}