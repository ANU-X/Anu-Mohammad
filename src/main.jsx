import { createRoot } from 'react-dom/client'
import App from './App'
import { RouterProvider } from 'react-router'
import router from './router/Router'
import AssetsProvider from './context/AssetsProvider'
import { ThemeProvider } from 'next-themes'


createRoot(document.getElementById('root')).render(
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <AssetsProvider>        
            <RouterProvider router={router}>
                <App/>
            </RouterProvider>
        </AssetsProvider>
        </ThemeProvider>
)
