// GlobalProvider
import GlobalProvider from './context/GlobalContext'

import Header from './components/Header';
import Main from './components/Main';
function App() {
  return (

    <GlobalProvider>
    
      <div>
        
        <Header/>
        <Main />
        
        
      </div>
    
    </GlobalProvider>
  );
}

export default App;
