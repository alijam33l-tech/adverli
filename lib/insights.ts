export const insightTopics = [
  "AI Search",
  "SEO",
  "Web",
  "Paid Media",
  "Content",
] as const;

export type InsightTopic = (typeof insightTopics)[number];

export type InsightTextSegment =
  | string
  | {
      type: "link";
      text: string;
      href: string;
    }
  | {
      type: "strong";
      text: string;
    };

export type InsightRichText = string | readonly InsightTextSegment[];

export type InsightBlock =
  | {
      type: "paragraph";
      content: InsightRichText;
    }
  | {
      type: "subheading";
      id: string;
      title: string;
    }
  | {
      type: "list";
      ordered?: boolean;
      items: readonly InsightRichText[];
    }
  | {
      type: "table";
      caption: string;
      columns: readonly string[];
      rows: readonly (readonly string[])[];
    }
  | {
      type: "keyTakeaway";
      title: string;
      content: InsightRichText;
    }
  | {
      type: "editorialCallout";
      label: string;
      title: string;
      content: InsightRichText;
    };

export type InsightSection = {
  id: string;
  title: string;
  blocks: readonly InsightBlock[];
};

export type InsightFaq = {
  question: string;
  answer: InsightRichText;
};

export type InsightArticle = {
  slug: string;
  title: string;
  shortTitle: string;
  category: InsightTopic;
  description: string;
  intro: string;
  publishedAt: string;
  updatedAt: string;
  sections: readonly InsightSection[];
  faqs: readonly InsightFaq[];
  relatedServices: readonly {
    title: string;
    href: string;
    description: string;
  }[];
  relatedInsightSlugs: readonly string[];
};

