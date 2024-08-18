import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Creator } from "../components";

// get URL from .env file
const URL = process.env.REACT_APP_Supabase_Project_Url || "";
const API_KEY = process.env.REACT_APP_Supabase_API_KEY || "";

const supabase = createClient(URL, API_KEY);

export const useSupabaseCreater = () => {
    const [creators, setCreators] = useState<Creator[]>(defaultCreators);
    const [selectedCreator, setSelectedCreator] = useState<Creator>();
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase.from("creators").select("*");
            if (error) {
                console.log("error", error);
            } else {
                console.log(data);
                const creator_list: Creator[] = [];
                for (let i = 0; i < data.length; i++) {
                    creator_list.push({
                        id: data[i].id,
                        name: data[i].name,
                        url: data[i].url,
                        description: data[i].description,
                        imageURL: data[i].imageURL,
                    } as Creator);
                }
                const uniqueCreators = creator_list.filter(
                    (creator) =>
                        !defaultCreators.some((c) => c.id === creator.id)
                );
                setCreators(defaultCreators.concat(uniqueCreators));
                console.log(
                    `Fetched ${creator_list.length} creators from database`
                );
            }
        };
        if (refresh) {
            fetchCreator();
            setRefresh(false);
        }
    }, [refresh]);

    const addCreator = async (creator: Creator) => {
        const response = await supabase.from("creators").insert({
            name: creator.name,
            url: creator.url,
            description: creator.description,
            imageURL: creator.imageURL,
        });
        if (response.error) {
            console.log("error", response.error);
        }
        setSelectedCreator(creator);
        setRefresh(true);
    };

    const updateCreator = async (creator: Creator) => {
        const response = await supabase
            .from("creators")
            .update({
                name: creator.name,
                url: creator.url,
                description: creator.description,
                imageURL: creator.imageURL,
            })
            .eq("id", creator.id);
        if (response.error) {
            console.log("error", response.error);
        }
        const updatedCreators = creators.map((c) =>
            c.id === creator.id ? creator : c
        );
        setCreators(updatedCreators);
    };

    const deleteCreator = async (creator: Creator) => {
        const nextCreatorIndex =
            (creators.indexOf(creator) + 1) % (creators.length - 1);
        const response = await supabase
            .from("creators")
            .delete()
            .eq("id", creator.id);
        if (response.error) {
            console.log("error", response.error);
        }
        setRefresh(true);
        setSelectedCreator(creators[nextCreatorIndex]);
    };

    const getCreator = (id: any) => {
        if (!id) {
            return null;
        }
        return creators.find((creator) => creator.id === id);
    };

    return {
        creators,
        selectedCreator,
        getCreator,
        addCreator,
        updateCreator,
        deleteCreator,
    };
};

const defaultCreators: Creator[] = [
    {
        id: "5c1a9586-17eb-40e1-b47f-5706255cc959",
        name: "Scott H. Young",
        url: "https://www.scotthyoung.com/",
        description: "Author, Programmer, Entrepreneur",
        imageURL: "https://www.scotthyoung.com/home-img/scott-hero-4.jpg",
    },
    {
        id: "author",
        name: "Joe Hu",
        url: "https://hui-hwoo.github.io/odyssey/",
        description: "Full-stack Engineer",
        imageURL:
            "https://hui-hwoo.github.io/odyssey/static/media/logo.c12eef390432ff85386a.png",
    },
    {
        id: "354d1292-3137-4759-a53e-0a3839426659",
        name: "Matt Abrahams",
        url: "https://nofreakingspeaking.com/blog/",
        description: "Think Fast. and Talk Smart.",
        imageURL:
            "https://www.gsb.stanford.edu/sites/default/files/styles/270_x_270/public/faculty/photo/photo-faculty-abrahams-matt.jpeg.webp?itok=suB20BHT",
    },
    {
        id: "310ca061-3a5e-4027-ba8f-fa26b336fa0b",
        name: "Gawx Art",
        url: "https://www.youtube.com/@GawxArt",
        description: "Artist, Designer",
        imageURL:
            "https://yt3.googleusercontent.com/ytc/AIdro_ldpu4UtGcNE-DGDKaSRiN_miZT2oChAp8XxMoEfFzIBOg=s160-c-k-c0x00ffffff-no-rj",
    },
    {
        id: "b9f538f3-5a5f-4111-9415-5d32b920a8b4",
        name: "Ali Abdaal",
        url: "https://www.youtube.com/@aliabdaal",
        description: "Productivity Expert + YouTuber",
        imageURL:
            "https://yt3.googleusercontent.com/ytc/AIdro_m2xx6mCZwsyjARnkwBKJxEv0FqGxGS2NwWNkjWH__Smw=s160-c-k-c0x00ffffff-no-rj",
    },
    {
        id: "84d2ce22-bdf5-4407-90b4-09bd595f0d58",
        name: "Alex Thomas",
        url: "https://www.youtube.com/@alexthomas6530",
        description: "An English teacher and a writer",
        imageURL:
            "https://yt3.googleusercontent.com/ytc/AIdro_mOi_c_xEpFTPobPXNCkukxY6tCV9KQGQ080rxt8zUpvw=s160-c-k-c0x00ffffff-no-rj",
    },
];
