import React from "react";
import "./BlogPage.css";
import corporate from "../assets/corporate.jpg";
import tech from "../assets/technology.jpg";
import teamwork from "../assets/teamwork.jpg";

// Use the imported image directly in the blogs array
const blogs = [
  {
    id: 1,
    title: "Exploring React: A Guide for Beginners",
    excerpt:
      "React is a powerful library for building user interfaces. In this guide, we explore the basics and provide a roadmap for beginners.",
    author: "Jane Doe",
    date: "August 4, 2024",
    imageUrl: corporate,
  },
  {
    id: 2,
    title: "Understanding State Management in React",
    excerpt:
      "State management can be challenging in React applications. Learn about various approaches and tools to manage state effectively.",
    author: "John Smith",
    date: "August 3, 2024",
    imageUrl: tech,
  },
  {
    id: 3,
    title: "Building Responsive UIs with CSS Grid",
    excerpt:
      "CSS Grid is a powerful layout system that allows you to create complex responsive designs. This post covers the basics and advanced techniques.",
    author: "Alice Johnson",
    date: "August 2, 2024",
    imageUrl: teamwork,
  },
];

const BlogPage = () => {
  return (
    <div className="blog-container">
      <div className="services-banner2">
        <h2 className="services-heading">Blogs </h2>
      </div>
      {/* <h1 className="blog-title">Blog</h1> */}
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-heading">{blog.title}</h2>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <div className="blog-footer">
                <span className="blog-author">by {blog.author}</span>
                <span className="blog-date">{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
