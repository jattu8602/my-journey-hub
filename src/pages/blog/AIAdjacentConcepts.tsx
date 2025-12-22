import { Navigation } from '@/components/Navigation';
import { useLenis } from '@/hooks/useLenis';
import CodeBlock from '@/components/blog/CodeBlock';
import BlogNote from '@/components/blog/BlogNote';
import TableOfContents from '@/components/blog/TableOfContents';
import { ArrowLeft, Calendar, Clock, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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

const AIAdjacentConcepts = () => {
  useLenis();
  const [showMobileToc, setShowMobileToc] = useState(false);

  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Back button */}
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-6 sm:mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>

          {/* Mobile TOC Toggle */}
          <button
            onClick={() => setShowMobileToc(!showMobileToc)}
            className="lg:hidden flex items-center gap-2 text-sm text-muted-foreground mb-4 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
          >
            {showMobileToc ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            {showMobileToc ? 'Hide Contents' : 'Table of Contents'}
          </button>

          {/* Mobile TOC */}
          {showMobileToc && (
            <div className="lg:hidden mb-6 p-4 rounded-xl bg-card/50 border border-border/50">
              <TableOfContents items={tocItems} onItemClick={() => setShowMobileToc(false)} />
            </div>
          )}

          <div className="flex gap-8 lg:gap-12">
            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-28">
                <TableOfContents items={tocItems} />
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 min-w-0 max-w-3xl">
              {/* Header */}
              <header className="mb-8 sm:mb-12">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    December 22, 2024
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    35 min read
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Nitesh
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6 leading-tight">
                  AI-Adjacent Concepts<span className="text-accent">.</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Understanding the core concepts behind modern AI systems — vector databases, embeddings, 
                  RAG architecture, and inference optimization — all explained without heavy math.
                </p>
              </header>

              {/* Content */}
              <div className="blog-content">
                {/* Introduction */}
                <section id="introduction">
                  <h2>Introduction</h2>
                  <p>
                    You don't need a PhD in machine learning to build AI-powered applications. 
                    Understanding a few key concepts unlocks the ability to build search engines, 
                    chatbots, recommendation systems, and more.
                  </p>
                  <p>
                    This guide focuses on the practical engineering side of AI — the concepts that 
                    let you build real products without diving deep into neural network architectures.
                  </p>
                </section>

                {/* Vector Databases */}
                <section id="vector-databases">
                  <h2>Vector Databases</h2>
                  <p>
                    Traditional databases excel at exact matches — finding a user by ID or filtering 
                    products by price. But what if you want to find "similar" items? That's where 
                    vector databases shine.
                  </p>

                  <div id="similarity-search">
                    <h3>Similarity Search</h3>
                    <p>
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

                  <div id="faiss-milvus">
                    <h3>FAISS / Milvus Concepts</h3>
                    <BlogNote type="info">
                      The naive approach (comparing every vector) is O(n). Real vector databases 
                      use clever indexing to make this nearly O(1) for millions of vectors.
                    </BlogNote>

                    <p>Key techniques used by production vector databases:</p>
                    <ul>
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
                <section id="embeddings">
                  <h2>Embeddings Internals</h2>
                  <p>
                    Embeddings are the bridge between human-understandable content (text, images) 
                    and mathematical operations. They convert meaning into numbers.
                  </p>

                  <div id="cosine-euclidean">
                    <h3>Cosine Similarity vs Euclidean Distance</h3>
                    
                    <div className="bg-card/50 border border-border rounded-xl p-4 sm:p-6 my-6">
                      <h4 className="font-semibold mb-4">Two Ways to Measure "Closeness"</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-accent mb-2">Euclidean Distance</p>
                          <p className="text-sm text-muted-foreground mb-2">
                            Straight-line distance. Like measuring with a ruler.
                          </p>
                          <code className="text-xs bg-muted px-2 py-1 rounded">
                            d = √[(x₁-x₂)² + (y₁-y₂)²]
                          </code>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-accent mb-2">Cosine Similarity</p>
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

                  <div id="why-cluster">
                    <h3>Why Embeddings Cluster Meaning</h3>
                    <p>
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
                <section id="rag">
                  <h2>RAG (Retrieval Augmented Generation)</h2>
                  <p>
                    LLMs have a knowledge cutoff and can hallucinate. RAG solves this by 
                    retrieving relevant documents and injecting them into the prompt.
                  </p>

                  <div id="how-chatgpt-works">
                    <h3>How ChatGPT-like Systems Actually Work</h3>
                    
                    <div className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-xl p-4 sm:p-6 my-6">
                      <h4 className="font-semibold text-accent mb-4">RAG Pipeline</h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs sm:text-sm font-bold shrink-0">1</span>
                          <div>
                            <p className="font-medium text-sm sm:text-base">Index Documents</p>
                            <p className="text-xs sm:text-sm text-muted-foreground">Split docs → Embed chunks → Store in vector DB</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 sm:gap-4">
                          <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs sm:text-sm font-bold shrink-0">2</span>
                          <div>
                            <p className="font-medium text-sm sm:text-base">Query Time</p>
                            <p className="text-xs sm:text-sm text-muted-foreground">Embed user question → Find similar chunks</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 sm:gap-4">
                          <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs sm:text-sm font-bold shrink-0">3</span>
                          <div>
                            <p className="font-medium text-sm sm:text-base">Generate Answer</p>
                            <p className="text-xs sm:text-sm text-muted-foreground">Inject chunks into prompt → LLM answers with context</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="building-rag">
                    <h3>Building RAG Systems</h3>

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
                <section id="inference-optimization">
                  <h2>Inference Optimization</h2>
                  
                  <div id="batching">
                    <h3>Batching</h3>
                    <p>
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

                  <div id="quantization">
                    <h3>Quantization</h3>
                    <p>
                      Models use 32-bit floats by default. Quantization reduces to 16, 8, or 
                      even 4 bits. Less memory = faster inference + cheaper hardware.
                    </p>

                    <div className="bg-card/50 border border-border rounded-xl p-4 sm:p-6 my-6">
                      <h4 className="font-semibold mb-4">Precision Levels</h4>
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 sm:p-3 bg-background rounded-lg gap-1">
                          <span className="font-medium text-sm">FP32 (Full)</span>
                          <span className="text-xs sm:text-sm text-muted-foreground">100% accuracy, 4 bytes/param</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 sm:p-3 bg-background rounded-lg gap-1">
                          <span className="font-medium text-sm">FP16 (Half)</span>
                          <span className="text-xs sm:text-sm text-muted-foreground">~99.9% accuracy, 2 bytes/param</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 sm:p-3 bg-background rounded-lg gap-1">
                          <span className="font-medium text-sm">INT8</span>
                          <span className="text-xs sm:text-sm text-muted-foreground">~99% accuracy, 1 byte/param</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 sm:p-3 bg-background rounded-lg gap-1">
                          <span className="font-medium text-sm">INT4</span>
                          <span className="text-xs sm:text-sm text-muted-foreground">~97% accuracy, 0.5 bytes/param</span>
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

                  <div id="gpu-usage">
                    <h3>On-demand GPU Usage</h3>
                    <BlogNote type="tip">
                      Don't run GPUs 24/7. Modern serverless GPU platforms spin up in seconds 
                      and charge per-second. Perfect for variable workloads.
                    </BlogNote>

                    <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 my-6">
                      <div className="bg-card border border-border rounded-xl p-3 sm:p-4">
                        <h4 className="font-semibold text-accent text-sm sm:text-base mb-2">Modal</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Python-first, ~1s cold starts, pay-per-second
                        </p>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-3 sm:p-4">
                        <h4 className="font-semibold text-accent text-sm sm:text-base mb-2">Replicate</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Pre-built models, simple API, great for prototypes
                        </p>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-3 sm:p-4">
                        <h4 className="font-semibold text-accent text-sm sm:text-base mb-2">RunPod</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Cheap GPUs, serverless + persistent options
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Resources */}
                <section id="resources">
                  <h2>Resources</h2>
                  <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-transparent border border-accent/20 rounded-2xl p-4 sm:p-8">
                    <h3 className="text-lg sm:text-xl font-bold mb-4">Further Learning</h3>
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="text-accent">→</span>
                        <span><strong>Pinecone Learning Center</strong> — Best intro to vector databases</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="text-accent">→</span>
                        <span><strong>OpenAI Embeddings Guide</strong> — Understanding modern embeddings</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="text-accent">→</span>
                        <span><strong>LangChain Docs</strong> — Building RAG applications</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="text-accent">→</span>
                        <span><strong>Hugging Face Quantization</strong> — Optimizing model inference</span>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AIAdjacentConcepts;
