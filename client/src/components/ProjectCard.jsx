

export default function ProjectCard({ image, heading ,paragrap }) {
  return (
    <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[350px] transition-all'>
        <img
          src={image}
          alt='post cover'
          className='h-[350px] w-full  object-cover group-hover:h-[245px] transition-all duration-300 z-20'
        />

      <div className='p-3 flex flex-col gap-2'>
        <p className='text-lg  font-semibold line-clamp-2'>{heading}</p>
        
        <span className='italic text-sm'>{paragrap}</span>
        {/* <Link
          to=''
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2' >
          Read article
        </Link> */}
      </div>
    </div>
  );
}