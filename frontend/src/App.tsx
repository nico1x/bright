import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Layout from 'components/Layout';
import PrivateRoute from 'components/PrivateRoute';
import { Home, Landing, Login } from 'pages';

const App = () => {
    return (
        <div className="App">
            <Layout>
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Landing />} />
                    <Route path="/*" element={<PrivateRoute />}>
                        <Route index path="home" element={<Home />} />
                    </Route>
                </Routes>
            </Layout>
        </div>
    );
};

export default App;
