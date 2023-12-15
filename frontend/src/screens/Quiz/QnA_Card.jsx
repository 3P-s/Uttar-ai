import React, { useEffect } from 'react'

const QnA_Card = (props) => {

    console.log(props)

    return (
        <div
            className="m-5 flex w-80 max-w-md flex-col justify-between rounded-3xl bg-slate-50 p-8 text-slate-900 ring-1 ring-slate-300 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-300/20 xl:p-10"
        >
            <div>
                <div className="flex items-center justify-between gap-x-4">
                    <h3 id="tier-starter" className="text-lg font-semibold leading-8">Q.</h3>
                    <p
                        className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600"
                    >
                        ✨{props.tag}
                    </p>
                </div>
                <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-2xl font-bold tracking-tight">{props.question}</span>
                </p>
                <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-400">
                        
                    <li className="flex gap-x-3">
                        <details className="dropdown">
                            <summary className="m-1 btn">View answer</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li><a>{props.answer}</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default QnA_Card
