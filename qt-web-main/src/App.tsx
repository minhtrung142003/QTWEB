import { ToastContainer } from 'react-toastify';
import './App.css';
import RoutesContainer from '@routes/index';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
    return (
        <>
            <ToastContainer />
            <RoutesContainer />
        </>
    );
}
export default App;
