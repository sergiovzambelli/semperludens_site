import { promises as fs } from 'fs';
import path from 'path';
import Image from 'next/image';

export default async function CollabGrid() {

  const imageDirectory = path.join(process.cwd(), '/public/collab_carousel');
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <div className='grid grid-cols-2 gap-4 py-8'>
      {imageFilenames.map((filename) => (
        <div key={filename} className='flex justify-center items-center'>
          <Image
            src={`/collab_carousel/${filename}`}
            alt={`Collaboration with ${filename}`}
            width={150}
            height={150}
            style={{ height: 'auto', width: 'auto' }}
          />
      </div>
      ))}
    </div>
  )
}