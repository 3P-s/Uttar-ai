import React from 'react'
import './quiz.css'
import QnA_Card from './QnA_Card'
const Quiz = () => {
    return (
        <div >
            <div className='flex text-5xl'>
                <div className='p-8 mx-auto text-white'>
                    GENERATE THE QUIZ
                </div>
            </div>
            <div className='flex flex-wrap place-content-around'>
                    <QnA_Card />
                    <QnA_Card />
                    <QnA_Card />
                    <QnA_Card />
                    <QnA_Card />
                    <QnA_Card />
            </div>
            <form className='flex h-96'>
                <div className="mb-4 mx-auto my-auto w-full max-w-3xl rounded-lg bg-slate-200 dark:bg-slate-900">
                    <div
                        className="rounded-lg rounded-b-none border border-slate-300 bg-slate-50 px-2 py-2 dark:border-slate-700 dark:bg-slate-800"
                    >
                        <label htmlFor="prompt-input" className="sr-only">Enter your prompt</label>
                        <textarea
                            id="prompt-input"
                            rows="4"
                            className="w-full border-0 bg-slate-50 px-0 text-base text-slate-900 focus:outline-none dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400"
                            placeholder="For which topic do you want to generate a quiz?"
                            required
                        ></textarea>
                    </div>
                    <div className="ml-2 flex items-center py-2">
                        <div>
                            <button
                                type="submit"
                                className="inline-flex items-center gap-x-2 rounded-lg bg-blue-600 px-4 py-2.5 text-center text-base font-medium text-slate-50 hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
                            >
                                Generate
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M10 14l11 -11"></path>
                                    <path
                                        d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="ml-2 inline-flex items-center gap-x-2 rounded-lg bg-slate-700 px-4 py-2.5 text-center text-base font-medium text-slate-50 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
                            >
                                Cancel
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M18 6l-12 12"></path>
                                    <path d="M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Quiz
