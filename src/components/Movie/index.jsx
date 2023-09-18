import { Container, Stars } from "./styles";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { Tag } from "../Tag";

export function Movie({title, rating, children, ...rest}) {
    return (
        <Container>
            <h3>{title}</h3>

            {/* IDEIA PARA RENDERIZAR AS ESTRELAS: 
                fazer um for, recebendo a nota do backend e renderizando de acordo com a nota. Não colocar a estrela so o contorno */}
            <Stars rating={rating}>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
            </Stars>

            <p>{children}</p>
            
            <div className="tags">
                <Tag title="Sci-fi"/>
                <Tag title="espaço"/>
            </div>

        </Container>
    )
}