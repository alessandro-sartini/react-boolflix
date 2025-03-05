// GlobalProvider
import GlobalProvider from './context/GlobalContext'

import Header from './components/Header';
function App() {
  return (

    <GlobalProvider>
    
      <div>
        
        <Header/>

      </div>
    
    </GlobalProvider>
  );
}

export default App;
