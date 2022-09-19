import { Container } from './styles';

export function Rocket({data, ...rest}) {

  return(
    <Container {...rest} >
      <h1>{data.name}</h1>
      <p>
        {data.description}
      </p>
      
    </Container>

  )

}