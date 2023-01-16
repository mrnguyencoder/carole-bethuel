import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Films() {
  const [images, setImages] = useState ([
    {id:1,
    src: 'img1',
    group: 'group1'},
    {id:2,
    src: 'img2',
    group: 'group1'},
    {id:3,
    src: 'img3',
    group: 'group2'},
    {id:4,
    src: 'img4',
    group: 'group2'},

  ]);
  return (
    <section>
      <div className="">
      {images
          .filter(image => image.group === 'group1')
          .map(image => (
            <Link key={image.id} to={`/${image.id}`}>
              <img src={image.src} alt={image.src} />
            </Link>
          ))}
      </div>
    </section>
  )
}

export default Films