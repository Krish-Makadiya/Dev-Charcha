import { Button } from "@/components/ui/button";
import React from "react";

const Chat = () => {
    return (
        <div className="flex items-center justify-center w-full h-[90vh]">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Chat</h1>
                <p className="text-lg">
                    Welcome to the Chat page! Start chatting with others now.  
                </p>
                <Button>Chat!!!</Button>
            </div>
        </div>
    );
};

export default Chat;
