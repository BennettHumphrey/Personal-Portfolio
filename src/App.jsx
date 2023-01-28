import Expertise from "./components/Expertise/Expertise";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Reviews from "./components/Reviews/Reviews";
import Experience from "./components/Experience/Experience";
import css from "./styles/app.module.scss"
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`} >
      <Nav  />
      <Header  />
      <Expertise  />
      <Experience  />
      <Skills  />
      <Portfolio  />
      {/* <Reviews  /> */}
      <Footer  />
    </div>
  )
};

export default App;
