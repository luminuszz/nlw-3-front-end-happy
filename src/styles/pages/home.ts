import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
    329.54deg,
    ${props => props.theme.pallet.primary.gradientOne} 0%,
    ${props => props.theme.pallet.primary.gradientTwo} 100%
  );

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
`

export const Wrapper = styled.div`
  position: absolute;

  width: 100%;
  max-width: 110rem;

  height: 100%;
  max-height: 68rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  a {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 8rem;
    height: 8rem;

    background: ${props => props.theme.pallet.primary.secondary.main};
    border-radius: 3rem;

    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.pallet.primary.color};

    &:hover {
      background: ${props => props.theme.pallet.primary.secondary.hover};
    }

    transition: background-color 0.2s;

    svg {
      color: rgba(0, 0, 0, 0.6);
      width: 2rem;
      height: 2rem;
    }
  }
  background-image: url('/childrens.svg');
  background-repeat: no-repeat;
  background-position-x: 80%;
  background-position-y: center;
`

export const Main = styled.main`
  max-width: 35rem;

  h1 {
    font-size: 7.6rem;
    font-weight: 900;
    line-height: 70px;
  }

  p {
    margin-top: 4rem;
    font-size: 2.4rem;
    line-height: 3.4rem;
  }
`

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 2.4rem;
  line-height: 3.4rem;

  display: flex;
  flex-direction: column;

  text-align: right;

  strong {
    font-weight: 800;
  }
`
