import React from 'react';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import servicesBg from '../assets/img/page-title-bg.jpg';

const Services = () => {
  return (
    <Layout>
      <PageTitle title="Services" backgroundImage={servicesBg} />
      <section id="services" className="services section">
        <div className="container" data-aos="fade-up">
          {/* Services content goes here */}
        </div>
      </section>
    </Layout>
  );
};

export default Services;