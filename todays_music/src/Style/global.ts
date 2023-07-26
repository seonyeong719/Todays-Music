import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    *{
		box-sizing: border-box;
        @font-face {
		font-family: 'LINESeedKR-Th';
		src: url('/Assets/Font/LINESeedKR-Th.ttf');
	    }
        @font-face {
		font-family: 'LINESeedKR-Rg';
		src: url('/Assets/Font/LINESeedKR-Rg.ttf');
	    }
        @font-face {
		font-family:'LINESeedKR-Bd';
		src: url('/Assets/Font/LINESeedKR-Bd.ttf');
	    }
		@font-face {
		font-family: 'Lobster-Regular.ttf';
		src: url('/Assets/Font/Lobster-Regular.ttf');
	    }
  		padding: 0;
  		margin: 0;
    }
	html {
        font-size: 100%;
        @media screen and (max-width:820px) {
            font-size:50%;
        }
		height: 100%;
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
