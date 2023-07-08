import { Filter, ProductLink, Image } from './ProdCard.styled';

export default function ProdCard() {
  return (
    <ProductLink>
      <h3>Назва товару</h3>
      <Image
        src="https://velam-matras.com.ua/matrasy/Sapfir/Sapfir-632b.jpg"
        alt="product5"
      />
      <Filter name="size">
        <option value="1">80/190</option>
        <option value="2">90/190</option>
        <option value="3">120/190</option>
        <option value="4">140/190</option>
        <option value="5">160/190</option>
        <option value="6">180/190</option>
        <option value="7">80/200</option>
        <option value="8">90/200</option>
        <option value="9">120/200</option>
        <option value="10">140/200</option>
        <option value="11">160/200</option>
        <option value="12">180/200</option>
      </Filter>
      <ul>
        <li>якісь характеристики</li>
        <li>якісь характеристики</li>
        <li>якісь характеристики</li>
      </ul>
      <h2>Ціна</h2>
      <button type="button">Замовити </button>
    </ProductLink>
  );
}