const whatIsAeo: InsightArticle = {
  slug: "what-is-aeo",
  title: "What Is AEO? Answer Engine Optimization Explained",
  shortTitle: "What is AEO?",
  category: "AI Search",
  description:
    "A practical guide to Answer Engine Optimization, how it relates to SEO, and how businesses can make useful content easier for search and AI systems to understand.",
  intro:
    "Answer Engine Optimization (AEO) is the practice of structuring and improving content so search engines and AI-powered answer systems can understand it, retrieve it, and use it when answering relevant questions. It combines clear writing, useful subject depth, sound technical foundations, and explicit context—without replacing the fundamentals of SEO.",
  publishedAt: "2026-09-25",
  updatedAt: "2026-09-25",
  sections: [
    {
      id: "what-aeo-means",
      title: "What AEO means",
      blocks: [
        {
          type: "paragraph",
          content:
            "AEO stands for Answer Engine Optimization. Its purpose is to make a page easier to interpret when a system needs to answer a specific question, compare options, explain a concept, or guide a decision.",
        },
        {
          type: "paragraph",
          content:
            "That does not mean writing for machines at the expense of people. Strong AEO starts with a useful answer for the reader. The content then supports that answer with enough context, structure, and evidence for a search engine or AI system to understand what the page covers, who it is for, and where each statement fits.",
        },
        {
          type: "paragraph",
          content:
            "A well-optimized answer is usually clear before it is clever. It names the subject, answers the central question early, explains important qualifications, and gives the reader a logical path into deeper detail. This makes the page more useful whether someone reaches it through a traditional search result, an AI-generated response, a voice interface, or a direct link.",
        },
        {
          type: "keyTakeaway",
          title: "AEO makes useful answers easier to understand and retrieve.",
          content:
            "It strengthens the clarity and structure of good content; it does not replace SEO or guarantee inclusion in an AI-generated answer.",
        },
      ],
    },
    {
      id: "aeo-and-traditional-seo",
      title: "How AEO differs from traditional SEO",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Traditional ",
            { type: "link", text: "SEO work", href: "/services/seo" },
            " improves a site's ability to be discovered, crawled, indexed, understood, and ranked for relevant searches. AEO applies many of the same foundations but puts extra attention on whether a system can extract a dependable answer from the content.",
          ],
        },
        {
          type: "paragraph",
          content:
            "The distinction is mainly one of emphasis. SEO often evaluates visibility at the page and query level: can the right page earn a relevant search result? AEO also evaluates answer readiness: can a system identify the relevant passage, understand its meaning, connect it to a known topic or entity, and present it with the necessary context?",
        },
        {
          type: "paragraph",
          content:
            "A business should not treat the two as competing disciplines. A page cannot become a useful answer source if search systems cannot access it, understand its purpose, or trust its information. Technical SEO, content quality, internal linking, and authority remain the base layer. AEO makes that base more explicit and usable for answer-led experiences.",
        },
      ],
    },
    {
      id: "why-aeo-matters-now",
      title: "Why AEO matters now",
      blocks: [
        {
          type: "paragraph",
          content:
            "Search is no longer limited to a list of links. People ask full questions, refine them conversationally, and expect useful summaries, comparisons, and next steps. Search engines increasingly assemble answers from multiple sources, while AI assistants retrieve and synthesize information to respond to a user's immediate need.",
        },
        {
          type: "paragraph",
          content:
            "For businesses, this changes the unit of visibility. A page still matters, but so does the clarity of the individual explanation inside it. A useful definition, a well-framed comparison, or a precise process description may be the part a system considers relevant to a question.",
        },
        {
          type: "paragraph",
          content:
            "AEO matters because vague pages create avoidable ambiguity. If a page never states what the company does, who a service is for, or how an approach works, both people and machines have to infer too much. Clearer content reduces that ambiguity. It also improves the experience for visitors who want an answer before they are ready to contact a provider.",
        },
      ],
    },
    {
      id: "how-answer-engines-understand-content",
      title: "How answer engines understand content",
      blocks: [
        {
          type: "paragraph",
          content:
            "Different answer systems use different models, indexes, retrieval methods, and ranking processes. Their exact systems are not fully public and continue to change. There is no universal checklist that guarantees a citation or inclusion in an AI-generated answer.",
        },
        {
          type: "paragraph",
          content:
            "At a practical level, a system first needs access to the page. It then needs to interpret the language, headings, links, entities, and relationships on that page. When responding to a question, it may retrieve passages that appear relevant, compare information across sources, and use those passages to support an answer.",
        },
        {
          type: "paragraph",
          content:
            "This is why strong AEO is broader than adding schema or placing a short definition at the top of every article. Technical accessibility helps a system reach the content. Semantic structure helps it navigate the content. Specific language helps it understand the content. Depth and evidence help it assess whether the content is useful enough to rely on.",
        },
      ],
    },
    {
      id: "elements-of-strong-aeo",
      title: "The main elements of strong AEO",
      blocks: [
        {
          type: "paragraph",
          content:
            "AEO is most effective when several fundamentals reinforce one another. These elements are not secret ranking factors; they are practical ways to make information clearer, more useful, and easier to process.",
        },
        {
          type: "subheading",
          id: "clear-intent-alignment",
          title: "Clear intent alignment",
        },
        {
          type: "paragraph",
          content:
            "A page should solve the question its title promises to solve. Before writing, define what the reader is trying to understand or decide. A page about the meaning of AEO should explain the concept before moving into services, tactics, or sales language.",
        },
        {
          type: "subheading",
          id: "direct-answers",
          title: "Direct answers",
        },
        {
          type: "paragraph",
          content:
            "State the core answer in plain language near the point where the question is introduced. Direct does not mean simplistic. It means the reader can understand the main point without searching through several paragraphs of setup.",
        },
        {
          type: "subheading",
          id: "topic-depth",
          title: "Topic depth",
        },
        {
          type: "paragraph",
          content:
            "A short definition may answer an immediate question, but decision-makers often need implications, limitations, examples, and a practical next step. Depth should remove uncertainty rather than inflate word count.",
        },
        {
          type: "subheading",
          id: "semantic-structure",
          title: "Semantic structure and headings",
        },
        {
          type: "paragraph",
          content:
            "A descriptive heading hierarchy makes the argument easier to scan and preserves the relationship between sections. Headings should describe the content beneath them, not act as vague slogans that require interpretation.",
        },
        {
          type: "subheading",
          id: "internal-linking",
          title: "Contextual internal linking",
        },
        {
          type: "paragraph",
          content:
            "Internal links connect an explanation to the relevant service, supporting guide, or next decision. Their anchor text should explain the destination. This helps readers move through the subject and helps search systems understand how pages relate.",
        },
        {
          type: "subheading",
          id: "entity-clarity",
          title: "Entity clarity",
        },
        {
          type: "paragraph",
          content:
            "Use consistent names for the business, service, product, place, or concept being discussed. Explain ambiguous terms and make relationships explicit. A visitor should not need to infer whether a named framework is a service, a methodology, or a separate company.",
        },
        {
          type: "subheading",
          id: "structured-data",
          title: "Structured data where appropriate",
        },
        {
          type: "paragraph",
          content:
            "Valid structured data can provide explicit machine-readable context about a page, such as identifying an article, organization, service, or breadcrumb trail. It should represent visible content accurately. It does not guarantee rankings, rich results, or use in an AI answer.",
        },
        {
          type: "subheading",
          id: "technical-accessibility",
          title: "Technical accessibility and indexability",
        },
        {
          type: "paragraph",
          content: [
            "Content must be reachable, render reliably, work across devices, and avoid accidental indexing barriers. Strong ",
            {
              type: "link",
              text: "website development",
              href: "/services/website-development",
            },
            " supports AEO by giving important information stable URLs, semantic markup, fast delivery, and a usable page experience.",
          ],
        },
        {
          type: "subheading",
          id: "evidence-and-trust",
          title: "Evidence and trust",
        },
        {
          type: "paragraph",
          content:
            "Make factual claims specific enough to evaluate. Identify the organization responsible for the content, keep time-sensitive information current, and cite original or authoritative sources when a claim depends on external evidence. Do not manufacture certainty where none exists.",
        },
      ],
    },
    {
      id: "seo-vs-aeo",
      title: "SEO vs AEO",
      blocks: [
        {
          type: "paragraph",
          content:
            "SEO and AEO overlap heavily. The most useful comparison is not which one replaces the other, but which part of the discovery journey each practice emphasizes.",
        },
        {
          type: "table",
          caption: "A practical comparison of SEO and AEO",
          columns: ["Dimension", "SEO", "AEO"],
          rows: [
            [
              "Primary emphasis",
              "Earning relevant organic visibility for pages",
              "Making useful answers clear and retrievable",
            ],
            [
              "Typical entry point",
              "A search query and results page",
              "A direct question or conversational prompt",
            ],
            [
              "Content focus",
              "Page relevance, quality, authority, and search intent",
              "Answer clarity, context, extractability, and trust",
            ],
            [
              "Technical foundation",
              "Crawlability, indexability, performance, and architecture",
              "The same foundation, plus explicit semantic context",
            ],
            [
              "Useful measurement",
              "Qualified organic visibility, visits, and outcomes",
              "Answer visibility, qualified discovery, citations where observable, and outcomes",
            ],
            [
              "Guarantee",
              "No guaranteed ranking",
              "No guaranteed inclusion in generated answers",
            ],
          ],
        },
        {
          type: "paragraph",
          content:
            "In practice, a sound content program should serve both. A useful page can rank, support an answer, earn a citation, help a sales conversation, and continue educating a visitor after the click. The business outcome matters more than the label attached to the optimization work.",
        },
      ],
    },
    {
      id: "practical-aeo-example",
      title: "A practical AEO example",
      blocks: [
        {
          type: "paragraph",
          content:
            "Imagine a software company with a page titled “Data migration services.” The page opens with a broad promise about digital transformation, lists several capabilities, and ends with a contact form. It may be polished, but it does not answer the questions a buyer is likely to ask.",
        },
        {
          type: "editorialCallout",
          label: "Before",
          title: "A page that names the service but leaves the decision unclear",
          content:
            "The page does not define the migration process, explain which systems are supported, identify common risks, describe how downtime is handled, or clarify what information is needed to scope the work.",
        },
        {
          type: "paragraph",
          content:
            "An AEO-informed revision would first state what the service does and who it is for. It could then answer focused questions such as how migration is assessed, what a typical sequence includes, which variables affect complexity, and how validation works after transfer. A comparison table might explain migration approaches. A short checklist could help a buyer prepare for scoping.",
        },
        {
          type: "editorialCallout",
          label: "After",
          title: "A decision page with answer-ready sections",
          content:
            "The revised page gives buyers a direct explanation, preserves important qualifications, and connects each question to a clear section. It is more useful to people and easier for search or AI systems to interpret without inventing facts or promising an outcome.",
        },
      ],
    },
    {
      id: "how-businesses-should-approach-aeo",
      title: "How businesses should approach AEO",
      blocks: [
        {
          type: "paragraph",
          content:
            "AEO should begin with business priorities, not a request to add more questions to every page. Start with the decisions that matter to customers and the information your organization is genuinely qualified to provide.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            [
              { type: "strong", text: "Identify high-value questions. " },
              "Use sales conversations, support requests, search demand, and customer research to find questions tied to real decisions.",
            ],
            [
              { type: "strong", text: "Audit the current answer. " },
              "Check whether the relevant page answers the question directly, completely, and in language a buyer would use.",
            ],
            [
              { type: "strong", text: "Close information gaps. " },
              "Add the definitions, comparisons, process details, constraints, examples, and evidence required to make the answer useful.",
            ],
            [
              { type: "strong", text: "Strengthen the system around the page. " },
              "Improve internal links, technical access, page performance, metadata, and structured data where they clarify genuine relationships.",
            ],
            [
              { type: "strong", text: "Measure business value. " },
              "Track qualified discovery, engagement, assisted conversions, enquiries, and sales feedback instead of treating a citation screenshot as the final outcome.",
            ],
            [
              { type: "strong", text: "Review and update. " },
              "Keep claims, product details, processes, and examples accurate as the business and search environment change.",
            ],
          ],
        },
        {
          type: "paragraph",
          content:
            "This approach usually produces fewer, stronger pages. It also creates reusable knowledge: the same clear explanation can support organic discovery, paid landing pages, sales enablement, customer education, and internal training when the underlying facts remain consistent.",
        },
      ],
    },
    {
      id: "aeo-and-ai-search",
      title: "AEO and AI search",
      blocks: [
        {
          type: "paragraph",
          content:
            "AI search makes answer readiness more visible, but it does not create a shortcut around quality. A model may summarize information, retrieve supporting passages, or combine sources in ways that differ by product and query. Businesses cannot control every output, and visibility can vary over time.",
        },
        {
          type: "paragraph",
          content: [
            "Google's ",
            {
              type: "link",
              text: "official guidance for generative AI features",
              href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
            },
            " reinforces that foundational SEO, accessible content, and useful people-first information remain central. There is no special schema or secret format that guarantees inclusion.",
          ],
        },
        {
          type: "paragraph",
          content:
            "The durable strategy is therefore straightforward: publish original information the business can stand behind, express it clearly, connect it to the rest of the site, and maintain the technical conditions that make it discoverable. AEO is valuable when it improves that system—not when it becomes a layer of formatting designed only to imitate how an AI answer looks.",
        },
      ],
    },
    {
      id: "frequently-asked-questions",
      title: "Frequently asked questions",
      blocks: [],
    },
    {
      id: "final-takeaway",
      title: "Final takeaway",
      blocks: [
        {
          type: "paragraph",
          content:
            "Answer Engine Optimization is the work of making genuinely useful information easier to understand, retrieve, and apply. It builds on SEO rather than replacing it. The strongest approach combines direct answers, subject depth, semantic structure, clear entity relationships, trustworthy evidence, and a technically accessible website.",
        },
        {
          type: "paragraph",
          content:
            "For a business, the goal is not to manufacture an AI citation. It is to become a clearer and more credible source for the questions customers already ask—and to connect that visibility to a useful next step.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is AEO replacing SEO?",
      answer:
        "No. AEO depends on many SEO fundamentals, including crawlability, indexability, relevance, quality, internal linking, and technical performance. It adds emphasis on making individual answers and their context easier to understand and retrieve.",
    },
    {
      question: "Does structured data guarantee inclusion in AI answers?",
      answer:
        "No. Structured data can clarify what a page represents, but it does not guarantee a ranking, rich result, citation, or appearance in an AI-generated response. It should accurately describe content that visitors can see on the page.",
    },
    {
      question: "Do all pages need an FAQ section for AEO?",
      answer:
        "No. Add frequently asked questions when they help the reader resolve real uncertainties that the main page does not already answer clearly. Repeating near-identical questions across every page usually adds noise rather than value.",
    },
    {
      question: "How long should AEO content be?",
      answer:
        "There is no universal length. The content should be long enough to answer the question accurately, cover important qualifications, and support the reader's next decision. Extra words without extra clarity do not make a page more useful.",
    },
    {
      question: "How can a business measure AEO?",
      answer:
        "Measurement can combine qualified organic visibility, landing-page engagement, conversions, assisted conversions, branded demand, sales feedback, and observable answer-engine citations. Attribution is imperfect, so businesses should evaluate commercial patterns rather than rely on a single visibility metric.",
    },
    {
      question: "Can AEO guarantee that an AI system will cite our website?",
      answer:
        "No. Retrieval and answer generation vary by system, query, index, and time. AEO can improve clarity and technical readiness, but no responsible provider can guarantee that a specific system will use or cite a page.",
    },
  ],
  relatedServices: [
    {
      title: "SEO",
      href: "/services/seo",
      description:
        "Build the technical, content, and authority foundations behind sustainable organic and AI-search discovery.",
    },
    {
      title: "Website Development",
      href: "/services/website-development",
      description:
        "Create fast, accessible content architecture that makes important information clear to people and machines.",
    },
  ],
  relatedInsightSlugs: [],
};

