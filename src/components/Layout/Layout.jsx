import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { throttle } from 'lodash';
import NavigationBar from '../Navigation/Navigation';
import HeaderEl from '../Header/Header';
import { ReactComponent as PB } from '../../Icon/pb.svg';
import { ReactComponent as Master } from '../../Icon/master-card.svg';
import { ReactComponent as Visa } from '../../Icon/visa.svg';
import { StyledLink, Footer, LinkContainer, Menu } from './Layout.styled';

export const Layout = () => {
  // const button = document.querySelector('.scroll-btn');

  // button.addEventListener('click', scrollToTop);

  // const throttledScrollFunction = throttle(scrollFunction, 2000);

  // window.onscroll = function () {
  //   throttledScrollFunction();
  // };

  // function scrollFunction() {
  //   var scrollButton = document.querySelector('.scroll-btn');

  //   if (
  //     document.body.scrollTop > 500 ||
  //     document.documentElement.scrollTop > 500
  //   ) {
  //     scrollButton.style.bottom = '20px';
  //   } else {
  //     scrollButton.style.bottom = '-100px';
  //   }
  // }

  // function scrollToTop() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }
  return (
    <>
      <NavigationBar></NavigationBar>
      <HeaderEl></HeaderEl>
      <Menu>
        <StyledLink to="/products">Матраси</StyledLink>
        <StyledLink to="/products">Супутні товари</StyledLink>
        <StyledLink to="/technology">Технології</StyledLink>
        <StyledLink to="/faq">Питпння та відповіді</StyledLink>
      </Menu>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <Footer>
        <LinkContainer>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/products">Products</StyledLink>
          </li>
          <li>
            <StyledLink to="/about">about</StyledLink>
          </li>
          <li>
            <StyledLink to="/technology">technology</StyledLink>
          </li>
        </LinkContainer>
        <PB width={60}></PB>
        <Master width={60}></Master>
        <Visa width={60}></Visa>
      </Footer>
      {/* <button class="scroll-btn">up</button> */}
    </>
  );
};
