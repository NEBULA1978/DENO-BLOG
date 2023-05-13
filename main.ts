/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

await start(manifest, { plugins: [twindPlugin(twindConfig)] });

// Para iniciar por consola proyeto:

// deno-blog$ deno task start
// Task start deno run -A --watch=static/,routes/ dev.ts
// Watcher Process started.
// The manifest has been generated for 3 routes and 1 islands.
// Listening on http://localhost:8000/
