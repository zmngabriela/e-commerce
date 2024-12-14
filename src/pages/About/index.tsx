import react from '../../assets/icons/react.png'
import redux from '../../assets/icons/redux.png'
import typescript from '../../assets/icons/typescript.png'
import styledComponents from '../../assets/icons/styled-components.svg'

import * as S from './styles'
import { Container } from '../../styles'

function About () {
  return (
    <Container>
      <S.Description>
        <p>
          Gabriela is a Java Full Stack Developer studant.<br />
          After some time of self studying, decided to join forces with the school <a href="https://ebaconline.com.br/" target='_blank'>EBAC</a>, to consolidate the knowledge.
          Her background in graphic and fashion design drives her appreciation of beautiful layouts and clean coding, while her hard work and fast leaning allows her to enjoy the process of becoming a programmer.
          A perfect blend for creating quality projects with a a styled design touch.
        </p>
        <div>
          <img src={react} alt="" />
          <img src={redux} alt="" />
          <img src={typescript} alt="" />
          <img src={styledComponents} alt="" />
        </div>
        <p>
          The technologies used in this project include React with Redux for state management, TypeScript for static typing, and styled-components for dynamic styling.
          The API utilized is the <a href="https://fakeapi.platzi.com/" target='_blank'>Platzi Fake Store API</a>. Since this API doesn't support order creation or product size, a mock solution was implemented to both cases.
        </p>
      </S.Description>
    </Container>
  )
}

export default About
