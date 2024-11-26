import React, { useState, useEffect } from 'react';
import ApplicationLayout from './Layout';
import { 
  Shield, 
  AlertTriangle, 
  Globe, 
  Activity,
  ChevronDown,
  ChevronUp,
  Radio,
  Map,
  Zap,
  Brain,
  Target,
  Network,
  Lock,
  Database,
  FileText
} from 'lucide-react';

interface Section {
  title: string;
  description: string;
  content: string[];
  icon: typeof Shield;
  metrics?: {
    label: string;
    value: string;
    trend: 'up' | 'down';
  }[];
}

const sections: Section[] = [
  {
    title: 'Stabilization Priority Score (SPS)',
    description: 'Assesses the urgency of stabilizing essential operations.',
    content: [
      'Current operational needs assessment',
      'Urgency of revenue and customer support stabilization',
      'Impact of core functions on overall business continuity',
      'High SPS indicates pressing need for immediate stabilization to prevent operational or financial collapse'
    ],
    icon: Shield,
    metrics: [
      { label: 'Stability Rate', value: '99.9%', trend: 'up' },
      { label: 'Response Time', value: '<1ms', trend: 'down' },
      { label: 'Coverage', value: '100%', trend: 'up' }
    ]
  },
  {
    title: 'Resource Efficiency Factor (REF)',
    description: 'Measures effectiveness of resource allocation to optimize operations.',
    content: [
      'Resource allocation data analysis',
      'Efficiency metrics tracking',
      'Operational budget constraints management',
      'High REF score suggests resources are being deployed efficiently'
    ],
    icon: Target,
    metrics: [
      { label: 'Efficiency', value: '97.8%', trend: 'up' },
      { label: 'Resource Use', value: '-25%', trend: 'down' },
      { label: 'Optimization', value: '96.5%', trend: 'up' }
    ]
  },
  {
    title: 'Market Expansion Potential (MEP)',
    description: 'Evaluates growth potential across market segments.',
    content: [
      'Market size analysis',
      'Customer demand trend tracking',
      'Expansion feasibility assessment',
      'High MEP indicates strong potential for growth in safe or emerging markets'
    ],
    icon: Globe,
    metrics: [
      { label: 'Growth Rate', value: '85.5%', trend: 'up' },
      { label: 'Market Reach', value: '92.3%', trend: 'up' },
      { label: 'Success Rate', value: '94.7%', trend: 'up' }
    ]
  },
  {
    title: 'Founders\' Strategic Vision (FSV)',
    description: 'Ensures alignment with founders\' original vision and goals.',
    content: [
      'Mission statement analysis',
      'Strategic documentation review',
      'Customer feedback integration',
      'High FSV score ensures growth strategies remain true to founders\' intent'
    ],
    icon: Brain,
    metrics: [
      { label: 'Alignment', value: '98.2%', trend: 'up' },
      { label: 'Vision Score', value: '96.5%', trend: 'up' },
      { label: 'Continuity', value: '97.8%', trend: 'up' }
    ]
  },
  {
    title: 'Operational Deficiency Index (ODI)',
    description: 'Quantifies gaps in leadership and resources.',
    content: [
      'Gap analysis execution',
      'Project backlog assessment',
      'Team capacity evaluation',
      'Higher ODI indicates significant deficiencies requiring swift action'
    ],
    icon: AlertTriangle,
    metrics: [
      { label: 'Gap Coverage', value: '94.5%', trend: 'up' },
      { label: 'Response Rate', value: '98.2%', trend: 'up' },
      { label: 'Resolution', value: '96.7%', trend: 'up' }
    ]
  }
];

