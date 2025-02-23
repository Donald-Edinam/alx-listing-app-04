const CHUNK_PUBLIC_PATH = "server/pages/property/[id].js";
const runtime = require("../../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_5179e9._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__a3d147._.js");
runtime.loadChunk("server/chunks/ssr/styles_globals_ff5908.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/pages/property/[id].tsx [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/pages/_document.tsx [ssr] (ecmascript)\", INNER_APP => \"[project]/pages/_app.tsx [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
