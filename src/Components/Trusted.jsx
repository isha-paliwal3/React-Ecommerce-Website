import styled from 'styled-components'

const Trusted = () => {

    return (
        <Wrapper className="brand-section">
            <div className="container">
                <h3>Trusted By 1000+ companies </h3>
                <div className="trusted-section">
                    <div className="trusted1">
                        <div>
                            <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image5.png" alt="" />
                        </div>
                    </div>
                    <div className="trusted2">
                        <div>
                            <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png" alt="" />
                        </div>
                    </div>
                    <div className="trusted3">
                        <div>
                            <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png" alt="" />
                        </div>
                    </div>
                    <div className="trusted4">
                        <div>
                            <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png" alt="" />
                        </div>
                    </div>
                    <div className="trusted5">
                        <div>
                            <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 9rem 0;
    background: ${({ theme }) => theme.colors.bg};

    .brand-section {
    padding: 12rem 0 0 0;
    }

    h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3.2rem;
  }
    img {
    min-width: 10rem;
    height: 10rem;
    }
   .trusted-section{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
   }
   
   
   @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .trusted-section{
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
    }
    }
  `;

export default Trusted
