import MainLayout from "../layouts/MainLayout";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";


export const routes = [
    {
        path: '/dashboard',
        component: Dashboard,
        privateRoute: true,
        layout: MainLayout
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Home,
        layout: MainLayout
    }
];
