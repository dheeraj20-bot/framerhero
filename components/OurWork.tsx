
import '@vidstack/react/player/styles/base.css';
import '@vidstack/react/player/styles/plyr/theme.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { PlyrLayout, plyrLayoutIcons } from '@vidstack/react/player/layouts/plyr';


const OurWork = () => {
  return (
    <div className='w-full'>
      <MediaPlayer className=' shadow-md shadow-yellow-500'  title="Sprite Fight" src="https://cdn.sanity.io/files/cylap7my/production/54697a65a959f6788fe314ac1f5af860c8080b44.webm">
    <MediaProvider />
  <PlyrLayout  
        icons={plyrLayoutIcons} />
    </MediaPlayer>
    </div>
  )
}

export default OurWork