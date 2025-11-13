export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["doenit-logo.webp","instellings.webp","page-not-found.webp","robots.txt","sitemap.xml","tertius_picture.webp","tuisblad.webp","wysig-taak.webp"]),
	mimeTypes: {".webp":"image/webp",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.f58dpDbj.js",app:"_app/immutable/entry/app.BQHI_YRi.js",imports:["_app/immutable/entry/start.f58dpDbj.js","_app/immutable/chunks/hjxlX41M.js","_app/immutable/chunks/1dizz45u.js","_app/immutable/chunks/BoVrtkMf.js","_app/immutable/chunks/0k9XCiTm.js","_app/immutable/chunks/kh4C5VZo.js","_app/immutable/entry/app.BQHI_YRi.js","_app/immutable/chunks/BoVrtkMf.js","_app/immutable/chunks/0k9XCiTm.js","_app/immutable/chunks/kh4C5VZo.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/1dizz45u.js","_app/immutable/chunks/BWitIwhk.js","_app/immutable/chunks/BOkJ5hmU.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/doenit",
				pattern: /^\/doenit\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
