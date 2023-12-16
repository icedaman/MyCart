

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import TodosDemo from "./TodosDemo";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function AppDemo() {
  const [showDemo, setShowDemo] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setShowDemo(!showDemo)}>Toggle Demo</button>
      {showDemo && <TodosDemo />}
    </QueryClientProvider>
  );
}

export default AppDemo;