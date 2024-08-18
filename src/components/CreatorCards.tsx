import React, { useState } from "react";
import "./CreatorCards.css";
import { CaretLeft, CaretRight, Plus } from "@phosphor-icons/react";
import { Creator, CreatorCard } from "./CreatorCard";
import { CreatorMenu } from "./CreatorMenu";
import { AddCreatorModal } from "./AddCreatorModal";

export interface CreatorCardsProps {
    creators: Creator[];
    addCreator: (creator: Creator) => void;
    deleteCreator: (creator: Creator) => void;
}

export const CreatorCards: React.FC<CreatorCardsProps> = (
    props: CreatorCardsProps
) => {
    const { creators, addCreator, deleteCreator } = props;
    const [selectedCreator, setSelectedCreator] = useState<Creator>(
        creators[1]
    );
    const [preCreator, setPreCreator] = useState<Creator>(creators[0]);
    const [nextCreator, setNextCreator] = useState<Creator>(creators[2]);
    const [isOpened, setIsOpened] = useState(false);

    const handleSelectCreator = (creator: Creator) => {
        setSelectedCreator(creator);
        setPreCreator(
            creators[
                (creators.indexOf(creator) - 1 + creators.length) %
                    creators.length
            ]
        );
        setNextCreator(
            creators[(creators.indexOf(creator) + 1) % creators.length]
        );
    };

    return (
        <div className="creator-cards-container">
            <div className="creator-cards-player-container">
                <div
                    onClick={() => {
                        handleSelectCreator(preCreator);
                    }}
                >
                    <CaretLeft size={48} weight="bold" color="#f5f5f5" />
                </div>
                <div className="creator-cards-area">
                    <div
                        onClick={() => {
                            handleSelectCreator(preCreator);
                        }}
                    >
                        <CreatorCard creator={preCreator} />
                    </div>
                    <div>
                        <CreatorCard
                            creator={selectedCreator}
                            lite={false}
                            selectPreCreator={() => {
                                handleSelectCreator(preCreator);
                            }}
                            selectNextCreator={() => {
                                handleSelectCreator(nextCreator);
                            }}
                        />
                    </div>
                    <div
                        onClick={() => {
                            handleSelectCreator(nextCreator);
                        }}
                    >
                        <CreatorCard creator={nextCreator} />
                    </div>
                </div>
                <div
                    onClick={() => {
                        handleSelectCreator(nextCreator);
                    }}
                >
                    <CaretRight size={48} weight="bold" color="#f5f5f5" />
                </div>
            </div>
            <div className="creator-cards-menu-container">
                <CreatorMenu
                    creators={creators}
                    currentCreator={selectedCreator}
                    handleSelectCreator={handleSelectCreator}
                    deleteCreator={deleteCreator}
                />
            </div>
            <div className="creator-cards-add-creator">
                <Plus
                    size={32}
                    color="#f5f5f5"
                    weight="bold"
                    onClick={() => {
                        setIsOpened(true);
                    }}
                />
            </div>
            <AddCreatorModal
                isOpen={isOpened}
                onClose={() => {
                    setIsOpened(false);
                }}
                addCreator={addCreator}
            />
        </div>
    );
};
