import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize';

const baseStyles = () => injectGlobal`
  ${styledNormalize}

  body, html {
    padding: 0;
    margin: 0;
	  font-family: 'Helvetica', 'Arial', sans-serif;
	}
`;

export default baseStyles;