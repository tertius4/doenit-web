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
		client: {start:"_app/immutable/entry/start.B8y6viQD.js",app:"_app/immutable/entry/app.CRWkOwMk.js",imports:["_app/immutable/entry/start.B8y6viQD.js","_app/immutable/chunks/CpfxP-z9.js","_app/immutable/chunks/DHMrLEOE.js","_app/immutable/chunks/Bvot_Dxv.js","_app/immutable/chunks/D8Z9p0WQ.js","_app/immutable/entry/app.CRWkOwMk.js","_app/immutable/chunks/Bvot_Dxv.js","_app/immutable/chunks/D8Z9p0WQ.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DHMrLEOE.js","_app/immutable/chunks/BAF9bqbN.js","_app/immutable/chunks/LURHR_DV.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/doenit"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
