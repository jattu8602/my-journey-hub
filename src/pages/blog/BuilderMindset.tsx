import { ArrowLeft, Clock, Calendar, Search, Users, Radio, Flag } from "lucide-react";
import BackToBlogs from "@/components/blog/BackToBlogs";
import TableOfContents from "@/components/blog/TableOfContents";
import MobileTableOfContents from "@/components/blog/MobileTableOfContents";
import CodeBlock from "@/components/blog/CodeBlock";
import BlogNote from "@/components/blog/BlogNote";

const BuilderMindset = () => {
  const tocItems = [
    { id: "search-engine", title: "Search Engine Internals", level: 1 },
    { id: "crawling", title: "Crawling", level: 2 },
    { id: "indexing", title: "Indexing", level: 2 },
    { id: "ranking", title: "Ranking (TF-IDF)", level: 2 },
    { id: "recommendations", title: "Recommendation Systems", level: 1 },
    { id: "collaborative-filtering", title: "Collaborative Filtering", level: 2 },
    { id: "ranking-heuristics", title: "Ranking Heuristics", level: 2 },
    { id: "real-time-collab", title: "Real-Time Collaboration", level: 1 },
    { id: "crdt-basics", title: "CRDT Basics", level: 2 },
    { id: "feature-flags", title: "Feature Flags & Experimentation", level: 1 },
    { id: "ab-testing", title: "A/B Testing Systems", level: 2 },
    { id: "rollbacks", title: "Rollbacks Without Redeploys", level: 2 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <BackToBlogs />
          <MobileTableOfContents items={tocItems} />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Flag className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Portfolio Gold</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Builder-Mindset Topics
                <span className="block text-primary mt-2">Systems Worth Building</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                The best way to stand out is to build things others can't easily replicate.
                These topics make excellent portfolio projects and teach transferable system design skills.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  December 2024
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  22 min read
                </span>
              </div>
            </div>

            {/* Search Engine Internals */}
            <section id="search-engine" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Search className="w-8 h-8 text-primary" />
                Search Engine Internals
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Building a search engine from scratch teaches you about web crawling, text processing,
                and ranking algorithms. Even a simple version impresses interviewers.
              </p>

              <div id="crawling" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Crawling</h3>
                <p className="text-muted-foreground mb-6">
                  The crawler visits web pages, extracts links, and discovers new pages.
                  The key challenge: politeness (don't DOS websites) and efficiency.
                </p>

                <CodeBlock
                  code={`// Simple Web Crawler
class WebCrawler {
  constructor() {
    this.visited = new Set();
    this.queue = [];
    this.documents = [];
  }

  async crawl(seedUrls, maxPages = 100) {
    this.queue.push(...seedUrls);

    while (this.queue.length > 0 && this.documents.length < maxPages) {
      const url = this.queue.shift();

      if (this.visited.has(url)) continue;
      this.visited.add(url);

      try {
        // Be polite: respect robots.txt, add delays
        await this.delay(1000);

        const html = await this.fetch(url);
        const { text, links } = this.parse(html);

        // Store document
        this.documents.push({ url, text, crawledAt: Date.now() });

        // Add new links to queue
        for (const link of links) {
          if (!this.visited.has(link)) {
            this.queue.push(link);
          }
        }
      } catch (err) {
        console.log(\`Failed to crawl \${url}: \${err.message}\`);
      }
    }

    return this.documents;
  }

  parse(html) {
    // Extract text content (simplified)
    const text = html.replace(/<[^>]*>/g, ' ')
                     .replace(/\\s+/g, ' ')
                     .trim();

    // Extract links
    const linkRegex = /href="(https?:\\/\\/[^"]+)"/g;
    const links = [];
    let match;
    while ((match = linkRegex.exec(html))) {
      links.push(match[1]);
    }

    return { text, links };
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}`}
                  language="javascript"
                  filename="crawler.js"
                />

                <BlogNote type="warning">
                  Always check robots.txt before crawling. Rate limit your requests.
                  A real crawler also handles redirects, cookies, and JavaScript rendering.
                </BlogNote>
              </div>

              <div id="indexing" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Indexing</h3>
                <p className="text-muted-foreground mb-6">
                  An inverted index maps words to documents. Instead of asking "what words are in
                  this document?", you ask "what documents contain this word?"
                </p>

                <CodeBlock
                  code={`// Inverted Index Implementation
class InvertedIndex {
  constructor() {
    // word -> { docId -> frequency }
    this.index = new Map();
    this.documents = new Map();
  }

  addDocument(docId, text) {
    this.documents.set(docId, text);

    // Tokenize and normalize
    const words = this.tokenize(text);
    const wordCounts = this.countWords(words);

    // Update inverted index
    for (const [word, count] of wordCounts) {
      if (!this.index.has(word)) {
        this.index.set(word, new Map());
      }
      this.index.get(word).set(docId, count);
    }
  }

  tokenize(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\\s]/g, '')  // Remove punctuation
      .split(/\\s+/)
      .filter(word => word.length > 2)  // Skip short words
      .filter(word => !this.isStopWord(word));
  }

  isStopWord(word) {
    const stopWords = new Set(['the', 'is', 'at', 'which', 'on', 'and', 'or']);
    return stopWords.has(word);
  }

  countWords(words) {
    const counts = new Map();
    for (const word of words) {
      counts.set(word, (counts.get(word) || 0) + 1);
    }
    return counts;
  }

  // Find documents containing a word
  search(word) {
    const normalized = word.toLowerCase();
    return this.index.get(normalized) || new Map();
  }
}

// Usage
const idx = new InvertedIndex();
idx.addDocument('doc1', 'The quick brown fox');
idx.addDocument('doc2', 'The lazy brown dog');
idx.addDocument('doc3', 'Quick foxes are fast');

console.log(idx.search('brown'));  // doc1, doc2
console.log(idx.search('fox'));    // doc1`}
                  language="javascript"
                  filename="inverted-index.js"
                />
              </div>

              <div id="ranking" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Ranking (TF-IDF)</h3>
                <p className="text-muted-foreground mb-6">
                  Not all matches are equal. TF-IDF weighs words by how important they are:
                  common in this document but rare across all documents = important.
                </p>

                <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold mb-4">TF-IDF Formula</h4>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium text-primary">TF (Term Frequency)</p>
                      <p className="text-muted-foreground">How often the word appears in this document</p>
                      <code className="bg-background/50 px-2 py-1 rounded">TF = count(word in doc) / total words in doc</code>
                    </div>
                    <div>
                      <p className="font-medium text-primary">IDF (Inverse Document Frequency)</p>
                      <p className="text-muted-foreground">How rare the word is across all documents</p>
                      <code className="bg-background/50 px-2 py-1 rounded">IDF = log(total docs / docs containing word)</code>
                    </div>
                    <div>
                      <p className="font-medium text-primary">TF-IDF Score</p>
                      <code className="bg-background/50 px-2 py-1 rounded">TF-IDF = TF × IDF</code>
                    </div>
                  </div>
                </div>

                <CodeBlock
                  code={`class TFIDFRanker {
  constructor(index) {
    this.index = index;
    this.totalDocs = index.documents.size;
  }

  // Calculate TF: term frequency in document
  tf(word, docId) {
    const docWords = this.index.tokenize(
      this.index.documents.get(docId)
    );
    const wordCount = docWords.filter(w => w === word).length;
    return wordCount / docWords.length;
  }

  // Calculate IDF: inverse document frequency
  idf(word) {
    const docsWithWord = this.index.search(word).size;
    if (docsWithWord === 0) return 0;
    return Math.log(this.totalDocs / docsWithWord);
  }

  // Calculate TF-IDF score
  tfidf(word, docId) {
    return this.tf(word, docId) * this.idf(word);
  }

  // Rank documents for a query
  rank(query) {
    const queryWords = this.index.tokenize(query);
    const scores = new Map();

    // For each query word
    for (const word of queryWords) {
      const docsWithWord = this.index.search(word);

      for (const [docId] of docsWithWord) {
        const score = this.tfidf(word, docId);
        scores.set(docId, (scores.get(docId) || 0) + score);
      }
    }

    // Sort by score descending
    return Array.from(scores.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([docId, score]) => ({
        docId,
        score: score.toFixed(4),
        preview: this.index.documents.get(docId).slice(0, 100)
      }));
  }
}`}
                  language="javascript"
                  filename="tfidf-ranker.js"
                />
              </div>
            </section>

            {/* Recommendation Systems */}
            <section id="recommendations" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                Recommendation Systems (Non-ML)
              </h2>

              <div id="collaborative-filtering" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Collaborative Filtering</h3>
                <p className="text-muted-foreground mb-6">
                  "Users who liked X also liked Y." Find similar users based on their behavior,
                  then recommend what those similar users liked.
                </p>

                <CodeBlock
                  code={`// User-Based Collaborative Filtering
class CollaborativeFilter {
  constructor() {
    // userId -> { itemId -> rating }
    this.userRatings = new Map();
  }

  addRating(userId, itemId, rating) {
    if (!this.userRatings.has(userId)) {
      this.userRatings.set(userId, new Map());
    }
    this.userRatings.get(userId).set(itemId, rating);
  }

  // Find similar users using cosine similarity
  findSimilarUsers(targetUserId, k = 5) {
    const targetRatings = this.userRatings.get(targetUserId);
    if (!targetRatings) return [];

    const similarities = [];

    for (const [userId, ratings] of this.userRatings) {
      if (userId === targetUserId) continue;

      const similarity = this.cosineSimilarity(targetRatings, ratings);
      similarities.push({ userId, similarity });
    }

    return similarities
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, k);
  }

  cosineSimilarity(ratingsA, ratingsB) {
    // Find common items
    const common = [...ratingsA.keys()].filter(k => ratingsB.has(k));
    if (common.length === 0) return 0;

    let dotProduct = 0;
    let magA = 0;
    let magB = 0;

    for (const item of common) {
      const a = ratingsA.get(item);
      const b = ratingsB.get(item);
      dotProduct += a * b;
      magA += a * a;
      magB += b * b;
    }

    return dotProduct / (Math.sqrt(magA) * Math.sqrt(magB));
  }

  // Get recommendations for a user
  recommend(userId, n = 10) {
    const userRatings = this.userRatings.get(userId);
    const similarUsers = this.findSimilarUsers(userId);

    // Aggregate ratings from similar users
    const scores = new Map();

    for (const { userId: simUserId, similarity } of similarUsers) {
      const simRatings = this.userRatings.get(simUserId);

      for (const [itemId, rating] of simRatings) {
        // Skip items user already rated
        if (userRatings.has(itemId)) continue;

        // Weighted by similarity
        const weightedScore = rating * similarity;
        scores.set(itemId, (scores.get(itemId) || 0) + weightedScore);
      }
    }

    return Array.from(scores.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, n)
      .map(([itemId, score]) => ({ itemId, score: score.toFixed(2) }));
  }
}

// Example usage
const cf = new CollaborativeFilter();
cf.addRating('alice', 'movie1', 5);
cf.addRating('alice', 'movie2', 3);
cf.addRating('bob', 'movie1', 5);
cf.addRating('bob', 'movie2', 4);
cf.addRating('bob', 'movie3', 5);  // Bob liked movie3
// Alice might like movie3 too!`}
                  language="javascript"
                  filename="collaborative-filtering.js"
                />
              </div>

              <div id="ranking-heuristics" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Ranking Heuristics</h3>

                <BlogNote type="info">
                  You don't always need ML. Simple heuristics often outperform complex models
                  for small datasets and are much easier to debug.
                </BlogNote>

                <CodeBlock
                  code={`// Multi-factor ranking without ML
class HeuristicRanker {
  constructor() {
    this.weights = {
      relevance: 0.4,
      recency: 0.2,
      popularity: 0.2,
      quality: 0.2
    };
  }

  rankItems(items, query) {
    return items
      .map(item => ({
        ...item,
        score: this.calculateScore(item, query)
      }))
      .sort((a, b) => b.score - a.score);
  }

  calculateScore(item, query) {
    return (
      this.relevanceScore(item, query) * this.weights.relevance +
      this.recencyScore(item) * this.weights.recency +
      this.popularityScore(item) * this.weights.popularity +
      this.qualityScore(item) * this.weights.quality
    );
  }

  // Text match relevance
  relevanceScore(item, query) {
    const queryWords = query.toLowerCase().split(' ');
    const itemText = \`\${item.title} \${item.description}\`.toLowerCase();

    const matches = queryWords.filter(w => itemText.includes(w));
    return matches.length / queryWords.length;
  }

  // Decay function: newer = higher score
  recencyScore(item) {
    const ageInDays = (Date.now() - item.createdAt) / (1000 * 60 * 60 * 24);
    // Exponential decay with half-life of 7 days
    return Math.exp(-ageInDays / 7);
  }

  // Normalized popularity
  popularityScore(item) {
    // Log scale to prevent outliers from dominating
    return Math.log(1 + item.views) / Math.log(1 + 1000000);
  }

  // Composite quality signal
  qualityScore(item) {
    const completeness = item.hasImage ? 0.3 : 0;
    const engagement = Math.min(item.likes / item.views, 0.3);
    const reputation = Math.min(item.authorScore / 100, 0.4);
    return completeness + engagement + reputation;
  }
}`}
                  language="javascript"
                  filename="heuristic-ranker.js"
                />
              </div>
            </section>

            {/* Real-Time Collaboration */}
            <section id="real-time-collab" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Radio className="w-8 h-8 text-primary" />
                Real-Time Collaboration
              </h2>

              <div id="crdt-basics" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">CRDT Basics (Google Docs-Style Editing)</h3>
                <p className="text-muted-foreground mb-6">
                  How do multiple users edit the same document without conflicts?
                  CRDTs (Conflict-free Replicated Data Types) make this possible.
                </p>

                <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold mb-4">The Problem with Naive Sync</h4>
                  <CodeBlock
                    code={`// Document: "Hello"
// User A types at position 5: "Hello World"
// User B types at position 5: "Hello There"

// If both sync at the same time:
// "Hello WorldThere" or "Hello ThereWorld"?

// Even worse with deletions:
// User A deletes position 0-5: ""
// User B types at position 3: "Helxlo"
// What happens?`}
                    language="javascript"
                  />
                </div>

                <CodeBlock
                  code={`// Simple CRDT: Last-Writer-Wins Register
class LWWRegister {
  constructor() {
    this.value = null;
    this.timestamp = 0;
    this.nodeId = Math.random().toString(36);
  }

  set(value) {
    this.value = value;
    this.timestamp = Date.now();
    return this.getState();
  }

  // Merge with remote state
  merge(remoteState) {
    // Higher timestamp wins
    // Tie-breaker: node ID (deterministic)
    if (remoteState.timestamp > this.timestamp ||
        (remoteState.timestamp === this.timestamp &&
         remoteState.nodeId > this.nodeId)) {
      this.value = remoteState.value;
      this.timestamp = remoteState.timestamp;
    }
    return this.value;
  }

  getState() {
    return {
      value: this.value,
      timestamp: this.timestamp,
      nodeId: this.nodeId
    };
  }
}

// G-Counter: Grow-only counter (like view counts)
class GCounter {
  constructor(nodeId) {
    this.nodeId = nodeId;
    this.counts = {};  // nodeId -> count
  }

  increment() {
    this.counts[this.nodeId] = (this.counts[this.nodeId] || 0) + 1;
  }

  getValue() {
    return Object.values(this.counts).reduce((a, b) => a + b, 0);
  }

  merge(remoteCounter) {
    // Take max of each node's count
    for (const [nodeId, count] of Object.entries(remoteCounter.counts)) {
      this.counts[nodeId] = Math.max(
        this.counts[nodeId] || 0,
        count
      );
    }
  }
}

// Usage: Distributed view counter
const node1 = new GCounter('node1');
const node2 = new GCounter('node2');

node1.increment();  // node1 sees 1
node1.increment();  // node1 sees 2
node2.increment();  // node2 sees 1

// Later, they sync
node1.merge(node2);
node2.merge(node1);

// Both now see 3 (convergent!)`}
                  language="javascript"
                  filename="crdt-basics.js"
                />

                <BlogNote type="tip">
                  For text editing, look into Yjs or Automerge - production-ready CRDT libraries
                  that handle the complexity of text CRDTs.
                </BlogNote>
              </div>
            </section>

            {/* Feature Flags */}
            <section id="feature-flags" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Flag className="w-8 h-8 text-primary" />
                Feature Flags & Experimentation
              </h2>

              <div id="ab-testing" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">A/B Testing Systems</h3>
                <p className="text-muted-foreground mb-6">
                  Feature flags let you control features without deploying code.
                  Combined with analytics, they enable data-driven decisions.
                </p>

                <CodeBlock
                  code={`// Feature Flag Service
class FeatureFlagService {
  constructor() {
    this.flags = new Map();
    this.userAssignments = new Map();
  }

  // Define a feature flag
  createFlag(flagName, config) {
    this.flags.set(flagName, {
      name: flagName,
      enabled: config.enabled ?? false,
      percentRollout: config.percentRollout ?? 100,
      variants: config.variants ?? ['control', 'treatment'],
      targetingRules: config.targetingRules ?? []
    });
  }

  // Check if flag is enabled for a user
  isEnabled(flagName, userId, userContext = {}) {
    const flag = this.flags.get(flagName);
    if (!flag || !flag.enabled) return false;

    // Check targeting rules
    for (const rule of flag.targetingRules) {
      if (this.evaluateRule(rule, userContext)) {
        return rule.enabled;
      }
    }

    // Percentage rollout (consistent per user)
    const hash = this.hashUserId(userId, flagName);
    return hash < flag.percentRollout;
  }

  // Get variant for A/B test
  getVariant(flagName, userId) {
    const flag = this.flags.get(flagName);
    if (!flag || !flag.enabled) return 'control';

    // Consistent assignment
    const key = \`\${userId}:\${flagName}\`;
    if (this.userAssignments.has(key)) {
      return this.userAssignments.get(key);
    }

    const hash = this.hashUserId(userId, flagName);
    const variantIndex = hash % flag.variants.length;
    const variant = flag.variants[variantIndex];

    this.userAssignments.set(key, variant);
    return variant;
  }

  // Deterministic hash (0-99)
  hashUserId(userId, salt) {
    const str = \`\${userId}:\${salt}\`;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash = hash & hash;
    }
    return Math.abs(hash) % 100;
  }

  evaluateRule(rule, context) {
    // Example: { field: 'country', operator: 'equals', value: 'US' }
    const fieldValue = context[rule.field];
    switch (rule.operator) {
      case 'equals': return fieldValue === rule.value;
      case 'contains': return fieldValue?.includes(rule.value);
      case 'greaterThan': return fieldValue > rule.value;
      default: return false;
    }
  }
}

// Usage
const flags = new FeatureFlagService();

flags.createFlag('new-checkout', {
  enabled: true,
  percentRollout: 20,  // 20% of users
  variants: ['control', 'one-page', 'multi-step']
});

flags.createFlag('premium-features', {
  enabled: true,
  targetingRules: [
    { field: 'plan', operator: 'equals', value: 'premium', enabled: true }
  ]
});

// In your code
if (flags.isEnabled('new-checkout', userId)) {
  const variant = flags.getVariant('new-checkout', userId);
  if (variant === 'one-page') {
    return <OnePageCheckout />;
  }
}`}
                  language="javascript"
                  filename="feature-flags.js"
                />
              </div>

              <div id="rollbacks" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Rollbacks Without Redeploys</h3>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-semibold mb-4">Kill Switch Pattern</h4>
                  <CodeBlock
                    code={`// Emergency rollback without deploy
class KillSwitch {
  constructor(flagService) {
    this.flagService = flagService;
    this.metrics = new Map();
  }

  // Wrap risky operations
  async execute(flagName, riskyOperation, fallback) {
    const startTime = Date.now();

    try {
      // Check if feature is killed
      if (!this.flagService.isEnabled(flagName, 'global')) {
        return await fallback();
      }

      const result = await riskyOperation();
      this.recordSuccess(flagName, Date.now() - startTime);
      return result;

    } catch (error) {
      this.recordError(flagName, error);

      // Auto-disable if error rate too high
      if (this.shouldAutoDisable(flagName)) {
        this.flagService.flags.get(flagName).enabled = false;
        console.error(\`Auto-disabled \${flagName} due to high error rate\`);
      }

      return await fallback();
    }
  }

  recordSuccess(flagName, latency) {
    const metrics = this.getMetrics(flagName);
    metrics.successCount++;
    metrics.latencies.push(latency);
  }

  recordError(flagName, error) {
    const metrics = this.getMetrics(flagName);
    metrics.errorCount++;
    metrics.errors.push({ error: error.message, time: Date.now() });
  }

  shouldAutoDisable(flagName) {
    const metrics = this.getMetrics(flagName);
    const total = metrics.successCount + metrics.errorCount;
    const errorRate = metrics.errorCount / total;

    // Disable if >10% error rate with at least 100 requests
    return total >= 100 && errorRate > 0.1;
  }

  getMetrics(flagName) {
    if (!this.metrics.has(flagName)) {
      this.metrics.set(flagName, {
        successCount: 0,
        errorCount: 0,
        latencies: [],
        errors: []
      });
    }
    return this.metrics.get(flagName);
  }
}

// Usage
const killSwitch = new KillSwitch(flags);

const result = await killSwitch.execute(
  'new-payment-processor',
  async () => await newPaymentService.charge(amount),
  async () => await legacyPaymentService.charge(amount)
);`}
                    language="javascript"
                    filename="kill-switch.js"
                  />
                </div>

                <BlogNote type="info">
                  Companies like Netflix and Facebook roll out features to 0.1% of users first,
                  then 1%, 10%, 50%, 100%. Any issues = instant rollback via flag toggle.
                </BlogNote>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    Search engines combine crawling, indexing, and ranking - TF-IDF is surprisingly effective
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    Collaborative filtering: find similar users, recommend what they liked
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    CRDTs enable real-time collaboration by making conflicts mathematically impossible
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    Feature flags decouple deployment from release - enabling safe experimentation and instant rollbacks
                  </li>
                </ul>
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BuilderMindset;
