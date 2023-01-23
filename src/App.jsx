import Expertise from "./components/Expertise/Expertise";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Works from "./components/Works/Works";
import css from "./styles/app.module.scss"

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`} >
      <Header  />
      <Hero  />
      <Expertise  />
      <Works  />
    </div>
  )
};

export default App;
