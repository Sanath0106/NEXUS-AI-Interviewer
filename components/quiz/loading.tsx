import { Loader2 } from "lucide-react";

export default function QuizLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader2 className="h-8 w-8 animate-spin text-violet-600" />
    </div>
  );
} 