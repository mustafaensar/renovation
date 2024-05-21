import React from 'react';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import blogBg from '../assets/img/page-title-bg.jpg';

const Blog = () => {
  return (
    <Layout>
      <PageTitle title="Blog" backgroundImage={blogBg} />
      <section id="blog" className="blog section">
        <div className="container" data-aos="fade-up">
          {/* Blog content goes here */}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;