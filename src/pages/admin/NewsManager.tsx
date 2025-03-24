import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Edit2, Trash2, Search, X, Upload } from "lucide-react";
import { useNews } from "../../contexts/NewsContext";
import ReactQuill from "react-quill"; // Impor ReactQuill
import "react-quill/dist/quill.snow.css"; // Impor CSS untuk styling

interface NewsFormData {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  imageFile?: File | null;
  author: string;
  category: string;
}

const NewsManager = () => {
  const { news, categories, addNews, updateNews, deleteNews, addCategory, deleteCategory } = useNews();
  const [showForm, setShowForm] = useState(false);
  const [editingNews, setEditingNews] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState<NewsFormData>({
    title: "",
    excerpt: "",
    content: "",
    image: "",
    imageFile: undefined,
    author: "",
    category: "",
  });
  const [newCategory, setNewCategory] = useState("");
  const [imageUploadType, setImageUploadType] = useState<"url" | "file">("url");

  useEffect(() => {
    if (editingNews) {
      setFormData({
        title: editingNews.title,
        excerpt: editingNews.excerpt,
        content: editingNews.content,
        image: editingNews.image,
        imageFile: editingNews.imageFile,
        author: editingNews.author,
        category: editingNews.category,
      });
    }
  }, [editingNews]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({
        ...prev,
        imageFile: file,
        image: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let imageUrl = formData.image;

    if (formData.imageFile) {
      try {
        console.log("Image would be uploaded here");
      } catch (error) {
        console.error("Error uploading image:", error);
        return;
      }
    }

    if (editingNews) {
      updateNews(editingNews.id, { ...formData, image: imageUrl });
    } else {
      addNews({ ...formData, image: imageUrl });
    }
    resetForm();
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus berita ini?")) {
      deleteNews(id);
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingNews(null);
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      image: "",
      imageFile: undefined,
      author: "",
      category: "",
    });
  };

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCategory.trim()) {
      addCategory(newCategory.trim());
      setNewCategory("");
    }
  };

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Manajemen Berita</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="bg-primary text-white px-4 py-2 rounded-lg flex items-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            Tambah Berita
          </motion.button>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari berita..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judul</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Penulis</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredNews.map((news) => (
                <tr key={news.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{news.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{news.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{news.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{news.author}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button onClick={() => setEditingNews(news)} className="text-blue-600 hover:text-blue-900 mr-4">
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button onClick={() => handleDelete(news.id)} className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{editingNews ? "Edit Berita" : "Tambah Berita Baru"}</h2>
                <button onClick={resetForm} className="text-gray-500 hover:text-gray-700">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Judul</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ringkasan</label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Konten</label>
                  <ReactQuill
                    value={formData.content}
                    onChange={(value) => setFormData({ ...formData, content: value })}
                    className="bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gambar</label>
                  <div className="space-y-2">
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setImageUploadType("url")}
                        className={`px-4 py-2 rounded-lg ${imageUploadType === "url" ? "bg-primary text-white" : "bg-gray-200"}`}
                      >
                        URL
                      </button>
                      <button
                        type="button"
                        onClick={() => setImageUploadType("file")}
                        className={`px-4 py-2 rounded-lg ${imageUploadType === "file" ? "bg-primary text-white" : "bg-gray-200"}`}
                      >
                        Upload File
                      </button>
                    </div>

                    {imageUploadType === "url" ? (
                      <input
                        type="url"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="https://example.com/image.jpg"
                      />
                    ) : (
                      <div className="flex items-center space-x-4">
                        <label className="flex-1">
                          <div className="w-full px-4 py-2 border border-gray-300 rounded-lg text-center cursor-pointer hover:bg-gray-50">
                            <Upload className="h-5 w-5 mx-auto mb-2" />
                            <span className="text-sm text-gray-600">Pilih File</span>
                          </div>
                          <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                        </label>
                        {formData.image && <img src={formData.image} alt="Preview" className="h-20 w-20 object-cover rounded" />}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Penulis</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
                  <div className="flex space-x-2 mb-2">
                    <input
                      type="text"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="Tambah kategori baru"
                    />
                    <button
                      type="button"
                      onClick={handleAddCategory}
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                    >
                      Tambah
                    </button>
                  </div>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  >
                    <option value="">Pilih Kategori</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <div key={category} className="bg-gray-100 px-3 py-1 rounded-full flex items-center space-x-2">
                        <span>{category}</span>
                        <button
                          type="button"
                          onClick={() => deleteCategory(category)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                  <button type="button" onClick={resetForm} className="px-4 py-2 text-gray-600 hover:text-gray-900">
                    Batal
                  </button>
                  <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                    {editingNews ? "Simpan Perubahan" : "Tambah Berita"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default NewsManager;