export const insights: readonly InsightArticle[] = [whatIsAeo];

export function getInsight(slug: string) {
  return insights.find((article) => article.slug === slug);
}

export function getRelatedInsights(article: InsightArticle) {
  return article.relatedInsightSlugs
    .map((slug) => getInsight(slug))
    .filter((item): item is InsightArticle => Boolean(item));
}

function richTextToText(content: InsightRichText) {
  if (typeof content === "string") return content;
  return content
    .map((segment) => (typeof segment === "string" ? segment : segment.text))
    .join("");
}

function blockToText(block: InsightBlock) {
  switch (block.type) {
    case "paragraph":
      return richTextToText(block.content);
    case "subheading":
      return block.title;
    case "list":
      return block.items.map(richTextToText).join(" ");
    case "table":
      return [block.caption, ...block.columns, ...block.rows.flat()].join(" ");
    case "keyTakeaway":
      return `${block.title} ${richTextToText(block.content)}`;
    case "editorialCallout":
      return `${block.label} ${block.title} ${richTextToText(block.content)}`;
  }
}

export function getInsightWordCount(article: InsightArticle) {
  const text = [
    article.title,
    article.intro,
    ...article.sections.flatMap((section) => [
      section.title,
      ...section.blocks.map(blockToText),
    ]),
    ...article.faqs.flatMap((faq) => [
      faq.question,
      richTextToText(faq.answer),
    ]),
  ]
    .join(" ")
    .trim();

  return text ? text.split(/\s+/).length : 0;
}

export function getInsightReadingTime(article: InsightArticle) {
  return Math.max(1, Math.ceil(getInsightWordCount(article) / 225));
}

export function formatInsightDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}