const strategicImpacts = [
  {
    title: 'Enhanced Security',
    description: 'Real-time threat detection and mitigation capabilities.',
    icon: Shield
  },
  {
    title: 'Operational Efficiency',
    description: 'Optimized resource allocation and automated compliance.',
    icon: Activity
  },
  {
    title: 'Global Integration',
    description: 'Seamless cross-border security coordination.',
    icon: Globe
  },
  {
    title: 'Cyber Resilience',
    description: 'Advanced protection against sophisticated threats.',
    icon: Lock
  }
];

const operationalCapabilities = [
  {
    title: 'Risk Assessment',
    description: 'Comprehensive risk evaluation and mitigation strategies.',
    icon: AlertTriangle
  },
  {
    title: 'Resource Management',
    description: 'Efficient allocation of critical resources.',
    icon: Database
  },
  {
    title: 'Strategic Planning',
    description: 'Long-term vision and execution framework.',
    icon: Target
  }
];

export default function ConflictZones() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [showContent, setShowContent] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      setShowMetrics(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ApplicationLayout
      title="Conflict Zone Startup Revitalization Formula"
      subtitle="Advanced framework for stabilizing and scaling startups in high-risk environments"
      industry="Crisis Management"
    >
      {/* Introduction Section */}
      <div className="glass-card p-8 rounded-2xl hover-glow mb-12">
        <p className="text-gray-600 leading-relaxed">
          In regions affected by conflict, tech startups often face unprecedented challenges, from supply chain disruptions to the temporary or permanent absence of founders who may be called to serve in military or humanitarian efforts. The Conflict Zone Startup Revitalization Formula (CZSRF) provides a structured, data-driven approach for accelerators, investors, and support organizations to assess and revitalize these businesses.
        </p>
      </div>

      {/* Main Components */}
      <div className="space-y-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`transform transition-all duration-500 ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
              <div className="relative glass-card rounded-2xl hover-glow">
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-75 blur transition-all duration-300" />
                        <section.icon className="relative h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold gradient-text">
                          {section.title}
                        </h3>
                        <p className="text-gray-600 mt-1">
                          {section.description}
                        </p>
                      </div>
                    </div>
                    {expandedSection === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedSection === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-gray-100">
                    {/* Metrics Grid */}
                    {section.metrics && (
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {section.metrics.map((metric, i) => (
                          <div 
                            key={i}
                            className={`text-center transition-all duration-500 transform ${
                              showMetrics && expandedSection === index
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-4 opacity-0'
                            }`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                          >
                            <div className="text-2xl font-bold gradient-text">
                              {metric.value}
                            </div>
                            <div className="text-sm text-gray-500">
                              {metric.label}
                            </div>
                            <div className={`text-xs ${
                              metric.trend === 'up' ? 'text-emerald-500' : 'text-blue-500'
                            }`}>
                              {metric.trend === 'up' ? '↑' : '↓'}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Content */}
                    <div className="space-y-4">
                      {section.content.map((item, i) => (
                        <div key={i} className="flex items-center space-x-3 text-gray-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Strategic Impact */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold gradient-text mb-6">Strategic Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategicImpacts.map((impact, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover-glow">
              <div className="flex items-center space-x-3 mb-4">
                <impact.icon className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold gradient-text">
                  {impact.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {impact.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Operational Capabilities */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold gradient-text mb-6">Operational Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {operationalCapabilities.map((capability, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover-glow">
              <div className="flex items-center space-x-3 mb-4">
                <capability.icon className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold gradient-text">
                  {capability.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="glass-card p-8 rounded-2xl hover-glow mt-12">
        <h3 className="text-xl font-semibold gradient-text mb-4">
          Comprehensive Framework for Crisis Management
        </h3>
        <p className="text-gray-600 leading-relaxed">
          The CZSRF provides a comprehensive, data-driven framework that enhances stability, risk management, scalability, and strategic alignment in conflict zones. By leveraging advanced analytics, real-time monitoring, and adaptive strategies, CZSRF empowers organizations to maintain operational continuity and achieve growth even in challenging environments.
        </p>
      </div>
    </ApplicationLayout>
  );
}