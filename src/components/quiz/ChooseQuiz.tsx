import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import turtle from '../../images/turtle.png';
import penguin from '../../images/penguin.png';
import tiger from '../../images/tiger.png';

function ChooseQuiz() {
  return (
    <div className="w-[15rem] sm:w-[25rem] md:w-[40rem] flex flex-wrap justify-center sm:justify-between items-center mt-10 mx-auto">
      <Link to="/quiz/normal">
        <motion.div
          className="flex flex-col border rounded-xl w-44 h-48 cursor-pointer mt-5 sm:mt-0 justify-between pb-4"
          aria-hidden="true"
          whileHover={{ scale: 1.1 }}
        >
          <p className="py-1 rounded-t-xl bg-dark text-white text-center text-xl font-bold">
            一般模式
          </p>
          <img
            src={turtle}
            alt="img"
            className="w-[9rem] object-cover mx-auto"
          />
        </motion.div>
      </Link>

      <Link to="/quiz/time-challenge">
        <motion.div
          className="flex-col border rounded-xl w-44 h-48 cursor-pointer mt-5 sm:mt-0"
          aria-hidden="true"
          whileHover={{ scale: 1.1 }}
        >
          <p className="py-1 rounded-t-xl bg-dark text-white text-center text-xl font-bold">
            限時挑戰
          </p>
          <img
            src={tiger}
            alt="img"
            className="w-[6rem] object-cover mx-auto mt-3"
          />
        </motion.div>
      </Link>

      <Link to="/quiz/room-menu">
        <motion.div
          className="flex-col border rounded-xl w-44 h-48 cursor-pointer mt-5 md:mt-0"
          aria-hidden="true"
          whileHover={{ scale: 1.1 }}
        >
          <p className="py-1 rounded-t-xl bg-dark text-white text-center text-xl font-bold">
            多人競賽
          </p>
          <img
            src={penguin}
            alt="img"
            className="w-[5.5rem] object-cover mx-auto mt-3"
          />
        </motion.div>
      </Link>
    </div>
  );
}

export default ChooseQuiz;
