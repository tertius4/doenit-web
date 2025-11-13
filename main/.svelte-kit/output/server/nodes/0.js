import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DA7TjBu-.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/e1tVdP00.js","_app/immutable/chunks/Bvot_Dxv.js"];
export const stylesheets = ["_app/immutable/assets/0.B_-tiHFz.css"];
export const fonts = [];
