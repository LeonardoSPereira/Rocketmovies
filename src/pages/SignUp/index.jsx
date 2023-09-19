import { Container, Background, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLock, FiMail, FiUser, FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom";


export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input 
                    icon={FiUser}
                    type="text"
                    placeholder="Nome"
                />
                
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

                <Button>Cadastrar</Button>

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para o login
                </Link>
            </Form>

            <Background />
        </Container>
    )
}