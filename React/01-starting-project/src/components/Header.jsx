import reactImg from '../assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental','Cruical','Core'];

function genRandomInt(maxNumber){
  return Math.floor(Math.random() * (maxNumber + 1));
}

export default function Header() {
    const description = reactDescriptions[genRandomInt(3)];
  
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }