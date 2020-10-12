import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding:0;
  box-sizing: border-box;
  font-weight: ${props => props.theme.typography.weight};
  font-family: ${props => props.theme.typography.families.primary};


}

:root {
  font-size: ${props => props.theme.sizes.responsive};
  color: ${props => props.theme.pallet.primary.color}
}


input, button, textarea {

font-weight: ${props => props.theme.typography.weight};
 font-family: ${props => props.theme.typography.families.primary};
 }

`

export default GlobalStyles
