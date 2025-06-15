import { Loader2 } from "lucide-react";

const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <Loader2 className="h-12 w-12 text-purple-600 animate-spin" />
        <p className="text-purple-600 text-sm">Loading...</p>
    </div>
);

export default LoadingSpinner;
