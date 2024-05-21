import React from 'react';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import projectsBg from '../assets/img/page-title-bg.jpg';

const Projects = () => {
  return (
    <Layout>
      <PageTitle title="Projects" backgroundImage={projectsBg} />
      <section id="projects" className="projects section">
        <div className="container" data-aos="fade-up">
          {/* Projects content goes here */}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;