import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const blogPosts = [
  {
    title: 'Top 5 Simple Automations for Nonprofits',
    desc: 'Discover easy wins for your NGO: donor management, reporting, and more…',
    link: '/blog/top-5-automations-nonprofits',
    date: 'July 2025'
  },
  {
    title: 'How SMEs Can Leverage AI Without an IT Team',
    desc: 'Practical advice for small businesses wanting to automate and grow efficiently.',
    link: '/blog/sme-ai-no-it-team',
    date: 'July 2025'
  },
  {
    title: 'Success Story: Automating NGO Donor Reporting',
    desc: 'See how one NGO saved half their admin time with our help.',
    link: '/blog/ngo-donor-reporting-success',
    date: 'July 2025'
  },
  {
    title: 'Why Every Business Needs AI – Don’t Be Left Behind!',
    desc: 'Understand why automation is no longer optional for modern businesses.',
    link: '/blog/why-businesses-need-ai',
    date: 'July 2025'
  },
  {
    title: 'Advantages of Workflow Automation in Africa',
    desc: 'From cost savings to error reduction—learn the benefits for African enterprises.',
    link: '/blog/advantages-workflow-automation',
    date: 'July 2025'
  },
  {
  title: 'Boosting Customer Support with Chatbots',
  desc: 'How AI chatbots deliver better, faster support for businesses and customers alike.',
  link: '/blog/customer-support-chatbots',
  date: 'July 2025'
},
  {
    title: 'AI for Inventory & Stock Management',
    desc: 'Reduce losses, optimize your supply chain, and never run out of stock.',
    link: '/blog/ai-stock-management',
    date: 'July 2025'
  },
  {
    title: 'Online Forms & Paperless Processes',
    desc: 'Replace paperwork with easy online forms for admissions, onboarding, and more.',
    link: '/blog/online-forms-paperless',
    date: 'July 2025'
  }
];

function Blog() {
  return (
    <main className="blog-main">
     <div className="blog-header">
  <h1><span className="gradient-title">Blog & Insights</span></h1>
  <p className="subtitle">
    Thought leadership, automation tips, and real stories from the world of AI in Africa.
  </p>
</div>

      <div className="blog-cards-wide">
        {blogPosts.map((post, idx) => (
          <div className="blog-card-wide" key={idx}>
            <h2>
              <Link to={post.link}>{post.title}</Link>
            </h2>
            <p>{post.desc}</p>
            <div className="meta">By Team AutoMinds • {post.date}</div>
            <Link className="read-more" to={post.link}>Read More &rarr;</Link>
          </div>
        ))}
      </div>
      <div className="blog-footer-cta">
        <p>
          Want more insights? <Link to="/contact" className="cta-link">Contact us for automation tips</Link> or <a href="mailto:info@automindsafrica.com?subject=Newsletter%20Signup">join our newsletter</a>!
        </p>
      </div>
    </main>
  );
}

export default Blog;
