import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'reset-css'
import '@/assets/styles/global.scss'

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '@/store'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
