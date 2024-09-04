import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './views/Landing';

const App: React.FC = () => {
  return (
    <BrowserRouter>
		<Routes>
			<Route path="/" element={<Landing />} />
		</Routes>
	</BrowserRouter>
  );
}

export default App;
