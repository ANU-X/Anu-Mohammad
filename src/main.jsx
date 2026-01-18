import { createRoot } from 'react-dom/client'
import App from './App'
import { RouterProvider } from 'react-router'
import router from './router/Router'
import SkillProvider from './context/SkillProvider'



createRoot(document.getElementById('root')).render(
        <SkillProvider>        
            <RouterProvider router={router}>
                <App/>
            </RouterProvider>
        </SkillProvider>
)
