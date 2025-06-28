import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_mRL9RAl9.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { ResponsiveBar } from '@nivo/bar';
import 'clsx';

function ProcessDropdown({ steps }) {
  const [openStep, setOpenStep] = useState(null);
  const toggleStep = (stepId) => {
    setOpenStep(openStep === stepId ? null : stepId);
  };
  if (!steps || !Array.isArray(steps) || steps.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsx("p", { className: "text-gray-500 dark:text-gray-400 text-center py-8", children: "No process steps available" }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "space-y-2", children: steps.map((step) => {
    if (!step || !step.id) {
      return null;
    }
    const isOpen = openStep === step.id;
    return /* @__PURE__ */ jsxs("div", { className: "border-b py-2 border-zinc-200 dark:border-zinc-700", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => toggleStep(step.id),
          className: "w-full flex items-center justify-between text-sm font-medium text-zinc-800 dark:text-zinc-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors",
          children: [
            /* @__PURE__ */ jsx("span", { children: step.title }),
            /* @__PURE__ */ jsx(motion.div, { animate: { rotate: isOpen ? 90 : 0 }, transition: { duration: 0.2 }, children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, height: 0 },
          animate: { opacity: 1, height: "auto" },
          exit: { opacity: 0, height: 0 },
          transition: { duration: 0.3, ease: "easeInOut" },
          className: "overflow-hidden text-sm text-zinc-600 dark:text-zinc-300 mt-2",
          children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs italic mb-2", children: step.subtitle }),
            /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside space-y-1", children: step.details.map((detail, i) => /* @__PURE__ */ jsx("li", { children: detail }, i)) }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 italic", children: step.outcome })
          ]
        }
      ) })
    ] }, step.id);
  }) });
}

function GenericBarChart({
  data,
  indexBy,
  keys,
  height = 400,
  axisLeftLegend,
  axisBottomLegend
}) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return /* @__PURE__ */ jsx("div", { style: { width: "100%", height }, className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("p", { className: "text-gray-500 dark:text-gray-400", children: "No data available" }) });
  }
  if (!keys || keys.length === 0) {
    return /* @__PURE__ */ jsx("div", { style: { width: "100%", height }, className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("p", { className: "text-gray-500 dark:text-gray-400", children: "No chart keys defined" }) });
  }
  return /* @__PURE__ */ jsx("div", { style: { width: "100%", height }, children: /* @__PURE__ */ jsx(
    ResponsiveBar,
    {
      data,
      keys,
      indexBy,
      padding: 0.3,
      colors: { scheme: "nivo" },
      margin: { top: 40, right: 40, bottom: 50, left: 60 },
      axisBottom: {
        tickRotation: -20,
        legend: axisBottomLegend,
        legendOffset: 40,
        legendPosition: "middle"
      },
      axisLeft: {
        legend: axisLeftLegend,
        legendOffset: -50,
        legendPosition: "middle"
      },
      enableLabel: false,
      theme: {
        tooltip: {
          container: {
            background: "#111",
            color: "#fff",
            padding: "0.5rem"
          }
        }
      }
    }
  ) });
}

function ComparisonChart({ data, title, subtitle }) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: "my-8", children: [
      title && /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2 text-center", children: title }),
      subtitle && /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4 text-center", children: subtitle }),
      /* @__PURE__ */ jsx("div", { className: "h-96 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "text-gray-500 dark:text-gray-400", children: "No comparison data available" }) })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "my-8", children: [
    title && /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2 text-center", children: title }),
    subtitle && /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4 text-center", children: subtitle }),
    /* @__PURE__ */ jsx(
      GenericBarChart,
      {
        data,
        indexBy: "method",
        keys: ["time", "cost", "research", "docs"],
        height: 400,
        axisLeftLegend: "Valores",
        axisBottomLegend: "Método"
      }
    )
  ] });
}

