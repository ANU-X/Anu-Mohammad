import { createRoot } from 'react-dom/client'
import App from './App'
import { RouterProvider } from 'react-router'
import router from './router/Router'
import AssetsProvider from './context/AssetsProvider'


createRoot(document.getElementById('root')).render(
        <AssetsProvider>        
            <RouterProvider router={router}>
                <App/>
            </RouterProvider>
        </AssetsProvider>
)
