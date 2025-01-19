import ChatComponent from "@/components/ChatComponent";
import { currentUser } from "@clerk/nextjs/server";

const page = async ({ params }) => {
    const user = await currentUser();

    const slug = (await params).slug;
    return (
        <ChatComponent
            slug={slug}
            clerkUser={{
                id: user?.id,
                name: user?.firstName,
                token: user?.publicMetadata?.token,
                api_key: process.env.STREAM_API_KEY,
            }}
        />
    );
};

export default page;
