import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    scroll-behavior: smooth;
}

h1,h2,h3,h4,h5 {
  margin: 0;
}
a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

`;
