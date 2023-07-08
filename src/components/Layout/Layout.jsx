import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { throttle } from 'lodash';
import NavigationBar from '../Navigation/Navigation';
import HeaderEl from '../Header/Header';
import FooterBar from '../Footer/Footer';
import { StyledLink, Menu } from './Layout.styled';

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
        <StyledLink to="/technology">Технології</StyledLink>
        <StyledLink to="/faq">Питпння та відповіді</StyledLink>
      </Menu>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <FooterBar />
      {/* <button class="scroll-btn">up</button> */}
    </>
  );
};
