import { ArrowLeft, Clock, Calendar, Brain, Database, Search, Network } from "lucide-react";
import BackToBlogs from "@/components/blog/BackToBlogs";
import TableOfContents from "@/components/blog/TableOfContents";
import CodeBlock from "@/components/blog/CodeBlock";
import BlogNote from "@/components/blog/BlogNote";
import MobileTableOfContents from "@/components/blog/MobileTableOfContents";

const AIAdjacentConcepts = () => {

  const tocItems = [
    { id: 'introduction', title: 'Introduction', level: 2 },
    { id: 'vector-databases', title: 'Vector Databases', level: 2 },
    { id: 'similarity-search', title: 'Similarity Search', level: 3 },
    { id: 'faiss-milvus', title: 'FAISS / Milvus Concepts', level: 3 },
    { id: 'embeddings', title: 'Embeddings Internals', level: 2 },
    { id: 'cosine-euclidean', title: 'Cosine vs Euclidean', level: 3 },
    { id: 'why-cluster', title: 'Why Embeddings Cluster', level: 3 },
    { id: 'rag', title: 'RAG Architecture', level: 2 },
    { id: 'how-chatgpt-works', title: 'How ChatGPT Works', level: 3 },
    { id: 'building-rag', title: 'Building RAG Systems', level: 3 },
    { id: 'inference-optimization', title: 'Inference Optimization', level: 2 },
    { id: 'batching', title: 'Batching', level: 3 },
    { id: 'quantization', title: 'Quantization', level: 3 },
    { id: 'gpu-usage', title: 'On-demand GPU Usage', level: 3 },
    { id: 'resources', title: 'Resources', level: 2 },
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
        {/* Mobile TOC */}


        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Database className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">AI Engineering</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                AI-Adjacent Concepts
                <span className="block text-primary mt-2">Vector DBs & RAG</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Understanding the core concepts behind modern AI systems — vector databases, embeddings,
                RAG architecture, and inference optimization — all explained without heavy math.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  December 22, 2024
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  35 min read
                </span>
              </div>
            </div>

            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Introduction</h2>
              <p className="text-lg text-muted-foreground mb-4">
                You don't need a PhD in machine learning to build AI-powered applications.
                Understanding a few key concepts unlocks the ability to build search engines,
                chatbots, recommendation systems, and more.
              </p>
              <p className="text-lg text-muted-foreground">
                This guide focuses on the practical engineering side of AI — the concepts that
                let you build real products without diving deep into neural network architectures.
              </p>
            </section>

            {/* Vector Databases */}
            <section id="vector-databases" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Vector Databases</h2>
              <p className="text-muted-foreground mb-6">
                Traditional databases excel at exact matches — finding a user by ID or filtering
                products by price. But what if you want to find "similar" items? That's where
                vector databases shine.
              </p>

              <div id="similarity-search" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Similarity Search</h3>
                <p className="text-muted-foreground mb-6">
                  Instead of storing rows with columns, vector databases store high-dimensional
                  vectors (arrays of numbers). Each vector represents something — an image, a
                  sentence, a user profile.
                </p>

                <CodeBlock
                  code={`// Traditional Database Query
SELECT * FROM products
WHERE category = 'shoes'
  AND price < 100;
// Result: Exact matches only

// Vector Database Query
db.search(imageVector, topK=10);
// Result: 10 most SIMILAR items
// Even across different categories!`}
                  language="sql"
                  filename="comparison.sql"
                />

                <CodeBlock
                  code={`// Simple Vector DB Concept
class VectorDB {
  constructor() {
    this.vectors = [];
  }

  insert(id, vector) {
    this.vectors.push({ id, vector });
  }

  search(queryVector, k = 5) {
    const distances = this.vectors.map(item => ({
      id: item.id,
      similarity: this.cosineSimilarity(queryVector, item.vector)
    }));

    return distances
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, k);
  }

  cosineSimilarity(a, b) {
    const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const magA = Math.sqrt(a.reduce((s, v) => s + v * v, 0));
    const magB = Math.sqrt(b.reduce((s, v) => s + v * v, 0));
    return dot / (magA * magB);
  }
}`}
                  language="javascript"
                  filename="vector-db.js"
                />
              </div>

              <div id="faiss-milvus" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">FAISS / Milvus Concepts</h3>
                <BlogNote type="info">
                  The naive approach (comparing every vector) is O(n). Real vector databases
                  use clever indexing to make this nearly O(1) for millions of vectors.
                </BlogNote>

                <p className="text-muted-foreground mb-4">Key techniques used by production vector databases:</p>
                <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                  <li><strong>IVF (Inverted File Index):</strong> Clusters vectors into buckets, only searches relevant buckets</li>
                  <li><strong>PQ (Product Quantization):</strong> Compresses vectors to use less memory</li>
                  <li><strong>HNSW:</strong> Hierarchical graph structure for fast nearest neighbor search</li>
                </ul>

                <CodeBlock
                  code={`# FAISS Python Example
import faiss
import numpy as np

# Create index for 128-dim vectors
dimension = 128
index = faiss.IndexFlatL2(dimension)

# Add 10,000 vectors
vectors = np.random.random((10000, dimension)).astype('float32')
index.add(vectors)

# Search for similar vectors
query = np.random.random((1, dimension)).astype('float32')
distances, indices = index.search(query, k=5)

print(f"Top 5 similar: {indices[0]}")
# Finds nearest neighbors in milliseconds!`}
                  language="python"
                  filename="faiss_example.py"
                />
              </div>
            </section>

            {/* Embeddings */}
            <section id="embeddings" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Embeddings Internals</h2>
              <p className="text-muted-foreground mb-6">
                Embeddings are the bridge between human-understandable content (text, images)
                and mathematical operations. They convert meaning into numbers.
              </p>

              <div id="cosine-euclidean" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Cosine Similarity vs Euclidean Distance</h3>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-semibold mb-4">Two Ways to Measure "Closeness"</h4>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-medium text-primary mb-2">Euclidean Distance</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        Straight-line distance. Like measuring with a ruler.
                      </p>
                      <code className="text-xs bg-muted px-2 py-1 rounded">
                        d = √[(x₁-x₂)² + (y₁-y₂)²]
                      </code>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary mb-2">Cosine Similarity</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        Angle between vectors. Ignores magnitude.
                      </p>
                      <code className="text-xs bg-muted px-2 py-1 rounded">
                        cos(θ) = (A·B) / (||A|| × ||B||)
                      </code>
                    </div>
                  </div>
                </div>

                <CodeBlock
                  code={`// When to use which?

// Euclidean: When magnitude matters
const spending1 = [100, 50, 200]; // dollars
const spending2 = [95, 55, 190];  // close!

// Cosine: When only pattern matters
const doc1 = [0.1, 0.9, 0.3];  // topic weights
const doc2 = [0.2, 1.8, 0.6];  // same pattern, 2x scale
// Cosine sees these as identical!

// For text embeddings, cosine is usually better
// Document length shouldn't affect similarity`}
                  language="javascript"
                />
              </div>

              <div id="why-cluster" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Why Embeddings Cluster Meaning</h3>
                <p className="text-muted-foreground mb-6">
                  During training, neural networks learn to place semantically similar things
                  close together in vector space. This emerges from patterns in data.
                </p>

                <CodeBlock
                  code={`// Famous Word2Vec example
king - man + woman ≈ queen

// In vector space:
embed("king")   = [0.2, 0.8, 0.1, ...]
embed("man")    = [0.1, 0.7, 0.0, ...]
embed("woman")  = [0.1, 0.2, 0.9, ...]
embed("queen")  = [0.2, 0.3, 1.0, ...]

// The network learned:
// - "royal" dimension
// - "gender" dimension
// Without being told these concepts exist!`}
                  language="javascript"
                />

                <BlogNote type="tip">
                  Modern embedding models (OpenAI, Cohere) work on sentences, not just words.
                  "Bank robbery" and "Financial heist" are close, but "River bank" is far.
                </BlogNote>
              </div>
            </section>

            {/* RAG */}
            <section id="rag" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">RAG (Retrieval Augmented Generation)</h2>
              <p className="text-muted-foreground mb-6">
                LLMs have a knowledge cutoff and can hallucinate. RAG solves this by
                retrieving relevant documents and injecting them into the prompt.
              </p>

              <div id="how-chatgpt-works" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">How ChatGPT-like Systems Actually Work</h3>

                <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-primary mb-4">RAG Pipeline</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                      <div>
                        <p className="font-medium">Index Documents</p>
                        <p className="text-sm text-muted-foreground">Split docs → Embed chunks → Store in vector DB</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                      <div>
                        <p className="font-medium">Query Time</p>
                        <p className="text-sm text-muted-foreground">Embed user question → Find similar chunks</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold shrink-0">3</span>
                      <div>
                        <p className="font-medium">Generate Answer</p>
                        <p className="text-sm text-muted-foreground">Inject chunks into prompt → LLM answers with context</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="building-rag" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Building RAG Systems</h3>

                <CodeBlock
                  code={`// Simplified RAG Implementation
class SimpleRAG {
  constructor(llm, vectorDB, embedder) {
    this.llm = llm;
    this.vectorDB = vectorDB;
    this.embedder = embedder;
  }

  async indexDocuments(documents) {
    for (const doc of documents) {
      const chunks = this.splitIntoChunks(doc.text, 500);

      for (const chunk of chunks) {
        const embedding = await this.embedder.embed(chunk);
        await this.vectorDB.insert({
          vector: embedding,
          text: chunk,
          source: doc.source
        });
      }
    }
  }

  async query(question, topK = 3) {
    // 1. Embed question
    const questionEmbed = await this.embedder.embed(question);

    // 2. Find relevant chunks
    const chunks = await this.vectorDB.search(questionEmbed, topK);

    // 3. Build augmented prompt
    const context = chunks.map(c => c.text).join("\\n---\\n");

    const prompt = \`Answer based on context:

Context:
\${context}

Question: \${question}

Answer:\`;

    // 4. Generate
    return await this.llm.complete(prompt);
  }
}`}
                  language="javascript"
                  filename="rag.js"
                />

                <BlogNote type="warning">
                  RAG quality depends heavily on chunking strategy. Too small = lost context.
                  Too large = irrelevant info. Overlap between chunks helps.
                </BlogNote>
              </div>
            </section>

            {/* Inference Optimization */}
            <section id="inference-optimization" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Inference Optimization</h2>

              <div id="batching" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Batching</h3>
                <p className="text-muted-foreground mb-6">
                  GPUs are massively parallel. Processing one request wastes most of that power.
                  Batching groups multiple requests together.
                </p>

                <CodeBlock
                  code={`// Without batching: Sequential
async function processSequential(requests) {
  const results = [];
  for (const req of requests) {
    results.push(await model.inference(req)); // 50ms each
  }
  return results; // 10 requests = 500ms
}

// With batching: Parallel
async function processBatched(requests) {
  const batch = requests.map(r => r.tokens);
  return await model.inference(batch); // 80ms total
  // 10 requests = 80ms! (6x faster)
}`}
                  language="javascript"
                  filename="batching.js"
                />
              </div>

              <div id="quantization" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Quantization</h3>
                <p className="text-muted-foreground mb-6">
                  Models use 32-bit floats by default. Quantization reduces to 16, 8, or
                  even 4 bits. Less memory = faster inference + cheaper hardware.
                </p>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-semibold mb-4">Precision Levels</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border/50">
                      <span className="font-medium">FP32 (Full)</span>
                      <span className="text-sm text-muted-foreground">100% accuracy, 4 bytes/param</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border/50">
                      <span className="font-medium">FP16 (Half)</span>
                      <span className="text-sm text-muted-foreground">~99.9% accuracy, 2 bytes/param</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border/50">
                      <span className="font-medium">INT8</span>
                      <span className="text-sm text-muted-foreground">~99% accuracy, 1 byte/param</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border/50">
                      <span className="font-medium">INT4</span>
                      <span className="text-sm text-muted-foreground">~97% accuracy, 0.5 bytes/param</span>
                    </div>
                  </div>
                </div>

                <CodeBlock
                  code={`# Load model in 8-bit (saves 75% memory!)
from transformers import AutoModelForCausalLM

model = AutoModelForCausalLM.from_pretrained(
    "meta-llama/Llama-2-7b-hf",
    load_in_8bit=True,
    device_map="auto"
)

# Memory comparison for 7B params:
# FP32: 28 GB
# FP16: 14 GB
# INT8:  7 GB
# INT4:  3.5 GB (runs on consumer GPU!)`}
                  language="python"
                  filename="quantization.py"
                />
              </div>

              <div id="gpu-usage" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">On-demand GPU Usage</h3>
                <BlogNote type="tip">
                  Don't run GPUs 24/7. Modern serverless GPU platforms spin up in seconds
                  and charge per-second. Perfect for variable workloads.
                </BlogNote>

                <div className="grid sm:grid-cols-3 gap-6 my-6">
                  <div className="bg-card border border-border rounded-xl p-4">
                    <h4 className="font-semibold text-primary mb-2">Modal</h4>
                    <p className="text-sm text-muted-foreground">
                      Python-first, ~1s cold starts, pay-per-second
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4">
                    <h4 className="font-semibold text-primary mb-2">Replicate</h4>
                    <p className="text-sm text-muted-foreground">
                      Pre-built models, simple API, great for prototypes
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4">
                    <h4 className="font-semibold text-primary mb-2">RunPod</h4>
                    <p className="text-sm text-muted-foreground">
                      Cheap GPUs, serverless + persistent options
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Resources */}
            <section id="resources" className="mb-16">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">Further Learning</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    <span><strong>Pinecone Learning Center</strong> — Best intro to vector databases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    <span><strong>OpenAI Embeddings Guide</strong> — Understanding modern embeddings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    <span><strong>LangChain Docs</strong> — Building RAG applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    <span><strong>Hugging Face Quantization</strong> — Optimizing model inference</span>
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

export default AIAdjacentConcepts;
