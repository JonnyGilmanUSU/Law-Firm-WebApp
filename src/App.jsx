
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import "./App.css";
import Layout from "./components/UI/Layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PracticesPage from "./pages/PracticesPage";
import ContactPage from "./pages/ContactPage";
import ContactRequestsPage from "./pages/ContactRequestsPage";
import PracticeDetailPage from "./pages/PracticeDetailPage";
import ErrorPage from "./pages/ErrorPage";
import LawyersPage, {lawyersLoader} from "./pages/LawyersPage";
import NewsPage, {newsLoader} from "./pages/NewsPage";
import NewsDetailPage, {newsDetailLoader} from "./pages/NewsDetailPage";
import AddNewsPage, { addNewsAction } from "./pages/AddNewsPage";
import AuthenticatePage from './pages/AuthenticatePage';
import { loginAction, signUpAction } from './util/auth';

function App() {


  // Define routes
  const router = createBrowserRouter([
    {path: '/', element: <Layout />, errorElement: <Layout><ErrorPage /></Layout>, children: [
      {index: true, element: <HomePage />},
      {path: 'about', element: <AboutPage />},
      {path: "practices", children: [
        {index: true, element: <PracticesPage />},
        {path: ":practiceId", element: <PracticeDetailPage /> }
      ]},     
      {path: "/contact", element: <ContactPage />},
      {path: "/contacts", element: <ContactRequestsPage />},
      {path: "/lawyers", element: <LawyersPage />, loader: lawyersLoader},
      {path: "/news", children: [
        {index: true, element: <NewsPage />, loader: newsLoader},
        {path: ":newsId", element: <NewsDetailPage />, loader: newsDetailLoader},
        {path: "new", element: <AddNewsPage />, action: addNewsAction}
      ]},
      {path: "/auth", element: <AuthenticatePage />},
      {path: "/signup", action: signUpAction},
      {path: "/login", action: loginAction}
    ]}
  ])

  return (


    <RouterProvider router={router} />

  );
}

export default App;
