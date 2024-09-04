import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './views/Landing';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Header />
		<Routes>
			<Route path="/" element={<Landing />} />
		</Routes>
        <Footer />
	</BrowserRouter>
  );
}

export default App;
