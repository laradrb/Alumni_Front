import { CoderCard, CoderName, CoderDetails, CoderImage, CoderInfo, CoderRole, StyleCVButton2 } from "./StyledCardListCoder";
import CVButton from '../../../atom/CVButton'

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
                <CVButton>
                    CV
                </CVButton>
                </StyleCVButton2>
            </CoderInfo>
        </CoderCard>
        </>
    );
};

export default CardListCoder;