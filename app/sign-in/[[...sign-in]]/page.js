import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="w-full py-10 flex justify-center items-center">
            <SignIn />
        </div>
    );
}
