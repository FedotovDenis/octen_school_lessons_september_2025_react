import React from 'react';
import {ICharacter} from "../../models/ICharacter.ts";
import {ReactNode} from "react";

interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode,
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className={"character"}>
            <h3>{item.name} {item.surname}</h3>
            <img src={item.photo} alt={item.name}/>
            <p>{children}</p>
        </div>
    );
};

export default CharacterComponent;