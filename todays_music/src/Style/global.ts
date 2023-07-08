import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
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
  		padding: 0;
  		margin: 0;
    }
	body{
		font-family: 'LINESeedKR-Rg';
	}
	button: {
		border: none;
	}
	input {
		outline: none;
	}

`;
export default GlobalStyles;
