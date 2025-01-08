import react from '../../assets/icons/react.png'
import redux from '../../assets/icons/redux.png'
import typescript from '../../assets/icons/typescript.png'
import styledComponents from '../../assets/icons/styled-components.svg'

import * as S from './styles'
import { Container } from '../../styles'

const About = () => (
  <Container className='central narrow'>
      <S.Text>
        Gabriela is a Java Full Stack Developer student.<br />
        After some time of self studying, decided to join forces with the school <a href="https://ebaconline.com.br/" target='_blank'>EBAC</a>, to consolidate the knowledge.
        Her background in graphic and fashion design drives her appreciation of beautiful layouts and clean coding, while her hard work and fast leaning allows her to enjoy the process of learning to program.
        A perfect blend for creating quality projects with a a styled design touch.
      </S.Text>
      <S.Icons>
        <img src={react} alt="React" />
        <img src={redux} alt="Redux" />
        <img src={typescript} alt="Typescript" />
        <img src={styledComponents} alt="Styled Components" />
      </S.Icons>
      <S.Text>
        The technologies used in this project include React with Redux for state management, TypeScript for static typing, styled-components for dynamic styling, Jest/Testing library for testing.<br />
        The e-commerce website is powered by the Rest <a href="https://fakeapi.platzi.com/" target='_blank'>Platzi Fake Store API</a>, for fetching product data.
        The API is colaborative and users can post products and categories, hence the visual can apper messy sometimes as there are products with a fallback image, or missing categories. I chose to create this project with a real API and for study purpose, it fits perfectly.
        Since this API doesn't support features like order creation or product size, a mock solution was implemented to handle them.
      </S.Text>
  </Container>

)

export default About
