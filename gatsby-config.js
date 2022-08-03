module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Murder at the Art Gallery",
  },
  plugins: [`gatsby-plugin-sass`,
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: "https://ac22e87fe0ef4aeaaa7ff6fbf65d25a5@o1345607.ingest.sentry.io/6622387",
        sampleRate: 0.7,
      },
    },
    // ....
  ]
};