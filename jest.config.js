export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.m?js$': 'babel-jest', // Transforma módulos ESM
  },
  transformIgnorePatterns: [
    '/node_modules/(?!node-fetch|data-uri-to-buffer)', // Asegura que node-fetch y data-uri-to-buffer sean transformados
  ],
  moduleFileExtensions: ['js', 'jsx'],
};