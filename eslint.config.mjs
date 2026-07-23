import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier/flat';

// ESLint 9 uses flat config. eslint-config-next 16 ships native flat config
// arrays, and `next lint` was removed in Next 16, so linting runs through the
// ESLint CLI directly (see the "lint" script in package.json).
const eslintConfig = [
  {
    ignores: ['**/.next/**', 'out/**', 'node_modules/**', '.claude/**'],
  },
  ...nextCoreWebVitals,
  prettier,
];

export default eslintConfig;
