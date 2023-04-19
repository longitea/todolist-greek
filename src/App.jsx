import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import { HOME_PATH, TODO_PATH } from "./constants/path";
import TodoPage from "./pages/todo-page";
import MainLayout from "./layouts/MainLayout";
import Page404 from "./pages/404";
import Home from "./pages";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path={TODO_PATH} element={<TodoPage />} />

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <RouterProvider router={router} />
  );
}
