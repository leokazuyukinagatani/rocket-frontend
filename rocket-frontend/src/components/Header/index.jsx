import { Container, Profile, User} from "./styles"
import { useAuth } from "../../hooks/auth" 
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import logo from "../../assets/logo.png";

export function Header(props) {
  const { signOut, user } = useAuth();
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder; 

  return(
    <Container>
      <div className="container-logo">
        <img src={logo}/>
        <h2>Rocket</h2>
      </div>
      {
        props.children
      }
      <User>
          <div>
            <strong>{user.name}</strong>
            <button onClick={signOut}>sair</button>
          </div>
        <Profile to="/profile">
          <img 
            src={avatarURL} 
            alt={user.name} 
          />
        </Profile>
      </User>
    </Container>
  )
}