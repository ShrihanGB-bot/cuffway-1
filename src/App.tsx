import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { TechnologyPage } from "./pages/TechnologyPage";
import { AboutPage } from "./pages/AboutPage";
import { NewsPage } from "./pages/NewsPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="technology" element={<TechnologyPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}