import { useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";


export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    async function handleUpdateProfile() {
        const user = {
            name,
            email, 
            password: newPassword,
            old_password: oldPassword
        }

        await updateProfile({ user });
    }

    return (
        <Container>

            <div className="header">
                <Link to="/">
                    <FiArrowLeft />
                    Voltar
                </Link>
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Input 
                    icon={FiMail}
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input 
                    icon={FiLock}
                    type="password"
                    placeholder="Senha Atual"
                    onChange={(e) => setOldPassword(e.target.value)}
                    
                />

                <Input 
                    icon={FiLock}
                    type="password"
                    placeholder="Nova senha"
                    onChange={(e) => setNewPassword(e.target.value)}
                />

                <Button 
                    title="Salvar"
                    onClick={handleUpdateProfile}
                />

            </Form>

        </Container>
    )
}