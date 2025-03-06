import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ModalProvider from './store/ModalContext.jsx'
import ScrollProvider from './store/ScrollContext.jsx'

createRoot(document.getElementById('root')).render(
        <ModalProvider>
            <ScrollProvider>
                <App />
            </ScrollProvider>
        </ModalProvider>
)
