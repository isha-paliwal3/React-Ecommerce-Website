import styled from 'styled-components'
import { CiDeliveryTruck } from "react-icons/ci";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { MdPayment } from "react-icons/md";

const Services = () => {
    const Wrapper = styled.section`
    padding: 9rem 0;
    .grid {
      gap: 4.8rem;
    }
    .service1,
    .service2,
    .service3 {
      width: auto;
      height: 30rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      background: ${({ theme }) => theme.colors.bg};
      text-align: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
    .service2 {
      gap: 4rem;
      background-color: transparent;
      box-shadow: none;
      .service-column2,.service-column1 {
        background: ${({ theme }) => theme.colors.bg};
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: center;
        align-items: center;
        border-radius: 2rem;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
        div {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }
      }
    }
    h3 {
      margin-top: 1.4rem;
      font-size: 2rem;
    }
    .icon {
      /* font-size: rem; */
      width: 8rem;
      height: 8rem;
      padding: 2rem;
      border-radius: 50%;
      background-color: #fff;
      color: #5138ee;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .service1,
    .service3{
        display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          height: 15rem;

          div{
            display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          }
    }
    }
  `;

    return (
        <Wrapper>
            <div className="container">
                <div className="grid grid-three-column">
                    <div className="service1">
                        <div>
                            <CiDeliveryTruck className="icon" />
                            <h3>Super Fast Delivery</h3>
                        </div>
                    </div>
                    <div className="service2">
                        <div className="service-column1">
                        <div>
                            <AiFillSafetyCertificate  className="icon" />
                            <h3>No Contact Delivery</h3>
                        </div>
                        </div>
                        <div className="service-column2">
                        <div>
                            <GiReceiveMoney  className="icon" />
                            <h3>Guaranteed Return</h3>
                        </div>
                        </div>
                    </div>
                    <div className="service3">
                        <div>
                            <MdPayment className="icon" />
                            <h3>Secured Payments</h3>
                        </div>                        
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}



export default Services
