import {useEffect,useState} from 'react'
import config from '../config/config'
const Dadjokes = () => {

    const [jokes, setJokes] = useState([])
    const [loading, setLoading] = useState(false)

    const getJokes = async (e = undefined) => {
        if(e) e.preventDefault()
        setLoading(true)
        const res = await fetch(config.services.dadjokes)
        const data = await res.json()
        setJokes(data)
        setLoading(false)
    }

    useEffect( () => {
        getJokes()
    }, [])

 
// 
  return (
    <div className="flex font-mono">
    <div className="flex-none w-56 relative">
        <img src="images/leo.jpg" alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
    </div>
    <form className="flex-auto p-6 m-10  ">
        <div className="flex flex-wrap border-green-600">
         
            <div className="w-full flex-none mt-2 order-1 text-2xl font-bold text-slate-600">
                {loading ? 'Loading...' : jokes}
            </div>
            <div className="text-sm font-medium text-slate-400">
                Dadjokes as a service
            </div>
        </div>
    
        <div className="flex space-x-4 mb-5 text-sm font-medium py-4">
        <div className="flex-auto flex space-x-4" onClick={(e)=>  getJokes(e)}>
                <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white">
                    New Dadjoke
                </button>
           
            </div>
            <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-green-600 bg-violet-50" type="button" aria-label="Like">
                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
            </button>
        </div>
        <p className="text-sm text-slate-500">
            Coming from the Dadjokes microservice
        </p>
    </form>
</div>
        
        )
}

export default Dadjokes