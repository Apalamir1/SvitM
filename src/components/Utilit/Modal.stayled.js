import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Modal = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: var(--background-color);

  width: 100%;
  height: 100%;
`;
export const CloseBtn = styled.button`
  position: absolute;

  top: 10px;
  right: 10px;
  background-color: var(--background-color);
  border: none;
  fill: var(--focus-color);
`;
export const LinkContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: stretch;

  justify-content: center;
  margin-left: 20px;
`;
export const LinkItem = styled.li`
  display: flex;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 8px;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  color: var(--focus-color);
  font-weight: 700;
  font-size: 18px;
  fill: var(--main-color);
  :hover,
  :focus {
    color: rgb(128, 128, 128);
  }
`;

export const SocialTitle = styled.p`
  margin-left: 20px;
  padding-left: 10px;
  color: var(--focus-color);
  fill: var(--main-color);
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
`;

export const SocialInfo = styled.ul`
  display: flex;
  margin-left: 50px;
  padding-left: 10px;
`;
export const SocialItem = styled.li`
  padding-left: 20px;
  padding-right: 20px;
`;

export const InstaLink = styled(NavLink)`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 18px;
  background: radial-gradient(
      circle farthest-corner at 35% 90%,
      #fec564,
      transparent 50%
    ),
    radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%),
    radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%),
    radial-gradient(
      ellipse farthest-corner at 20% -50%,
      #5258cf,
      transparent 50%
    ),
    radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%),
    radial-gradient(
      ellipse farthest-corner at 60% -20%,
      #893dc2,
      transparent 50%
    ),
    radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent),
    linear-gradient(
      #6559ca,
      #bc318f 30%,
      #e33f5f 50%,
      #f77638 70%,
      #fec66d 100%
    );
  fill: var(--white-element);
`;
export const TeleLink = styled(NavLink)`
  fill: #229ed9;
`;
