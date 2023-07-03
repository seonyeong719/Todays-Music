import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    /* ${reset} */
    *{
		box-sizing: border-box;
        @font-face {
		font-family: 'LINESeedKR-Th';
		src: url('/Asset/Font/LINESeedKR-Th.ttf');
	    }
        @font-face {
		font-family: 'LINESeedKR-Rg';
		src: url('/Asset/Font/LINESeedKR-Rg.ttf');
	    }
        @font-face {
		font-family:'LINESeedKR-Bd';
		src: url('/Asset/Font/LINESeedKR-Bd.ttf');
	    }
    }
	body{
		font-family: 'Nanum_regular';
	}
	button: {
		border: none;
	}
	input {
		outline: none;
	}

`;
export default GlobalStyles;
