'use client';

const BLOGS = [
  {
    id: 1,
    title: 'Navigating the Next Frontier: The State of Data Centers in India',
    category: 'Cybersecurity',
    categoryBgColor: 'bg-[#E1EFFE] text-[#1E429F]',
    image: '/images/home/Frontier.png',
    author: 'Ranjeet Maske',
    role: 'Senior Designer',
    date: 'Nov 29, 2024',
    href: '/casestudies/navigating-frontier'
  },
  {
    id: 2,
    title: 'Prompt Injection - Practical Mitigations',
    category: 'Red Teaming LLMs',
    categoryBgColor: 'bg-[#FCE8F3] text-[#99154B]',
    image: '/images/home/Mitigations.png',
    author: 'Ranjeet Maske',
    role: 'Senior Designer',
    date: 'Nov 6, 2024',
    href: '/casestudies/prompt-injection'
  },
  {
    id: 3,
    title: 'Securing AI Before the Damage Is Visible',
    category: 'AI Security',
    categoryBgColor: 'bg-[#E1EFFE] text-[#1E429F]',
    image: '/images/home/Proofsecurity.webp', // Reuse high-fidelity webp asset
    author: 'Ranjeet Maske',
    role: 'Senior Designer',
    date: 'Oct 18, 2024',
    href: '/casestudies/securing-ai-before-damage-visible'
  }
];

export default function BlogSection() {
  return (
    <div className="w-full text-white py-16 px-5 lg:px-24 2xl:px-[150px]">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Title */}
        <div className="text-center md:text-left lg:text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
            Insights
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-light max-w-lg lg:mx-auto">
            Stay ahead of threat landscapes with cybersecurity updates, threat intelligence analysis, and guides from our team.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOGS.map((post) => (
            <a 
              key={post.id}
              href={post.href}
              className="flex flex-col rounded-lg border border-white/10 bg-white/5 overflow-hidden shadow-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              {/* Image Banner */}
              <div className="relative h-[200px] w-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Category Pill Tag */}
                  <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded uppercase ${post.categoryBgColor}`}>
                    {post.category}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#3B73CC] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                </div>

                {/* Author Metadata Footer */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5 mt-auto">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/images/home/man.png" 
                      alt={post.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-none">{post.author}</h4>
                    <p className="text-[10px] text-gray-400 font-light mt-0.5">{post.role} • {post.date}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
