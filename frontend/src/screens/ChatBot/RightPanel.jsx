import React from 'react'

const RightPanel = () => {
    return (
        <div className="flex h-[97vh] w-full flex-col">
            {/* Prompt Messages */}
            <div
                className="flex-1 overflow-y-auto rounded-xl bg-slate-200 p-4 text-sm leading-6 text-slate-900 dark:bg-slate-800 dark:text-slate-300 sm:text-base sm:leading-7"
            >
                <div className="flex flex-row px-2 py-4 sm:px-4">
                    <img className="mr-2 flex h-8 w-8 rounded-full sm:mr-4" src="https://dummyimage.com/256x256/363536/ffffff&text=U"/>
                    <div className="flex max-w-3xl items-center">
                        <p>Explain quantum computing in simple terms</p>
                    </div>
                </div>  
                <div
                    className="mb-4 flex rounded-xl bg-slate-50 px-2 py-6 dark:bg-slate-900 sm:px-4"
                >
                    <img
                        className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                        src="https://dummyimage.com/256x256/354ea1/ffffff&text=G"
                    />

                    <div className="flex max-w-3xl items-center rounded-xl">
                        <p>
                            Certainly! Quantum computing is a new type of computing that relies on
                            the principles of quantum physics. Traditional computers, like the one
                            you might be using right now, use bits to store and process
                            information. These bits can represent either a 0 or a 1. In contrast,
                            quantum computers use quantum bits, or qubits.<br /><br />
                            Unlike bits, qubits can represent not only a 0 or a 1 but also a
                            superposition of both states simultaneously. This means that a qubit
                            can be in multiple states at once, which allows quantum computers to
                            perform certain calculations much faster and more efficiently
                        </p>
                    </div>
                </div>
                <div className="flex px-2 py-4 sm:px-4">
                    <img
                        className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                        src="https://dummyimage.com/256x256/363536/ffffff&text=U"
                    />

                    <div className="flex max-w-3xl items-center">
                        <p>What are three great applications of quantum computing?</p>
                    </div>
                </div>
                
                <div
                    className="mb-4 flex rounded-xl bg-slate-50 px-2 py-6 dark:bg-slate-900 sm:px-4"
                >
                    <img
                        className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                        src="https://dummyimage.com/256x256/354ea1/ffffff&text=G"
                    />

                    <div className="flex max-w-3xl items-center rounded-xl">
                        <p>
                            Three great applications of quantum computing are: Optimization of
                            complex problems, Drug Discovery and Cryptography.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Prompt message input */}
            <form className="mt-2">
                <label htmlFor="chat-input" className="sr-only">Enter your prompt</label>
                <div className="relative">
                    <textarea
                        id="chat-input"
                        className="block w-full resize-none rounded-xl border-none bg-slate-200 p-4 pl-10 pr-20 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:ring-blue-500 sm:text-base"
                        placeholder="Enter your prompt"
                        rows="1"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="absolute bottom-2 right-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:text-base"
                    >
                        Send <span className="sr-only">Send message</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RightPanel
