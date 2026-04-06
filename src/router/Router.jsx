import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Profile from "../components/Profile";
import Webresumelayout from "../components/webresumelayout/Webresumelayout"
import Webblog from "../components/webblog/Webblog";
import Landingpage from "../components/landing/Landingpage";
import Weblanding from "../components/weblandingpage/Weblanding";


const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: Landingpage,
            },
            {
                path: 'webresumelayout',
                Component: Webresumelayout,
                children: [                  
                    {
                        index: true,
                        Component: Profile
                    },
                    {
                        path: 'resume',
                        Component: Weblanding
                    },
                    {
                        path: 'webblog',
                        Component: Webblog
                    },
                ]                
            }

        ]
    }
])


export default router
