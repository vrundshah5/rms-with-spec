import LoginPanel from './components/LoginPanel'
import ProductPanel from './components/ProductPanel'
import './App.css'

function App() {
  return (
    <main className="auth-page">
      <ProductPanel />
      <LoginPanel />
    </main>
  )
}

export default App
