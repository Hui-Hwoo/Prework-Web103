import React from "react";
import { Creator } from "./CreatorCard";
import { Circle, Trash } from "@phosphor-icons/react";
import "./CreatorMenu.css";

interface CreatorMenuProps {
    creators: Creator[];
    currentCreator: Creator;
    handleSelectCreator: (creator: Creator) => void;
    deleteCreator: (creator: Creator) => void;
}

export const CreatorMenu = (props: CreatorMenuProps) => {
    const { creators, currentCreator, handleSelectCreator, deleteCreator } =
        props;
    return (
        <div className="creator-menu-container">
            {creators.map((creator, index) => {
                return (
                    <div
                        key={index}
                        className={`creator-menu-item ${
                            creator === currentCreator ? "selected" : ""
                        }`}
                        onClick={() => {
                            handleSelectCreator(creator);
                        }}
                    >
                        <div className="creator-menu-item-content">
                            <Circle
                                size={20}
                                weight={
                                    creator === currentCreator ? "fill" : "bold"
                                }
                                color="black"
                            />
                            <div className="creator-menu-item-text">
                                {creator.name}
                            </div>
                        </div>
                        <div
                            className="creator-menu-item-delete"
                            onClick={() => {
                                deleteCreator(creator);
                            }}
                        >
                            <Trash size={20} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
