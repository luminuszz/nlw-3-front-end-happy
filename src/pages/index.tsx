import { FiArrowRight } from 'assets/icons'
import { NextPage } from 'next'
import Link from 'next/link'
import { Container, Wrapper, Location, Main } from 'styles/pages/home'

import LogoImg from '../assets/images/logo.svg'

const Home: NextPage = () => {
  return (
    <Container>
      <Wrapper>
        <LogoImg />
        <Main>
          <h1>Leve felicidade para o munto</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>

          <Location>
            <strong>Salvador</strong>
            <span>Bahia - BA</span>
          </Location>

          <Link href="/">
            <a>
              <FiArrowRight />
            </a>
          </Link>
        </Main>
      </Wrapper>
    </Container>
  )
}

export default Home
