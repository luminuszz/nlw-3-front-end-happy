import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;

  a {
    position: absolute;
    right: 4rem;
    bottom: 4rem;
    z-index: 10;

    width: 6.4rem;
    height: 6.4rem;

    background: ${props => props.theme.pallet.primary.tertiary.main};
    border-radius: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;

    &:hover {
      background: ${props => props.theme.pallet.primary.tertiary.hover};
    }

    svg {
      width: 30px;
      height: 30px;
      color: ${props => props.theme.pallet.primary.color};
    }
  }
`

export const Aside = styled.aside`
  max-width: 44rem;
  width: 100%;
  background: linear-gradient(
    329.54deg,
    ${props => props.theme.pallet.primary.gradientOne} 0%,
    ${props => props.theme.pallet.primary.gradientTwo} 100%
  );

  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 4.2rem;

    margin-top: 6.4rem;
  }

  p {
    line-height: 2.9rem;
    font-size: ${props => props.theme.typography.size};
    margin-top: 2.4rem;
  }

  footer {
    display: flex;
    flex-direction: column;
    font-size: ${props => props.theme.typography.size};

    line-height: 2.4rem;

    strong {
      font-weight: 800;
      font-size: ${props => props.theme.typography.size};
    }
  }
`
