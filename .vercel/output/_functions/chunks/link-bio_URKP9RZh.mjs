import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_mRL9RAl9.mjs';
import 'clsx';

const frontmatter = {
  "title": "How I Built My Link-in-Bio with Vite, React & Framer Motion",
  "date": "2025-06-02",
  "excerpt": "Here’s the process of creating my animated link-in-bio using Vite, React, Tailwind CSS, and Framer Motion.",
  "coverImage": "/images/vite.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-i-built-it--step-by-step",
    "text": "How I Built It — Step by Step"
  }, {
    "depth": 3,
    "slug": "1--installed-the-environment",
    "text": "1.  Installed the environment"
  }, {
    "depth": 3,
    "slug": "2-created-the-core-components",
    "text": "2. Created the core components"
  }, {
    "depth": 3,
    "slug": "3-integrated-animations-with-framer-motion",
    "text": "3. Integrated animations with Framer Motion"
  }, {
    "depth": 3,
    "slug": "4-added-a-dark-mode-toggle",
    "text": "4. Added a Dark Mode Toggle"
  }, {
    "depth": 3,
    "slug": "finally-i-wrapped-the-main-layout-in-a-motiondiv-so-that",
    "text": "Finally, I wrapped the main layout in a motion.div so that:"
  }, {
    "depth": 2,
    "slug": "why-i-built-it-myself",
    "text": "Why I Built It Myself"
  }, {
    "depth": 2,
    "slug": "tech-stack",
    "text": "Tech Stack"
  }, {
    "depth": 2,
    "slug": "what-i-learned",
    "text": "What I Learned"
  }, {
    "depth": 4,
    "slug": "thats-my-process--if-you-want-the-source-code-or-need-help-setting-up-your-own-link-in-bio-page-let-me-know",
    "text": "That’s my process — if you want the source code or need help setting up your own link-in-bio page, let me know! 🚀"
  }];
}
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["I wanted a ", createVNode(_components.strong, {
        children: "minimal, animated link-in-bio"
      }), " that I could easily host and update myself — without relying on third-party services."]
    }), "\n", createVNode(_components.p, {
      children: "Here’s my process, tools, and what I learned along the way."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/bio.jpg",
        alt: "My workspace on the go"
      })
    }), "\n", createVNode(_components.h2, {
      id: "how-i-built-it--step-by-step",
      children: "How I Built It — Step by Step"
    }), "\n", createVNode(_components.p, {
      children: ["Here’s the ", createVNode(_components.strong, {
        children: "exact process"
      }), " I followed to build this link-in-bio page:"]
    }), "\n", createVNode(_components.h3, {
      id: "1--installed-the-environment",
      children: "1.  Installed the environment"
    }), "\n", createVNode(_components.p, {
      children: "First, I set up a new Vite + React project:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " create"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " vite@latest"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " link-in-bio"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --template"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " react"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " link-in-bio"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Then added my main dependencies:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " tailwindcss"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " postcss"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " autoprefixer"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " framer-motion"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npx"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " tailwindcss"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " init"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -p"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "And configured Tailwind in tailwind.config.js + index.css."
    }), "\n", createVNode(_components.h3, {
      id: "2-created-the-core-components",
      children: "2. Created the core components"
    }), "\n", createVNode(_components.p, {
      children: "Next, I broke the UI into small pieces:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "ProfileImage.jsx — top image + profile info."
      }), "\n", createVNode(_components.li, {
        children: "LinkButton.jsx — each animated link."
      }), "\n", createVNode(_components.li, {
        children: "SocialLinks.jsx — optional social icon row."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Each component was styled with Tailwind utility classes."
    }), "\n", createVNode(_components.h3, {
      id: "3-integrated-animations-with-framer-motion",
      children: "3. Integrated animations with Framer Motion"
    }), "\n", createVNode(_components.p, {
      children: "I used Framer Motion for smooth interactions:\n•\tAdded motion.a to each link so they scale on hover.\n•\tWrapped the entire layout in a motion.div to add a fade-in on page load."
    }), "\n", createVNode(_components.h3, {
      id: "4-added-a-dark-mode-toggle",
      children: "4. Added a Dark Mode Toggle"
    }), "\n", createVNode(_components.p, {
      children: "I created a simple ToggleDarkMode.jsx:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Uses a state hook (useState) to switch between dark and light."
      }), "\n", createVNode(_components.li, {
        children: "Toggles a class on html or body so Tailwind’s dark: variants kick in."
      }), "\n", createVNode(_components.li, {
        children: "Wrapped the entire app in a parent div that smoothly transitions its background color using a Tailwind class like transition-colors duration-500."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Wrapped everything for a subtle effect"
    }), "\n", createVNode(_components.h3, {
      id: "finally-i-wrapped-the-main-layout-in-a-motiondiv-so-that",
      children: "Finally, I wrapped the main layout in a motion.div so that:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "On page mount, opacity animates in."
      }), "\n", createVNode(_components.li, {
        children: "On theme toggle, a scale or opacity change adds a gentle transition."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This subtle polish made the app feel more dynamic and fun to use."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "why-i-built-it-myself",
      children: "Why I Built It Myself"
    }), "\n", createVNode(_components.p, {
      children: ["Most link-in-bio tools look the same and charge a subscription.", createVNode(_components.br, {}), "\nI decided to build my own because:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["️ ", createVNode(_components.strong, {
          children: "Full control"
        }), " — Content, style, hosting, data."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Performance"
        }), " — Minimal footprint and blazing fast."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Custom animations"
        }), " — A unique style that matches my personal brand."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "tech-stack",
      children: "Tech Stack"
    }), "\n", createVNode(_components.p, {
      children: "Here’s what I chose for the project:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Vite"
        }), " — Instant setup and super fast HMR."]
      }), "\n", createVNode(_components.li, {
        children: ["️", createVNode(_components.strong, {
          children: "React"
        }), " — Familiar component structure."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Tailwind CSS"
        }), " — Rapid, utility-first styles."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Framer Motion"
        }), " — Smooth page and hover animations."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "what-i-learned",
      children: "What I Learned"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Vite + Tailwind is a super productive combo — zero setup pain."
      }), "\n", createVNode(_components.li, {
        children: "Framer Motion makes it effortless to add smooth, delightful animations."
      }), "\n", createVNode(_components.li, {
        children: "Self-hosting is the way to go — full control and no recurring fees."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "thats-my-process--if-you-want-the-source-code-or-need-help-setting-up-your-own-link-in-bio-page-let-me-know",
      children: "That’s my process — if you want the source code or need help setting up your own link-in-bio page, let me know! 🚀"
    })]
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

const url = "src/content/posts/link-bio.mdx";
const file = "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/content/posts/link-bio.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/content/posts/link-bio.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
