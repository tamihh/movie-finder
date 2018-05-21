import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize';

const baseStyles = () => injectGlobal`
  ${styledNormalize}

  body, html {
    padding: 0;
    margin: 0;
	  font-family: 'Lato', 'Arial', sans-serif;
    overflow-x: hidden;
    font-size: 10px;
	}
  
`;

export default baseStyles;