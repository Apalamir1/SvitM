import ProdCard from '../../components/ProdCard/ProdCard';

import {
  Container,
  List,
  ListItem,
  ProductLink,
  Image,
  Filter,
  FiltresContainer,
  ProdSection,
} from './Products.styled';

export default function Products() {
  return (
    <Container>
      <FiltresContainer>
        <Filter name="price">
          <option value="">Фільтр за ціною</option>
          <option value="1">Ціна (від дешевших до дорожчіх)</option>
          <option value="2">Ціна (від дорожчіх до дешевших)</option>
          <option value="3">За рейтингом</option>
        </Filter>
        <Filter name="type">
          <option value="">Фільтр за типом</option>
          <option value="1">Боннель</option>
          <option value="2">PocketSpring</option>
          <option value="3">Безпружинні</option>
          <option value="4">Футон</option>
        </Filter>
        <Filter name="size">
          <option value="">Фільтр за розміром</option>
          <option value="1">80/190</option>
          <option value="2">80/200</option>
          <option value="3">160/190</option>
          <option value="4">160/200</option>
        </Filter>
      </FiltresContainer>
      <List>
        <ListItem>
          <ProductLink>
            <Image
              src="https://images.ctfassets.net/cfeesto322pw/55Sqawgp93rWTkKgDQZguc/f1ac912e44ce3c404bb9884195666406/bonnel-mattress.jpg"
              alt="Bonnel"
            />
            <h3>Боннель</h3>
          </ProductLink>
        </ListItem>
        <ListItem>
          <ProductLink>
            <Image
              src="https://velam-matras.com.ua/matrasy/Sapfir/Sapfir-632b.jpg"
              alt="PocketSpring"
            />
            <h3>PocketSpring</h3>
          </ProductLink>
        </ListItem>
        <ListItem>
          <ProductLink>
            <Image
              src="https://velam-matras.com.ua/matrasy/Parmezan/Parmezan-626b.jpg"
              alt="Springless"
            />
            <h3>Безпружинні</h3>
          </ProductLink>
        </ListItem>
        <ListItem>
          <ProductLink>
            <Image
              src="https://velam-matras.com.ua/matrasy/Smaylik/Smaylik-637b.jpg"
              alt="Futon"
            />
            <h3>Футон</h3>
          </ProductLink>
        </ListItem>
      </List>
      <ProdSection>
        <ProdCard></ProdCard>
        <ProdCard></ProdCard>
        <ProdCard></ProdCard>
        <ProdCard></ProdCard>
        <ProdCard></ProdCard>
        <ProdCard></ProdCard>
        <ProdCard></ProdCard>
        <ProdCard></ProdCard>
        <ProdCard></ProdCard>
        <ProdCard></ProdCard>
        <ProdCard></ProdCard>
        <ProdCard></ProdCard>
      </ProdSection>
    </Container>
  );
}
