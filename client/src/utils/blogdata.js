export const blogData = {
  'nasa-spaceapps-journey': {
    id: 1,
    slug: 'nasa-spaceapps-journey',
    title: 'My NASA Space Apps Journey: Building Air Quality Solutions',
    excerpt: 'Participating in the NASA Space Apps Challenge and developing an innovative air quality monitoring solution using satellite data and machine learning.',
    category: 'hackathons',
    readTime: '10 min read',
    publishDate: '2024-10-28',
    views: 1247,
    likes: 0,
    comments: 0,
    images: [
      { url: '/blogs/nasa-spaceapps-1.png', alt: 'NASA Space Apps Challenge Interface', size: 'large' },
      { url: '/blogs/nasa-spaceapps-2.png', alt: 'Air Quality Data Visualization', size: 'medium' },
      { url: '/blogs/nasa-spaceapps-3.png', alt: 'Team Collaboration Session', size: 'small' }
    ],
    tags: ['NASA', 'Space Apps', 'Machine Learning', 'Air Quality', 'Python', 'Hackathon'],
    relevantLinks: [
      { name: 'NASA Space Apps Challenge Official Website', url: 'https://www.spaceappschallenge.org/' },
      { name: 'Project Documentation on GitHub', url: 'https://github.com/bethwelkip/nasa-air-quality' },
      { name: 'NASA TEMPO Satellite Mission', url: 'https://weather.ndc.nasa.gov/tempo/' }
    ],
    content: `
      <h2>The Beginning: Discovering NASA Space Apps Challenge</h2>
      <p>When I first learned about the NASA Space Apps Challenge, I was immediately captivated by the opportunity to work with real satellite data and contribute to solving global environmental challenges. The annual hackathon brings together developers, designers, scientists, and innovators from around the world to address critical issues using NASA's open data.</p>
      
      <h2>Our Mission: Tackling Air Quality Monitoring</h2>
      <p>Our team decided to focus on the "Breathe Easy" challenge, which aimed to develop solutions for monitoring and predicting air quality. With respiratory diseases becoming increasingly prevalent in urban areas, we saw an opportunity to create a system that could help communities make informed decisions about outdoor activities and health precautions.</p>
      
      <h2>Technical Architecture</h2>
      <p>We built a comprehensive air quality monitoring platform that integrated multiple data sources:</p>
      <ul>
        <li>NASA TEMPO satellite data for atmospheric composition</li>
        <li>Ground-based sensor networks for real-time validation</li>
        <li>Historical weather patterns and pollution data</li>
        <li>Machine learning models for air quality prediction</li>
      </ul>
      
      <h2>The Development Process</h2>
      <p>Over the 48-hour hackathon period, our team worked tirelessly to develop a functional prototype. We divided our efforts into three main tracks:</p>
      
      <h3>Data Processing Pipeline</h3>
      <p>Using Python and Pandas, we processed terabytes of satellite data to extract relevant atmospheric measurements. This involved cleaning the data, handling missing values, and transforming it into a format suitable for our machine learning models.</p>
      
      <h3>Machine Learning Models</h3>
      <p>We implemented several regression models to predict air quality indices based on historical patterns and current satellite readings. Our ensemble approach combined Random Forest, Gradient Boosting, and time-series analysis to achieve robust predictions.</p>
      
      <h3>Web Application Interface</h3>
      <p>The frontend was built with React and D3.js, providing interactive visualizations of air quality data across different regions. Users could view current conditions, historical trends, and future predictions for their location.</p>
      
      <h2>Achievement: Galactic Problem Solver Recognition</h2>
      <p>Our project was recognized as a Galactic Problem Solver, placing us among the top teams globally. This achievement acknowledges the technical excellence and potential impact of our solution. The semi-final awards ceremony is scheduled for November, where final winners will be announced.</p>
      
      <h2>Key Learnings</h2>
      <p>This experience taught me valuable lessons about working with large-scale datasets, collaborating in high-pressure environments, and the importance of clear communication in technical teams. The challenge reinforced my passion for using technology to address environmental issues.</p>
      
      <h2>Future Enhancements</h2>
      <p>Looking ahead, we plan to continue developing the platform by:</p>
      <ul>
        <li>Integrating more satellite data sources</li>
        <li>Improving prediction accuracy with deep learning models</li>
        <li>Developing mobile applications for real-time alerts</li>
        <li>Expanding coverage to more regions globally</li>
      </ul>
    `,
     author: {
      name: 'Bethwel Kiplagat',
      role: 'GDG Co-Lead & Community Builder',
      avatar: '/images/bethwel-avatar.png'
    }
  },
  'gdg-community-leadership': {
    id: 2,
    slug: 'gdg-community-leadership',
    title: 'Building Tech Communities: My Journey as GDG Co-Lead',
    excerpt: 'Leading the Google Developer Group at The Co-operative University of Kenya, mentoring students in web development, and fostering a vibrant tech community.',
    category: 'events',
    readTime: '8 min read',
    publishDate: '2024-09-15',
    views: 892,
    likes: 0,
    comments: 0,
    images: [
      { url: '/blogs/gdg-community-1.jpg', alt: 'GDG Workshop Session', size: 'large' },
      { url: '/blogs/gdg-community-2.jpg', alt: 'Student Project Presentations', size: 'small' },
      { url: '/blogs/gdg-community-3.jpg', alt: 'Community Networking Event', size: 'medium' }
    ],
    tags: ['GDG', 'Community Building', 'Web Development', 'Mentorship', 'Google Developers'],
    relevantLinks: [
      { name: 'Google Developer Groups', url: 'https://gdg.community.dev/gdg-on-campus-the-co-operative-university-of-kenya-nairobi-kenya/' },
      { name: 'Web Development Learning Resources', url: 'https://web.dev/' },
      { name: 'Open Source Contribution Guide', url: 'https://opensource.guide/' }
    ],
    content: `
      <h2>Inception: Starting the GDG Chapter</h2>
      <p>When I took on the role of GDG Co-Lead in early 2024, I saw an opportunity to create a vibrant tech community at The Co-operative University of Kenya. The university had talented students with immense potential, but lacked structured platforms for practical learning and collaboration.</p>
      
      <h2>Community Building Strategy</h2>
      <p>Our approach focused on creating inclusive learning environments that catered to students at different skill levels. We implemented a tiered system:</p>
      
      <h3>Beginner Track</h3>
      <p>For students new to programming, we offered foundational workshops covering HTML, CSS, and JavaScript basics. These sessions emphasized hands-on learning with immediate practical applications.</p>
      
      <h3>Intermediate Track</h3>
      <p>Students with basic programming knowledge progressed to learning modern frameworks like React, Node.js, and database management. We focused on building complete web applications.</p>
      
      <h3>Advanced Track</h3>
      <p>Our most experienced members worked on real-world projects, contributed to open source, and prepared for technical interviews and hackathons.</p>
      
      <h2>Key Initiatives and Events</h2>
      
      <h3>Weekly Tech Talks</h3>
      <p>Every Thursday, we hosted technical sessions covering various topics from cloud computing to UI/UX design. These talks provided continuous learning opportunities and kept the community engaged.</p>
      
      <h3>Monthly Hackathons</h3>
      <p>We organized monthly mini-hackathons where students could apply their skills to solve real problems. These events fostered teamwork, problem-solving, and innovation.</p>
      
      <h3>Project Showcases</h3>
      <p>Quarterly project showcases allowed students to present their work to peers and industry professionals, building confidence and receiving valuable feedback.</p>
      
      <h2>Impact and Growth</h2>
      <p>Within six months, our community grew from a small group of 15 enthusiasts to over 100 active members. The most rewarding aspect was seeing students transform from beginners to confident developers capable of building complex applications.</p>
      
      <h3>Success Stories</h3>
      <p>Several of our members have gone on to:</p>
      <ul>
        <li>Secure internships at local tech companies</li>
        <li>Win regional hackathons</li>
        <li>Contribute to open-source projects</li>
        <li>Launch their own startups</li>
      </ul>
      
      <h2>Challenges and Solutions</h2>
      <p>Building a sustainable community came with its challenges:</p>
      
      <h3>Maintaining Engagement</h3>
      <p>We addressed this by ensuring every event provided clear value and learning outcomes. Regular feedback sessions helped us adapt to members' needs.</p>
      
      <h3>Resource Constraints</h3>
      <p>Limited access to hardware and software was overcome through cloud-based solutions and partnerships with tech companies that provided resources and mentorship.</p>
      
      <h2>Lessons in Leadership</h2>
      <p>This experience taught me that effective community leadership requires:</p>
      <ul>
        <li>Active listening to understand member needs</li>
        <li>Consistency in organizing events and follow-ups</li>
        <li>Empathy to support members at different skill levels</li>
        <li>Vision to set clear goals and direction</li>
      </ul>
      
      <h2>Future Vision</h2>
      <p>We plan to expand our impact by:</p>
      <ul>
        <li>Partnering with more industry leaders for workshops</li>
        <li>Establishing a mentorship program with alumni</li>
        <li>Creating specialized tracks for AI and mobile development</li>
        <li>Hosting larger-scale tech conferences</li>
      </ul>
    `,
    author: {
      name: 'Bethwel Kiplagat',
      role: 'GDG Co-Lead & Community Builder',
      avatar: '/images/bethwel-avatar.png'
    }
  },
  'icp-smart-contracts-hackathon': {
    id: 3,
    slug: 'icp-smart-contracts-hackathon',
    title: 'Exploring Blockchain: Building on Internet Computer Protocol',
    excerpt: 'Participating in the ICP hackathon at Sarit Centre Nairobi, learning smart contract development, and exploring decentralized application architecture.',
    category: 'hackathons',
    readTime: '9 min read',
    publishDate: '2024-08-22',
    views: 756,
    likes: 0,
    comments: 0,
    images: [
      { url: '/blogs/icp-hackathon-1.jpg', alt: 'ICP Hackathon Venue at Sarit Centre', size: 'medium' },
      { url: '/blogs/icp-hackathon-2.jpg', alt: 'Smart Contract Development Session', size: 'large' },
      { url: '/blogs/icp-hackathon-3.jpg', alt: 'Team Collaboration and Coding', size: 'small' }
    ],
    tags: ['Blockchain', 'ICP', 'Smart Contracts', 'Web3', 'Decentralized Apps', 'Motoko'],
    relevantLinks: [
      { name: 'Internet Computer Protocol Documentation', url: 'https://internetcomputer.org/' },
      { name: 'Motoko Programming Language Guide', url: 'https://internetcomputer.org/motoko' },
      { name: 'ICP Developer Resources', url: 'https://developer.icp.xyz/' }
    ],
    content: `
      <h2>Introduction to Internet Computer Protocol</h2>
      <p>The Internet Computer Protocol (ICP) hackathon at Sarit Centre Nairobi introduced me to the next evolution of blockchain technology. Unlike traditional blockchains, ICP aims to extend the functionality of the public internet by providing a decentralized cloud computing platform.</p>
      
      <h2>Understanding the ICP Architecture</h2>
      <p>ICP's unique architecture consists of several key components:</p>
      
      <h3>Canisters</h3>
      <p>Canisters are the computational units on ICP, combining code and state in secure, isolated environments. They can serve web content, process data, and interact with other canisters.</p>
      
      <h3>Reverse Gas Model</h3>
      <p>One of ICP's innovative features is its reverse gas model, where developers pre-pay for computation cycles, making applications free for end-users.</p>
      
      <h3>Network Nervous System</h3>
      <p>The NNS is ICP's decentralized governance system, allowing token holders to vote on protocol upgrades and network parameters.</p>
      
      <h2>Our Hackathon Project: Decentralized Document Verification</h2>
      <p>Our team developed a document verification system that leverages ICP's capabilities to create tamper-proof digital certificates and credentials.</p>
      
      <h3>Problem Statement</h3>
      <p>Traditional document verification systems face challenges with fraud, centralized control, and interoperability. Our solution aimed to provide a decentralized alternative.</p>
      
      <h3>Technical Implementation</h3>
      <p>We built the system using:</p>
      <ul>
        <li>Motoko programming language for smart contracts</li>
        <li>ICP canisters for backend logic and storage</li>
        <li>React frontend for user interaction</li>
        <li>Cryptographic hashing for document integrity</li>
      </ul>
      
      <h2>Learning Motoko Programming</h2>
      <p>Motoko, ICP's native programming language, presented an interesting learning curve. Its actor-based model and strong typing system required a shift in thinking from traditional web development.</p>
      
      <h3>Key Motoko Concepts</h3>
      <ul>
        <li>Actors for concurrent computation</li>
        <li>Stable variables for persistent state</li>
        <li>Message-based communication</li>
        <li>Async/await patterns for non-blocking operations</li>
      </ul>
      
      <h2>Development Challenges</h2>
      <p>Building on ICP came with unique challenges:</p>
      
      <h3>State Management</h3>
      <p>Understanding how to manage state across upgrades and ensuring data persistence required careful planning and implementation.</p>
      
      <h3>Cost Optimization</h3>
      <p>We had to optimize our canister cycles usage to ensure sustainable operation within the hackathon constraints.</p>
      
      <h3>User Experience</h3>
      <p>Balancing decentralization with user-friendly interfaces required innovative design approaches.</p>
      
      <h2>Technical Deep Dive</h2>
      
      <h3>Smart Contract Design</h3>
      <p>Our document verification smart contract implemented:</p>
      <ul>
        <li>Document registration with unique identifiers</li>
        <li>Owner-based access control</li>
        <li>Verification status tracking</li>
        <li>Audit trail maintenance</li>
      </ul>
      
      <h3>Frontend Integration</h3>
      <p>The React application connected to ICP using the official agent-js library, providing seamless interaction with our smart contracts.</p>
      
      <h2>Industry Applications</h2>
      <p>Our solution has potential applications in:</p>
      <ul>
        <li>Academic credential verification</li>
        <li>Professional certification validation</li>
        <li>Legal document authentication</li>
        <li>Supply chain documentation</li>
      </ul>
      
      <h2>Key Takeaways</h2>
      <p>This hackathon experience provided valuable insights into:</p>
      <ul>
        <li>Decentralized application architecture</li>
        <li>Smart contract security best practices</li>
        <li>Blockchain scalability considerations</li>
        <li>Web3 development tooling and workflows</li>
      </ul>
      
      <h2>Future Development Plans</h2>
      <p>We plan to continue developing the platform by:</p>
      <ul>
        <li>Implementing advanced access control mechanisms</li>
        <li>Adding support for multiple document types</li>
        <li>Integrating with traditional verification systems</li>
        <li>Exploring cross-chain interoperability</li>
      </ul>
    `,
    author: {
      name: 'Bethwel Kiplagat',
      role: 'Blockchain Developer & ICP Explorer',
      avatar: '/images/bethwel-avatar.png'
    }
  }
};

export const getAllBlogs = () => {
  return Object.values(blogData);
};

export const getBlogBySlug = (slug) => {
  return blogData[slug] || null;
};

export const getBlogsByCategory = (category) => {
  const allBlogs = getAllBlogs();
  if (category === 'all') return allBlogs;
  return allBlogs.filter(blog => blog.category === category);
};

export const authorInfo = {
  name: 'Bethwel Kiplagat',
  title: 'Software Engineer & Tech Community Builder',
  avatar: '/images/bethwel-avatar.png',
  bio: 'Passionate software engineer experienced in building scalable web applications and mentoring aspiring developers.',
  social: {
    github: 'https://github.com/bethwel3001',
    linkedin: 'https://www.linkedin.com/in/bethwel-kiplagat-1314912a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
    email: 'kiplagatbethwelk@gmail.com'
  }
};