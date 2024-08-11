import './styles.css';

import React from 'react';

interface CardPortifolioProps {
  title: string;
  classProject: string;
  img: string;
  desc: string;
  skills: string;
}

const CardPortifolio: React.FC<CardPortifolioProps> = ({ title, classProject, img, desc, skills }) => {

  return (
    <div className="project-container-item">
      {/* <div className='project-item-1'>
        <div className="img-project">
          <img src={img} alt="" />
        </div>
        <div className='project-info'>
          <p className="project-item-name">{title}</p>
          <p className="project-type">{classProject}</p>
          <p className="project-container-desc">{desc}</p>
          <p>{skills}</p>
        </div>
      </div> */}
      <div className='project-item-2'>
        <div className="project-info-title">
          <p className="project-item-name">{title}</p>
          <p className="project-type">{classProject}</p>
          <div className="img-project">
            <img src={img} alt="" />
          </div>
        </div>
        <div className='project-info'>
          <p className="project-container-desc">{desc}</p>
          <p>{skills}</p>
        </div>
      </div>
    </div>
  );

};

export default CardPortifolio;