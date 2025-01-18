import { BrowserRouter } from 'react-router-dom';
import StudentAppRoutes from './AppRoutes/StudentAppRoutes';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import'../node_modules/bootstrap/dist/js/bootstrap.min.js';
import'../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import StudentNavBar from './Components/StudentNavBar.js';

function App() {
  return (
    <BrowserRouter>
    <StudentNavBar/>
    <StudentAppRoutes />
    </BrowserRouter>
  );
}

export default App;
