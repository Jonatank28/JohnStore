import { Container, CardContent } from "./stylesCard"
import { data } from './data'

export const Card = () => {
    return (
        <Container>
            {
                data &&
                data.map((item) => (
                    <CardContent>
                        <img src={item.photo} alt="Foto" />
                        <div>
                            <h3>{item.title}</h3>
                            <div>
                                <span>{item.current_value}</span>
                                <span>{item.previous_value}</span>
                            </div>
                        </div>
                    </CardContent>
                ))
            }
        </Container>
    )
}
