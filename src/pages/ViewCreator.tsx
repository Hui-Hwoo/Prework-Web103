import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSupabaseCreater } from "../utils";
import { CircleAvatar, AddCreatorModal } from "../components";
import { Paperclip, Trash } from "@phosphor-icons/react";
import "./ViewCreator.css";

export const ViewCreator = () => {
    // get id from URL
    const { id } = useParams();
    const { getCreator, updateCreator, deleteCreator } = useSupabaseCreater();
    const [isOpen, setIsOpen] = useState(false);
    const creator = getCreator(id);

    return (
        <div>
            {creator ? (
                <div>
                    <div>
                        <h1 style={{ color: "white", textAlign: "center" }}>
                            {creator.name}
                        </h1>
                        <h2 style={{ color: "white", textAlign: "center" }}>
                            {creator.description}
                        </h2>
                    </div>
                    <div className="creator-viewer-container">
                        <div className="container-wrap">
                            <div className="container">
                                <div className="more"></div>
                                <div className="more"></div>
                                <div className="more"></div>
                                <div className="more"></div>
                                <div className="item">
                                    <CircleAvatar
                                        url={creator.imageURL}
                                        desp={creator.description}
                                        isPlaying={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="creator-viewer-button-container">
                        <div
                            className="creator-viewer-button"
                            onClick={() => {
                                deleteCreator(creator);
                                window.location.href = "/";
                            }}
                        >
                            <Trash size={36} />
                            <div> Delete </div>
                        </div>
                        <div
                            className="creator-viewer-button"
                            onClick={() => setIsOpen(true)}
                        >
                            <Paperclip size={36} />
                            <div> Edit </div>
                        </div>
                    </div>
                    <AddCreatorModal
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        addCreator={updateCreator}
                        creater={creator}
                    />
                </div>
            ) : (
                <div>Creator not found</div>
            )}
        </div>
    );
};
