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
    <div className="min-h-screen flex">
      {/* Left panel — decorative / branding */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-primary flex-col items-center justify-center p-12 overflow-hidden">
        {/* Subtle geometric decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary-foreground" />
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-primary-foreground" />
          <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary-foreground" />
        </div>

        <div className="relative z-10 text-center text-primary-foreground">
          {/* Logo / icon placeholder */}
          <div className="w-20 h-20 rounded-2xl bg-primary-foreground/20 border border-primary-foreground/30 flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-10 h-10 text-primary-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.75V12A9.75 9.75 0 0112 2.25 9.75 9.75 0 0121.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold tracking-tight mb-3 leading-tight">
            Resource Management
            <br />
            System
          </h1>
          <p className="text-primary-foreground/70 text-base max-w-xs mx-auto">
            Manage your resources efficiently and effectively with a unified platform.
          </p>
        </div>
      </div>

      {/* Right panel — login form */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-10 bg-background">
        <div className="w-full max-w-sm">
          {/* Mobile: show app title */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Resource Management System
            </h1>
          </div>

          {/* Form header */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Sign in
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Enter your credentials to access the system
            </p>
          </div>

          <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
