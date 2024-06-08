import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GHA Media | Your Vision Our Edit ',
    short_name: 'GHA Media',
    description: 'Your Vision Our Edit Seamless ExperienceOn-Demand Video Editing Support for Small Businesses and Content Creator',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}