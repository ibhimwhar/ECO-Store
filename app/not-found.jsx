import Image from "next/image";

export default function NotFound() {
    return (
        <div className="h-screen flex items-center justify-center text-center px-6">
            <div>
                <Image
                    src="/profile.png"
                    alt="Not Found"
                    width={500}
                    height={400}
                    className="w-full h-64 object-contain transition-all animate-bounce"
                    priority
                />
                <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
                <p className="mt-4 text-lg">Sorry, the page you are looking for does not exist.</p>
            </div>
        </div>
    );
}