import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

// 具名导出 store（匹配你的导入语句）
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// 1. 定义RootState（状态读取的类型）
export type RootState = ReturnType<typeof store.getState>;

// 2. 定义AppDispatch（dispatch的类型，核心补充）
export type AppDispatch = typeof store.dispatch;

// 封装带类型的useDispatch（项目中复用，避免每次手动指定类型）
import { useDispatch } from "react-redux";
export const useAppDispatch = () => useDispatch<AppDispatch>();
