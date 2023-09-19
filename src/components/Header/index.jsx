import { Link } from "react-router-dom";
import { Input } from "../Input";
import { Container } from "./styles";

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>

            <Input
                placeholder="Pesquisar pelo título" 
            />

            <Link to="/profile" className="profile">
                <div className="content">
                    <p>Leonardo Pereira</p>
                    <a href="/">sair</a>
                </div>
                <img src="https://github.com/leonardospereira.png" alt="Logo usuário" />
            </Link>
        </Container>
    )
}