import { Container, Background, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLock, FiMail } from "react-icons/fi"
import { Link } from "react-router-dom";


export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça o seu login</h2>

                <Input 
                    icon={FiMail}
                    type="email"
                    placeholder="E-mail"
                />

                <Input 
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                />

                <Button>Entrar</Button>

                <Link to="/register">Criar conta</Link>
            </Form>

            <Background />
        </Container>
    )
}