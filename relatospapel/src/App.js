import React from "react";
import {LibraryRouter} from "./router/LibraryRouter";
import {BookContext} from "./context/BookContext";
import {Footer} from "./components/Footer"
import {useBooks} from "./hooks/useBooks";


function App() {
    const books = useBooks();
    const [buyClicks,setBuyClicks] = React.useState(0);
    let updateClicks = () => {
        setBuyClicks(buyClicks+1);
    };
    let resetClicks = () => {setBuyClicks(0);};
  return (
        <BookContext.Provider value={{books,buyClicks,updateClicks,resetClicks}}>
          <div className="App">
            <LibraryRouter />
            <Footer />
          </div>
        </BookContext.Provider>
  );
}

export default App;
