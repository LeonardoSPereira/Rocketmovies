import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiArrowLeft } from "react-icons/fi";
import { NoteItem } from "../../components/NoteItem";
import { Link } from "react-router-dom";


export function NewMovie() {
    return (
        <Container>
            <Header />

            <Link to="/">
                <FiArrowLeft />
                Voltar
            </Link>

            <Content>
                <h2>Novo Filme</h2>

                <div className="wrapper">

                    <Input 
                        type="text"
                        placeholder="Título"
                    />

                    <Input 
                        type="text"
                        placeholder="Sua nota (de 0 a 5)"
                    />
                </div>


                <label htmlFor="obs">Observações</label>
                <textarea name="obs" id="obs" placeholder="Observações"></textarea>


                <div>
                    <h3>Categorias</h3>

                    <div className="tags">
                        <NoteItem value="Comédia"/>
                        <NoteItem isNew />
                    </div>

                </div>

                <div className="button">
                    <Button className="delete">Excluir filme</Button>
                    <Button>Salvar alterações</Button>
                </div>


            </Content>

        </Container>
    )
}