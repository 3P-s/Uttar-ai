import React from 'react'

const QnA_Card = () => {
    return (
        <div
            className="m-5 flex w-80 max-w-md flex-col justify-between rounded-3xl bg-slate-50 p-8 text-slate-900 ring-1 ring-slate-300 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-300/20 xl:p-10"
        >
            <div>
                <div className="flex items-center justify-between gap-x-4">
                    <h3 id="tier-starter" className="text-lg font-semibold leading-8">Q.1</h3>
                    <p
                        className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600"
                    >
                        ✨DBMS
                    </p>
                </div>
                <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-2xl font-bold tracking-tight">What is DBMS?</span>
                </p>
                <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-400"
                >
                    <li className="flex gap-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-5 flex-none text-blue-600"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l2 2l4 -4"></path>
                        </svg>
                        7-day free trial
                    </li>
                    <li className="flex gap-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-5 flex-none text-blue-600"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l2 2l4 -4"></path>
                        </svg>
                        1,000 tokens per month
                    </li>
                    <li className="flex gap-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-5 flex-none text-blue-600"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l2 2l4 -4"></path>
                        </svg>
                        1 chatbot
                    </li>
                    <li className="flex gap-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-5 flex-none text-blue-600"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l2 2l4 -4"></path>
                        </svg>
                        20 stored chats
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default QnA_Card
