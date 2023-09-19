import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiArrowLeft } from "react-icons/fi";


export function NewMovie() {
    return (
        <Container>
            <Header />

            <a href="/">
                <FiArrowLeft />
                Voltar
            </a>

            <Content>
                <h2>Novo Filme</h2>

                <Input 
                    type="text"
                    placeholder="Título"
                />

                <Input 
                    type="text"
                    placeholder="Sua nota (de 0 a 5)"
                />

                <label htmlFor="obs">Observações</label>
                <textarea name="obs" id="obs" placeholder="Observações"></textarea>

                <h3>Marcadores</h3>

                <div></div>

                <Button>Excluir filme</Button>
                <Button>Salvar alterações</Button>

            </Content>

        </Container>
    )
}