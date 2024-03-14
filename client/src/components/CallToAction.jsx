import { Button } from 'flowbite-react';
import photo from '../../public/Screenshot 2024-03-14 160554.png'

const CallToAction = () => {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
    <div className="flex-1 justify-center flex flex-col">
        <h2 className='text-2xl'>
           🎬 Join the Movie Buddy Movement Today!
        </h2>
        <p className='text-gray-500 my-2'>
        Discover the joy of shared movie experiences with Movie Buddies! Join our vibrant community today to connect with fellow cinephiles,
         discuss your favorite films, and plan unforgettable movie nights. Whether you're 
         a die-hard fan or just getting started, Movie Buddies offers a welcoming space to
          bond over a mutual love for cinema. Don't miss out on the fun 🍿🎥✨
        </p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
            <a href="https://movies-buddies.netlify.app/" target='_blank' rel='noopener noreferrer'>
               Click here to Watch Now
            </a>
        </Button>
    </div>
    <div className="p-7 flex-1">
        <img src={photo} />
    </div>
</div>
  )
}

export default CallToAction