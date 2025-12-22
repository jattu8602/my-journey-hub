import { Navigation } from '@/components/Navigation';
import { useLenis } from '@/hooks/useLenis';
import CodeBlock from '@/components/blog/CodeBlock';
import RunnableCode from '@/components/blog/RunnableCode';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNote from '@/components/blog/BlogNote';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const tocItems = [
  { id: 'introduction', title: 'Introduction', level: 2 },
  { id: 'history', title: 'History & Background', level: 2 },
  { id: 'attention-is-all-you-need', title: 'Attention Is All You Need', level: 3 },
  { id: 'architecture', title: 'Transformer Architecture', level: 2 },
  { id: 'self-attention', title: 'Self-Attention Mechanism', level: 3 },
  { id: 'positional-encoding', title: 'Positional Encoding', level: 3 },
  { id: 'encoder-decoder', title: 'Encoder-Decoder Structure', level: 3 },
  { id: 'key-concepts', title: 'Key Concepts', level: 2 },
  { id: 'tokenization', title: 'Tokenization', level: 3 },
  { id: 'embeddings', title: 'Embeddings', level: 3 },
  { id: 'popular-models', title: 'Popular Models', level: 2 },
  { id: 'bert', title: 'BERT', level: 3 },
  { id: 'gpt', title: 'GPT Series', level: 3 },
  { id: 'claude', title: 'Claude', level: 3 },
  { id: 'use-cases', title: 'Use Cases', level: 2 },
  { id: 'implementation', title: 'Implementation', level: 2 },
  { id: 'browser-transformers', title: 'Transformers in Browser', level: 3 },
  { id: 'api-usage', title: 'Using AI APIs', level: 3 },
  { id: 'fine-tuning', title: 'Fine-Tuning', level: 2 },
  { id: 'resources', title: 'Resources', level: 2 },
];

