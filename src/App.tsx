import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './views/Landing';
import Login from './views/Auth/Login';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Header />
		<Routes>
			<Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
		</Routes>
        <Footer />
	</BrowserRouter>
  );
}

export default App;
