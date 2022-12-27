import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Button from '../Styles/Button';

const ErrorPage = () => {
  const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 4.2rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;
  return (
    <Wrapper>
      <div className="container">
        <h2>404!!</h2>
        <h3> Don't Know Where you Are?</h3>
        <p>We really have no Idea either.</p>
          <p>
            How you got here is a mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
      </div>
    </Wrapper>
  )
}

export default ErrorPage
