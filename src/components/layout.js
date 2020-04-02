import React from "react"
import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme)};
  }
`
export default props => (
  <React.Fragment>
    <GlobalStyle theme={props.theme} />
  </React.Fragment>
)