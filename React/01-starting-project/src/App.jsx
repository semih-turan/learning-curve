const reactDescriptions = ['Fundamental','Cruical','Core'];

function genRandomInt(maxNumber){
  return Math.floor(Math.random() * (maxNumber + 1));
}

// 1st Custom component
function Header() {
  const description = reactDescriptions[genRandomInt(3)];

  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
    {/* You can use self-closing tag or normal tag for Header Component */}
      { /*<Header /> */ }
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
