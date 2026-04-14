import { useState } from "react";
import { LoginForm } from "@/components/molecules/LoginForm";

export function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (values: { username: string; password: string }) => {
    setIsLoading(true);
    try {
      // TODO: integrate with auth API
      console.log("Login submitted:", values);
      await new Promise((r) => setTimeout(r, 1000)); // simulate network
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Branded header */}
        <div className="text-center mb-8">
          <span className="text-4xl font-extrabold tracking-tight text-primary-600">
            RMS
          </span>
          <p className="text-neutral-500 dark:text-neutral-400 mt-2 text-sm">
            Resource Management System
          </p>
        </div>

        {/* Login form card */}
        <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
      </div>
    </div>
  );
}
