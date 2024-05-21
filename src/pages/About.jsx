import React from 'react';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import aboutBg from '../assets/img/page-title-bg.jpg';

const About = () => {
  return (
    <Layout>
      <PageTitle title="About" backgroundImage={aboutBg} />
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up">
          {/* About sayfası içeriği */}
        </div>
      </section>
    </Layout>
  );
};

export default About;