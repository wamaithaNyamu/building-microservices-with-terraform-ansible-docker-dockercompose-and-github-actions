import { useState } from 'react'
import config from '../config/config'

const NewJoke = () => {
    const [joke, setJoke] = useState('')
    const [showModal, setShowModal] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append('quote', joke);
        await fetch(`${config.services.myjokes}/new`,
            {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    quote: joke
                }),
            });
        setJoke('')
        setShowModal(false)

    }
    return (
        <div>



            <div className="flex" onClick={(e) => {
                e.preventDefault()
                setShowModal(!showModal)
            }}>
                <a href="/new" className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
                    <svg className="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                        <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                    </svg>
                    <h1 className='text-2xl'>New Joke</h1>
                </a>
            </div>
            {showModal &&
                <div className='w-100 flex justify-center py-10  w-full' >
                    <form onSubmit={handleSubmit}>
                        <h1 className='text-2xl'>Create New Joke</h1>
                        <div>

                            <label className="block">

                                <textarea rows="5" cols="50" className="block text-3xl text-slate-500
                                 border border-slate-500 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500
                                 "
                                    value={joke}
                                    onChange={(e) => setJoke(e.target.value)}
                                >

                                </textarea>
                            </label>
                        </div>
                        <div>

                            <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white"
                                type='submit'
                            >
                                Save
                            </button>
                        </div>

                    </form>
                </div >

            }

        </div>
    )
}

export default NewJoke