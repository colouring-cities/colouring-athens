module.exports = {
    apps: [
        {
            name: "colouringathens",
            cwd: "./app",
            script: "build/server.js",
            instances: 2,
            env: {
                NODE_ENV: "development",
                NODE_PORT: 3000,
                PGHOST: "localhost",
                PGPORT: 5435,
                PGDATABASE: "colouringathensdb",
                PGUSER: "gpanag",
                PGPASSWORD: "Psd5699954*",
                APP_COOKIE_SECRET: "123456",
                TILECACHE_PATH: "tilecache",
                EXTRACTS_DIRECTORY:"extracts",
                WEBAPP_ORIGIN: "http://localhost:3000",
            }
        }
    ]
}
