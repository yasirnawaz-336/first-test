import { create } from "zustand";

export type QuranArticle = {
  id: number;
  date: string;
  author: string;
  source: string;
  title: string;
  description: string;
  rating: number;
  discussions: number;
  readTime: string;
  verified: boolean;
  image: string;
};

type QuranState = {
  articles: QuranArticle[];
  layout: "grid" | "list";
  page: number;
  totalPages: number;
  loading: boolean;

  setArticles: (data: QuranArticle[]) => void;
  setLayout: (mode: "grid" | "list") => void;
  setPage: (page: number) => void;
  setLoading: (v: boolean) => void;
};

export const useQuranStore = create<QuranState>((set) => ({
  articles: [],
  layout: "list",
  page: 1,
  totalPages: 10,
  loading: false,

  setArticles: (data) => set({ articles: data }),
  setLayout: (mode) => set({ layout: mode }),
  setPage: (page) => set({ page }),
  setLoading: (v) => set({ loading: v }),
}));
