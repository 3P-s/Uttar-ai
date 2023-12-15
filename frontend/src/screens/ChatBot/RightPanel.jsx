import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import tesseract from 'tesseract.js'

const RightPanel = () => {

    const url = "http://10.10.16.13:8080/qna";

    const [responce, setresponce] = useState([])
    const [inputValue, setinputValue] = useState()

    useEffect(() => {
        const getResponce = async () => {
            const res = await axios.get(url)
            setresponce([])
        }

        getResponce();
    }, [])

    const handleQuestion = async (e) => {
        e.preventDefault();

        setinputValue('')
        const res = await axios.post(url, {
            question: inputValue
        })

        setresponce(res.data)

        console.log(res.data)
    }

    const handleChange = (e) => {
        setinputValue(e.target.value);
    };

    const handleImage = async (e) => {
        const file = e.target.files[0];
    
        try {
          const result = await readAndRecognizeImage(file);
          let extractedText = result.data.text;
          extractedText = extractedText.replace(/\n/g, ' ');
          // Update the state variable inputValue with the extracted text
          setinputValue(extractedText);
    
          // Log additional information if needed
          console.log(result);
        } catch (error) {
          console.error(error);
        }
      };

      const readAndRecognizeImage = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
      
          reader.onload = async (event) => {
            const arrayBuffer = event.target.result;
      
            try {
              const result = await tesseract.recognize(new Uint8Array(arrayBuffer), 'eng');
              resolve(result);
            } catch (error) {
              reject(error);
            }
          };
      
          reader.readAsArrayBuffer(file);
        });
      };

    return (
        <div className="flex h-[97vh] w-full flex-col">
            <div className='flex text-5xl'>
                <div className='p-8 mx-auto text-white'>
                    Chat-Bot
                </div>
            </div>
            {/* Prompt Messages */}
            <div
                className="flex-1 overflow-y-auto rounded-xl bg-slate-200 p-4 text-sm leading-6 text-slate-900 dark:bg-slate-800 dark:text-slate-300 sm:text-base sm:leading-7">

                {responce.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="flex flex-row px-2 py-4 sm:px-4">
                                <img className="mr-2 flex h-8 w-8 rounded-full sm:mr-4" src="https://dummyimage.com/256x256/363536/ffffff&text=U" />
                                <div className="flex max-w-3xl items-center">
                                    <p>{item.question}</p>
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
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>

            {/* Prompt message input */}
            <form className="mt-2">

                {/* take input for image */}
                <label className="block">
                    <span className="sr-only">Choose profile photo</span>
                    <input type="file" className="block w-full text-sm text-gray-500
                    file:me-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-600 file:text-white
                    hover:file:bg-blue-700
                    file:disabled:opacity-50 file:disabled:pointer-events-none
                    dark:file:bg-blue-500
                    dark:hover:file:bg-blue-400
                    " onChange={handleImage} />
                </label>

                <label htmlFor="chat-input" className="sr-only">
                    Enter your prompt
                </label>
                <div className="relative">

                    <textarea
                        id="chat-input"
                        className="block w-full resize-none rounded-xl border-none bg-slate-200 p-4 pl-10 pr-20 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:ring-blue-500 sm:text-base"
                        placeholder="Enter your prompt"
                        rows="1"
                        value={inputValue}
                        onChange={handleChange}
                        required>
                    </textarea>
                    <button
                        type="submit"
                        className="absolute bottom-2 right-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:text-base" onClick={handleQuestion}
                    >
                        Send <span className="sr-only">Send message</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RightPanel
