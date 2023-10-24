import { Link } from "react-router-dom";
import { Input } from "../Input";
import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";


export function Header() {
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    function handleSignOut() {
        signOut();
        navigate("/");
    }

    return (
        <Container>
            <h1>RocketMovies</h1>

            <Input
                placeholder="Pesquisar pelo título" 
            />

            <div className="profile">

                <div className="content">
                    <Link to="/profile">Leonardo Pereira</Link>
                    <button onClick={handleSignOut}>Sair</button>
                </div>

                <Link to="/profile">
                    <img src="https://github.com/leonardospereira.png" alt="Logo usuário" />
                </Link>

            </div>

        </Container>
    )
}