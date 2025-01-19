import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

export async function POST(request) {
    const api_key = process.env.STREAM_API_KEY;
    const api_secret = process.env.STREAM_API_SECRET;

    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json();

    const token = serverClient.createToken(user.data.id);

    const client = await clerkClient();
    await serverClient.upsertUser({ id: user.data.id, role: "user" });

    await client.users.updateUserMetadata(user.data.id, {
        publicMetadata: {
            token: token,
        },
    });

    const slugs = [
        "python-discussion",
        "javascript-discussion",
        "java-discussion",
        "cpp-discussion",
        "csharp-discussion",
        "ruby-discussion",
        "go-discussion",
        "swift-discussion",
        "rust-discussion",
    ];

    function slugToTitle(slug) {
        return slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }

    slugs.forEach(async (slug) => {
        const channel = serverClient.channel("messaging", slug, {
            image: "https://getstream.io/random_png/?name=react",
            name: slugToTitle(slug),
            created_by_id: user.data.id,
        });
        await channel.create();
        await channel.addMembers([user.data.id]);
    });

    return Response.json({
        message: "Done",
        token: token,
    });
}
