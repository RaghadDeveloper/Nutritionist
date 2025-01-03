import React from 'react'
import './HomeBlogs.css'
import blog1 from './../../assets/images/home/Image 1.webp';
import blog2 from './../../assets/images/home/Image 2.webp';
import blog3 from './../../assets/images/home/Image 3.webp';
import blog4 from './../../assets/images/home/Image 4.webp';
import user1 from './../../assets/images/home/blog user1.png';
import user2 from './../../assets/images/home/blog user2.png';
import user3 from './../../assets/images/home/blog user3.png';
import user4 from './../../assets/images/home/blog user4.png';
import HomeBlogCard from '../HomeBlogCard/HomeBlogCard';

export default function HomeBlogs() {
  const blogData = [
    {
      image: blog1,
      title: "Weight Loss",
      subTitle: "The Benefits of Hydration for Weight Loss",
      description: "Discover how staying hydrated can support your weight loss goals and improve overall health.",
      authorImage: user1,
      authorName: "Emily Johnson"
    },
    {
      image: blog2,
      title: "Mindful Eating",
      subTitle: "Cultivating a Healthy Relationship with Food",
      description: "Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.",
      authorImage: user2,
      authorName: "Sarah Thompson"
    },
    {
      image: blog3,
      title: "Understanding Macronutrients",
      subTitle: "Carbohydrates, Proteins, and Fats",
      description: "Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.",
      authorImage: user3,
      authorName: "Mark Wilson"
    },
    {
      image: blog4,
      title: "Healthy Snacks on the Go",
      subTitle: "Quick and Nutritious Options",
      description: "Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.",
      authorImage: user4,
      authorName: "Emily Johnson"
    }
  ];
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          {blogData.map((blog, index) => (
            <div key={index} className={`col-lg-6 col-md-12 col-sm-12 pb-4 order-sm-${index === 0 ? 1 : index === 1 ? 3 : index === 2 ? 2 : 4} order-lg-${index === 0 ? 1 : index === 1 ? 2 : index === 2 ? 3 : 4}`} >
              <HomeBlogCard
                image={blog.image}
                title={blog.title}
                subTitle={blog.subTitle}
                description={blog.description}
                authorImage={blog.authorImage}
                authorName={blog.authorName}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
