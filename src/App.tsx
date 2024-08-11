
import './App.css';

import CardPortifolio from './renders/components/Cards/CardPortifolio';

import imgPrin from './images/img-tag.png';
import imgPort_1 from './images/wpp-app-portifolio.png';
import imgPort_3 from './images/wpp-app-spotted.png';
import imgPort_4 from './images/wpp-app-biogen.png';

import imgSkill_1 from './images/logo-html.png';
import imgSkill_2 from './images/logo-css.png';
import imgSkill_3 from './images/logo-javascript.png';
import imgSkill_4 from './images/logo-typescript.png';
import imgSkill_5 from './images/logo-react.png';
import imgSkill_6 from './images/logo-vue.png';
import imgSkill_7 from './images/logo-bootstrap.png';
import imgSkill_8 from './images/logo-figma.png';
import imgSkill_9 from './images/logo-java.png';
import imgSkill_10 from './images/logo-kotlin.png';
import imgSkill_11 from './images/logo-python.png';
import imgSkill_12 from './images/logo-c.png';
import imgSkill_13 from './images/logo-sql.png';
import imgSkill_14 from './images/logo-firebase.png';
import imgSkill_15 from './images/logo-scrum.png';
import imgSkill_16 from './images/logo-git.png';
import CardSkill from './renders/components/Cards/CardSkill';

import imgEmail from './images/contact-email.png';
import imgWhats from './images/logo-whats.png';
import imgLinkedin from './images/contact-linkedin.png';
import imgGit from './images/contact-github.png';

function App() {

  const cell = '5535998672326'
  const handleWhatsappClick = (cell: string) => {
    window.open(`https://wa.me/${cell}`, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div>
      <header>
        <div id="div-my-name">
          <div id="border-circle">
            <p>𖦹</p>
          </div>
          <p id="my-nome">Devair</p>
          <p id="my-sobrenome">Junior</p>
          <p id="my-tag">/&gt;</p>
        </div>
        <section>
          <ul className="header-container-buttons">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li id="btn-contact"><a href="#contact">Contact</a></li>
          </ul>
        </section>
      </header>

      <main>
        <section id="home" className="container-home">
          <section className="home-info">
            <div className="home-info-saudacao">
              <p>Hi, nice to meet you!</p>
              <p>I'm Devair Junior.</p>
            </div>
            <p className="home-info-apresentacao">Resident in Alfenas-MG, I am a Front-end developer passionate about developing web
              applications that are easily
              accessible to users.</p>
            <p>F R O N T - E N D . D E V E L O P E R</p>
          </section>
          <div className="home-img-tag">
            <img src={imgPrin} alt="" />
          </div>
        </section>

        <section id="about" className="container-about">
          <h4>A B O U T . M E</h4>
          <p>Front-end developer with experience in HTML & CSS, React & Vue.js, JavaScript & TypeScript, Styled Components, Material UI and consumption of REST APIs. Great enthusiast for the development of reusable components, experience in projects managed by agile methodologies and code versioning. Passionate about the world of programming since 2015 and graduated in Biotechnology since 2024.</p>
        </section>

        <section id="projects" className="container-projects">
          <CardPortifolio title='P O R T I F Ó L I O' classProject='Pessoal' img={imgPort_1} desc='Oi, eu sou Goku! kkk Brincadeiras a parte, esta página é destinada para aqueles que querem saber um pouco
                sobre mim, bem como minha história, habilidades e sonhos.' skills='React • HTML e CSS • JavaScript • Github' />
          <CardPortifolio title='T R A C K . M O N E Y' classProject='Pessoal' img={imgPort_3} desc='Plataforma de gestão financeira. Através desta ferramenta, o usuário pode
                inserir, editar e deletar seus gastos, criar listas de tarefas e acompanhar metas através de gráficos e
                relatórios.' skills='React • TypeScript • HTML e CSS • Redux • Firebase • Github' />
          <CardPortifolio title='S P O T T E D' classProject='Produto' img={imgPort_3} desc='Rede social universitária. Com foco em novos moradores na cidade, o app é uma
                plataforma que busca apresentar todos produtos, serviços e informações necessários! Bem como a venda e compra
                de ingressos, match, uber, delivery, criação de loja virtual, agendamento de serviços, etc ...' skills='React Native • TypeScript • HTML e CSS • Firebase • Github' />
          <CardPortifolio title='B I O G E N . L A B' classProject='Projeto de IC e TCC' img={imgPort_4} desc='App Android para análise de dados laboratoriais baseado na lógica Fuzzy. Esta
                ferramenta baseis-se na inserção de dados pós cultura in-vitro e micropropagação de células vegetais para
                identificar desvios e erros, bem como apontar e sugerir correções ao longo das etapas.' skills='Android • Kotlin • Firebase • Github' />
        </section>

        <section id="skills" className="container-skills">
          <h4>S K I L L S</h4>
          <hr className="skills-hr" />

          <div className='skills-recycler'>
            <CardSkill nome='HTML5' img={imgSkill_1} />
            <CardSkill nome='CSS' img={imgSkill_2} />
            <CardSkill nome='JavaScript' img={imgSkill_3} />
            <CardSkill nome='TypeScript' img={imgSkill_4} />
            <CardSkill nome='React' img={imgSkill_5} />
            <CardSkill nome='Vue' img={imgSkill_6} />
            <CardSkill nome='Bootstrap' img={imgSkill_7} />
            <CardSkill nome='Figma' img={imgSkill_8} />
            <CardSkill nome='Java' img={imgSkill_9} />
            <CardSkill nome='Kotlin' img={imgSkill_10} />
            <CardSkill nome='Python' img={imgSkill_11} />
            <CardSkill nome='C' img={imgSkill_12} />
            <CardSkill nome='Git' img={imgSkill_16} />
            <CardSkill nome='Firebase' img={imgSkill_14} />
            <CardSkill nome='SQL' img={imgSkill_13} />
            <CardSkill nome='Scrum' img={imgSkill_15} />
          </div>
        </section>
      </main>

      <footer>
        <section id="contact" className="container-contact">
          <h4>C O N T A C T</h4>
          <p id="contact-message">Interested in knowing more about my work? Get in touch and let's have some tea.</p>
          <div className="container-contact-logo">
            <a href="mailto:contatodevairunior@gmail.com" target="blank">
              <img className="contact-logo-img" src={imgEmail} alt="Enviar e-mail" />
            </a>
            <a href="https://www.linkedin.com/in/devair-junior-b9937a280/" target="blank">
              <img className="contact-logo-img" src={imgLinkedin} alt="" />
            </a>
            <a href="https://github.com/DevaiRJunior12" target="blank">
              <img className="contact-logo-img" src={imgGit} alt="" />
            </a>
            <button type='button' onClick={(e) => { e.preventDefault(); handleWhatsappClick(cell); }}>
              <img className="contact-logo-img" src={imgWhats} alt="Whatsapp" />
            </button>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
