import { Instagram, Heart, ExternalLink } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const PortfolioSection = () => {
  const [projects, setProjects] = useState([]);
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsRes, instagramRes] = await Promise.all([
          axios.get(`${API}/projects`),
          axios.get(`${API}/instagram/posts`)
        ]);
        setProjects(projectsRes.data);
        setInstagramPosts(instagramRes.data);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filters = ['Todos', 'Residencial', 'Comercial', 'Interiores'];

  const filteredProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const gridSpans = [
    'md:col-span-8 md:row-span-2',
    'md:col-span-4 md:row-span-1',
    'md:col-span-4 md:row-span-1',
    'md:col-span-6 md:row-span-1',
    'md:col-span-6 md:row-span-1',
    'md:col-span-4 md:row-span-1',
  ];

  return (
    <section
      id=\"portfolio\"
      className=\"py-24 md:py-32 bg-[#0a0a0a]\"
      data-testid=\"portfolio-section\"
    >
      <div className=\"max-w-[1400px] mx-auto px-6 md:px-12\">
        {/* Section Header */}
        <div className=\"mb-16\">
          <span className=\"font-archivo text-xs tracking-[0.3em] uppercase text-white/40 mb-4 block\">
            Nosso Trabalho
          </span>
          <h2 className=\"font-archivo font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight uppercase text-white mb-8\">
            Portfólio
          </h2>

          {/* Filters */}
          <div className=\"flex flex-wrap gap-4\" data-testid=\"portfolio-filters\">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-archivo text-xs tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-white/60 border-white/20 hover:border-white/50 hover:text-white'
                }`}
                data-testid={`filter-${filter.toLowerCase()}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        {loading ? (
          <div className=\"grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px]\">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`bg-white/5 animate-pulse ${gridSpans[i] || 'md:col-span-4'}`}
              />
            ))}
          </div>
        ) : (
          <div
            className=\"grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px]\"
            data-testid=\"portfolio-grid\"
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden bg-card border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer ${
                  gridSpans[index % gridSpans.length]
                }`}
                data-testid={`project-card-${project.id}`}
              >
                <img
                  src={project.image_url}
                  alt={project.title}
                  className=\"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105\"
                />
                {/* Overlay */}
                <div className=\"absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6\">
                  <span className=\"font-archivo text-xs tracking-[0.2em] uppercase text-white/60 mb-2\">
                    {project.category} • {project.year}
                  </span>
                  <h3 className=\"font-archivo font-bold text-xl md:text-2xl text-white mb-2\">
                    {project.title}
                  </h3>
                  <p className=\"font-manrope text-sm text-white/70 line-clamp-2\">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Instagram Section */}
        <div className=\"mt-24\" data-testid=\"instagram-section\">
          <div className=\"flex items-center justify-between mb-8\">
            <div>
              <span className=\"font-archivo text-xs tracking-[0.3em] uppercase text-white/40 mb-2 block\">
                Acompanhe nosso trabalho
              </span>
              <h3 className=\"font-archivo font-bold text-2xl md:text-3xl tracking-tight uppercase text-white flex items-center gap-3\">
                <Instagram className=\"w-6 h-6\" />
                Direto do Estúdio
              </h3>
            </div>
            <a
              href=\"https://instagram.com/jandermark\"
              target=\"_blank\"
              rel=\"noopener noreferrer\"
              className=\"hidden md:flex items-center gap-2 font-archivo text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors\"
              data-testid=\"instagram-follow-link\"
            >
              Seguir @jandermark
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Instagram Grid */}
          <div
            className=\"grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4\"
            data-testid=\"instagram-grid\"
          >
            {instagramPosts.slice(0, 8).map((post) => (
              <div
                key={post.id}
                className=\"group relative aspect-square overflow-hidden bg-card border border-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer\"
                data-testid={`instagram-post-${post.id}`}
              >
                <img
                  src={post.image_url}
                  alt={post.caption}
                  className=\"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110\"
                />
                {/* Hover Overlay */}
                <div className=\"absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4\">
                  <div className=\"flex items-center gap-2 text-white\">
                    <Heart className=\"w-5 h-5\" />
                    <span className=\"font-manrope text-sm\">{post.likes}</span>
                  </div>
                  <p className=\"font-manrope text-xs text-white/70 text-center line-clamp-2\">
                    {post.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Follow Button */}
          <a
            href=\"https://instagram.com/jandermark\"
            target=\"_blank\"
            rel=\"noopener noreferrer\"
            className=\"md:hidden flex items-center justify-center gap-2 mt-6 h-12 px-8 text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:bg-white hover:text-black border border-white/20 bg-transparent text-white font-archivo w-full\"
            data-testid=\"instagram-follow-mobile\"
          >
            <Instagram size={16} />
            Seguir @jandermark
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
