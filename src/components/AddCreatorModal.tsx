import React from "react";
import { Creator } from "./CreatorCard";
import "./AddCreatorModal.css";

// Define the Modal component
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    addCreator: (creator: Creator) => void;
    creater?: Creator;
}

export const AddCreatorModal = (props: ModalProps) => {
    const { isOpen, onClose, addCreator, creater } = props;
    const [creatorName, setCreatorName] = React.useState(creater?.name || "");
    const [creatorDescription, setCreatorDescription] = React.useState(
        creater?.description || ""
    );
    const [creatorUrl, setCreatorUrl] = React.useState(creater?.url || "");
    const [creatorImageURL, setCreatorImageUrl] = React.useState(
        creater?.imageURL || ""
    );

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-content-title">Add Creator</div>
                <div className="modal-overlay-input">
                    <label>Name</label>
                    <input
                        style={{ width: "66%" }}
                        type="text"
                        placeholder="Full Name"
                        value={creatorName}
                        onChange={(e) => setCreatorName(e.target.value)}
                    />
                </div>

                <div className="modal-overlay-input">
                    <label>Creator URL</label>
                    <input
                        type="text"
                        style={{ width: "66%" }}
                        placeholder="https://example.com"
                        value={creatorUrl}
                        onChange={(e) => setCreatorUrl(e.target.value)}
                    />
                </div>
                <div className="modal-overlay-input">
                    <label>Avatar URL</label>
                    <input
                        type="text"
                        style={{ width: "66%" }}
                        placeholder="https://example.com/avatar.png"
                        value={creatorImageURL}
                        onChange={(e) => setCreatorImageUrl(e.target.value)}
                    />
                </div>
                <div className="modal-overlay-text-input">
                    <div>Description</div>
                    <div className="resizable-textarea-container">
                        <textarea
                            className="resizable-textarea"
                            placeholder="Creator Description"
                            value={creatorDescription}
                            onChange={(e) =>
                                setCreatorDescription(e.target.value)
                            }
                        />
                    </div>
                </div>
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
                <button
                    className="confirm-button"
                    onClick={() => {
                        addCreator({
                            id: creater?.id || "palceholder",
                            name: creatorName,
                            description: creatorDescription,
                            url: creatorUrl,
                            imageURL: creatorImageURL,
                        });
                        onClose();
                    }}
                >
                    Comfirm
                </button>
            </div>
        </div>
    );
};
