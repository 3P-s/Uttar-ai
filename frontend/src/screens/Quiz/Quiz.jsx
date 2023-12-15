import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './quiz.css';
import QnA_Card from './QnA_Card';

const Quiz = () => {
    const url = 'http://localhost:8080/quiz/get';
    const [quiz, setQuiz] = useState([]);
    const [tag, setTag] = useState('');
    const [count, setCount] = useState();
    const [prompt, setprompt] = useState()
    const promts = [

        "DBMS",
        "Introduction",
        "Primary Key",
        "RDBMS",
        "Normalization",
        "Foreign Key",
        "ACID",
        "Indexing",
        "Stored Procedure",
        "Unique Key",
        "Data Warehousing",
        "SQL",
        "Transaction",
        "JOIN",
        "DELETE",
        "Data Integrity",
        "Database View",
        "GROUP BY",
        "Data Mining",
        "HAVING",
        "Denormalization",
        "INNER JOIN",
        "OUTER JOIN",
        "Sharding",
        "UNION",
        "Partitioning",
        "LIKE",
        "Replication",
        "UPDATE",
        "DISTINCT"
    ];

    const handleQuiz = async (e) => {
        e.preventDefault();

        const res = await axios.post(url, {
            tag,
            count,
        });
        setQuiz(res.data.questions);
        setprompt(res.data.tag)
        console.log(res.data.questions);
    };

    const handleTagChange = (e) => {
        setTag(e);
        console.log(e);
    };

    const handleCountChange = (e) => {
        setCount(e.target.value);
        console.log(count);
    };

    return (
        <div>
            <div className="flex text-5xl">
                <div className="p-8 mx-auto text-white">GENERATE THE QUIZ</div>
            </div>
            <div className="flex flex-wrap place-content-around h-60">
                {quiz.map((ele,index) => (
                    <div key={index}>
                        <QnA_Card question={ele.question} answer={ele.answer} tag={prompt} ind={index} />
                    </div>
                ))}
            </div>

            <form className="flex h-96">
                <div className="mb-4 mx-auto my-auto w-full max-w-3xl rounded-lg bg-slate-200 dark:bg-slate-900">
                    <div className="rounded-lg rounded-b-none border border-slate-300 bg-slate-50 px-2 py-2 dark:border-slate-700 dark:bg-slate-900">
                        <div className='flex '>
                            <div className="m-4 flex flex-wrap w-full gap-x-2 overflow-x-auto whitespace-nowrap text-xs text-slate-600 dark:text-slate-300 sm:text-sm mx-auto">
                                {promts.map((prompt, index) => (
                                    <p
                                        key={index}
                                        onClick={() => handleTagChange(prompt)}
                                        className={`px-2 py-1 border rounded-full ${tag === prompt ? 'bg-blue-600 text-slate-50' : 'border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-300'} hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900`}>
                                        {prompt}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <label htmlFor="count-input" className="sr-only">
                            Enter number of questions
                        </label>
                        <input
                            id="count-input"
                            className="w-full border-0 bg-slate-50 px-0 text-base text-slate-900 focus:outline-none dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400"
                            placeholder="Number of questions"
                            onChange={handleCountChange}
                        />
                    </div>
                    <div className="ml-2 flex items-center py-2">
                        <div>
                            <button
                                type="submit"
                                onClick={handleQuiz}
                                className="inline-flex items-center gap-x-2 rounded-lg bg-blue-600 px-4 py-2.5 text-center text-base font-medium text-slate-50 hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">
                                Generate
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
    );
};

export default Quiz;
