import './App.css';



function Header () {
  return (
      <>
          <div>
              <h2>I am Header Component</h2>
              <Title/>
          </div>
      </>
  )
}

function Content () {
    return (
        <>
            <div>
                <h2>I am Content Component</h2>
                <Title/>
            </div>
        </>
    );
}

function Title() {
    return (
        <h2>I am Title</h2>
    )
}

function Footer () {
    return (
        <>
            <div>
                <h2>I am Footer Component</h2>
                <Title/>
            </div>
        </>
    )
}

function App() {
    return (
        <div className="App">
      <Header />
        <Content/>
        <Footer />
    </div>
  );
}

export default App;
