import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import type { VNode } from "preact";

export default function Home(): VNode {
  return (
    <main class="p-4">
      <h1 class="text-4xl font-bold">Mi blog</h1>
      <a class="underline hover:text-blue-5000" href="/hello-world">
        Entrar al articulo Hello World
      </a>
    </main>
  );
}