const TransformersInAI = () => {
  useLenis();

  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back button */}
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>

          <div className="flex gap-12">
            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-28">
                <TableOfContents items={tocItems} />
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 max-w-3xl">
              {/* Header */}
              <header className="mb-12">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    December 22, 2024
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    25 min read
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    Nitesh
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                  Transformers in AI<span className="text-accent">.</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A deep dive into the Transformer architecture that revolutionized AI - from attention mechanisms 
                  to GPT, BERT, and beyond. Learn how these models work and how to use them.
                </p>

                {/* Featured image */}
                <div className="mt-8 rounded-xl overflow-hidden border border-border/50">
                  <img 
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop" 
                    alt="AI and Machine Learning"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </header>

              {/* Content */}
              <div className="prose prose-invert max-w-none">
                
                {/* Introduction */}
                <section id="introduction" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Introduction
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Transformers have fundamentally changed the landscape of artificial intelligence. 
                    From powering ChatGPT and Claude to enabling Google Search and language translation, 
                    this architecture has become the foundation of modern AI systems.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Unlike previous neural network architectures like RNNs and LSTMs, Transformers can process 
                    entire sequences in parallel, making them significantly faster and more capable of capturing 
                    long-range dependencies in data.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 my-8">
                    <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <div className="text-3xl font-bold text-accent mb-1">2017</div>
                      <div className="text-xs text-muted-foreground">Year Introduced</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <div className="text-3xl font-bold text-accent mb-1">175B+</div>
                      <div className="text-xs text-muted-foreground">GPT-3 Parameters</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <div className="text-3xl font-bold text-accent mb-1">200K</div>
                      <div className="text-xs text-muted-foreground">Context Window</div>
                    </div>
                  </div>
                </section>

                {/* History */}
                <section id="history" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> History & Background
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Before Transformers, sequence-to-sequence models relied heavily on Recurrent Neural Networks (RNNs) 
                    and Long Short-Term Memory (LSTM) networks. While effective, these architectures had significant limitations:
                  </p>
                  
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                    <li><strong>Sequential processing</strong> - couldn't parallelize computations</li>
                    <li><strong>Vanishing gradients</strong> - struggled with long sequences</li>
                    <li><strong>Limited memory</strong> - difficulty capturing distant relationships</li>
                    <li><strong>Slow training</strong> - each step depended on the previous one</li>
                  </ul>

                  <div className="rounded-xl overflow-hidden border border-border/50 my-6">
                    <img 
                      src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop" 
                      alt="Neural Network Visualization"
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <section id="attention-is-all-you-need" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Attention Is All You Need</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      In June 2017, researchers at Google published the groundbreaking paper 
                      <em> "Attention Is All You Need"</em>. This paper introduced the Transformer architecture, 
                      which replaced recurrence entirely with attention mechanisms.
                    </p>
                    
                    <BlogNote type="info" title="The Original Authors">
                      The paper was authored by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, 
                      Llion Jones, Aidan N. Gomez, Łukasz Kaiser, and Illia Polosukhin.
                    </BlogNote>
                  </section>
                </section>

                {/* Architecture */}
                <section id="architecture" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Transformer Architecture
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The Transformer architecture consists of several key components working together. 
                    Let's break down each one:
                  </p>

                  <div className="rounded-xl overflow-hidden border border-border/50 my-6">
                    <img 
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop" 
                      alt="Architecture Diagram"
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <section id="self-attention" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Self-Attention Mechanism</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Self-attention (or scaled dot-product attention) is the core innovation of Transformers. 
                      It allows the model to weigh the importance of different parts of the input when processing each element.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The attention formula is:
                    </p>

                    <div className="p-4 rounded-lg bg-card/50 border border-border/50 my-4 text-center">
                      <code className="text-lg text-accent font-mono">
                        Attention(Q, K, V) = softmax(QK<sup>T</sup> / √d<sub>k</sub>) V
                      </code>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Where:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                      <li><strong>Q (Query)</strong> - what we're looking for</li>
                      <li><strong>K (Key)</strong> - what we're comparing against</li>
                      <li><strong>V (Value)</strong> - the actual information to retrieve</li>
                      <li><strong>d<sub>k</sub></strong> - dimension of keys (for scaling)</li>
                    </ul>

                    <CodeBlock
                      code={`import numpy as np

def scaled_dot_product_attention(Q, K, V):
    """
    Compute scaled dot-product attention.
    
    Args:
        Q: Query matrix (seq_len, d_k)
        K: Key matrix (seq_len, d_k)
        V: Value matrix (seq_len, d_v)
    
    Returns:
        Attention output and attention weights
    """
    d_k = K.shape[-1]
    
    # Compute attention scores
    scores = np.matmul(Q, K.T) / np.sqrt(d_k)
    
    # Apply softmax to get attention weights
    attention_weights = softmax(scores)
    
    # Multiply by values
    output = np.matmul(attention_weights, V)
    
    return output, attention_weights

def softmax(x):
    exp_x = np.exp(x - np.max(x, axis=-1, keepdims=True))
    return exp_x / np.sum(exp_x, axis=-1, keepdims=True)`}
                      language="python"
                      filename="attention.py"
                    />

                    <BlogNote type="tip" title="Multi-Head Attention">
                      In practice, Transformers use multi-head attention, which runs multiple attention 
                      operations in parallel. This allows the model to attend to information from different 
                      representation subspaces at different positions.
                    </BlogNote>

                    <CodeBlock
                      code={`class MultiHeadAttention:
    def __init__(self, d_model, num_heads):
        self.num_heads = num_heads
        self.d_model = d_model
        self.d_k = d_model // num_heads
        
        # Linear projections for Q, K, V
        self.W_q = Linear(d_model, d_model)
        self.W_k = Linear(d_model, d_model)
        self.W_v = Linear(d_model, d_model)
        self.W_o = Linear(d_model, d_model)
    
    def forward(self, query, key, value, mask=None):
        batch_size = query.shape[0]
        
        # Linear projections
        Q = self.W_q(query)
        K = self.W_k(key)
        V = self.W_v(value)
        
        # Split into heads
        Q = Q.view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        K = K.view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        V = V.view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        
        # Apply attention
        attn_output = scaled_dot_product_attention(Q, K, V, mask)
        
        # Concatenate heads
        output = attn_output.transpose(1, 2).contiguous().view(
            batch_size, -1, self.d_model
        )
        
        return self.W_o(output)`}
                      language="python"
                      filename="multi_head_attention.py"
                    />
                  </section>

                  <section id="positional-encoding" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Positional Encoding</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Since Transformers process all positions in parallel, they need a way to understand 
                      the order of the sequence. Positional encodings are added to the input embeddings 
                      to inject position information.
                    </p>

                    <CodeBlock
                      code={`import numpy as np

def positional_encoding(seq_length, d_model):
    """
    Generate positional encodings using sine and cosine functions.
    
    Args:
        seq_length: Length of the sequence
        d_model: Dimension of the model
    
    Returns:
        Positional encoding matrix (seq_length, d_model)
    """
    position = np.arange(seq_length)[:, np.newaxis]
    div_term = np.exp(
        np.arange(0, d_model, 2) * (-np.log(10000.0) / d_model)
    )
    
    pe = np.zeros((seq_length, d_model))
    pe[:, 0::2] = np.sin(position * div_term)  # Even indices
    pe[:, 1::2] = np.cos(position * div_term)  # Odd indices
    
    return pe

# Example: Generate positional encoding
pe = positional_encoding(seq_length=100, d_model=512)
print(f"Shape: {pe.shape}")  # (100, 512)`}
                      language="python"
                      filename="positional_encoding.py"
                    />
                  </section>

                  <section id="encoder-decoder" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Encoder-Decoder Structure</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The original Transformer uses an encoder-decoder architecture:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5">
                        <h4 className="font-bold text-blue-400 mb-2">Encoder</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Processes input sequence</li>
                          <li>• Self-attention layers</li>
                          <li>• Feed-forward networks</li>
                          <li>• Bidirectional context</li>
                          <li>• Used by: BERT, RoBERTa</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg border border-purple-500/30 bg-purple-500/5">
                        <h4 className="font-bold text-purple-400 mb-2">Decoder</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Generates output sequence</li>
                          <li>• Masked self-attention</li>
                          <li>• Cross-attention to encoder</li>
                          <li>• Autoregressive (left-to-right)</li>
                          <li>• Used by: GPT, Claude</li>
                        </ul>
                      </div>
                    </div>

                    <CodeBlock
                      code={`class TransformerBlock:
    """Single Transformer block with attention and FFN."""
    
    def __init__(self, d_model, num_heads, d_ff, dropout=0.1):
        self.attention = MultiHeadAttention(d_model, num_heads)
        self.norm1 = LayerNorm(d_model)
        self.norm2 = LayerNorm(d_model)
        self.ffn = FeedForward(d_model, d_ff)
        self.dropout = Dropout(dropout)
    
    def forward(self, x, mask=None):
        # Self-attention with residual connection
        attn_output = self.attention(x, x, x, mask)
        x = self.norm1(x + self.dropout(attn_output))
        
        # Feed-forward with residual connection
        ffn_output = self.ffn(x)
        x = self.norm2(x + self.dropout(ffn_output))
        
        return x

class FeedForward:
    """Position-wise Feed-Forward Network."""
    
    def __init__(self, d_model, d_ff):
        self.linear1 = Linear(d_model, d_ff)
        self.linear2 = Linear(d_ff, d_model)
        self.activation = GELU()
    
    def forward(self, x):
        return self.linear2(self.activation(self.linear1(x)))`}
                      language="python"
                      filename="transformer_block.py"
                    />
                  </section>
                </section>

                {/* Key Concepts */}
                <section id="key-concepts" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Key Concepts
                  </h2>

                  <section id="tokenization" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Tokenization</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Before text can be processed by a Transformer, it must be converted into tokens. 
                      Modern models use subword tokenization methods like BPE (Byte Pair Encoding) or 
                      SentencePiece.
                    </p>

                    <CodeBlock
                      code={`# Example tokenization with different methods

# Word-level tokenization
text = "I love machine learning!"
word_tokens = text.split()
# ['I', 'love', 'machine', 'learning!']

# Subword tokenization (BPE-like)
# "unbelievable" → ["un", "believ", "able"]
# Handles rare words by breaking into known subwords

# Common tokenizers:
# - GPT: tiktoken (BPE)
# - BERT: WordPiece
# - T5/LLaMA: SentencePiece

from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("gpt2")
tokens = tokenizer.encode("Hello, how are you?")
# [15496, 11, 703, 389, 345, 30]

decoded = tokenizer.decode(tokens)
# "Hello, how are you?"`}
                      language="python"
                      filename="tokenization.py"
                    />

                    <RunnableCode
                      code={`// Simple tokenization example
const text = "Transformers are amazing!";

// Simple word tokenization
const tokens = text
  .toLowerCase()
  .replace(/[^a-z0-9\\s]/g, '')
  .split(' ');

tokens.join(' → ');`}
                      language="javascript"
                      filename="Interactive Tokenizer"
                      onRun={() => {
                        const text = "Transformers are amazing!";
                        const tokens = text
                          .toLowerCase()
                          .replace(/[^a-z0-9\s]/g, '')
                          .split(' ');
                        return `Tokens: [${tokens.map(t => `"${t}"`).join(', ')}]\nCount: ${tokens.length}`;
                      }}
                    />
                  </section>

                  <section id="embeddings" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Embeddings</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Tokens are converted to dense vector representations called embeddings. 
                      These capture semantic meaning in a high-dimensional space where similar 
                      concepts are closer together.
                    </p>

                    <CodeBlock
                      code={`import numpy as np

class TokenEmbedding:
    def __init__(self, vocab_size, d_model):
        # Initialize embedding matrix
        self.embedding = np.random.randn(vocab_size, d_model) * 0.02
    
    def forward(self, token_ids):
        # Look up embeddings for each token
        return self.embedding[token_ids]

# Example
vocab_size = 50000
d_model = 768  # BERT-base dimension

embedding = TokenEmbedding(vocab_size, d_model)
token_ids = [101, 2054, 2003, 1037, 19081, 102]  # "What is a transformer"
vectors = embedding.forward(token_ids)

print(f"Input shape: {len(token_ids)} tokens")
print(f"Output shape: {vectors.shape}")  # (6, 768)`}
                      language="python"
                      filename="embeddings.py"
                    />

                    <BlogNote type="info" title="Embedding Dimensions">
                      Common embedding dimensions: BERT-base uses 768, GPT-2 uses 768-1600, 
                      and larger models like GPT-4 use even higher dimensions for richer representations.
                    </BlogNote>
                  </section>
                </section>

                {/* Popular Models */}
                <section id="popular-models" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Popular Models
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The Transformer architecture has spawned many influential models. Here are some of the most important:
                  </p>

                  <div className="rounded-xl overflow-hidden border border-border/50 my-6">
                    <img 
                      src="https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&h=400&fit=crop" 
                      alt="AI Models"
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <section id="bert" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">BERT (Bidirectional Encoder Representations from Transformers)</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Released by Google in 2018, BERT revolutionized NLP by using bidirectional context. 
                      It's trained with masked language modeling (MLM) and next sentence prediction (NSP).
                    </p>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 mb-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Architecture:</span>
                          <span className="text-foreground ml-2">Encoder-only</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Parameters:</span>
                          <span className="text-foreground ml-2">110M (base) / 340M (large)</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Best for:</span>
                          <span className="text-foreground ml-2">Classification, NER, Q&A</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Context:</span>
                          <span className="text-foreground ml-2">512 tokens</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="gpt" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">GPT Series (Generative Pre-trained Transformer)</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      OpenAI's GPT models are decoder-only Transformers trained for text generation. 
                      Each version has been significantly larger and more capable than the last.
                    </p>

                    <div className="space-y-3 mb-4">
                      <div className="p-3 rounded-lg border border-border/50 bg-card/50 flex justify-between items-center">
                        <span className="font-medium text-foreground">GPT-1 (2018)</span>
                        <span className="text-muted-foreground text-sm">117M parameters</span>
                      </div>
                      <div className="p-3 rounded-lg border border-border/50 bg-card/50 flex justify-between items-center">
                        <span className="font-medium text-foreground">GPT-2 (2019)</span>
                        <span className="text-muted-foreground text-sm">1.5B parameters</span>
                      </div>
                      <div className="p-3 rounded-lg border border-border/50 bg-card/50 flex justify-between items-center">
                        <span className="font-medium text-foreground">GPT-3 (2020)</span>
                        <span className="text-muted-foreground text-sm">175B parameters</span>
                      </div>
                      <div className="p-3 rounded-lg border border-accent/50 bg-accent/5 flex justify-between items-center">
                        <span className="font-medium text-accent">GPT-4 (2023)</span>
                        <span className="text-muted-foreground text-sm">~1.7T parameters (estimated)</span>
                      </div>
                    </div>
                  </section>

                  <section id="claude" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Claude (Anthropic)</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Claude is a family of AI assistants created by Anthropic, designed to be helpful, 
                      harmless, and honest. It uses Constitutional AI training methods.
                    </p>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 mb-4">
                      <h4 className="font-bold text-foreground mb-3">Latest Claude Models:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <code className="text-accent">claude-sonnet-4-5</code>
                          <span className="text-muted-foreground">Most capable & intelligent</span>
                        </div>
                        <div className="flex justify-between">
                          <code className="text-accent">claude-opus-4-1-20250805</code>
                          <span className="text-muted-foreground">Highly intelligent (premium)</span>
                        </div>
                        <div className="flex justify-between">
                          <code className="text-accent">claude-3-5-haiku-20241022</code>
                          <span className="text-muted-foreground">Fastest for quick responses</span>
                        </div>
                      </div>
                    </div>

                    <BlogNote type="tip" title="Context Window">
                      Claude 4 models support a 200K token context window, allowing them to process 
                      entire codebases, long documents, or extensive conversation histories.
                    </BlogNote>
                  </section>
                </section>

                {/* Use Cases */}
                <section id="use-cases" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Use Cases
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Transformers power a wide range of applications across different domains:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                      <h4 className="font-bold text-foreground mb-2">📝 Natural Language</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Text generation & summarization</li>
                        <li>• Translation & localization</li>
                        <li>• Sentiment analysis</li>
                        <li>• Question answering</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                      <h4 className="font-bold text-foreground mb-2">💻 Code & Development</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Code generation & completion</li>
                        <li>• Bug detection & fixing</li>
                        <li>• Documentation generation</li>
                        <li>• Code review assistance</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                      <h4 className="font-bold text-foreground mb-2">🖼️ Vision & Multimodal</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Image classification (ViT)</li>
                        <li>• Image generation (DALL-E)</li>
                        <li>• Visual question answering</li>
                        <li>• Document understanding</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                      <h4 className="font-bold text-foreground mb-2">🔊 Audio & Speech</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Speech recognition (Whisper)</li>
                        <li>• Text-to-speech synthesis</li>
                        <li>• Music generation</li>
                        <li>• Audio classification</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Implementation */}
                <section id="implementation" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Implementation
                  </h2>

                  <section id="browser-transformers" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Transformers in the Browser</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      You can run Transformer models directly in the browser using the 
                      <code className="px-1.5 py-0.5 bg-secondary rounded text-sm mx-1">@huggingface/transformers</code> 
                      library with WebGPU acceleration.
                    </p>

                    <CodeBlock
                      code={`import { pipeline } from "@huggingface/transformers";

// Text Embeddings with WebGPU
const extractor = await pipeline(
  "feature-extraction",
  "mixedbread-ai/mxbai-embed-xsmall-v1",
  { device: "webgpu" }
);

const texts = ["Hello world!", "This is an example."];
const embeddings = await extractor(texts, { 
  pooling: "mean", 
  normalize: true 
});

console.log(embeddings.tolist());
// [[-0.016..., 0.032...], [0.090..., 0.072...]]`}
                      language="typescript"
                      filename="embeddings-browser.ts"
                    />

                    <CodeBlock
                      code={`import { pipeline } from "@huggingface/transformers";

// Speech Recognition with Whisper
const transcriber = await pipeline(
  "automatic-speech-recognition",
  "onnx-community/whisper-tiny.en",
  { device: "webgpu" }
);

const audioUrl = "https://example.com/audio.wav";
const result = await transcriber(audioUrl);

console.log(result);
// { text: "Hello, this is a transcription test." }`}
                      language="typescript"
                      filename="speech-recognition.ts"
                    />

                    <CodeBlock
                      code={`import { pipeline } from "@huggingface/transformers";

// Image Classification
const classifier = await pipeline(
  "image-classification",
  "onnx-community/mobilenetv4_conv_small.e2400_r224_in1k",
  { device: "webgpu" }
);

const imageUrl = "https://example.com/cat.jpg";
const results = await classifier(imageUrl);

console.log(results);
// [
//   { label: 'tabby cat', score: 0.89 },
//   { label: 'tiger cat', score: 0.08 },
//   ...
// ]`}
                      language="typescript"
                      filename="image-classification.ts"
                    />

                    <BlogNote type="warning" title="WebGPU Support">
                      WebGPU is supported in Chrome 113+ and Edge 113+. For older browsers, 
                      the library falls back to WebGL or CPU execution.
                    </BlogNote>
                  </section>

                  <section id="api-usage" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Using AI APIs</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      For production applications, you'll often use cloud-hosted APIs. Here's how to 
                      call different AI providers:
                    </p>

                    <CodeBlock
                      code={`// OpenAI API
const response = await fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": \`Bearer \${OPENAI_API_KEY}\`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Explain transformers in AI." }
    ],
    max_tokens: 500,
  }),
});

const data = await response.json();
console.log(data.choices[0].message.content);`}
                      language="typescript"
                      filename="openai-api.ts"
                    />

                    <CodeBlock
                      code={`// Anthropic Claude API
const response = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: {
    "x-api-key": ANTHROPIC_API_KEY,
    "anthropic-version": "2023-06-01",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "claude-sonnet-4-5",
    max_tokens: 1024,
    messages: [
      { role: "user", content: "Explain the attention mechanism." }
    ],
  }),
});

const data = await response.json();
console.log(data.content[0].text);`}
                      language="typescript"
                      filename="claude-api.ts"
                    />

                    <RunnableCode
                      code={`// Simulating a chat completion response
const simulateAPICall = async (prompt) => {
  // In reality, this would call an AI API
  const responses = {
    "hello": "Hello! How can I help you today?",
    "what is ai": "AI (Artificial Intelligence) is...",
    "default": "I'm a simulated AI response!"
  };
  
  const key = prompt.toLowerCase();
  return responses[key] || responses.default;
};

await simulateAPICall("Hello");`}
                      language="javascript"
                      filename="Simulated AI Call"
                      onRun={() => {
                        return "AI Response: Hello! How can I help you today?\n\n[This is a simulated response - real APIs require authentication]";
                      }}
                    />
                  </section>
                </section>

                {/* Fine-Tuning */}
                <section id="fine-tuning" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Fine-Tuning
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Fine-tuning adapts a pre-trained model to your specific task or domain. 
                    Here are the main approaches:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                      <h4 className="font-bold text-foreground mb-2">Full Fine-Tuning</h4>
                      <p className="text-sm text-muted-foreground">
                        Update all model parameters. Requires significant compute but achieves best results.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                      <h4 className="font-bold text-foreground mb-2">LoRA (Low-Rank Adaptation)</h4>
                      <p className="text-sm text-muted-foreground">
                        Train small adapter layers while freezing the base model. Much more efficient.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                      <h4 className="font-bold text-foreground mb-2">Prompt Tuning</h4>
                      <p className="text-sm text-muted-foreground">
                        Learn soft prompts that guide the frozen model. Extremely parameter-efficient.
                      </p>
                    </div>
                  </div>

                  <CodeBlock
                    code={`from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import LoraConfig, get_peft_model

# Load base model
model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-2-7b")
tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-2-7b")

# Configure LoRA
lora_config = LoraConfig(
    r=16,                    # Rank of update matrices
    lora_alpha=32,           # Scaling factor
    target_modules=["q_proj", "v_proj"],  # Which layers to adapt
    lora_dropout=0.1,
    bias="none",
)

# Apply LoRA to model
model = get_peft_model(model, lora_config)

# Check trainable parameters
model.print_trainable_parameters()
# trainable params: 4,194,304 || all params: 6,742,609,920 
# || trainable%: 0.062`}
                    language="python"
                    filename="lora_finetuning.py"
                  />
                </section>

                {/* Resources */}
                <section id="resources" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Resources
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Continue your learning journey with these resources:
                  </p>

                  <div className="p-6 rounded-xl border border-accent/30 bg-accent/5 mb-6">
                    <h4 className="font-display font-bold text-foreground mb-4">📚 Essential Reading</h4>
                    <ul className="text-muted-foreground space-y-3">
                      <li>
                        <a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener noreferrer" 
                           className="text-accent hover:underline">
                          Attention Is All You Need (Original Paper)
                        </a>
                        <span className="text-sm ml-2">— The foundational paper</span>
                      </li>
                      <li>
                        <a href="https://huggingface.co/docs/transformers" target="_blank" rel="noopener noreferrer"
                           className="text-accent hover:underline">
                          Hugging Face Transformers Documentation
                        </a>
                        <span className="text-sm ml-2">— Comprehensive library docs</span>
                      </li>
                      <li>
                        <a href="https://jalammar.github.io/illustrated-transformer/" target="_blank" rel="noopener noreferrer"
                           className="text-accent hover:underline">
                          The Illustrated Transformer
                        </a>
                        <span className="text-sm ml-2">— Visual explanation by Jay Alammar</span>
                      </li>
                      <li>
                        <a href="https://docs.anthropic.com/" target="_blank" rel="noopener noreferrer"
                           className="text-accent hover:underline">
                          Anthropic Claude Documentation
                        </a>
                        <span className="text-sm ml-2">— Claude API guides</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl border border-border/50 bg-card/50">
                    <h4 className="font-display font-bold text-foreground mb-4">🎓 Courses & Tutorials</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Stanford CS224N: NLP with Deep Learning</li>
                      <li>• fast.ai: Practical Deep Learning for Coders</li>
                      <li>• Hugging Face NLP Course (Free)</li>
                      <li>• Andrej Karpathy's YouTube tutorials</li>
                    </ul>
                  </div>

                  <BlogNote type="success" title="You're Ready!">
                    You now have a solid foundation in Transformer architecture. Start experimenting 
                    with Hugging Face models or build applications using AI APIs!
                  </BlogNote>
                </section>

              </div>
            </main>
          </div>
        </div>
      </article>
    </div>
  );
};

export default TransformersInAI;
