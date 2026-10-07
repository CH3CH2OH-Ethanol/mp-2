import {useEffect, useState} from "react";
import type {Character} from "../typs.ts";
import CharacterArticle from "./Character.tsx";
import styled from "styled-components";

const StyledList = styled.ul`
    
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
    padding: 10px 10vw;
    
    list-style: none;
`;

const CharacterLi = styled.li`
    
`;

function CharacterList() {

    const [data, setData] = useState<Character[]>([]);
    useEffect(
        () => {
            async function fetchData(){
                const raw = await fetch('https://rickandmortyapi.com/api/character');
                const dataObj = (await raw.json()).results;
                setData(dataObj);
            }
            fetchData().then(
                ()=> console.log("Data Fetched")
            ).catch(
                (err) => console.log("Error occurred:" + err)
            );
        },
        []
    )

    return (
        <StyledList>
            {
                data.map(
                    (char)=> (
                        <CharacterLi key={char.id}>
                            <CharacterArticle {...char}/>
                        </CharacterLi>
                        // ...char: spread operator, Spread the properties as props.
                        // Same as name={char.name} status={char.status} ...
                    )
                )
            }
        </StyledList>
    )
}

export default CharacterList;