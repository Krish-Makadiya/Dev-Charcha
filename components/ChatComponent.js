"use client";
import { useState, useEffect } from "react";
import {
    useCreateChatClient,
    Chat,
    Channel,
    ChannelHeader,
    MessageInput,
    MessageList,
    Thread,
    Window,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";

const ChatComponent = ({ slug, clerkUser }) => {
    const apiKey = clerkUser.api_key;
    const userId = clerkUser.id;
    const userName = clerkUser.name;
    const userToken = clerkUser.token;

    const user = {
        id: userId,
        name: userName,
        image: `https://getstream.io/random_png/?name=${userName}`,
    };

    const [channel, setChannel] = useState();
    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: user,
    });

    function slugToTitle(slug) {
        return slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }

    useEffect(() => {
        if (!client) return;

        const channel = client.channel("messaging", slug, {
            image: "https://getstream.io/random_png/?name=react",
            name: slugToTitle(slug),
            members: [userId],
        });

        setChannel(channel);
    }, [client]);

    if (!client)
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="flex-col gap-4 w-full flex items-center justify-center">
                    <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-black rounded-full">
                        <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-black rounded-full"></div>
                    </div>
                </div>
            </div>
        );

    return (
        <div className="h-screen">
            <Chat client={client} theme="messaging light">
                <Channel channel={channel}>
                    <Window>
                        <ChannelHeader />
                        <MessageList />
                        <MessageInput />
                    </Window>
                    <Thread />
                </Channel>
            </Chat>
        </div>
    );
};

export default ChatComponent;
