
import './App.css';
import Header from './components/Header';
import Proposalsummary from './Screens/Proposalsummary';
import Overview from './Screens/Overview';
import Milestones from './Screens/Milestones'
import Programs from './Screens/Programs'
import Formbuilder from './Screens/Formbuilder';
import Reporting from './Screens/Reporting'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>

      <Router>
        <Routes>

          <Route path="/" element={<Proposalsummary />} />
          <Route path="/Overview" element={<Overview />} />
          <Route path="/Formbuilder" element={<Formbuilder />} />
          <Route path="/Milestones" element={<Milestones />} />
          <Route path="/Reporting" element={<Reporting />} />
          <Route path="/Programs" element={<Programs />} />



        </Routes>
      </Router>



    </>
  );
}

export default App;
