module.exports = {
    "presets": ["es2015", "react-native", "react"],
    testEnvironment: 'http://localhost:3000',
      setupFiles: ['<rootDir>/tests/setup/shim.js',
        '<rootDir>tests/setup/setup.js'],
}