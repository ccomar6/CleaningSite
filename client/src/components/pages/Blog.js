import React from 'react';
import '../styling/Blog.css'; // Import the Blog.css file for styling

const Blog = () => {
  const blogPosts = [
    {
      title: "The Benefits of Regular Cleaning",
      date: "October 5, 2024",
      description:
        "Regular cleaning not only keeps your home looking pristine but also prevents health hazards...",
      link: "#"
    },
    {
      title: "Eco-Friendly Cleaning Products We Love",
      date: "September 28, 2024",
      description:
        "At Cleaning Co., we believe in using eco-friendly cleaning products that are safe for your family...",
      link: "#"
    },
    {
      title: "How Often Should You Deep Clean Your Home?",
      date: "September 15, 2024",
      description:
        "Wondering how often you should deep clean your home? We've got the answers to help keep your space spotless...",
      link: "#"
    },
  ];

  return (
    <div className="blog-container">
      <section className="hero-section">
        <h1>Cleaning Tips & Articles</h1>
        <p>Explore our latest blog posts for tips and tricks on keeping your space spotless.</p>
      </section>

      <section className="blog-posts">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <h2>{post.title}</h2>
            <p className="post-date">{post.date}</p>
            <p>{post.description}</p>
            <a href={post.link} className="read-more">Read More</a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;