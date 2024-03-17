import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

@font-face {
  font-family: 'BasisGrotesquePro-Bold';
  src: url('../fonts/BasisGrotesquePro-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'BasisGrotesquePro-Medium';
  src: url('../fonts/BasisGrotesquePro-Medium.ttf') format('truetype');
}


ul {
  list-style: none;
}

li {
  text-decoration: none;
}

ul,
h2,
h3,
p{
  margin: 0;
  padding: 0;
}

body {
background: #141414;
}

.NavLink,
button{
  cursor: pointer;
}

/* select {
  -webkit-appearance: none;
} */

div[id="root"]{

}
`;

export default GlobalStyled;
