//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  publicRuntimeConfig: {
    firebaseConfig: {
      apiKey: 'AIzaSyD2zYDdU1_sGgnyY-75PYtoGlgxFThzAT0',
      authDomain: 'blog-73a6b.firebaseapp.com',
      projectId: 'blog-73a6b',
      storageBucket: 'blog-73a6b.appspot.com',
      messagingSenderId: '322998554736',
      appId: '1:322998554736:web:e12d13165be62fd5a464b5',
      measurementId: 'G-HRSQ7TGRGG',
    },
  },
};

module.exports = withNx(nextConfig);
