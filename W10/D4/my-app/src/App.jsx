import './App.css'
import {MainLayout } from "./layouts/MainLayout"
import {AboutPage } from "./pages/AboutPage";
import { DashboardPage} from "./pages/DashboardPage";
import { HomePage} from "./pages/HomePage";
import {ProductsPage } from "./pages/ProductsPage";
import {ProductDetailsPage } from "./pages/ProductDetailsPage";
import { NotFoundPage} from "./pages/NotFoundPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from "./routes/ProtectedRoute";
function App() {
  const isAuthenticated = true;

  return (
    <>
    {/* BrowserRouter: enables React Router in entire application */}
      <BrowserRouter>
        <Routes>
          <Route 
          path="/"
          element={<MainLayout/>}>

          {/* Index Route */}
          <Route
          index element = {<HomePage/>}/>

          {/* About Page */}
          <Route
          path="about"
          element = {<AboutPage/>}/>

          {/* Products Page */}
          <Route
          path="products"
          element = {<ProductsPage/>}/>

          {/* Dinamic Route */}
          <Route
          path="product/:id"
          element = {<ProductDetailsPage/>}/>

          {/* Protected Route */}
          <Route
          path="dashboard"
          element = {
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashboardPage />
            </ProtectedRoute>
          }/>

          {/* 404  not found route */}
          <Route
          path="*"
          element = {<NotFoundPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App