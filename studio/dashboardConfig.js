export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '632e781e46da453532533dc1',
                  title: 'Sanity Studio',
                  name: 'curated-gallery-studio',
                  apiId: '67953c44-e71c-4d4a-a18e-f2d0adf7bb40'
                },
                {
                  buildHookId: '632e781efbe18d20aa8fa697',
                  title: 'Portfolio Website',
                  name: 'curated-gallery',
                  apiId: 'f3f3b412-992d-4b77-a9cc-fb755f78d0d6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HeyMarcy/curated-gallery',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://curated-gallery.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
