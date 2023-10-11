export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Montserrat-Italic-VariableFont_wght.ttf","fonts/Montserrat-VariableFont_wght.ttf"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.89610cae.js","app":"_app/immutable/entry/app.ed0757b4.js","imports":["_app/immutable/entry/start.89610cae.js","_app/immutable/chunks/scheduler.8ea2a124.js","_app/immutable/chunks/singletons.551d697f.js","_app/immutable/chunks/index.d07436de.js","_app/immutable/entry/app.ed0757b4.js","_app/immutable/chunks/scheduler.8ea2a124.js","_app/immutable/chunks/index.5be0a25d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