const frontmatter = {
  "title": "How AI Helped Me Validate a Business Idea in One Week",
  "date": "2025-06-26",
  "excerpt": "From vague automation idea to complete business plan. All without writing a single line of code.",
  "coverImage": "/images/claude.jpg"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-process-from-idea-to-execution-plan",
    "text": "The Process: From Idea to Execution Plan"
  }, {
    "depth": 3,
    "slug": "claude-as-a-virtual-co-founder",
    "text": "Claude as a Virtual Co-Founder"
  }, {
    "depth": 2,
    "slug": "what-blew-my-mind",
    "text": "What Blew My Mind"
  }, {
    "depth": 3,
    "slug": "before-vs-after",
    "text": "Before vs. After"
  }, {
    "depth": 2,
    "slug": "my-key-tools",
    "text": "My Key Tools"
  }, {
    "depth": 3,
    "slug": "claude-code--the-game-changer",
    "text": "Claude Code – The Game Changer"
  }, {
    "depth": 3,
    "slug": "my-current-validation-stack",
    "text": "My Current Validation Stack"
  }, {
    "depth": 2,
    "slug": "why-i-havent-coded-anything-yet",
    "text": "Why I Haven’t Coded Anything Yet"
  }, {
    "depth": 2,
    "slug": "my-2025-prediction",
    "text": "My 2025 Prediction"
  }, {
    "depth": 2,
    "slug": "your-turn-validate-your-idea-in-4-steps",
    "text": "Your Turn: Validate Your Idea in 4 Steps"
  }, {
    "depth": 2,
    "slug": "whats-next",
    "text": "What’s Next"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "One week ago"
      }), ": I had a crazy idea about automating a traditional industry using AI and WhatsApp."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Today"
      }), ": I have a complete business plan, legal analysis, financial projections, technical stack, and a clear implementation roadmap."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Lines of code written"
      }), ": Zero."]
    }), "\n", createVNode(_components.p, {
      children: "This is what AI can do for your ideas."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-process-from-idea-to-execution-plan",
      children: "The Process: From Idea to Execution Plan"
    }), "\n", createVNode(_components.h3, {
      id: "claude-as-a-virtual-co-founder",
      children: "Claude as a Virtual Co-Founder"
    }), "\n", createVNode(_components.p, {
      children: "In just 4 intense sessions, I turned a vague idea into an actionable business plan:"
    }), "\n", "\n", createVNode(ProcessDropdown, {
      "client:visible": true,
      steps: [{
        id: 'validation',
        title: 'Market Validation',
        subtitle: 'Confirming a real opportunity exists',
        details: ['Deep research on the target industry and key players', 'Mapping direct and indirect competitors with SWOT analysis', 'Identifying specific pain points and frequency of occurrence', 'Estimating market size (TAM, SAM, SOM) with reliable sources', 'Defining buyer personas and typical customer journey'],
        outcome: 'Confirmed viable market opportunity worth $X million with fragmented competition'
      }, {
        id: 'architecture',
        title: 'Technical Architecture',
        subtitle: 'Designing the solution from scratch',
        details: ['Choosing a tech stack balancing cost, scalability, and time-to-market', 'Designing microservices architecture with API-first approach', 'Detailed cost estimation for infrastructure (dev, staging, production)', 'Development roadmap split into 2-4 week MVP iterations', 'Defining key technical metrics and KPIs for monitoring'],
        outcome: 'Complete architecture with projected costs and a 6-month roadmap to MVP'
      }, {
        id: 'legal',
        title: 'Legal and Regulatory Framework',
        subtitle: 'Navigating legal complexity',
        details: ['Thorough analysis of the regulatory framework in the target sector', 'Identifying required licenses, permits, and certifications', 'Assessing civil and criminal liabilities tied to the business', 'Recommending optimal legal structure (LLC, Corp, etc.)', 'Mapping necessary insurance types and minimum coverage'],
        outcome: 'Clear legal roadmap with all regulatory steps identified'
      }, {
        id: 'financial',
        title: 'Financial Modeling',
        subtitle: 'Projecting economic viability',
        details: ['Building a financial model with 4 scenarios (pessimistic, realistic, optimistic, moonshot)', 'Revenue projections based on pricing strategy and adoption rate', 'Analysis of fixed and variable costs with 5-year forecast', 'Key metrics calculated: LTV, CAC, payback period, burn rate', 'Modeling funding rounds and equity dilution'],
        outcome: 'Robust financial model with projected ROI over 1000% in 5 years'
      }],
      "client:component-path": "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/components/ProcessDropdown",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Final output"
      }), ": 18,000 words of professional-grade documentation, ready to pitch to investors."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "what-blew-my-mind",
      children: "What Blew My Mind"
    }), "\n", createVNode(_components.h3, {
      id: "before-vs-after",
      children: "Before vs. After"
    }), "\n", "\n", createVNode(ComparisonChart, {
      "client:visible": true,
      data: [{
        method: 'Consulting Firm',
        time: 120,
        cost: 15000,
        research: 30,
        docs: 200
      }, {
        method: 'Solo/Manual',
        time: 90,
        cost: 2000,
        research: 60,
        docs: 50
      }, {
        method: 'With AI',
        time: 7,
        cost: 20,
        research: 5,
        docs: 150
      }],
      title: "Business Idea Validation: Method Comparison",
      subtitle: "Time (days), Cost (USD), Research (hours), Documents (pages)",
      "client:component-path": "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/components/ComparisonChart",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "The democratization of entrepreneurship is here."
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "my-key-tools",
      children: "My Key Tools"
    }), "\n", createVNode(_components.h3, {
      id: "claude-code--the-game-changer",
      children: "Claude Code – The Game Changer"
    }), "\n", createVNode(_components.p, {
      children: "I haven’t used it for this project yet, but Claude Code is reshaping development:"
    }), "\n", createVNode("iframe", {
      width: "100%",
      height: "400",
      src: "https://www.youtube.com/embed/AJpK3YTTKZ4",
      title: "Claude Code Demo",
      frameBorder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Claude Code in action: complete app dev from the terminal"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "What fascinates me"
      }), ": You write your idea in plain English and Claude Code generates:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Complete applications"
      }), "\n", createVNode(_components.li, {
        children: "Built-in tests"
      }), "\n", createVNode(_components.li, {
        children: "Best practices by default"
      }), "\n", createVNode(_components.li, {
        children: "Clean documentation"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "It’s like having a senior dev that never sleeps."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "my-current-validation-stack",
      children: "My Current Validation Stack"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Tool"
          }), createVNode(_components.th, {
            children: "Usage"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: ["🎯 ", createVNode(_components.strong, {
              children: "Claude.ai"
            })]
          }), createVNode(_components.td, {
            children: "Main strategist"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: ["💻 ", createVNode(_components.strong, {
              children: "Claude Code"
            })]
          }), createVNode(_components.td, {
            children: "Future development"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: ["🔍 ", createVNode(_components.strong, {
              children: "ChatGPT"
            })]
          }), createVNode(_components.td, {
            children: "Research & validation"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: ["⚡ ", createVNode(_components.strong, {
              children: "Cursor"
            })]
          }), createVNode(_components.td, {
            children: "Smart coding"
          })]
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "why-i-havent-coded-anything-yet",
      children: "Why I Haven’t Coded Anything Yet"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Plot twist"
      }), ": Proper planning saves months of pivoting."]
    }), "\n", createVNode(_components.p, {
      children: "Claude showed me that before writing code I need:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Proper legal structure (for protection)"
      }), "\n", createVNode(_components.li, {
        children: "✅ Required sector permits"
      }), "\n", createVNode(_components.li, {
        children: "✅ Civil liability insurance"
      }), "\n", createVNode(_components.li, {
        children: "✅ Pilot customer validation"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Code is easy. Business is complex."
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "my-2025-prediction",
      children: "My 2025 Prediction"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Entrepreneurs using AI will replace those who don’t."
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "It’s like doing research in a library vs. using Google. Both work—but one gives you a massive competitive edge."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["💡 ", createVNode(_components.strong, {
          children: "Quick Tip"
        }), createVNode(_components.br, {}), "\nThe barrier to entrepreneurship just disappeared. If you have an idea, validate it with AI before someone else does."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "your-turn-validate-your-idea-in-4-steps",
      children: "Your Turn: Validate Your Idea in 4 Steps"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Claude.ai is free to get started"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Describe your idea"
          }), createVNode(_components.br, {}), "\n", createVNode(_components.em, {
            children: "As if you’re telling a friend"
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Ask for a full analysis"
          }), createVNode(_components.br, {}), "\n", createVNode(_components.em, {
            children: "Market, tech, legal, financial"
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Iterate until it’s clear"
          }), createVNode(_components.br, {}), "\n", createVNode(_components.em, {
            children: "Double down where needed"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "whats-next",
      children: "What’s Next"
    }), "\n", createVNode(_components.p, {
      children: "I’ll be documenting the full journey:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Legal & regulatory setup ⏳"
      }), "\n", createVNode(_components.li, {
        children: "First builds with Claude Code ⏳"
      }), "\n", createVNode(_components.li, {
        children: "Pilot customer feedback ⏳"
      }), "\n", createVNode(_components.li, {
        children: "Real-world results & metrics ⏳"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Want to follow the journey?"
      }), " ", createVNode(_components.a, {
        href: "https://linkedin.com/in/tuprofile",
        children: "Connect with me on LinkedIn"
      }), " for real-time updates."]
    }), "\n", createVNode(_components.hr, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/posts/claude.mdx";
const file = "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/content/posts/claude.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/content/posts/claude.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
