import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_mRL9RAl9.mjs';
import 'clsx';

const frontmatter = {
  "title": "How I Built the Blacro Studio Website with Next.js, Tailwind CSS & Framer Motion",
  "date": "2025-06-24",
  "excerpt": "Here’s the process of creating a minimalist, animated site for Blacro Studio — a creative agency — using Next.js, Tailwind CSS, and Framer Motion.",
  "coverImage": "/images/blacro-studio.jpg"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-i-built-it--step-by-step",
    "text": "How I Built It — Step by Step"
  }, {
    "depth": 3,
    "slug": "1-set-up-the-environment",
    "text": "1. Set up the environment"
  }, {
    "depth": 3,
    "slug": "2-designed-components-to-fit-the-brand",
    "text": "2. Designed components to fit the brand"
  }, {
    "depth": 3,
    "slug": "3-added-smooth-animations-with-framer-motion",
    "text": "3. Added smooth animations with Framer Motion"
  }, {
    "depth": 3,
    "slug": "4-images-and-responsiveness",
    "text": "4. Images and responsiveness"
  }, {
    "depth": 3,
    "slug": "5-backend--contact-form",
    "text": "5. Backend & contact form"
  }, {
    "depth": 2,
    "slug": "why-this-setup-works",
    "text": "Why this setup works"
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
    "slug": "thats-my-process--if-youd-like-the-source-code-or-help-creating-your-own-branded-site-reach-out-️",
    "text": "That’s my process — if you’d like the source code or help creating your own branded site, reach out! ✌️"
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
      children: ["When the team at ", createVNode(_components.strong, {
        children: "Blacro Studio"
      }), " reached out, I knew this was going to be more than just another website. They had a strong creative identity already — my job was to translate that into a smooth, high-performance web experience."]
    }), "\n", createVNode(_components.p, {
      children: "Here’s my process, the tools I chose, and what I learned along the way."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/images/blacro-studio.jpg",
        alt: "Design assets from the client"
      })
    }), "\n", createVNode(_components.h2, {
      id: "how-i-built-it--step-by-step",
      children: "How I Built It — Step by Step"
    }), "\n", createVNode(_components.p, {
      children: ["Here’s the ", createVNode(_components.strong, {
        children: "exact process"
      }), " I followed to build this site:"]
    }), "\n", createVNode(_components.h3, {
      id: "1-set-up-the-environment",
      children: "1. Set up the environment"
    }), "\n", createVNode(_components.p, {
      children: ["First, I scaffolded the app with ", createVNode(_components.strong, {
        children: "Next.js"
      }), " and installed Tailwind CSS:"]
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
            children: "npx"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " create-next-app@latest"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " blacro-website"
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
            children: " blacro-website"
          })]
        }), "\n", createVNode(_components.span, {
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
      children: ["And then I configured ", createVNode(_components.code, {
        children: "tailwind.config.js"
      }), " and added my global styles."]
    }), "\n", createVNode(_components.h3, {
      id: "2-designed-components-to-fit-the-brand",
      children: "2. Designed components to fit the brand"
    }), "\n", createVNode(_components.p, {
      children: ["Blacro Studio had its branding and assets ready.", createVNode(_components.br, {}), "\nI split the UI into small pieces:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Header.jsx"
        }), " — bold title section"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "AboutSection.jsx"
        }), " — company story with animated text"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "ProjectCardCarousel.jsx"
        }), " — marquee-style project carousel"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "ContactForm.jsx"
        }), " — responsive contact form"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Footer.jsx"
        }), " — minimal footer with links"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Each component was built using utility-first Tailwind classes to keep everything easy to customize."
    }), "\n", createVNode(_components.h3, {
      id: "3-added-smooth-animations-with-framer-motion",
      children: "3. Added smooth animations with Framer Motion"
    }), "\n", createVNode(_components.p, {
      children: "To add life to the UI:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Wrapped key sections with ", createVNode(_components.code, {
          children: "motion.div"
        }), " for fade-ins on scroll."]
      }), "\n", createVNode(_components.li, {
        children: "Added scale and opacity animations to links and images on hover."
      }), "\n", createVNode(_components.li, {
        children: "Built an infinite marquee for the project carousel."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "4-images-and-responsiveness",
      children: "4. Images and responsiveness"
    }), "\n", createVNode(_components.p, {
      children: ["With ", createVNode(_components.code, {
        children: "next/image"
      }), ":"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Defined ", createVNode(_components.code, {
          children: "sizes"
        }), " and ", createVNode(_components.code, {
          children: "fill"
        }), " for responsive images."]
      }), "\n", createVNode(_components.li, {
        children: "Kept the layout stable across all devices."
      }), "\n", createVNode(_components.li, {
        children: "Compressed images for faster load times without losing quality."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "5-backend--contact-form",
      children: "5. Backend & contact form"
    }), "\n", createVNode(_components.p, {
      children: ["Created a simple ", createVNode(_components.code, {
        children: "POST /api/contact"
      }), " endpoint:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Validated inputs with ", createVNode(_components.strong, {
          children: "Zod"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Sent emails with ", createVNode(_components.strong, {
          children: "Nodemailer"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Added basic feedback messages for successful and failed submissions."
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "why-this-setup-works",
      children: "Why this setup works"
    }), "\n", createVNode(_components.p, {
      children: "This project matches my dev style — minimal boilerplate, high performance, and tailored to the client’s brand:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["⚡ ", createVNode(_components.strong, {
          children: "Full control"
        }), " — No generic templates."]
      }), "\n", createVNode(_components.li, {
        children: ["🎨 ", createVNode(_components.strong, {
          children: "Custom design"
        }), " — Every detail matches the brand."]
      }), "\n", createVNode(_components.li, {
        children: ["🚀 ", createVNode(_components.strong, {
          children: "Performance-first"
        }), " — Lazy-loading, optimization, and no bloat."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "tech-stack",
      children: "Tech Stack"
    }), "\n", createVNode(_components.p, {
      children: "Here’s what powered the build:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Next.js"
        }), " — SSR, routing, image optimization."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Tailwind CSS"
        }), " — Rapid utility-first styles."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Framer Motion"
        }), " — Smooth animations with minimal setup."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Nodemailer"
        }), " — Reliable email delivery."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "what-i-learned",
      children: "What I Learned"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Aligning design and development is easier with early communication."
      }), "\n", createVNode(_components.li, {
        children: "Balancing visual flair with performance is key."
      }), "\n", createVNode(_components.li, {
        children: "Break the UI into small, reusable components to scale efficiently."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "thats-my-process--if-youd-like-the-source-code-or-help-creating-your-own-branded-site-reach-out-️",
      children: "That’s my process — if you’d like the source code or help creating your own branded site, reach out! ✌️"
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

const url = "src/content/posts/blacro-studio.mdx";
const file = "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/content/posts/blacro-studio.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/content/posts/blacro-studio.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
