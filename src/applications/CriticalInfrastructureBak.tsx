import React, { useState, useEffect } from 'react';
import ApplicationLayout from './Layout';
import { 
  Shield, 
  Server, 
  Activity, 
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Lock,
  Network,
  Database,
  Globe,
  Brain,
  Target,
  FileText,
  Cpu,
  Zap
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
    title: 'Real-Time Compliance Monitoring',
    description: 'Advanced monitoring for evolving cybersecurity standards.',
    content: [
      'Continuous Policy Synchronization: ARCS continuously ingests data from regulatory sources, parsing and analyzing it to keep compliance policies synchronized.',
      'Automated Regulatory Updates: Through machine learning algorithms, ARCS automatically updates compliance protocols.',
      'Immediate Threat Mitigation: ARCS links compliance adjustments with threat intelligence, automatically updating security configurations.'
    ],
    icon: Activity,
    metrics: [
      { label: 'Sync Rate', value: '99.99%', trend: 'up' },
      { label: 'Response Time', value: '<1ms', trend: 'down' },
      { label: 'Coverage', value: '100%', trend: 'up' }
    ]
  },
  {
    title: 'Predictive Analytics',
    description: 'Advanced threat detection and proactive security posturing.',
    content: [
      'Threat Forecasting Models: ARCS develops forecasting models based on historical data of threat occurrences.',
      'Anomaly Detection: ARCS monitors network behavior in real-time to detect potential intrusion attempts.',
      'Advanced Scenario Simulation: ARCS enables simulation of potential threat scenarios.'
    ],
    icon: Brain,
    metrics: [
      { label: 'Prediction Rate', value: '97.8%', trend: 'up' },
      { label: 'Analysis Speed', value: '5ms', trend: 'down' },
      { label: 'Accuracy', value: '99.1%', trend: 'up' }
    ]
  },
  {
    title: 'Adaptive Cybersecurity',
    description: 'Dynamic response to regulatory and environmental shifts.',
    content: [
      'Compliance Continuity Score: Real-time compliance assessment based on baseline standards.',
      'Dynamic Policy Scaling: Automatic scaling of compliance policies during high-intensity events.',
      'Rapid Reconfiguration: Instant protocol reconfiguration for crisis management.'
    ],
    icon: Shield,
    metrics: [
      { label: 'Adaptability', value: '99.9%', trend: 'up' },
      { label: 'Scale Time', value: '<2ms', trend: 'down' },
      { label: 'Resilience', value: '100%', trend: 'up' }
    ]
  },
  {
    title: 'Influence Mapping',
    description: 'Strategic collaboration and defense alliance coordination.',
    content: [
      'Identification of Key Players: ARCS maps the hierarchy of influence among regulators and stakeholders.',
      'Real-Time Stakeholder Engagement: Quick engagement capabilities during cybersecurity crises.',
      'Collaborative Defense: Enhanced cross-sector cybersecurity coordination.'
    ],
    icon: Network,
    metrics: [
      { label: 'Network Coverage', value: '98.7%', trend: 'up' },
      { label: 'Response Rate', value: '96.5%', trend: 'up' },
      { label: 'Coordination', value: '99.3%', trend: 'up' }
    ]
  },
  {
    title: 'Incident Response',
    description: 'Enhanced response through adaptive cyber warfare resilience.',
    content: [
      'Dynamic Incident Protocols: Base protocols modified dynamically based on threat level.',
      'Threat Intelligence Integration: Real-time integration of external and internal threat data.',
      'Cross-Sector Information Sharing: Secure information sharing during incidents.'
    ],
    icon: AlertTriangle,
    metrics: [
      { label: 'Response Time', value: '<1ms', trend: 'down' },
      { label: 'Success Rate', value: '99.9%', trend: 'up' },
      { label: 'Coverage', value: '100%', trend: 'up' }
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

const budgetOptimization = [
  {
    title: 'Risk-Based Allocation',
    description: 'Prioritized resource distribution based on risk assessment.',
    icon: Target
  },
  {
    title: 'Cost Management',
    description: 'Automated compliance reduces manual intervention costs.',
    icon: Database
  },
  {
    title: 'Future Planning',
    description: 'Predictive budgeting for security enhancements.',
    icon: Brain
  }
];

export default function CriticalInfrastructure() {
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
      title="ARCS for Critical Infrastructure"
      subtitle="Advanced compliance solutions for critical infrastructure protection"
      industry="Critical Infrastructure"
    >
      {/* Introduction Section */}
      <div className="glass-card p-8 rounded-2xl hover-glow mb-12">
        <p className="text-gray-600 leading-relaxed">
          The Adaptive Regulatory Compliance System (ARCS) formula brings an unparalleled level of detail, agility, and foresight to critical infrastructure cybersecurity. Through advanced AI capabilities, real-time monitoring, and adaptive learning systems, ARCS transcends traditional static compliance systems by integrating advanced technologies into a cohesive model that addresses the complex and dynamic regulatory needs of critical infrastructure operators.
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
                      {section.content.map((paragraph, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed">
                          {paragraph}
                        </p>
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

      {/* Budget Optimization */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold gradient-text mb-6">Budget Optimization</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {budgetOptimization.map((capability, index) => (
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
          Next-Generation Cybersecurity Paradigm
        </h3>
        <p className="text-gray-600 leading-relaxed">
          The ARCS formula revolutionizes critical infrastructure cybersecurity by combining adaptive compliance, predictive analytics, influence mapping, and harmonized policy alignment into a single, cohesive framework. This superiorly granular approach empowers infrastructure operators, national defense agencies, and international policymakers with the tools to anticipate, manage, and mitigate cyber threats with unparalleled resilience.
        </p>
      </div>
    </ApplicationLayout>
  );
}