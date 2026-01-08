import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>
        <p className="text-white-600 mt-4 max-w-3xl">
          I've had the opportunity to work with amazing teams and contribute to impactful projects across different domains.
        </p>

        {/* Timeline Container */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

            {/* Experience Items */}
            {workExperiences.map((item, index) => (
              <div
                key={index}
                className="relative mb-12 last:mb-0 experience-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-12 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-black-200 z-10"></div>

                {/* Content Card */}
                <div className="ml-20 md:ml-28">
                  <div className="experience-card bg-black-200 border border-black-300 rounded-xl p-6 md:p-8 transition-all duration-300 shadow-xl">
                    {/* Header with Logo and Company Info */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        {/* Company Logo */}
                        <div className="w-16 h-16 rounded-lg bg-black-300 p-2 flex-shrink-0 border border-black-500">
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>

                        {/* Company and Role */}
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                            {item.name}
                          </h3>
                          <p className="text-blue-400 font-semibold text-base md:text-lg">
                            {item.pos}
                          </p>
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm text-white-600 font-medium whitespace-nowrap">
                          {item.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white-600 leading-relaxed mb-6">
                      {item.title}
                    </p>

                    {/* Tech Stack */}
                    <div>
                      <p className="text-sm text-white-500 mb-3 font-semibold">Technologies Used:</p>
                      <div className="flex flex-wrap gap-3">
                        {item.tech.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="tech-icon-wrapper group relative"
                          >
                            <div className="w-10 h-10 rounded-lg bg-black-300 p-2 border border-black-500 transition-all duration-200 flex items-center justify-center">
                              <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-full h-full object-contain"
                                loading="lazy"
                              />
                            </div>
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black-600 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                              {tech.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
