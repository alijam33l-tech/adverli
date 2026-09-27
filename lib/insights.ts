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
  updatedAt: "2026-09-26",
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
  relatedInsightSlugs: ["what-is-geo"],
};

const whatIsGeo: InsightArticle = {
  slug: "what-is-geo",
  title: "What Is GEO? Generative Engine Optimization Explained",
  shortTitle: "What is GEO?",
  category: "AI Search",
  description:
    "A practical guide to Generative Engine Optimization, how GEO relates to SEO and AEO, and what businesses can realistically do to improve AI-search discoverability.",
  intro:
    "Generative Engine Optimization (GEO) is the practice of improving content, site structure, entity clarity, technical accessibility, and authority signals so generative search and AI systems can better understand and retrieve relevant information when producing answers. GEO can reduce ambiguity and improve a site's readiness for AI-led discovery, but it cannot force an AI system to cite, rank, recommend, or send traffic to a website.",
  publishedAt: "2026-09-26",
  updatedAt: "2026-09-26",
  sections: [
    {
      id: "what-geo-means",
      title: "What GEO means",
      blocks: [
        {
          type: "paragraph",
          content:
            "GEO stands for Generative Engine Optimization. It describes work that helps a business's information become clearer, more accessible, and easier to place in context when a generative system retrieves sources or assembles an answer.",
        },
        {
          type: "paragraph",
          content:
            "The practice extends beyond writing short answers. A system may need to understand what an organization is, how its services relate, which page is authoritative for a topic, whether the information is current, and whether the website can be accessed and interpreted reliably. Content quality, technical SEO, site architecture, internal links, structured data, and evidence can all contribute to that understanding.",
        },
        {
          type: "paragraph",
          content:
            "GEO is therefore best treated as an operating lens rather than a trick or a separate publishing format. It asks whether useful information is explicit enough for people and machines to interpret, whether the site supports that information consistently, and whether the business has supplied credible reasons to trust it.",
        },
        {
          type: "keyTakeaway",
          title: "GEO improves clarity and retrieval readiness, not control over AI outputs.",
          content:
            "A business can strengthen the information and technical signals it publishes. It cannot dictate which sources a third-party AI system retrieves, cites, summarizes, or recommends.",
        },
      ],
    },
    {
      id: "why-geo-has-become-important",
      title: "Why GEO has become important",
      blocks: [
        {
          type: "paragraph",
          content:
            "Discovery is spreading across more interfaces. People still use traditional search results, but they also ask conversational questions, request comparisons, and use AI assistants to summarize a subject or help frame a decision. In some experiences, the generated response appears before or alongside the familiar list of links.",
        },
        {
          type: "paragraph",
          content:
            "This changes how businesses should think about visibility. A page may still need to rank and earn a click, but the individual facts, explanations, and relationships inside that page may also need to stand on their own when retrieved as part of a generated answer. Vague positioning and disconnected content make that task harder for both prospective customers and machines.",
        },
        {
          type: "paragraph",
          content:
            "GEO has become important because it gives businesses a practical way to examine this broader discovery environment. The useful response is not to chase every interface. It is to create a strong, maintainable source of truth that supports search visibility, AI retrieval, sales conversations, and customer understanding at the same time.",
        },
      ],
    },
    {
      id: "generative-search-and-traditional-search",
      title: "How generative search differs from traditional search",
      blocks: [
        {
          type: "paragraph",
          content:
            "Traditional search usually presents a ranked set of pages, features, and other results in response to a query. The visitor evaluates those options and chooses where to go. Generative search may instead synthesize a response, present supporting sources, ask for clarification, or combine retrieval with a conversational interface.",
        },
        {
          type: "paragraph",
          content:
            "That does not mean generative systems all work the same way. Products can use different indexes, retrieval systems, models, data partnerships, citation patterns, and freshness controls. The same question can produce different sources or wording across platforms, users, locations, and points in time.",
        },
        {
          type: "paragraph",
          content:
            "The practical distinction is that a traditional result often asks a page to win attention, while a generated response may ask a passage or fact to contribute to an answer. Both still depend on relevance, access, clarity, and trust. GEO pays closer attention to whether those qualities remain intact when information is retrieved outside the full page experience.",
        },
      ],
    },
    {
      id: "how-geo-relates-to-seo",
      title: "How GEO relates to SEO",
      blocks: [
        {
          type: "paragraph",
          content: [
            "GEO depends on the foundations of ",
            { type: "link", text: "strong SEO", href: "/services/seo" },
            ". Search and AI systems cannot make reliable use of a page they cannot access, render, index, or understand. Clear information architecture, relevant content, internal linking, technical health, and genuine authority remain essential.",
          ],
        },
        {
          type: "paragraph",
          content:
            "SEO commonly evaluates whether a page can earn qualified visibility for relevant searches. GEO adds another question: if a generative system is assembling a response, can it identify the right information, understand what the information refers to, and preserve the qualifications that make the answer accurate?",
        },
        {
          type: "paragraph",
          content:
            "These are overlapping disciplines, not competing ones. GEO without SEO can produce well-written information that remains difficult to discover. SEO without clear, answer-ready information can produce visibility that does not fully communicate expertise. Businesses usually benefit from improving the shared foundation rather than creating separate content for each label.",
        },
      ],
    },
    {
      id: "how-geo-relates-to-aeo",
      title: "How GEO relates to AEO",
      blocks: [
        {
          type: "paragraph",
          content: [
            "GEO and ",
            {
              type: "link",
              text: "Answer Engine Optimization",
              href: "/insights/what-is-aeo",
            },
            " share a focus on clear, retrievable information. Both encourage direct answers, explicit context, useful structure, and technical accessibility. Neither replaces SEO, and neither guarantees that a system will use a page.",
          ],
        },
        {
          type: "paragraph",
          content:
            "A practical distinction is one of scope. AEO often concentrates on how effectively content answers a specific question. GEO can be used more broadly to examine how a business, its entities, its topical authority, and its supporting evidence are represented across a site for generative retrieval and synthesis.",
        },
        {
          type: "paragraph",
          content:
            "There is no single universally agreed industry boundary between the two terms. Some teams use them interchangeably; others define one as a subset of the other. The labels matter less than the work: publish accurate information, make relationships explicit, maintain technical access, and help a real audience make a better decision.",
        },
      ],
    },
    {
      id: "elements-of-strong-geo",
      title: "The main elements of strong GEO",
      blocks: [
        {
          type: "paragraph",
          content:
            "Strong GEO comes from several connected fundamentals. None is a secret ranking factor, and no single item can guarantee visibility. Together, they make a business's information easier to discover, interpret, and evaluate.",
        },
        {
          type: "subheading",
          id: "clear-topical-focus",
          title: "Clear topical focus",
        },
        {
          type: "paragraph",
          content:
            "Give each important page a defined purpose. A focused page should make its subject, audience, and intended decision clear instead of mixing several unrelated themes under a broad marketing headline.",
        },
        {
          type: "subheading",
          id: "direct-useful-answers",
          title: "Direct, useful answers",
        },
        {
          type: "paragraph",
          content:
            "Answer the central question near the point where it is introduced, then add the qualifications, examples, and detail needed to make that answer dependable. Direct language should improve comprehension, not remove necessary nuance.",
        },
        {
          type: "subheading",
          id: "geo-entity-clarity",
          title: "Entity clarity",
        },
        {
          type: "paragraph",
          content:
            "Use consistent names for the organization, services, products, people, places, and concepts discussed. Explain how they relate. Clear entity relationships reduce the risk that a reader or system confuses a service with a methodology, product, or separate company.",
        },
        {
          type: "subheading",
          id: "strong-site-architecture",
          title: "Strong site architecture",
        },
        {
          type: "paragraph",
          content:
            "Organize important subjects into stable, purposeful pages. A coherent hierarchy helps visitors understand where they are and helps retrieval systems locate the most relevant source instead of choosing between several overlapping pages.",
        },
        {
          type: "subheading",
          id: "geo-internal-linking",
          title: "Contextual internal linking",
        },
        {
          type: "paragraph",
          content:
            "Use descriptive links to connect definitions, supporting evidence, services, and next steps. Internal links communicate relationships across the site and help readers continue from an explanation to the page that resolves their next question.",
        },
        {
          type: "subheading",
          id: "geo-technical-accessibility",
          title: "Technical accessibility and indexability",
        },
        {
          type: "paragraph",
          content: [
            "Important content should have stable URLs, render reliably, work across devices, and avoid accidental crawling or indexing barriers. Good ",
            {
              type: "link",
              text: "website development",
              href: "/services/website-development",
            },
            " gives content a fast, semantic, and accessible technical foundation.",
          ],
        },
        {
          type: "subheading",
          id: "geo-structured-data",
          title: "Structured data where appropriate",
        },
        {
          type: "paragraph",
          content:
            "Valid structured data can identify an article, organization, service, breadcrumb trail, or other supported entity in a machine-readable format. It should match visible content and established facts. Markup is context, not a guarantee of a result or citation.",
        },
        {
          type: "subheading",
          id: "trust-and-evidence",
          title: "Trust and evidence",
        },
        {
          type: "paragraph",
          content:
            "Make claims specific enough to evaluate and support important factual statements with appropriate evidence. Identify the responsible organization, distinguish fact from opinion, and avoid inflated certainty. Trust grows from consistency and verifiability rather than confident wording alone.",
        },
        {
          type: "subheading",
          id: "freshness-where-relevant",
          title: "Freshness where relevant",
        },
        {
          type: "paragraph",
          content:
            "Review information that can change, including product details, processes, regulations, availability, and platform behavior. Not every evergreen page needs frequent rewriting, but time-sensitive claims should not remain published without a clear maintenance process.",
        },
        {
          type: "subheading",
          id: "original-useful-information",
          title: "Original, useful information",
        },
        {
          type: "paragraph",
          content:
            "Publish information the business is genuinely positioned to provide: a clear method, a first-hand explanation, a useful framework, product documentation, expert analysis, or appropriately supported findings. Repeating a generic summary gives systems and buyers little reason to prefer one source over another.",
        },
      ],
    },
    {
      id: "geo-vs-traditional-seo",
      title: "GEO vs traditional SEO",
      blocks: [
        {
          type: "paragraph",
          content:
            "GEO and traditional SEO share more foundations than they separate. The comparison below describes their typical emphasis, not a rigid division between two independent programs.",
        },
        {
          type: "table",
          caption: "A practical comparison of traditional SEO and GEO",
          columns: ["Dimension", "Traditional SEO", "GEO"],
          rows: [
            [
              "Primary emphasis",
              "Earning relevant organic visibility for pages",
              "Improving readiness for generative retrieval and synthesis",
            ],
            [
              "Typical experience",
              "A results page that helps a user choose a destination",
              "A generated response that may summarize and cite sources",
            ],
            [
              "Content focus",
              "Search intent, relevance, quality, authority, and usefulness",
              "The same qualities, with extra attention to explicit context and retrievable facts",
            ],
            [
              "Site foundation",
              "Crawlability, indexability, performance, and architecture",
              "The same foundation, plus consistent entity and source relationships",
            ],
            [
              "Useful measurement",
              "Qualified visibility, visits, engagement, and business outcomes",
              "Observable AI visibility and referrals alongside the same business outcomes",
            ],
            [
              "Guarantee",
              "No guaranteed ranking",
              "No guaranteed inclusion, citation, recommendation, or traffic",
            ],
          ],
        },
        {
          type: "paragraph",
          content:
            "A strong page can support both disciplines. It can earn a traditional result, contribute a useful passage to a generated response, help a buyer evaluate the business, and support a conversion after the visit. The commercial purpose should remain more important than the optimization label.",
        },
      ],
    },
    {
      id: "geo-vs-aeo",
      title: "GEO vs AEO",
      blocks: [
        {
          type: "paragraph",
          content:
            "AEO commonly emphasizes the answer itself: whether content addresses a clear question in a form that people and answer systems can understand and retrieve. GEO commonly emphasizes the wider environment around that answer, including the source's topical coverage, entity relationships, evidence, technical access, and suitability for generative synthesis.",
        },
        {
          type: "paragraph",
          content:
            "The overlap is substantial. A direct answer with no supporting context may be easy to extract but hard to trust. A technically strong and authoritative site with vague explanations may be discoverable but difficult to use in a precise response. Effective work connects answer clarity with source quality.",
        },
        {
          type: "paragraph",
          content:
            "Because the terminology is still used differently across the industry, businesses should be cautious about rigid definitions. GEO, AEO, and SEO are not interchangeable, but they should not become isolated workstreams that produce duplicate pages or conflicting recommendations.",
        },
      ],
    },
    {
      id: "practical-geo-example",
      title: "A practical GEO example",
      blocks: [
        {
          type: "paragraph",
          content:
            "Imagine a software company that offers a workflow automation platform. Its homepage promises to transform operations, while separate pages mention integrations, approvals, reporting, and security. The language sounds polished, but the site never clearly defines the product category, intended users, supported workflows, or relationship between its features.",
        },
        {
          type: "editorialCallout",
          label: "Before",
          title: "A polished site with unclear entities and fragmented answers",
          content:
            "Important facts are scattered across broad marketing pages. Several pages target similar themes, internal links use vague labels, and product descriptions change from one page to another. A buyer—and a retrieval system—must infer too much.",
        },
        {
          type: "paragraph",
          content:
            "A GEO-informed improvement would establish a consistent description of the company and product, assign a clear purpose to each core page, and connect supporting information through descriptive links. Product pages could answer common evaluation questions directly, while documentation and evidence would support claims about integrations, security, and implementation.",
        },
        {
          type: "editorialCallout",
          label: "After",
          title: "A connected source of truth for buyers and retrieval systems",
          content:
            "The revised site explains what the platform is, who it serves, how its capabilities relate, and where supporting details live. It becomes easier to navigate and interpret without implying that any AI platform must cite or recommend it.",
        },
      ],
    },
    {
      id: "how-businesses-should-approach-geo",
      title: "How businesses should approach GEO",
      blocks: [
        {
          type: "paragraph",
          content:
            "GEO should start with customer questions and business priorities, not a request to mention the brand more often. Focus first on subjects where the organization has useful knowledge and where clearer discovery can support a meaningful decision.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            [
              { type: "strong", text: "Choose commercially relevant topics. " },
              "Identify the questions, comparisons, and decisions that matter to customers and that the business can answer credibly.",
            ],
            [
              { type: "strong", text: "Audit the current source of truth. " },
              "Check whether the website clearly explains the organization, its services or products, and the relationships between core topics.",
            ],
            [
              { type: "strong", text: "Resolve ambiguity before adding volume. " },
              "Consolidate overlapping pages, define key terms, align descriptions, and close important information gaps before publishing more content.",
            ],
            [
              { type: "strong", text: "Improve the technical and linking system. " },
              "Strengthen access, indexability, page performance, semantic markup, internal links, and structured data where those changes clarify real content.",
            ],
            [
              { type: "strong", text: "Publish useful original information. " },
              "Add first-hand explanations, documentation, examples, or evidence when the organization can support them accurately.",
            ],
            [
              { type: "strong", text: "Measure discovery and business value together. " },
              "Monitor observable AI mentions or referrals alongside organic visibility, engagement, enquiries, assisted conversions, and sales feedback.",
            ],
            [
              { type: "strong", text: "Maintain the knowledge base. " },
              "Review time-sensitive facts and update important pages as the offer, market, and discovery environment change.",
            ],
          ],
        },
        {
          type: "paragraph",
          content:
            "This creates a durable program rather than a one-time GEO project. The same improvements can make the site more useful for customers, traditional search, AI retrieval, sales teams, and future content development.",
        },
      ],
    },
    {
      id: "what-geo-cannot-guarantee",
      title: "What GEO cannot guarantee",
      blocks: [
        {
          type: "paragraph",
          content:
            "GEO can improve the quality, clarity, and technical readiness of the information a business publishes. It cannot control a third-party model, index, interface, or response. Responsible planning should keep that boundary explicit.",
        },
        {
          type: "list",
          items: [
            [
              { type: "strong", text: "Inclusion in AI answers. " },
              "A relevant page may still be omitted from a generated response.",
            ],
            [
              { type: "strong", text: "Citations. " },
              "A platform may answer without citations or select a different source.",
            ],
            [
              { type: "strong", text: "Rankings. " },
              "GEO does not secure a traditional or generative ranking position.",
            ],
            [
              { type: "strong", text: "Recommendations. " },
              "No optimization can require an independent system to recommend a business.",
            ],
            [
              { type: "strong", text: "Traffic. " },
              "Visibility inside an answer may not produce a visit, and referral behavior can vary by platform and query.",
            ],
          ],
        },
        {
          type: "editorialCallout",
          label: "Reality check",
          title: "Optimization improves the source, not control over the answer",
          content:
            "Treat promises of guaranteed citations or recommendations with caution. The defensible objective is to make accurate information more useful and discoverable while measuring the business outcomes that can actually be observed.",
        },
      ],
    },
    {
      id: "geo-and-ai-search-platforms",
      title: "GEO and AI search platforms",
      blocks: [
        {
          type: "paragraph",
          content:
            "AI search platforms can draw on different combinations of web indexes, retrieval systems, licensed sources, model knowledge, and contextual signals. Some show citations consistently, some show them selectively, and some provide limited visibility into why a source appeared. These behaviors can change as products evolve.",
        },
        {
          type: "paragraph",
          content:
            "Businesses should avoid claims about secret ranking systems unless a platform has documented them. Public technical guidance, crawler access, referral data, source observations, and controlled testing can inform decisions, but they do not reveal every factor used to produce an answer.",
        },
        {
          type: "paragraph",
          content:
            "The practical response is to maintain a strong primary website, publish facts the organization can defend, and monitor how important topics appear across relevant experiences. Platform-specific adjustments may be useful when supported by reliable guidance, but they should not fragment the site's core information or weaken the experience for people.",
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
            "Generative Engine Optimization is the work of making a business's useful information clearer, better connected, technically accessible, and easier to evaluate when generative systems retrieve sources or produce answers. It builds on SEO and overlaps with AEO, while adding attention to entity clarity, source relationships, evidence, and generative discovery.",
        },
        {
          type: "paragraph",
          content:
            "The strongest GEO strategy is not a promise to manipulate an AI result. It is a commitment to becoming a more coherent and credible source for the subjects that matter to customers—and to connecting that discoverability with outcomes the business can measure.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is GEO replacing SEO?",
      answer:
        "No. GEO depends on SEO fundamentals such as crawlability, indexability, relevance, site architecture, internal linking, performance, and authority. It adds attention to how clearly information and entity relationships can support generative retrieval and synthesis.",
    },
    {
      question: "Is GEO the same as AEO?",
      answer:
        "Not exactly, although the terms overlap and are not defined consistently across the industry. AEO often emphasizes clear answers to specific questions, while GEO can be used more broadly for the source, entity, authority, and technical signals that support generative discovery.",
    },
    {
      question: "Can GEO guarantee citations in AI answers?",
      answer:
        "No. A business cannot control which sources an AI system retrieves, cites, or uses at a particular time. GEO can improve clarity and readiness, but it cannot guarantee inclusion, citations, recommendations, rankings, or traffic.",
    },
    {
      question: "Does schema markup guarantee AI visibility?",
      answer:
        "No. Valid structured data can clarify what a page and its entities represent, but it does not guarantee a ranking, citation, recommendation, or appearance in a generated answer. It should accurately describe content that visitors can see.",
    },
    {
      question: "Does every business need GEO?",
      answer:
        "Not every business needs a separate program carrying the GEO label. Businesses that depend on digital discovery can still benefit from its fundamentals: clear information, coherent architecture, technical access, accurate entity relationships, useful evidence, and content maintenance.",
    },
    {
      question: "How should GEO performance be measured?",
      answer:
        "Use a balanced view. Track observable AI citations, mentions, and referral traffic where available, but connect them to qualified visibility, engagement, enquiries, assisted conversions, and sales feedback. Measurement is incomplete, so no single GEO metric should stand in for business value.",
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
        "Create fast, accessible information architecture that makes important content clear to people and machines.",
    },
  ],
  relatedInsightSlugs: ["what-is-aeo"],
};

export const insights: readonly InsightArticle[] = [whatIsGeo, whatIsAeo];

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
