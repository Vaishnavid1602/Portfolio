import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Computer Applications',
      institution: 'APS University',
      location: 'Rewa, Madhya Pradesh',
      duration: 'Aug 2025 - Jun 2027',
      grade: 'Pursuing',
      status: 'Currently Pursuing',
      description: 'Advanced studies in computer applications with focus on modern web technologies, software engineering, and database management.',
      highlights: [
        'Specialization in Web Development',
        'Advanced Programming Concepts',
        'Software Engineering Principles',
        'Database Design & Management'
      ]
    },
    {
      degree: 'Bachelor of Science (Hons.) – Computer Science',
      institution: 'APS University',
      location: 'Rewa, Madhya Pradesh',
      duration: 'July 2021 – June 2024',
      grade: '7.57 / 10 CGPA',
      status: 'Completed',
      description: 'Undergraduate degree focusing on Computer Science principles, algorithms, and software development.',
      highlights: [
        'B.Sc. (Hons.) in Computer Science',
        'Academic Excellence',
        'Programming Fundamentals',
        'System Analysis'
      ]
    },
    {
      degree: 'Diploma in Computer Applications (DCA)',
      institution: 'Makhanlal Chaturvedi University',
      location: 'Online/Distance',
      duration: 'June 2021',
      grade: '78.86%',
      status: 'Completed',
      description: 'Professional diploma in computer applications focusing on fundamental computing skills.',
      highlights: [
        'DCA Certification',
        'Office Automation',
        'Computer Basics',
        'Digital Literacy'
      ]
    },
    {
      degree: '12th – PCMB',
      institution: 'M.P. Board',
      location: 'Madhya Pradesh',
      duration: 'July 2020',
      grade: '68%',
      status: 'Completed',
      description: 'Higher secondary education with a focus on Physics, Chemistry, Mathematics, and Biology.',
      highlights: [
        'Senior Secondary Education',
        'PCMB Stream',
        'Science Foundation',
        'Analytical Thinking'
      ]
    },
    {
      degree: '10th – Mathematics & Science',
      institution: 'M.P. Board',
      location: 'Madhya Pradesh',
      duration: 'July 2018',
      grade: '71.20%',
      status: 'Completed',
      description: 'Secondary school education with high emphasis on Mathematics and Science subjects.',
      highlights: [
        'Secondary Education',
        'Mathematical Foundation',
        'Scientific Principles',
        'Overall Academic Foundation'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey that built the foundation for my technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {educationData.map((education, index) => (
            <div
              key={education.degree}
              className="card-glow p-8 relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Status Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${education.status === 'Currently Pursuing'
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                {education.status}
              </div>

              {/* Degree Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
              </div>

              {/* Degree Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {education.degree}
                </h3>

                <h4 className="text-lg font-semibold text-muted-foreground">
                  {education.institution}
                </h4>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {education.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {education.duration}
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2" />
                    <span className="font-semibold text-primary">{education.grade}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {education.description}
                </p>

                {/* Highlights */}
                <div>
                  <h5 className="text-sm font-semibold mb-3 text-primary">Key Highlights:</h5>
                  <ul className="space-y-1">
                    {education.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Achievements */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Academic Excellence</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card-glow p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-4">MCA</div>
              <div className="text-sm text-muted-foreground">Currently Pursuing</div>
            </div>
            <div className="card-glow p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-4">7.57</div>
              <div className="text-sm text-muted-foreground">Bachelor's CGPA</div>
            </div>
            <div className="card-glow p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-4">78.86%</div>
              <div className="text-sm text-muted-foreground">DCA Percentage</div>
            </div>
            <div className="card-glow p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-4">2026</div>
              <div className="text-sm text-muted-foreground">Expected Grad</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;