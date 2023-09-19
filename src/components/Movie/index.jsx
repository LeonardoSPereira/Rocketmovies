import { Container, Stars } from "./styles";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { Tag } from "../Tag";

export function Movie({data, ...rest}) {
    return (
        <Container {...rest}>
            <h3>{data.title}</h3>

            {/* IDEIA PARA RENDERIZAR AS ESTRELAS: 
                fazer um for, recebendo a nota do backend e renderizando de acordo com a nota. Não colocar a estrela so o contorno */}
            <Stars rating={data.rating}>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
            </Stars>

            <p>{data.text}</p>
            
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} /> )
                    }
                </footer>
            }

        </Container>
    )
}