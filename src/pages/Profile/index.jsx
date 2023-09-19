import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function Profile() {
    return (
        <Container>

            <div className="header">
                <a href="/">
                    <FiArrowLeft />
                    Voltar
                </a>
            </div>

            <Form>
                <Avatar>
                    <img src="https://github.com/leonardospereira.png" alt="user image" />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input
                            id="avatar" 
                            type="file" />
                    </label>
                </Avatar>

                <Input 
                    icon={FiUser}
                    type="text"
                    placeholder="Nome"
                    defaultValue="Leonardo Pereira"
                />

                <Input 
                    icon={FiMail}
                    type="text"
                    placeholder="E-mail"
                    defaultValue="leonardo@email.com"
                />

                <Input 
                    icon={FiLock}
                    type="password"
                    placeholder="Senha Atual"
                    
                />

                <Input 
                    icon={FiLock}
                    type="password"
                    placeholder="Nova senha"
                />

                <Button>Salvar</Button>

            </Form>

        </Container>
    )
}