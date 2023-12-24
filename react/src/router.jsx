import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import GuestLayout from "./components/layouts/GuestLayout";
import NotFound from "./pages/NotFound";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserForm from "./pages/UserForm";
import UserProfile from "./pages/UserProfile";
import Products from "./pages/Products";
import ProductForm from "./pages/ProductForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/dashboard" />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/users",
                element: <Users />
            },
            {
                path: "/users/new",
                element: <UserForm key="userCreate" />
            },
            {
                path: "/users/:id",
                element: <UserForm key="userUpdate" />
            },
            {
                path: "/users/profile/:id",
                element: <UserProfile />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/Products/new",
                element: <ProductForm key="productCreate" />
            },
            {
                path: "/Products/:id",
                element: <ProductForm key="productUpdate" />
            },
        ]
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;
