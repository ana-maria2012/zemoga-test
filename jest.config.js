module.exports = {
    verbose: true,
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/fileMock.js",
        "\\.(css|less)$": "identity-obj-proxy"
    },
    setupFiles: [
        "<rootDir>/test/enzyme-setup.js"
    ]
}
