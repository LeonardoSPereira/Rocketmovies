import { Container } from "./styles";

export function Movie({title, rating, children, ...rest}) {
    return (
        <Container>
            <h3>{title}</h3>
            {children}
        </Container>
    )
}