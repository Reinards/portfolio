module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/lv',
          permanent: true,
        },
      ]
    },
  }