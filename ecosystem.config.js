module.exports = {
    apps: [
        {
            name: 'health-server',
            script: './src/index.js',
            output: '/dev/null',
            error: '/dev/null',
            instances: '3',
            autorestart: true,
            watch: false,
            max_memory_restart: '2G'
        }
    ]
}
