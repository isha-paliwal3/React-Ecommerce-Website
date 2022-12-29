import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const PageNavigation = (props) => {
    const Wrapper = styled.section`
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 3.2rem;
    padding-left: 1.2rem;
    
    a {
      font-size: 3.2rem;
    }
    `;


    return (
        <Wrapper>
            <NavLink to="/">Home</NavLink>/{props.title}
        </Wrapper>
    )
}

export default PageNavigation
