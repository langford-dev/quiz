import Head from "next/head";
import React, { useEffect, useState } from "react";
import Controls from "../components/Controls";
import questions from "../constants/questions";

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questions[0] || {})
  const [clickedOpt, setClickedOpt] = useState("")
  const [storedClickedOpt, setStoredClickedOpt] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem("quiz")) {
      sessionStorage.setItem("quiz", "[]")
    }
  }, [])

  useEffect(() => {
    const storedAnswers = sessionStorage['quiz']
    const parsedStoredAnswers = JSON.parse(storedAnswers) || []
    const _ = parsedStoredAnswers.filter(element => {
      return (currentQuestion.id === element.id)
    })

    if (_[0]) setStoredClickedOpt(_[0].a)
  }, [currentQuestion])

  const onNextClick = () => {
    // if (!clickedOpt) return

    let _index = currentQuestionIndex + 1
    setCurrentQuestionIndex(_index)
    setCurrentQuestion(questions[_index])
    setClickedOpt()
    setStoredClickedOpt()

  }

  const initSetClickOpt = (opt) => {
    setClickedOpt(opt)

    const storedAnswers = sessionStorage["quiz"] || "[]"
    const parsedAnswers = JSON.parse(storedAnswers) || []
    const newAnswer = { id: currentQuestion.id, a: opt }
    const exists = parsedAnswers.filter(element => {
      return element.id === currentQuestion.id
    })

    if (exists[0]) return

    parsedAnswers.push(newAnswer)
    sessionStorage.setItem("quiz", JSON.stringify(parsedAnswers))
  }

  const onPrevClick = () => {
    let _index = currentQuestionIndex - 1
    setCurrentQuestionIndex(_index)
    setCurrentQuestion(questions[_index])
    setClickedOpt()
    setStoredClickedOpt()
  }

  return (
    <>
      <Head>
        <title>Quiz app</title>
      </Head>
      <div className="h-screen bg-gradient-to-b from-gray-900 to-slate-800 flex flex-col text-white">
        <h1 className="text-6xl font-bold text-center py-32">QUIZ APP</h1>
        <main>
          {
            <div key={Date.now() * Math.random() * 1000}>
              <p className="text-2xl max-w-5xl m-auto text-center">{currentQuestion.q}</p>
              <div className="flex items-center justify-center">
                {
                  currentQuestion.opts.map((opt, i) => {
                    return <button
                      onClick={() => initSetClickOpt(opt)} id={clickedOpt === opt || storedClickedOpt === opt ? 'clicked' : ""}
                      disabled={storedClickedOpt}
                      className="bg-[red] m-1 cursor-pointer w-max p-1 px-3 rounded-md" key={i}>{opt}</button>
                  })
                }
              </div>
            </div>
          }
          <Controls
            _currentQuestionIndex={currentQuestionIndex}
            onNext={onNextClick}
            onPrev={onPrevClick}
          />
          <div className="flex items-center justify-center">
            {currentQuestionIndex + 1}/{questions.length}
          </div>
        </main>
      </div>
    </>
  );
}
