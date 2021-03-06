self.__BUILD_MANIFEST = {
    __rewrites: {
        beforeFiles: [{
            source: "/proposals/api/:path*",
            destination: "/api/:path*"
        }, {
            source: "/proposals/_next/static/:path*",
            destination: "/_next/static/:path*"
        }, {
            source: "/proposals/_next/webpack-hmr"
        }, {
            source: "/beta/proposals/:reportHash",
            destination: "/proposals/:reportHash"
        }, {
            source: "/beta/proposals",
            destination: "/proposals/demo"
        }, {
            source: "/proposals/mock/helioquote-iframe",
            destination: "/helioquote-iframe.html"
        }, {
            source: "/proposals/demo-roof-image.png",
            destination: "/demo-roof-image.png"
        }],
        afterFiles: [],
        fallback: []
    },
    "/404": ["static/chunks/pages/404-e83c8ae10ce2db5813ae.js"],
    "/__cypress__": ["static/chunks/pages/__cypress__-0b6e400ce6b0dc6cfa80.js"],
    "/_error": ["static/chunks/pages/_error-39a5dff84f45225425d8.js"],
    "/proposals/[reportHash]": ["static/chunks/pages/proposals/[reportHash]-499f283fb5e5e608ce22.js"],
    sortedPages: ["/404", "/__cypress__", "/_app", "/_error", "/proposals/[reportHash]"]
}, self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
