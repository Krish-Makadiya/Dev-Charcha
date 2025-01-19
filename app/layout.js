import "./globals.css";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export const metadata = {
    title: "DevCharcha",
    description: "A community for developers to discuss and share their knowledge.",
    icons: {
        icon: "/logo.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className="text-[#09090b] bg-[#fafaf9]">
                    <ClerkLoading>
                    <div className="h-screen flex items-center justify-center">
                <div className="flex-col gap-4 w-full flex items-center justify-center">
                    <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-black rounded-full">
                        <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-black rounded-full"></div>
                    </div>
                </div>
            </div>
                    </ClerkLoading>
                    <ClerkLoaded>{children}</ClerkLoaded>
                </body>
            </html>
        </ClerkProvider>
    );
}
