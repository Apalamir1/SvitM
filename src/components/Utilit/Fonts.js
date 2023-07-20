import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=EB+Garamond:wght@700&family=Ubuntu:wght@300;400;700&display=swap');
    `}
  />
);

export default Fonts;
