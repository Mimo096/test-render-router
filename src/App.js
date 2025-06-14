import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AdminPage() {
  return <h1>Page admin secrète</h1>;
}

function HomePage() {
  return <h1>Accueil</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/connexion-ultra-secrete-2025" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
