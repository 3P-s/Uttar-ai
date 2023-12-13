import React from 'react'

const History = () => {
    return (
        <div>
            <button className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800">
                <h1 className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200">
                    Tailwind Classes
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">12 Mar</p>
            </button>
        </div>
    )
}

export default History
