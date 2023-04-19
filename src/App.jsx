import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import { HOME_PATH, TODO_PATH } from "./constants/path";
import Root from "./routes/root";
import ErrorPage from "./pages/error-page";
import TodoPage from "./pages/todo-page";
import MainLayout from "./layouts/MainLayout";
import HeaderLayout from "./components/header";
import Page404 from "./pages/404";
import Home from "./pages";
import TodoList from "./components/todo-list";

const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: TODO_PATH,
    element: <TodoPage />,
  }
]);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path={TODO_PATH} element={<TodoPage />} />
          <Route path="/home2" element={<TodoList/>} />

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <RouterProvider router={router} />
  );
}
