import React, { useEffect, useRef } from "react";
import "./ProgressBar.css"; // Import the CSS styles
import { Baseball } from "@phosphor-icons/react";

interface ProgressBarProps {
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    progress: number;
    setProgress: React.Dispatch<React.SetStateAction<number>>;
}

export const ProgressBar = (props: ProgressBarProps) => {
    const { isPlaying, setIsPlaying, progress, setProgress } = props;
    const progressContainerRef = useRef(null);
    const pointSize = 24;

    useEffect(() => {
        if (!isPlaying) {
            return;
        }
        const interval = setInterval(() => {
            setProgress((prev) => {
                const nextProgress = prev + 5 / 24;
                if (nextProgress > 85.5) {
                    clearInterval(interval);
                    setIsPlaying(false);
                    return 0;
                }
                return nextProgress >= 85.5 ? 85.5 : nextProgress;
            });
        }, 50);
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [isPlaying, setProgress, setIsPlaying]);

    // @ts-ignore
    const handleMouseDown = (event) => {
        const progressContainer = progressContainerRef.current;

        // @ts-ignore
        const onMouseMove = (event) => {
            // @ts-ignore
            const containerRect = progressContainer.getBoundingClientRect();
            let newLeft = event.clientX - containerRect.left;

            // Prevent the cat icon from moving outside the progress container
            if (newLeft < 0) newLeft = 0;
            if (newLeft > containerRect.width - pointSize) {
                newLeft = containerRect.width - pointSize;
            }

            const newProgress = (newLeft / containerRect.width) * 100;
            setProgress(newProgress);
        };

        const onMouseUp = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp, { once: true });
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
            }}
        >
            <div className="progress-container" ref={progressContainerRef}>
                <div
                    className="progress-bar"
                    style={{
                        width: `min(calc(${progress}% + ${pointSize}px), 100%)`,
                    }}
                ></div>
                <div
                    className="cat-icon"
                    style={{
                        left: `${progress}%`,
                        width: `${pointSize}px`,
                        height: `${pointSize}px`,
                    }}
                    onMouseDown={handleMouseDown}
                    draggable="false"
                >
                    <Baseball size={pointSize} />
                </div>
            </div>
        </div>
    );
};
