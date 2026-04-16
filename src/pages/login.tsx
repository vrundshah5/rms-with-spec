import { useState } from "react";
import { SplitAuthLayout } from "@/components/organisms";
import { BrandPanel, LoginForm } from "@/components/molecules";

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
    <SplitAuthLayout
      leftPanel={<BrandPanel />}
      rightPanel={
        <div className="w-full max-w-md px-4 lg:px-0">
          <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
        </div>
      }
    />
  );
}
