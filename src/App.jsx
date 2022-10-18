import sites from './data.json';
import SiteDisplay from './components/SiteDisplay';
function App() {

  return (
    <div className='container'>
      <SiteDisplay sites={sites} />
    </div>
  );
}

export default App;