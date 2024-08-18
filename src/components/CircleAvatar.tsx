import "./CircleAvatar.css";

const getFirstLetters = (str: string, maxLength: number) => {
    const words = str.split(" ");
    let result = "";
    for (const word of words) {
        if (result.length + 1 > maxLength) break;
        result += " " + word;
    }
    // Remove the leading and trailing spaces
    return result.trim();
};

export const CircleAvatar = (props: {
    url: string;
    desp: string;
    isPlaying: boolean;
}) => {
    const { url, desp, isPlaying } = props;
    const firstLetters = getFirstLetters(desp, 30);
    const formatedDesp = (firstLetters + " - ")
        .replace(/ /g, "  ")
        .toUpperCase();

    return (
        <div className="circle-avatar-container">
            <div className="circle-avatar">
                <img className="circle-avatar-img" src={url} alt="avatar" />
            </div>
            <div className={`circle-avatar-text ${isPlaying ? "" : "paused"}`}>
                {formatedDesp.split("").map((char, index) => {
                    return (
                        <span
                            key={index}
                            style={{
                                transform: `rotate(${
                                    index * (360 / formatedDesp.length)
                                }deg)`,
                            }}
                        >
                            {char}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};
