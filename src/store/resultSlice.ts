import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Response } from '../types/response';
import firestoreApi from '../api/firestore';
import { Question } from '../types/question';
import type { AppThunk } from './store';

export interface ResultState {
  questionList: Question[];
  response: Response;
  responses: Response[];
  resultState: string;
  showResultDialog: boolean;
}

const initialState: ResultState = {
  questionList: [],
  response: {} as Response,
  responses: [],
  resultState: 'initial',
  showResultDialog: true,
};

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setQuestionList: (
      state: ResultState,
      action: PayloadAction<Question[]>,
    ) => {
      state.questionList = action.payload;
    },
    setResponse: (state: ResultState, action: PayloadAction<Response>) => {
      state.response = action.payload;
    },
    setResponses: (state: ResultState, action: PayloadAction<Response[]>) => {
      state.responses = action.payload;
    },
    clearState: () => initialState,
    setState: (state: ResultState, action: PayloadAction<ResultState>) => action.payload,
    setResultState: (state: ResultState, action: PayloadAction<string>) => {
      state.resultState = action.payload;
    },
    setResultDialog: (state: ResultState, action: PayloadAction<boolean>) => {
      state.showResultDialog = action.payload;
    },
  },
});

export const {
  setQuestionList,
  setResponse,
  setResponses,
  clearState,
  setState,
  setResultState,
  setResultDialog,
} = resultSlice.actions;

// - 進 QuizResultPage 時觸發
export const fetchResponseAndQuestions = (): AppThunk => async (dispatch, getState) => {
  const { response } = getState().result;
  // * 保留 response，其他清空
  dispatch(setState({ ...initialState, response }));
  dispatch(setResultState('loading'));

  // - 篩出某次測驗作答所有的 questionId
  const qIdList = response.records.map((answer) => answer.questionId);

  // - 根據 questionsId，去 query questions 的題目
  const list = await firestoreApi.getQuestions(qIdList);

  dispatch(setQuestionList(list));
  dispatch(setResultState('success'));
  // TODO
  // - 根據 answer 去 query 回答的答案
};

// - 進 UserPage 時觸發
export const fetchResponses = (userId: string): AppThunk => async (dispatch) => {
  dispatch(clearState());
  const data = await firestoreApi.getResponses(userId);

  dispatch(setResponses(data));
};

export default resultSlice;
