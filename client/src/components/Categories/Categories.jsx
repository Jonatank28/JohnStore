import { ContainerGlobal } from '../../styles/global';
import { Container, CategoriesContent } from "./stylesCategories";
import { data } from "./data";

export const Categories = () => {
    return (
        <Container>
            <ContainerGlobal>
                <CategoriesContent>
                    {
                        data &&
                        data.map((item, index) => (
                            <div key={index}>
                                <img src={item.photo} alt="Imagem da categoria" />
                                <span>{item.name}</span>
                            </div>
                        ))
                    }
                </CategoriesContent>
            </ContainerGlobal>
        </Container>
    )
}
