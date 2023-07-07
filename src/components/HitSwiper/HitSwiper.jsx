import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { ListItem, Image, ProductLink, Filter } from './HitSwiper.styled';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function HitSwiper() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 5000,
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
  );
}
