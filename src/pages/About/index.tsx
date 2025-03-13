import react from '../../assets/icons/react.png'
import redux from '../../assets/icons/redux.png'
import typescript from '../../assets/icons/typescript.png'
import styledComponents from '../../assets/icons/styled-components.svg'
import platzi from '../../assets/icons/platzi.png'
import jest from '../../assets/icons/jest.svg'

import * as S from './styles'
import { Container } from '../../styles'

const About = () => (
  <Container className='central narrow'>
      <S.Text>
        Gabriela is a Java Full Stack Developer student.
        <br />
        <br />
        After some time of self studying, decided to join forces with the school <a href="https://ebaconline.com.br/" target='_blank'>EBAC</a>, to consolidate the knowledge.
        <br />
        <br />
        Her background in graphic and fashion design drives her appreciation of beautiful layouts and clean coding, while her hard work and fast leaning allows her to enjoy the process of learning to program.
        <br />
        A perfect blend for creating quality projects with a a styled design touch.
      </S.Text>
      <S.Icons>
        <img src={react} alt="React" title='React'/>
        <img src={redux} alt="Redux" title='Redux'/>
        <img src={typescript} alt="Typescript" title='TypeScript' />
        <img src={styledComponents} alt="Styled Components" title='Styled Components' />
        <img src={platzi} alt="Platzi Fake API" title='Platzi Fake API' />
        <img src={jest} alt="Jest" title='Jest Testing' />
      </S.Icons>
      <S.Text>
        The technologies used in this project include React with Redux for state management, TypeScript for static typing, and styled-components for dynamic styling. Jest and Testing Library are used for testing, although testing is still a work in progress. I will include Cypress tests and add more Jest testing coverage.
        <br />
        <br />
        The e-commerce website is powered by the Rest <a href="https://fakeapi.platzi.com/" target='_blank'>Platzi Fake Store API</a>, which is used for fetching product and user data, implementing JWT authentication, and handling pagination.
        <br />
        <br />
        To enhance the functionality beyond what the API offers, certain features were custom-built, such as a newsletter subscription and order creation.
        <br />
        <br />
        Additionally, product images were mocked, as the API is collaborative, allowing users to post products and categories, which can result in a visually inconsistent experience.
        <br />
        Form management and validation are handled using Formik and Yup.
      </S.Text>
  </Container>
)

export default About
