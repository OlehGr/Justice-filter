import Window from "./components/Wind/Window";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
              <div className="all__containers">
                  <div className="main__container">
                      <HeaderContainer />
                      <Window />
                      <Footer />
                  </div>
              </div>
      </BrowserRouter>

  );
}

export default App;
