import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DVUdikO3.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BYj3PBTR.js","_app/immutable/chunks/Bcvu3o5W.js"];
export const stylesheets = ["_app/immutable/assets/0.-KHbTi2V.css"];
export const fonts = [];
