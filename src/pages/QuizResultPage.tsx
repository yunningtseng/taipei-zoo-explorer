import ResultBar from '../components/quizResult/ResultBar';
import ResultDialog from '../components/quizResult/ResultDialog';
import ResultRecorder from '../components/quizResult/ResultRecorder';
import { useAppSelector } from '../hooks/redux';

function QuizResultPage() {
  const name = useAppSelector((state) => state.auth.user.name);

  const showResultDialog = useAppSelector(
    (state) => state.result.showResultDialog,
  );

  return (
    <div className="max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mt-10 mx-auto px-3 sm:px-10 relative">
      {!name && showResultDialog && <ResultDialog />}
      <ResultBar />
      <ResultRecorder />
    </div>
  );
}

export default QuizResultPage;
