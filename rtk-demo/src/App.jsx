import IcecreamView from './features/icecream/IcecreamView'
import UserView from './features/user/UserView'
import CakeView from './features/cake/CakeView'
import './App.css'

export default function App() {

  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  )
}