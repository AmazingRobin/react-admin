import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'reset-css'
import '@/assets/styles/global.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
