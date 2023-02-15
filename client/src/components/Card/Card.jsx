import { Container, CardContent } from "./stylesCard"
import { data } from './data'

export const Card = () => {
    return (
        <Container>
            {
                data &&
                data.map((item) => (
                    <CardContent>
                        <img src={data[2].photo} alt="Foto" />
                        <div>
                            <h3>Card Title</h3>
                            <div>
                                <span>R$ 350</span>
                                <span>R$ 250</span>
                            </div>
                        </div>
                    </CardContent>
                ))
            }
        </Container>
    )
}
