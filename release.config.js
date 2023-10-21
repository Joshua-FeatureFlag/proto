module.exports = {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/github',
        ["@semantic-release/exec",
            {
                "prepareCmd": "echo \"nextVer=${nextRelease.version}\" >> $GITHUB_ENV"
            }
        ]
    ]
};