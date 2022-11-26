import questions from "../../constants/questions"

const Controls = (props) => {
    const { onPrev, onNext, _currentQuestionIndex } = props

    const _ = () => {
        alert("")
    }

    return <>
        <div className="controls-footer_ fixed left-0 border-t w-screen bottom-0 p-5">
            <div className="flex items-center justify-between max-w-xl m-auto">
                {
                    _currentQuestionIndex > 0
                        ? <button onClick={onPrev} className="border border-[#2493DF] text-[#2493DF] p-2 px-10 font-medium hover:opacity-50 transition-all rounded-md">BACK</button>
                        : <div></div>
                }
                <small className="p-3 flex items-center justify-center">
                    {_currentQuestionIndex + 1}/{questions.length}
                </small>
                {
                    _currentQuestionIndex < questions.length - 1
                        ? <button onClick={onNext} className="border border-[#2493DF] bg-[#2493DF] text-[#fff] p-2 px-10 font-medium hover:opacity-50 transition-all rounded-md">CONTINUE</button>
                        : <button onClick={_} className="border border-[#2493DF] bg-[#2493DF] text-[#fff] p-2 px-10 font-medium hover:opacity-50 transition-all rounded-md">FINISH</button>
                }
            </div>
        </div>
    </>
}

export default Controls