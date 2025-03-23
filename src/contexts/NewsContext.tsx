import React, { createContext, useContext, useState, ReactNode } from "react";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

interface NewsContextType {
  news: NewsItem[];
  categories: string[];
  addNews: (news: Omit<NewsItem, "id" | "date">) => void;
  updateNews: (id: number, news: Partial<NewsItem>) => void;
  deleteNews: (id: number) => void;
  getNewsById: (id: number) => NewsItem | undefined;
  addCategory: (category: string) => void;
  deleteCategory: (category: string) => void;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [news, setNews] = useState<NewsItem[]>([
    {
      id: 1,
      title: "Tips Menjaga Kesehatan di Musim Hujan",
      excerpt: "Musim hujan telah tiba, ini saatnya untuk lebih memperhatikan kesehatan Anda dan keluarga...",
      content: `<p>Musim hujan telah tiba, ini saatnya untuk lebih memperhatikan kesehatan Anda dan keluarga. Berikut adalah beberapa tips penting yang perlu diperhatikan:</p>
      <h2>1. Jaga Kebersihan</h2>
      <p>Selalu cuci tangan dengan sabun, terutama sebelum makan dan setelah beraktivitas di luar rumah.</p>`,
      image: "https://images.unsplash.com/photo-1618961734760-466979ce35b0",
      date: "2024-03-15",
      author: "dr. Sarah Putri",
      category: "Kesehatan",
    },
    // Add more initial news items...
  ]);

  const [categories, setCategories] = useState<string[]>(["Kesehatan", "Tips", "Program", "Artikel"]);

  const addNews = (newsData: Omit<NewsItem, "id" | "date">) => {
    const newNews = {
      ...newsData,
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
    };
    setNews((prev) => [newNews, ...prev]);
  };

  const updateNews = (id: number, newsData: Partial<NewsItem>) => {
    setNews((prev) => prev.map((item) => (item.id === id ? { ...item, ...newsData } : item)));
  };

  const deleteNews = (id: number) => {
    setNews((prev) => prev.filter((item) => item.id !== id));
  };

  const getNewsById = (id: number) => {
    return news.find((item) => item.id === id);
  };

  const addCategory = (category: string) => {
    setCategories((prev) => [...prev, category]);
  };

  const deleteCategory = (category: string) => {
    setCategories((prev) => prev.filter((c) => c !== category));
  };

  return (
    <NewsContext.Provider
      value={{
        news,
        categories,
        addNews,
        updateNews,
        deleteNews,
        getNewsById,
        addCategory,
        deleteCategory,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error("useNews must be used within a NewsProvider");
  }
  return context;
};
