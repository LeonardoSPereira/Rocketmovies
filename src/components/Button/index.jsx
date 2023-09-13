import { Container } from "./styles";

export function Button({ icon: Icon, children }) {
    return (
        <Container>
            {Icon && <Icon style={16}/>}
            {children}
        </Container>
    )
}