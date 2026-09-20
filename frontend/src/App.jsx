import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../utils/firebase"

function App() {
  const googleLogin= async () => {
    const data = await signInWithPopup(auth, googleProvider);
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