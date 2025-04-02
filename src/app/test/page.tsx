"use client";

import { useState } from "react";

export default function TestPage(): React.ReactElement {
  const [response, setResponse] = useState<string>("");

  const testGet = async (): Promise<void> => {
    try {
      const res = await fetch("/api/hello");
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setResponse(
        `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  };

  const testPost = async (): Promise<void> => {
    try {
      const res = await fetch("/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ test: "data" }),
      });
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setResponse(
        `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">API Test Page</h1>
      <div className="space-x-4 mb-4">
        <button
          onClick={testGet}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Test GET
        </button>
        <button
          onClick={testPost}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Test POST
        </button>
      </div>
      {response && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Response:</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-auto">
            {response}
          </pre>
        </div>
      )}
    </div>
  );
}
