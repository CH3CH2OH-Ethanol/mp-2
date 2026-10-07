import type {Character} from "../typs.ts";
import styled from "styled-components";

const StyledArticle = styled.article<{ $grey: string }>`
    text-align: center;
    
    position: relative;
    
    width: 350px;
    max-width: 30vw;
    height: auto;
    
    margin: 20px 0;
    padding: 10px 10px 40px;
    border: black solid 2px;
    border-radius: 10px;
    
    transition: .15s;
    
    &:hover {
        transform: scale(1.01);
    }
    
    & img{
        border-radius: 15px;
        
        max-width: 100%;
        filter: ${({ $grey }) => $grey};
        
        transition: .5s;
    }
    
    &:hover img{
        filter: none;
    }
`

const NameH2 = styled.h2`
    font-size: calc(20px + .8vw);
`;

const InfoDiv = styled.div`
    text-align: left;
    padding: 0 10%;
`;

const AttributesH3 = styled.h3`
    font-size: calc(15px + .5vw);
`;

const StatusH5 = styled.h5`
    position: absolute;
    bottom: 15px;
    right: 15px;
    
    margin: 0;
    
    font-size: calc(10px + .2vw);
`;

const IdH5 = styled.h5`
    position: absolute;
    bottom: 15px;
    left: 15px;
    
    margin: 0;

    font-size: calc(10px + .2vw);
`;

function CharacterArticle(char: Character){
    let greyScale: string;
    if (char.status === "Dead"){
        greyScale = "grayscale(100%)";
    } else if (char.status === "unknown"){
        greyScale = "grayscale(70%)";
    } else {
        greyScale = "none";
    }
    return (
        <StyledArticle id={char.id.toString()} $grey={greyScale}>
            <img src={char.image} alt={char.name}/>
            <NameH2>{char.name}</NameH2>
            <InfoDiv>
                <AttributesH3>{char.species}</AttributesH3>
                <AttributesH3>{char.type}</AttributesH3>
                <AttributesH3>{char.gender}</AttributesH3>
            </InfoDiv>

            <IdH5>{char.id}</IdH5>
            <StatusH5>{char.status}</StatusH5>
        </StyledArticle>
    )
}

export default CharacterArticle;