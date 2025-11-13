export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["doenit-logo.webp","instellings.webp","robots.txt","tuisblad.webp","wysig-taak.webp"]),
	mimeTypes: {".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.3Ydj5cin.js",app:"_app/immutable/entry/app.B_gQVmfJ.js",imports:["_app/immutable/entry/start.3Ydj5cin.js","_app/immutable/chunks/8kXs17V5.js","_app/immutable/chunks/CcUxaGY7.js","_app/immutable/chunks/Bcvu3o5W.js","_app/immutable/entry/app.B_gQVmfJ.js","_app/immutable/chunks/Bcvu3o5W.js","_app/immutable/chunks/CcUxaGY7.js","_app/immutable/chunks/DsnmJJEf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
