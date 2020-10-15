import { FiPlus } from 'assets/icons'
import { Link } from 'components'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Container, Aside } from 'styles/pages/orphanagesMap'

import MarkMapImg from '../../assets/images/icon.svg'

import 'leaflet/dist/leaflet.css'

const CustomMap = dynamic(() => import('components/CustomMap'), { ssr: false })

const CustomTiler = dynamic(() => import('components/CustomTiler'), {
  ssr: false,
})

const OrphanagesMap: NextPage = () => {
  return (
    <Container>
      <Aside>
        <header>
          <MarkMapImg />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>

        <footer>
          <strong>Salvador</strong>
          <span>Bahia</span>
        </footer>
      </Aside>

      <CustomMap
        center={[-12.942452, -38.4977351]}
        zoom={18}
        style={{ width: '100%', height: '100%', zIndex: 5 }}
      >
        <CustomTiler
          url={`
            https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_API_KEY}`}
        />
      </CustomMap>

      <Link href="/ALGO">
        <FiPlus />
      </Link>
    </Container>
  )
}

export default OrphanagesMap
