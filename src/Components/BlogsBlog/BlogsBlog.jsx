import React, { useState } from 'react';
import './BlogsBlog.css';
import BlogsBlogCard from '../BlogsBlogCard/BlogsBlogCard';
import { blogData } from './../Data/BlogBlogsData.jsx';

export default function BlogsBlogsec() {
  const categories = ['All', 'Weight Loss Tips', 'Healthy Eating', 'Fitness and Exercise', 'Mindset and Motivation', 'Recipes and Meal Planning'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredBlogs(blogData);
    }
    else {
      setFilteredBlogs(blogData.filter((blog) => blog.blog_title === category));
    }
  };
  return (
    <>
      <div className="main-container">
        <ul className="tabs-container" id="genreList">
          {categories.map((category) => (
            <li key={category} className="tab">
              <a className={`tab-link ${activeCategory === category ? 'active' : ''}`} onClick={() => handleCategoryClick(category)} href="#">{category}</a>
            </li>
          ))}
        </ul>
        <div className="row blogcard-container m-0">
          {filteredBlogs.map((blog, index) => (
            <div key={index} className={`col-lg-6 col-md-12 col-sm-12 p-0 ${index >= 4 ? 'd-none d-md-flex' : ''}`}>
              <BlogsBlogCard
                blog_title={blog.blog_title}
                imageUrl={blog.imageUrl}
                blog_subTitle={blog.blog_subTitle}
                blog_description={blog.blog_description}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
