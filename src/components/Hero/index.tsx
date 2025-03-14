import { Link } from "react-router-dom"
import * as motion from "motion/react-client"
import type { Variants } from "motion/react"

import logo from '../../assets/icons/platzi.png'

import * as S from "./styles"
import { Btn } from "../../styles"

const Hero = () => {
  const imageVariants: Variants = {
    offscreen: {
        y: 200,
    },
    onscreen: {
        y: 0,
        transition: {
            duration: 0.8,
        },
    },
}

  return (
    <S.Hero>
      <S.Content>
        <div>
          <h3>Powered by Platzi Fake Store API</h3>
          <p>
            Which is used for fetching product and user data, implementing JWT authentication, and handling pagination.
          </p>
          <div>
            <Btn>
              <a href="https://fakeapi.platzi.com/">Go to Platzi's page</a>
            </Btn>
            <Btn>
              <Link to={'/about'}>Learn about the project</Link>
            </Btn>
          </div>
        </div>
      </S.Content>
      <S.Content>
          <motion.img
            variants={imageVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            src={logo}
            alt="Platzi"
            className="image-api"
          />
      </S.Content>
    </S.Hero>
  )
}

export default Hero
