import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import img1 from '../../public/Screenshot 2024-03-14 160554.png'
import img2 from '../../public/portfolio.png'
import img3 from '../../public/hotel.png'
import img4 from '../../public/tic-tac-to.png'
import img5 from '../../public/netflix.png'
import img6 from '../../public/image-search.png'



const Project = () => {
  return (
    <div>
       <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        <h2 className='text-2xl font-semibold text-center'>All Project's</h2>

        <div className='flex flex-wrap gap-4'>

        <Link to='https://movies-buddies.netlify.app/'>
        <ProjectCard className='mb-5'
        image={img1}
        heading="Movie Buddies"
        rank="ASSISTANT PROFESSOR & HEAD E.E.D."
        paragrap="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
       />
       </Link>
       
       <Link to='https://yaduvesh15.netlify.app/'>
       <ProjectCard className='mt-5'
        image={img2}
        heading="My Portfolio"
        paragrap="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
       />
       </Link>

       <Link to='https://newcityhotel.netlify.app/'>
       <ProjectCard className='mt-5'
        image={img3}
        heading="Hotel new city"
        paragrap="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
       />
       </Link>

       <Link to='https://tiktaktoegame1.netlify.app/'>
       <ProjectCard className='mt-5'
        image={img4}
        heading="Tic-Tac-Teo Game"
        paragrap="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
       />
       </Link>

       <Link>
       <ProjectCard className='mt-5'
        image={img5}
        heading="Netflix Clone"
        paragrap="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
       />
       </Link>

       <Link to='https://extraordinary-meerkat-e96486.netlify.app/'>
       <ProjectCard className='mt-6'
        image={img6}
        heading="Image-Search"
        paragrap="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
       />
       </Link>
       
         </div>
      </div>
    </div>
  )
}

export default Project