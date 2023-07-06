import { Suspense } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import {
  Title,
  ListItem,
  Image,
  ProductLink,
  Container,
  LinkContainer,
  InfoImage,
  Filter,
} from './Home.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const location = useLocation();

  const backPageLink = location.state?.from ?? '/';
  return (
    <Container>
      <Title>Хиты продаж</Title>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <ListItem>
            <ProductLink>
              <h2>назва товару</h2>
              <Image
                src="https://velam-matras.com.ua/matrasy/Parmezan/Parmezan-627b.jpg"
                alt="product1"
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
          </ListItem>
        </SwiperSlide>
        <SwiperSlide>
          <ListItem>
            <ProductLink>
              <h2>назва товару</h2>
              <Image
                src="https://velam-matras.com.ua/matrasy/Smaylik/Smaylik-637b.jpg"
                alt="product2"
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
          </ListItem>
        </SwiperSlide>
        <SwiperSlide>
          <ListItem>
            <ProductLink>
              <h2>назва товару</h2>
              <Image
                src="https://velam-matras.com.ua/matrasy/Parmezan/Parmezan-626b.jpg"
                alt="product3"
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
          </ListItem>
        </SwiperSlide>
        <SwiperSlide>
          <ListItem>
            <ProductLink>
              <h2>назва товару</h2>
              <Image
                src="https://velam-matras.com.ua/matrasy/Sapfir/Sapfir-633b.jpg"
                alt="product4"
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
          </ListItem>
        </SwiperSlide>
        <SwiperSlide>
          <ListItem>
            <ProductLink>
              <h2>назва товару</h2>
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
          </ListItem>
        </SwiperSlide>
        <SwiperSlide>
          <ListItem>
            <ProductLink>
              <h2>назва товару</h2>
              <Image
                src="https://velam-matras.com.ua/matrasy/Smaylik/Smaylik-637b.jpg"
                alt="product2"
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
          </ListItem>
        </SwiperSlide>
        <SwiperSlide>
          <ListItem>
            <ProductLink>
              <h2>назва товару</h2>
              <Image
                src="https://velam-matras.com.ua/matrasy/Parmezan/Parmezan-626b.jpg"
                alt="product3"
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
          </ListItem>
        </SwiperSlide>
        <SwiperSlide>
          <ListItem>
            <ProductLink>
              <h2>назва товару</h2>
              <Image
                src="https://velam-matras.com.ua/matrasy/Sapfir/Sapfir-633b.jpg"
                alt="product4"
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
          </ListItem>
        </SwiperSlide>
        <SwiperSlide>
          <ListItem>
            <ProductLink>
              <h2>назва товару</h2>
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
          </ListItem>
        </SwiperSlide>
        <SwiperSlide>
          <ListItem>
            <ProductLink>
              <h2>назва товару</h2>
              <Image
                src="https://velam-matras.com.ua/matrasy/Smaylik/Smaylik-637b.jpg"
                alt="product2"
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
          </ListItem>
        </SwiperSlide>
      </Swiper>

      <h3>Матраси Pocket spring</h3>
      <article>
        Один із основних аспектів при виборі пружинного матраца полягає у виборі
        між пружинним блоком Bonnel та Pocket Spring. Історія пружинних матраців
        нараховує понад сто років, і за цей час конструкція пройшла значні зміни
        та поліпшення, з'явилися різні модифікації з різною жорсткістю,
        комфортом та лікувальними властивостями. На сьогоднішній день
        ортопедичні пружинні матраци залишаються популярними та востро попиту.
      </article>
      <article>
        Існують два типи пружинних блоків: залежний пружинний блок Bonnel
        (Боннель) та незалежний пружинний блок Pocket Spring (Покет Спрінг).
        Кожен з них має свої переваги та недоліки, тому важливо розібратися, в
        чому їх відмінності та які властивості є важливими для вас.
      </article>
      <LinkContainer>
        <Link to="bonel" state={{ from: backPageLink }}>
          <InfoImage
            src="https://images.ctfassets.net/cfeesto322pw/55Sqawgp93rWTkKgDQZguc/f1ac912e44ce3c404bb9884195666406/bonnel-mattress.jpg"
            alt="Bonnel"
          />
          <h5>bonel</h5>
        </Link>
        <Link to="pocketSpring" state={{ from: backPageLink }}>
          <InfoImage
            src="https://velam-matras.com.ua/matrasy/Sapfir/Sapfir-632b.jpg"
            alt="PocketSpring"
          />
          <h5>pocketSpring</h5>
        </Link>
        <Link to="springless" state={{ from: backPageLink }}>
          <InfoImage
            src="https://velam-matras.com.ua/matrasy/Parmezan/Parmezan-626b.jpg"
            alt="Springless"
          />
          <h5>springless</h5>
        </Link>
        <Link to="futon" state={{ from: backPageLink }}>
          <InfoImage
            src="https://velam-matras.com.ua/matrasy/Smaylik/Smaylik-637b.jpg"
            alt="Futon"
          />
          <h5>futon</h5>
        </Link>
      </LinkContainer>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
      <article>
        Вибір між цими двома типами пружинних матраців залежить від ваших
        пріоритетів та фінансових можливостей. Обидва вони є надійними,
        комфортними, довговічними та мають оздоровчий ефект. Матрац з пружинним
        блоком Bonnel є популярним бюджетним варіантом, який витримує великі
        навантаження та служить довго. Однак, якщо у вас є проблеми з хребтом
        або спиною, кращим вибором буде сучасний матрац з пружинним блоком
        Pocket Spring із незалежними пружинами, який має вищі ортопедичні
        властивості та забезпечить глибший та здоровіший сон. Для пар це також
        зручно, оскільки менш важкий партнер не буде впливати на спання більш
        важкого. Хоча цей тип матраців має вищу ціну, лікувальний ефект
        виправдає витрати, особливо з урахуванням того, що матрац купується на
        тривалий період.
        <br />
        Надіємося, що ви зможете правильно оцінити свої потреби та бажання, і ми
        допоможемо вам з вибором. Звертайтесь до нас для консультації та вибору!
      </article>
    </Container>
  );
}
