import React, { useState } from "react";
import { CircleAvatar } from "./CircleAvatar";
import {
    Play,
    Pause,
    CaretDoubleLeft,
    CaretDoubleRight,
    ArrowBendUpRight as ArrowUpRight,
} from "@phosphor-icons/react";
import { ProgressBar } from "./ProgressBar";
import "./CreatorCard.css";
import { useNavigate } from "react-router-dom";

export interface Creator {
    id: string;
    name: string;
    url: string;
    description: string;
    imageURL: string;
}

export interface CreatorCardProps {
    creator: Creator;
    lite?: boolean;
    selectNextCreator?: () => void;
    selectPreCreator?: () => void;
}

export const CreatorCard: React.FC<CreatorCardProps> = (
    props: CreatorCardProps
) => {
    const { id, name, description, url, imageURL } = props.creator;
    const { selectNextCreator, selectPreCreator, lite = true } = props;
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    return (
        <div
            className="creator-card-container"
            style={{
                height: lite ? "280px" : "360px",
                backgroundColor: lite ? "#bfbfbf" : "#f5f5f5",
                opacity: lite ? 0.7 : 1,
            }}
        >
            <div
                className="creator-card-link"
                onClick={() => {
                    window.open(url, "_blank");
                }}
            >
                <ArrowUpRight size={28} />
            </div>

            <div
                className="creator-card-avatar"
                onClick={() => {
                    navigate(`/creators/${id}`);
                }}
            >
                <CircleAvatar
                    url={imageURL}
                    desp={description}
                    isPlaying={isPlaying}
                />
            </div>

            {lite && (
                <div
                    className="creator-card-info-container"
                    style={{
                        marginTop: "-6px",
                        paddingTop: "0px",
                    }}
                >
                    <div className="creator-card-name">{name}</div>
                </div>
            )}
            {!lite && (
                <>
                    <div className="creator-card-progress-container">
                        <ProgressBar
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            progress={progress}
                            setProgress={setProgress}
                        />
                        <div className="creator-card-hover-area">
                            <div className="creator-card-info-container">
                                <div className="creator-card-name">{name}</div>
                                <div className="creator-card-desp">
                                    {description}
                                </div>
                            </div>
                            <div className="creator-card-play-btn">
                                <CaretDoubleLeft
                                    size={32}
                                    weight="duotone"
                                    onClick={selectPreCreator}
                                />
                                {isPlaying ? (
                                    <Pause
                                        size={32}
                                        weight="duotone"
                                        onClick={() => setIsPlaying(false)}
                                    />
                                ) : (
                                    <Play
                                        size={32}
                                        weight="duotone"
                                        onClick={() => setIsPlaying(true)}
                                    />
                                )}
                                <CaretDoubleRight
                                    size={32}
                                    weight="duotone"
                                    onClick={selectNextCreator}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
