import ButtonCardListCoderCv from "../../../atom/ButtonCardListCoderCv";
import { CoderCard, CoderName, CoderDetails, CoderImage, CoderInfo, CoderRole, StyleCVButton2 } from "./StyledCardListCoder";

const CardListCoder = ({name,location,gender,image}) => {
    return (
        <> 
        <CoderCard>
            <CoderImage src={image} alt={name} />
            <CoderInfo>
                <CoderName>{name}</CoderName>
                <CoderDetails>{location}</CoderDetails>
                <CoderRole>{gender}</CoderRole>
                <StyleCVButton2>
                <ButtonCardListCoderCv
                >
                    CV
                </ButtonCardListCoderCv>
                </StyleCVButton2>
            </CoderInfo>
        </CoderCard>
        </>
    );
};

export default CardListCoder;