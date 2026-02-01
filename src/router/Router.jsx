import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Hero from "../components/hero/Hero";
import About from "../page/About";
import Resume from "../page/Resume";
import Contact from "../page/Contact";
import Web from "../page/Web";
import Profile from "../components/Profile";
import Aboutme from "../components/webaboutme/Aboutme";
import Webresumelayout from "../components/webresumeLayout/WebresumeLayout";
import Webresume from "../components/webresume/Webresume";
import Webblog from "../components/webblog/Webblog";
import Webcontacts from "../components/webcontact/Webcontact";
import Webportfolio from "../components/webportfolio/Webportfolio";


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
                path: 'about',
                Component: About
            },
            {
                path: 'resume',
                Component: Resume,
            },
            {
                path: 'contact',
                Component: Contact
            },
            {
                path: 'web',
                Component: Web
            },
            {
                path: 'resume/webresumelayout',
                Component: Webresumelayout,
                children: [                  
                    {
                        index: true,
                        Component: Profile
                    },
                    {
                        path: 'webabout',
                        Component: Aboutme
                    },
                    {
                        path: 'webresume',
                        Component: Webresume
                    },
                    {
                        path: 'webportfolio',
                        Component: Webportfolio
                    },
                    {
                        path: 'webblog',
                        Component: Webblog
                    },
                    {
                        path: 'webcontact',
                        Component: Webcontacts
                    }

                ]                
            }

        ]
    }
])


export default router
