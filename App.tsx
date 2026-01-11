import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import History from './pages/History';
import Details from './pages/Details';
import Library from './pages/Library';
import Calculator from './pages/Calculator';
import Settings from './pages/Settings';
import Export from './pages/Export';
import ManualInput from './pages/ManualInput';
import Import from './pages/Import';
import Drafts from './pages/Drafts';
import Policy from './pages/Policy';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/library" element={<Library />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/export" element={<Export />} />
          <Route path="/manual" element={<ManualInput />} />
          <Route path="/import" element={<Import />} />
          <Route path="/drafts" element={<Drafts />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
