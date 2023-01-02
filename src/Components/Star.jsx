import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const Star = (props) => {

    const ratingStar = Array.from({ length: 5 }, (elem, i) => {
        let number = i + 0.5;

        return (
            <span key={i}>
                {
                    props.stars >= i + 1 ? <FaStar className="icon" /> : props.stars >= number ? <FaStarHalfAlt className="icon" /> : <AiOutlineStar className="icon" />
                }
            </span>
        )
    });

    return (
        <Wrapper>
            <div className="icon-style">
                {ratingStar}
                <p>{props.reviews} customer reviews</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .icon-style {
        display: flex;
        gap: 0.2rem;
        align-items: center;
        justify-content: flex-start;
    .icon {
        font-size: 2rem;
        color: orange;
    }
    .empty-icon {
    font-size: 2.6rem;
    }
    p {
    margin: 0;
    padding-left: 1.2rem;
    }
}`;

export default Star
