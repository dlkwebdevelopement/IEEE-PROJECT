// Technical Blogs and Articles Data Layer for IEEE Project Centre
// All data is dynamically loaded from and stored in the backend database API
import { API_BASE } from "../api";

export const initialBlogPosts = [];

/**
 * Synchronously retrieve blogs stored locally in cache.
 */
export const getStoredBlogs = () => {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem("admin_blogs");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Failed reading blogs from localStorage", e);
  }
  return [];
};

/**
 * Persist blogs to local storage cache.
 */
export const saveAdminBlogs = (newBlogs) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("admin_blogs", JSON.stringify(newBlogs));
    } catch (e) {
      console.error("Failed saving blogs to localStorage", e);
    }
  }
};

/**
 * Fetch all blogs directly from the backend database API.
 */
export const fetchBlogsFromDb = async () => {
  try {
    const res = await fetch(`${API_BASE}/blogs.php`);
    if (res.ok) {
      const data = await res.json();
      const blogsList = Array.isArray(data) ? data : (data.data || []);
      if (Array.isArray(blogsList) && blogsList.length > 0) {
        saveAdminBlogs(blogsList);
        return blogsList;
      }
    }
  } catch (err) {
    console.warn("Backend database fetch fallback to local cache:", err);
  }
  return getStoredBlogs();
};

/**
 * Fetch a single blog by slug directly from the backend database API.
 */
export const fetchBlogBySlugFromDb = async (slug) => {
  if (!slug) return null;
  try {
    const res = await fetch(`${API_BASE}/blogs/${encodeURIComponent(slug)}`);
    if (res.ok) {
      const data = await res.json();
      if (data && data.title) {
        return data;
      }
    }
  } catch (err) {
    console.warn("Could not fetch blog from database API, checking local cache:", err);
  }
  return getBlogBySlug(slug);
};

export const blogPosts = getStoredBlogs();

export const getBlogBySlug = (slug) => {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().trim();
  const all = getStoredBlogs();
  return all.find((p) => p.slug && p.slug.toLowerCase() === cleanSlug) || null;
};

export const getRelatedBlogs = (currentSlug) => {
  const all = getStoredBlogs();
  const current = getBlogBySlug(currentSlug);
  if (!current) return all.slice(0, 3);

  if (current.relatedSlugs && current.relatedSlugs.length > 0) {
    const related = current.relatedSlugs
      .map((s) => getBlogBySlug(s))
      .filter(Boolean);
    if (related.length >= 3) return related.slice(0, 3);
  }

  return all.filter((p) => p.slug !== current.slug).slice(0, 3);
};
