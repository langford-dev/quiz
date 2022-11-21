import styles from "./styles"
import questions from "../../constants/questions"

const Controls = (props) => {
    const { onPrev, onNext, _currentQuestionIndex } = props
    return <>
        <div className="flex items-center justify-center">
            {_currentQuestionIndex > 0 ? <button onClick={onPrev} className={styles.button}>&lt;</button> : <></>}
            {_currentQuestionIndex < questions.length - 1 ? <button onClick={onNext} className={styles.button}>&gt;</button> : <></>}
        </div>
    </>
}

export default Controls