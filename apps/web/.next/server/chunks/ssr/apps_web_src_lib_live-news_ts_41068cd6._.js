module.exports = [
"[project]/apps/web/src/lib/live-news.ts [app-rsc] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/node_modules_864df9aa._.js",
  "server/chunks/ssr/[root-of-the-server]__4978e5c3._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/apps/web/src/lib/live-news.ts [app-rsc] (ecmascript)");
    });
});
}),
];