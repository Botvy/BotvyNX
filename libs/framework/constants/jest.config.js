module.exports = {
    name: 'framework-constants',
    preset: '../../../jest.config.js',
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]sx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
    coverageDirectory: '../../../coverage/libs/framework/constants',
};
