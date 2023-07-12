import { Suspense } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { HitSwiper } from '../../components/HitSwiper/HitSwiper';
import { Title, Container, LinkContainer, InfoImage } from './Home.styled';

export default function Home() {
  const location = useLocation();

  const backPageLink = location.state?.from ?? '/';
  return (
    <Container>
      <Title>Хити продажу</Title>
      <HitSwiper></HitSwiper>
      {/* <Title>Акції</Title>
      <HitSwiper></HitSwiper>
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
      </LinkContainer> */}
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
