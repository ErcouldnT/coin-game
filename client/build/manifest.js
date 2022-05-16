export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"start-374234f9.js","js":["start-374234f9.js","chunks/index-e6af642f.js","chunks/singletons-4439d2b4.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/4.js'),
			() => import('./server/nodes/5.js'),
			() => import('./server/nodes/6.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				path: "/login",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "signout",
				pattern: /^\/signout\/?$/,
				names: [],
				types: [],
				path: "/signout",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "signup",
				pattern: /^\/signup\/?$/,
				names: [],
				types: [],
				path: "/signup",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "wallet",
				pattern: /^\/wallet\/?$/,
				names: [],
				types: [],
				path: "/wallet",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "auth/signout",
				pattern: /^\/auth\/signout\/?$/,
				names: [],
				types: [],
				load: () => import('./server/entries/endpoints/auth/signout.js')
			},
			{
				type: 'endpoint',
				id: "auth/register",
				pattern: /^\/auth\/register\/?$/,
				names: [],
				types: [],
				load: () => import('./server/entries/endpoints/auth/register.js')
			},
			{
				type: 'endpoint',
				id: "auth/login",
				pattern: /^\/auth\/login\/?$/,
				names: [],
				types: [],
				load: () => import('./server/entries/endpoints/auth/login.js')
			},
			{
				type: 'endpoint',
				id: "auth/exchange",
				pattern: /^\/auth\/exchange\/?$/,
				names: [],
				types: [],
				load: () => import('./server/entries/endpoints/auth/exchange.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
