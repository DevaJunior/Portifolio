import './styles.css';

import React from 'react';

interface CardSkillProps {
  nome: string;
  img: string;
}

const CardSkill: React.FC<CardSkillProps> = ({ nome, img }) => {

  return (
    <>
      <section className="skills-item">
        <img className="skills-img" src={img} alt="Tecnologia" />
        <p className="skills-p">{nome}</p>
      </section>
    </>
  );
};

export default CardSkill;