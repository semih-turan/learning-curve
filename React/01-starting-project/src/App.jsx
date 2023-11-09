import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

const reactDescriptions = ['Fundamental','Cruical','Core'];

function genRandomInt(maxNumber){
  return Math.floor(Math.random() * (maxNumber + 1));
}

// 1st Custom component
function Header() {
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

function CoreConcept(props){
  return (
    <li>
      <img src={props.img} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
    {/* You can use self-closing tag or normal tag for Header Component */}
      { /*<Header /> */ }
      <Header></Header>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
            title="Components" 
            description="The core UI building block." 
            img={componentsImg} 
          />
          <CoreConcept />
          <CoreConcept />
          <CoreConcept />
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
