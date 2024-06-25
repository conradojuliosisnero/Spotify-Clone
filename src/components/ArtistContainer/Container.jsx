import '@/styles/styles.css'
import Link from 'next/link';
export default function ArtistContainer({name, children}) {
  return (
    <>
      <div className="container-name">
        <div className='flex justify-between items-center'>
          <h1 className="container-title">{name}</h1>
          <Link className='text-gray-400 font-bold text-2xl hover:underline ' href={"/artists/all-artists"}>Mostrar todos</Link>
        </div>
      </div>
      <div className="container-card">{children}</div>
    </>
  );
}
