import { GeneralContainerCoder,FilterTitle,SidebarFilter,FilterItem,FilterList,CoderCard,CoderName,CoderDetails,CoderImage,CoderInfo,CoderRole, TittleCoder } from "./StyledCardListCoder";


const CardListCoder = ({name,location,gender,image}) => {
return (
<> 
<CoderCard>
    <CoderImage src={image} alt={name} />
<CoderInfo>
    <CoderName>{name}</CoderName>
    <CoderDetails>{location}</CoderDetails>
    <CoderRole>{gender}</CoderRole>
</CoderInfo>
</CoderCard>
</>
);
};

export default CardListCoder;