
import { Suspense } from "react";
import GenerateClient from "./GenerateClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GenerateClient />
    </Suspense>
  );
} 



