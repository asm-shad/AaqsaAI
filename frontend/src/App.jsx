import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../utils/firebase"
import api from "../utils/axios"

const handleLogin = async (token) => {
  try {
    const {data} = await api.post("/auth/login", {token})
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

function App() {
  const googleLogin= async () => {
    const data = await signInWithPopup(auth, googleProvider);
    const token = await data.user.getIdToken()
    console.log(token)
    await handleLogin(token)
    console.log(data);
  }
  return (
    <div className="w-full h-screen bg-gray-600 flex items-center justify-center">
      <button className="w-52 h-24 bg-amber-500" onClick={googleLogin}>
        Continue With Google
      </button>
    </div>
  )
}

export default App