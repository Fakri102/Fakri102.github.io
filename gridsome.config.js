// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'M Fakri G profile',
  siteUrl: 'https://Fakri102.github.io',
  // pathPrefix: '/dist/',
  transformers: {
    remark: {
     externalLinksTarget: '_blank',
     externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
     anchorClassName: 'icon icon-link',
     plugins: [
       // ...global plugins
     ]
   }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/data/projects/*.md',
        typeName: 'Project',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    }
  ]
}
