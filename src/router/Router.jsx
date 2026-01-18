import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Hero from "../components/hero/Hero";
import About from "../page/About";
import Resume from "../page/Resume";
import Contact from "../page/Contact";
import Web from "../page/Web";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: Hero
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/resume',
                Component: Resume
            },
            {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/web',
                Component: Web
            }
        ]
    }
])

export default router