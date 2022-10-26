
import './App.css'
import CakeSlice from './features/cake/cakeSlice'
import CakeView from './features/cake/CakeView'
import IcecreamSlice from './features/icecream/icecreamSlice'
import IcecreamView from './features/icecream/IcecreamView'
import UserSlice from './features/user/userSlice'
import { UserView } from './features/user/UserView'

function App() {


  return (
    <div className='App'>
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  )
}

export default App
