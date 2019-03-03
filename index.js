const { KauriServer } = require("kauri");

// minimal server configuration consists
// of simply the path to your routes
new KauriServer({
  app: {
    port: 8086
  },
  routes: {
    path: "./Routes",
    loadFn: route => require(`./Routes/${route}`)
  }
});