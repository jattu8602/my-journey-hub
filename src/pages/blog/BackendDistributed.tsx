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
  { id: 'event-driven', title: 'Event-Driven Architecture', level: 2 },
  { id: 'kafka-thinking', title: 'Kafka-Style Thinking', level: 3 },
  { id: 'async-systems', title: 'Async Systems', level: 3 },
  { id: 'event-sourcing', title: 'Event Sourcing', level: 3 },
  { id: 'consistency', title: 'Consistency Models', level: 2 },
  { id: 'strong-eventual', title: 'Strong vs Eventual', level: 3 },
  { id: 'cap-theorem', title: 'CAP Theorem (Practical)', level: 3 },
  { id: 'real-world-tradeoffs', title: 'Real-World Tradeoffs', level: 3 },
  { id: 'rate-limiting', title: 'Rate Limiting Algorithms', level: 2 },
  { id: 'token-bucket', title: 'Token Bucket', level: 3 },
  { id: 'leaky-bucket', title: 'Leaky Bucket', level: 3 },
  { id: 'sliding-window', title: 'Sliding Window', level: 3 },
  { id: 'idempotency', title: 'Idempotency in APIs', level: 2 },
  { id: 'why-idempotency', title: 'Why Payment Systems Never Double-Charge', level: 3 },
  { id: 'implementing-idempotency', title: 'Implementing Idempotency', level: 3 },
  { id: 'resources', title: 'Resources', level: 2 },
];

const BackendDistributed = () => {
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
                    40 min read
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    Nitesh
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                  Backend & Distributed Systems<span className="text-accent">.</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Master event-driven architecture, consistency models, rate limiting algorithms, 
                  and idempotency patterns used in production systems at scale.
                </p>

                {/* Featured image */}
                <div className="mt-8 rounded-xl overflow-hidden border border-border/50">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop" 
                    alt="Server Infrastructure"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>

                {/* Difficulty badge */}
                <div className="flex gap-3 mt-6">
                  <span className="px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-medium border border-red-500/20">
                    🔥 Advanced
                  </span>
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
                    Backend Engineering
                  </span>
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
                    Building systems that handle millions of requests requires understanding patterns 
                    that go beyond traditional CRUD operations. This guide covers the core concepts 
                    that power systems at Netflix, Stripe, and other high-scale companies.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    These patterns solve real problems: How do you prevent duplicate payments? 
                    How do you handle 100,000 requests per second? How do you keep data consistent 
                    across multiple databases?
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <div className="text-2xl font-bold text-green-400 mb-1">Events</div>
                      <div className="text-xs text-muted-foreground">Decouple Systems</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <div className="text-2xl font-bold text-blue-400 mb-1">CAP</div>
                      <div className="text-xs text-muted-foreground">Tradeoffs</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <div className="text-2xl font-bold text-orange-400 mb-1">Rate</div>
                      <div className="text-xs text-muted-foreground">Protection</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <div className="text-2xl font-bold text-purple-400 mb-1">Idem</div>
                      <div className="text-xs text-muted-foreground">Safety</div>
                    </div>
                  </div>
                </section>

                {/* Event-Driven Architecture */}
                <section id="event-driven" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Event-Driven Architecture
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In event-driven systems, components communicate by producing and consuming events 
                    rather than making direct API calls. This creates loosely coupled systems that 
                    are easier to scale and maintain.
                  </p>

                  <section id="kafka-thinking" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Kafka-Style Thinking</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Apache Kafka revolutionized how we think about event streaming. Instead of 
                      point-to-point messaging, Kafka uses a distributed commit log that enables 
                      replay, multiple consumers, and persistent storage.
                    </p>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">Traditional vs Event-Driven</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`TRADITIONAL (Synchronous):
┌─────────┐    HTTP     ┌─────────┐    HTTP     ┌─────────┐
│ Order   │ ──────────→ │ Payment │ ──────────→ │ Shipping│
│ Service │ ←────────── │ Service │ ←────────── │ Service │
└─────────┘   response  └─────────┘   response  └─────────┘

Problems:
- Order Service blocked until all complete
- If Payment is down, Order fails
- Tight coupling between services

EVENT-DRIVEN (Asynchronous):
┌─────────┐             ┌─────────────────────────────┐
│ Order   │ ──publish──→│         Kafka               │
│ Service │             │  ┌─────────────────────┐    │
└─────────┘             │  │ order.created topic │    │
                        │  └─────────────────────┘    │
                        └──────────┬──────────────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              ↓                    ↓                    ↓
        ┌─────────┐          ┌─────────┐          ┌─────────┐
        │ Payment │          │ Shipping│          │ Email   │
        │ Service │          │ Service │          │ Service │
        └─────────┘          └─────────┘          └─────────┘

Benefits:
- Order Service returns immediately
- Services can fail and recover independently
- Easy to add new consumers`}
                      </pre>
                    </div>

                    <CodeBlock
                      code={`// Kafka-style Event Producer
interface OrderEvent {
  eventId: string;
  type: 'ORDER_CREATED' | 'ORDER_UPDATED' | 'ORDER_CANCELLED';
  timestamp: Date;
  data: {
    orderId: string;
    userId: string;
    items: Array<{ productId: string; quantity: number; price: number }>;
    total: number;
  };
}

class EventProducer {
  private kafka: KafkaClient;
  
  async publishOrderEvent(order: Order): Promise<void> {
    const event: OrderEvent = {
      eventId: crypto.randomUUID(),
      type: 'ORDER_CREATED',
      timestamp: new Date(),
      data: {
        orderId: order.id,
        userId: order.userId,
        items: order.items,
        total: order.total,
      },
    };
    
    // Publish to Kafka topic
    await this.kafka.produce('order.events', {
      key: order.id,  // Ensures all events for same order go to same partition
      value: JSON.stringify(event),
    });
  }
}

// Consumer in Payment Service
class PaymentConsumer {
  async handleOrderCreated(event: OrderEvent): Promise<void> {
    // Idempotent check - already processed?
    if (await this.isProcessed(event.eventId)) {
      return;
    }
    
    // Process payment
    await this.processPayment(event.data);
    
    // Mark as processed
    await this.markProcessed(event.eventId);
    
    // Publish new event
    await this.publishPaymentCompleted(event.data.orderId);
  }
}`}
                      language="typescript"
                      filename="event_producer.ts"
                    />

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                        <h4 className="font-bold text-green-400 mb-2">Key Kafka Concepts</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• <strong>Topics:</strong> Named streams of events</li>
                          <li>• <strong>Partitions:</strong> Parallel processing units</li>
                          <li>• <strong>Consumer Groups:</strong> Load balancing</li>
                          <li>• <strong>Offsets:</strong> Position tracking</li>
                          <li>• <strong>Retention:</strong> Event storage duration</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5">
                        <h4 className="font-bold text-blue-400 mb-2">When to Use Events</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Multiple services need same data</li>
                          <li>• Operations can be async</li>
                          <li>• You need audit trails</li>
                          <li>• Services should be independent</li>
                          <li>• High throughput required</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="async-systems" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Async Systems</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Asynchronous processing is crucial for building responsive, scalable systems. 
                      Instead of blocking on slow operations, queue them for background processing.
                    </p>

                    <CodeBlock
                      code={`// Async Job Queue Pattern
interface Job<T> {
  id: string;
  type: string;
  payload: T;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  attempts: number;
  maxAttempts: number;
  createdAt: Date;
  processAfter: Date;
}

class JobQueue {
  private redis: Redis;
  
  async enqueue<T>(type: string, payload: T, options?: {
    delay?: number;
    priority?: number;
  }): Promise<string> {
    const job: Job<T> = {
      id: crypto.randomUUID(),
      type,
      payload,
      status: 'pending',
      attempts: 0,
      maxAttempts: 3,
      createdAt: new Date(),
      processAfter: options?.delay 
        ? new Date(Date.now() + options.delay) 
        : new Date(),
    };
    
    // Add to sorted set with score = processAfter timestamp
    await this.redis.zadd(
      'job_queue',
      job.processAfter.getTime(),
      JSON.stringify(job)
    );
    
    return job.id;
  }
  
  async process(handler: (job: Job<any>) => Promise<void>): Promise<void> {
    while (true) {
      // Get oldest job that's ready to process
      const jobs = await this.redis.zrangebyscore(
        'job_queue',
        0,
        Date.now(),
        'LIMIT', 0, 1
      );
      
      if (jobs.length === 0) {
        await this.sleep(100);
        continue;
      }
      
      const job = JSON.parse(jobs[0]) as Job<any>;
      
      try {
        job.status = 'processing';
        job.attempts++;
        
        await handler(job);
        
        job.status = 'completed';
        await this.redis.zrem('job_queue', jobs[0]);
        
      } catch (error) {
        if (job.attempts >= job.maxAttempts) {
          job.status = 'failed';
          await this.moveToDeadLetter(job);
        } else {
          // Exponential backoff
          job.processAfter = new Date(
            Date.now() + Math.pow(2, job.attempts) * 1000
          );
          await this.redis.zadd('job_queue', 
            job.processAfter.getTime(), 
            JSON.stringify(job)
          );
        }
      }
    }
  }
}

// Usage
const queue = new JobQueue();

// Producer: Queue an email to be sent
await queue.enqueue('send_email', {
  to: 'user@example.com',
  subject: 'Welcome!',
  body: 'Thanks for signing up...',
});

// Consumer: Process emails in background
await queue.process(async (job) => {
  if (job.type === 'send_email') {
    await sendEmail(job.payload);
  }
});`}
                      language="typescript"
                      filename="job_queue.ts"
                    />
                  </section>

                  <section id="event-sourcing" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Event Sourcing</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Instead of storing current state, store the sequence of events that led to that state. 
                      This enables perfect audit trails, time travel, and rebuilding state.
                    </p>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">Traditional vs Event Sourced</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`TRADITIONAL (Store Current State):
┌──────────────────────────────────┐
│ accounts table                   │
├──────────────────────────────────┤
│ id: 123                          │
│ balance: $500   ← Only final     │
│ updated_at: 2024-01-15           │
└──────────────────────────────────┘
Question: "Why is balance $500?" → 🤷 No idea

EVENT SOURCED (Store Events):
┌──────────────────────────────────────────────┐
│ account_events table                         │
├──────────────────────────────────────────────┤
│ 1. AccountOpened    { initial: $1000 }       │
│ 2. MoneyWithdrawn   { amount: $200 }         │
│ 3. MoneyDeposited   { amount: $50 }          │
│ 4. MoneyWithdrawn   { amount: $350 }         │
└──────────────────────────────────────────────┘
Current balance: $1000 - $200 + $50 - $350 = $500 ✓
Complete audit trail! Can replay to any point in time.`}
                      </pre>
                    </div>

                    <BlogNote type="info" title="Used By">
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Banking:</strong> Every transaction is an event</li>
                        <li><strong>Git:</strong> Commits are events, repo state is derived</li>
                        <li><strong>Redux:</strong> Actions are events, state is derived</li>
                        <li><strong>Accounting:</strong> Double-entry ledgers</li>
                      </ul>
                    </BlogNote>
                  </section>
                </section>

                {/* Consistency Models */}
                <section id="consistency" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Consistency Models
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In distributed systems, you can't have perfect consistency AND availability AND 
                    partition tolerance. Understanding these tradeoffs is essential for designing 
                    systems that behave correctly.
                  </p>

                  <section id="strong-eventual" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Strong vs Eventual Consistency</h3>

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5">
                        <h4 className="font-bold text-blue-400 mb-2">Strong Consistency</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          After a write completes, all subsequent reads return that value.
                        </p>
                        <pre className="text-xs font-mono text-muted-foreground">
{`Write: balance = $100
       ↓ (wait for all replicas)
Read:  balance → $100 ✓ (always)`}
                        </pre>
                        <ul className="text-xs text-muted-foreground mt-3 space-y-1">
                          <li>+ Predictable behavior</li>
                          <li>+ Easier to reason about</li>
                          <li>- Higher latency</li>
                          <li>- Lower availability</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg border border-orange-500/30 bg-orange-500/5">
                        <h4 className="font-bold text-orange-400 mb-2">Eventual Consistency</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Reads may return stale data, but eventually all replicas converge.
                        </p>
                        <pre className="text-xs font-mono text-muted-foreground">
{`Write: balance = $100
       ↓ (return immediately)
Read:  balance → $50 (stale)
Read:  balance → $100 ✓ (later)`}
                        </pre>
                        <ul className="text-xs text-muted-foreground mt-3 space-y-1">
                          <li>+ Lower latency</li>
                          <li>+ Higher availability</li>
                          <li>- May see stale data</li>
                          <li>- Harder to reason about</li>
                        </ul>
                      </div>
                    </div>

                    <CodeBlock
                      code={`// Strong Consistency: Wait for all replicas
async function writeWithStrongConsistency(
  key: string, 
  value: string
): Promise<void> {
  const replicas = ['node1', 'node2', 'node3'];
  
  // Write to ALL replicas before returning
  await Promise.all(
    replicas.map(node => writeToNode(node, key, value))
  );
  
  // Only return success when ALL have acknowledged
  console.log('Write confirmed on all replicas');
}

// Eventual Consistency: Async replication
async function writeWithEventualConsistency(
  key: string, 
  value: string
): Promise<void> {
  // Write to primary only
  await writeToNode('primary', key, value);
  
  // Return immediately - replicas updated async
  console.log('Write confirmed on primary');
  
  // Background: Replicate to other nodes
  setImmediate(() => {
    replicateToNodes(['node2', 'node3'], key, value);
  });
}

// Read-Your-Writes Consistency (middle ground)
async function readYourWrites(
  userId: string,
  key: string
): Promise<string> {
  const lastWriteTime = await getLastWriteTime(userId, key);
  
  // Find a replica that has caught up
  for (const node of replicas) {
    const nodeTime = await getReplicaTime(node, key);
    if (nodeTime >= lastWriteTime) {
      return await readFromNode(node, key);
    }
  }
  
  // Fallback to primary
  return await readFromNode('primary', key);
}`}
                      language="typescript"
                      filename="consistency_models.ts"
                    />
                  </section>

                  <section id="cap-theorem" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">CAP Theorem (Practical View)</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The CAP theorem states you can only guarantee 2 of 3: <strong>Consistency</strong>, 
                      <strong> Availability</strong>, and <strong>Partition Tolerance</strong>. 
                      Since network partitions are inevitable, the real choice is CP vs AP.
                    </p>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">The CAP Triangle</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`              Consistency
                  /\
                 /  \
                /    \
               / CP   \
              /________\
             /          \
            /     CA     \
           /   (fantasy)  \
          /________________\
    Availability -------- Partition
                             Tolerance

In a distributed system, partitions WILL happen.
So the real choice is:

CP (Consistency + Partition Tolerance):
  - Refuse to serve if can't guarantee consistency
  - Examples: MongoDB, HBase, traditional RDBMS

AP (Availability + Partition Tolerance):
  - Always serve, even with stale data
  - Examples: Cassandra, DynamoDB, CouchDB`}
                      </pre>
                    </div>

                    <RunnableCode
                      code={"// CAP Tradeoff Simulator\nclass DistributedSystem {\n  constructor(mode) {\n    this.mode = mode; // 'CP' or 'AP'\n    this.partitioned = false;\n    this.primaryValue = 100;\n    this.replicaValue = 100;\n  }\n  \n  simulatePartition() {\n    this.partitioned = true;\n  }\n  \n  write(value) {\n    this.primaryValue = value;\n    if (!this.partitioned) {\n      this.replicaValue = value;\n      return 'Write succeeded to all nodes';\n    }\n    if (this.mode === 'CP') {\n      return 'Write REJECTED - cannot reach all nodes';\n    }\n    return 'Write succeeded to primary only (replica stale)';\n  }\n  \n  read() {\n    if (this.mode === 'CP' && this.partitioned) {\n      return 'Read REJECTED - cannot guarantee consistency';\n    }\n    return 'Read: ' + this.replicaValue + (this.partitioned ? ' (possibly stale)' : '');\n  }\n}\n\nconst cp = new DistributedSystem('CP');\nconst ap = new DistributedSystem('AP');\n\nconst results = [];\nresults.push('=== Normal Operation ===');\nresults.push('CP write(200): ' + cp.write(200));\nresults.push('AP write(200): ' + ap.write(200));\n\nresults.push('');\nresults.push('=== Network Partition Occurs ===');\ncp.simulatePartition();\nap.simulatePartition();\n\nresults.push('CP write(300): ' + cp.write(300));\nresults.push('AP write(300): ' + ap.write(300));\nresults.push('CP read(): ' + cp.read());\nresults.push('AP read(): ' + ap.read());\n\nresults.join('\\n');"}
                      language="javascript"
                      filename="CAP Tradeoff Demo"
                      onRun={() => {
                        class DistributedSystem {
                          mode: string;
                          partitioned: boolean;
                          primaryValue: number;
                          replicaValue: number;
                          constructor(mode: string) {
                            this.mode = mode;
                            this.partitioned = false;
                            this.primaryValue = 100;
                            this.replicaValue = 100;
                          }
                          simulatePartition() { this.partitioned = true; }
                          write(value: number): string {
                            this.primaryValue = value;
                            if (!this.partitioned) {
                              this.replicaValue = value;
                              return 'Write succeeded to all nodes';
                            }
                            if (this.mode === 'CP') {
                              return 'Write REJECTED - cannot reach all nodes';
                            }
                            return 'Write succeeded to primary only (replica stale)';
                          }
                          read(): string {
                            if (this.mode === 'CP' && this.partitioned) {
                              return 'Read REJECTED - cannot guarantee consistency';
                            }
                            return 'Read: ' + this.replicaValue + (this.partitioned ? ' (possibly stale)' : '');
                          }
                        }
                        const cp = new DistributedSystem('CP');
                        const ap = new DistributedSystem('AP');
                        const results: string[] = [];
                        results.push('=== Normal Operation ===');
                        results.push('CP write(200): ' + cp.write(200));
                        results.push('AP write(200): ' + ap.write(200));
                        results.push('');
                        results.push('=== Network Partition Occurs ===');
                        cp.simulatePartition();
                        ap.simulatePartition();
                        results.push('CP write(300): ' + cp.write(300));
                        results.push('AP write(300): ' + ap.write(300));
                        results.push('CP read(): ' + cp.read());
                        results.push('AP read(): ' + ap.read());
                        return results.join('\n');
                      }}
                    />
                  </section>

                  <section id="real-world-tradeoffs" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Real-World Tradeoffs</h3>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6 overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border/50">
                            <th className="text-left py-2 text-foreground">Use Case</th>
                            <th className="text-left py-2 text-foreground">Choose</th>
                            <th className="text-left py-2 text-foreground">Why</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b border-border/30">
                            <td className="py-2">Bank Transfers</td>
                            <td className="text-blue-400">CP</td>
                            <td>Can't have incorrect balances</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2">Social Media Feed</td>
                            <td className="text-orange-400">AP</td>
                            <td>Stale posts are acceptable</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2">Shopping Cart</td>
                            <td className="text-orange-400">AP</td>
                            <td>Availability matters, can merge later</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2">Inventory Count</td>
                            <td className="text-blue-400">CP</td>
                            <td>Can't oversell products</td>
                          </tr>
                          <tr>
                            <td className="py-2">User Sessions</td>
                            <td className="text-orange-400">AP</td>
                            <td>Re-login is okay, service uptime matters</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <BlogNote type="tip" title="PACELC Extension">
                      CAP only describes behavior during partitions. PACELC extends this: 
                      "During Partition, choose A or C. Else (normal operation), choose L (latency) or C (consistency)."
                    </BlogNote>
                  </section>
                </section>

                {/* Rate Limiting */}
                <section id="rate-limiting" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Rate Limiting Algorithms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Rate limiting protects your system from abuse and ensures fair usage. 
                    Different algorithms have different tradeoffs in terms of burst handling 
                    and precision.
                  </p>

                  <section id="token-bucket" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Token Bucket</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Tokens are added to a bucket at a fixed rate. Each request consumes a token. 
                      Requests are rejected when the bucket is empty. Allows burst traffic up to bucket capacity.
                    </p>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">Token Bucket Visualization</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`Capacity: 10 tokens | Refill: 2 tokens/second

Time 0:    [●●●●●●●●●●] 10/10 tokens
           ↓ 5 requests
Time 0.1:  [●●●●●○○○○○] 5/10 tokens
           ↓ 5 requests  
Time 0.2:  [○○○○○○○○○○] 0/10 tokens (empty!)
           ↓ request REJECTED ❌
Time 0.5:  [●○○○○○○○○○] 1/10 token (refilled)
           ↓ 1 request
Time 0.6:  [○○○○○○○○○○] 0/10 tokens
Time 5.0:  [●●●●●●●●●●] 10/10 tokens (fully refilled)

Key insight: Allows bursts up to bucket capacity,
but sustained rate limited to refill rate.`}
                      </pre>
                    </div>

                    <CodeBlock
                      code={`// Token Bucket Rate Limiter
class TokenBucket {
  private tokens: number;
  private capacity: number;
  private refillRate: number; // tokens per second
  private lastRefill: number;
  
  constructor(capacity: number, refillRate: number) {
    this.capacity = capacity;
    this.tokens = capacity; // Start full
    this.refillRate = refillRate;
    this.lastRefill = Date.now();
  }
  
  private refill(): void {
    const now = Date.now();
    const elapsed = (now - this.lastRefill) / 1000; // seconds
    const tokensToAdd = elapsed * this.refillRate;
    
    this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
    this.lastRefill = now;
  }
  
  tryAcquire(tokens: number = 1): boolean {
    this.refill();
    
    if (this.tokens >= tokens) {
      this.tokens -= tokens;
      return true;
    }
    
    return false;
  }
  
  // For rate limit headers
  getState(): { remaining: number; resetIn: number } {
    this.refill();
    const resetIn = (this.capacity - this.tokens) / this.refillRate;
    return { 
      remaining: Math.floor(this.tokens),
      resetIn: Math.ceil(resetIn)
    };
  }
}

// Usage with Express middleware
const userBuckets = new Map<string, TokenBucket>();

function rateLimitMiddleware(req, res, next) {
  const userId = req.user?.id || req.ip;
  
  if (!userBuckets.has(userId)) {
    // 100 requests capacity, 10 requests/second refill
    userBuckets.set(userId, new TokenBucket(100, 10));
  }
  
  const bucket = userBuckets.get(userId)!;
  
  if (bucket.tryAcquire()) {
    const state = bucket.getState();
    res.set('X-RateLimit-Remaining', state.remaining);
    res.set('X-RateLimit-Reset', state.resetIn);
    next();
  } else {
    res.status(429).json({ 
      error: 'Too Many Requests',
      retryAfter: bucket.getState().resetIn 
    });
  }
}`}
                      language="typescript"
                      filename="token_bucket.ts"
                    />
                  </section>

                  <section id="leaky-bucket" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Leaky Bucket</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Requests enter a queue (bucket) and are processed at a fixed rate. 
                      If the queue is full, new requests are rejected. Ensures smooth, constant output rate.
                    </p>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">Leaky Bucket vs Token Bucket</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`LEAKY BUCKET:                    TOKEN BUCKET:
  ┌─────────┐                       ┌─────────┐
  │ ● ● ● ● │ ← Requests enter      │ ● ● ● ● │ ← Tokens refill
  │ ● ● ●   │   (queue fills)       │ ● ● ●   │
  │ ● ●     │                       └────┬────┘
  └────┬────┘                            │
       │                                 ▼
       ▼                           Request takes token
  Processed at                     (can burst up to bucket)
  constant rate
  
Key differences:
- Leaky: Smooths traffic, no bursts allowed
- Token: Allows bursts up to capacity
- Leaky: Queue can fill up (delay)
- Token: Immediate accept/reject`}
                      </pre>
                    </div>

                    <CodeBlock
                      code={`// Leaky Bucket Rate Limiter
class LeakyBucket {
  private queue: Array<() => void>;
  private capacity: number;
  private leakRate: number; // requests per second
  private processing: boolean;
  
  constructor(capacity: number, leakRate: number) {
    this.queue = [];
    this.capacity = capacity;
    this.leakRate = leakRate;
    this.processing = false;
  }
  
  async submit(task: () => Promise<void>): Promise<boolean> {
    if (this.queue.length >= this.capacity) {
      return false; // Queue full, reject
    }
    
    return new Promise((resolve) => {
      this.queue.push(async () => {
        await task();
        resolve(true);
      });
      
      this.startProcessing();
    });
  }
  
  private async startProcessing(): Promise<void> {
    if (this.processing) return;
    this.processing = true;
    
    const interval = 1000 / this.leakRate; // ms between processing
    
    while (this.queue.length > 0) {
      const task = this.queue.shift()!;
      await task();
      await this.sleep(interval);
    }
    
    this.processing = false;
  }
  
  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Usage: API endpoint that must process at fixed rate
const bucket = new LeakyBucket(50, 5); // 50 queue capacity, 5 req/sec

app.post('/api/expensive-operation', async (req, res) => {
  const accepted = await bucket.submit(async () => {
    await performExpensiveOperation(req.body);
  });
  
  if (!accepted) {
    return res.status(429).json({ error: 'Queue full' });
  }
  
  res.json({ status: 'Processing' });
});`}
                      language="typescript"
                      filename="leaky_bucket.ts"
                    />
                  </section>

                  <section id="sliding-window" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Sliding Window</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Tracks requests in a rolling time window. More accurate than fixed windows, 
                      which can allow 2x the rate at window boundaries.
                    </p>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">Fixed Window Problem</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`Limit: 100 requests per minute

Fixed Window (Problem):
│ Window 1          │ Window 2          │
│ 0:00 ──────── 0:59│1:00 ──────── 1:59 │
│           [100 req]│[100 req]          │
│              ↑     │   ↑               │
│           0:59     │ 1:00              │
└──────────────────────────────────────────
At 0:59: 100 requests ✓
At 1:00: 100 requests ✓
Result: 200 requests in 2 seconds! ❌

Sliding Window (Solution):
At any moment, look back exactly 1 minute.
Always counts requests in the last 60 seconds.`}
                      </pre>
                    </div>

                    <CodeBlock
                      code={`// Sliding Window Log Rate Limiter
class SlidingWindowLog {
  private requests: Map<string, number[]>;
  private windowMs: number;
  private limit: number;
  
  constructor(windowMs: number, limit: number) {
    this.requests = new Map();
    this.windowMs = windowMs;
    this.limit = limit;
  }
  
  isAllowed(userId: string): boolean {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    // Get user's request timestamps
    let timestamps = this.requests.get(userId) || [];
    
    // Remove timestamps outside window
    timestamps = timestamps.filter(t => t > windowStart);
    
    if (timestamps.length >= this.limit) {
      this.requests.set(userId, timestamps);
      return false;
    }
    
    // Add current request
    timestamps.push(now);
    this.requests.set(userId, timestamps);
    return true;
  }
}

// Sliding Window Counter (more memory efficient)
class SlidingWindowCounter {
  private prevCount: Map<string, number>;
  private currCount: Map<string, number>;
  private windowMs: number;
  private limit: number;
  private windowStart: number;
  
  constructor(windowMs: number, limit: number) {
    this.prevCount = new Map();
    this.currCount = new Map();
    this.windowMs = windowMs;
    this.limit = limit;
    this.windowStart = Date.now();
  }
  
  isAllowed(userId: string): boolean {
    const now = Date.now();
    
    // Check if we need to rotate windows
    if (now - this.windowStart >= this.windowMs) {
      this.prevCount = this.currCount;
      this.currCount = new Map();
      this.windowStart = now;
    }
    
    // Calculate weighted count
    const elapsed = now - this.windowStart;
    const weight = 1 - (elapsed / this.windowMs);
    
    const prevRequests = this.prevCount.get(userId) || 0;
    const currRequests = this.currCount.get(userId) || 0;
    
    const estimatedCount = (prevRequests * weight) + currRequests;
    
    if (estimatedCount >= this.limit) {
      return false;
    }
    
    this.currCount.set(userId, currRequests + 1);
    return true;
  }
}

// Redis-based distributed sliding window
class DistributedSlidingWindow {
  constructor(private redis: Redis, private windowMs: number, private limit: number) {}
  
  async isAllowed(userId: string): Promise<boolean> {
    const key = \`ratelimit:\${userId}\`;
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    // Atomic operation using Redis sorted set
    const pipeline = this.redis.pipeline();
    
    // Remove old entries
    pipeline.zremrangebyscore(key, 0, windowStart);
    
    // Count current requests
    pipeline.zcard(key);
    
    // Add new request
    pipeline.zadd(key, now, \`\${now}-\${Math.random()}\`);
    
    // Set expiry
    pipeline.expire(key, Math.ceil(this.windowMs / 1000));
    
    const results = await pipeline.exec();
    const count = results[1][1] as number;
    
    return count < this.limit;
  }
}`}
                      language="typescript"
                      filename="sliding_window.ts"
                    />

                    <RunnableCode
                      code={"// Rate Limiter Comparison\nclass SlidingWindow {\n  constructor(windowMs, limit) {\n    this.requests = [];\n    this.windowMs = windowMs;\n    this.limit = limit;\n  }\n  \n  isAllowed() {\n    const now = Date.now();\n    this.requests = this.requests.filter(t => t > now - this.windowMs);\n    if (this.requests.length >= this.limit) return false;\n    this.requests.push(now);\n    return true;\n  }\n}\n\nconst limiter = new SlidingWindow(1000, 5); // 5 req per second\n\nconst results = [];\nfor (let i = 0; i < 10; i++) {\n  const allowed = limiter.isAllowed();\n  results.push('Request ' + (i+1) + ': ' + (allowed ? '✓ Allowed' : '✗ Rejected'));\n}\n\nresults.push('');\nresults.push('Limit: 5 requests per second');\nresults.push('First 5 allowed, rest rejected until window slides');\nresults.join('\\n');"}
                      language="javascript"
                      filename="Rate Limiter Test"
                      onRun={() => {
                        class SlidingWindow {
                          requests: number[];
                          windowMs: number;
                          limit: number;
                          constructor(windowMs: number, limit: number) {
                            this.requests = [];
                            this.windowMs = windowMs;
                            this.limit = limit;
                          }
                          isAllowed(): boolean {
                            const now = Date.now();
                            this.requests = this.requests.filter(t => t > now - this.windowMs);
                            if (this.requests.length >= this.limit) return false;
                            this.requests.push(now);
                            return true;
                          }
                        }
                        const limiter = new SlidingWindow(1000, 5);
                        const results: string[] = [];
                        for (let i = 0; i < 10; i++) {
                          const allowed = limiter.isAllowed();
                          results.push('Request ' + (i+1) + ': ' + (allowed ? '✓ Allowed' : '✗ Rejected'));
                        }
                        results.push('');
                        results.push('Limit: 5 requests per second');
                        results.push('First 5 allowed, rest rejected until window slides');
                        return results.join('\n');
                      }}
                    />
                  </section>
                </section>

                {/* Idempotency */}
                <section id="idempotency" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Idempotency in APIs
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    An operation is <strong>idempotent</strong> if performing it multiple times has 
                    the same effect as performing it once. This is critical for handling retries 
                    and network failures safely.
                  </p>

                  <section id="why-idempotency" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Why Payment Systems Never Double-Charge</h3>
                    
                    <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/5 my-6">
                      <h4 className="font-bold text-red-400 mb-3">The Problem Without Idempotency</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`Client                          Server
  │                                │
  │──── POST /charge $100 ────────→│
  │                                │ ✓ Charge processed
  │                                │
  │←──── (network timeout) ────────│
  │                                │
  │ "Did it work? Let me retry..." │
  │                                │
  │──── POST /charge $100 ────────→│
  │                                │ ✓ Charge processed AGAIN!
  │                                │
  │←──── Success ──────────────────│
  
Customer charged $200 instead of $100! 😱`}
                      </pre>
                    </div>

                    <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5 my-6">
                      <h4 className="font-bold text-green-400 mb-3">The Solution With Idempotency</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`Client                              Server
  │                                    │
  │ Generate idempotency_key: "abc123" │
  │                                    │
  │── POST /charge $100 ──────────────→│
  │   Idempotency-Key: abc123          │ ✓ Store: abc123 → $100 charged
  │                                    │
  │←──── (network timeout) ────────────│
  │                                    │
  │ "Let me retry with same key..."    │
  │                                    │
  │── POST /charge $100 ──────────────→│
  │   Idempotency-Key: abc123          │ Found abc123 in cache!
  │                                    │ Return cached response
  │←──── Success (cached) ─────────────│
  
Customer charged exactly $100! ✓`}
                      </pre>
                    </div>
                  </section>

                  <section id="implementing-idempotency" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Implementing Idempotency</h3>

                    <CodeBlock
                      code={`// Idempotency Implementation
interface IdempotentRequest {
  key: string;
  status: 'pending' | 'completed' | 'failed';
  response?: any;
  createdAt: Date;
  expiresAt: Date;
}

class IdempotencyService {
  private redis: Redis;
  private lockTTL = 30; // seconds
  private resultTTL = 86400; // 24 hours
  
  constructor(redis: Redis) {
    this.redis = redis;
  }
  
  async executeIdempotent<T>(
    key: string,
    operation: () => Promise<T>
  ): Promise<T> {
    // 1. Check if we've already processed this key
    const existing = await this.getExisting(key);
    
    if (existing) {
      if (existing.status === 'completed') {
        // Return cached response
        return existing.response as T;
      }
      if (existing.status === 'pending') {
        // Another request is processing - wait and retry
        throw new Error('Request in progress');
      }
      if (existing.status === 'failed') {
        // Previous attempt failed - can retry
      }
    }
    
    // 2. Acquire lock for this key
    const lockAcquired = await this.acquireLock(key);
    if (!lockAcquired) {
      throw new Error('Could not acquire lock');
    }
    
    try {
      // 3. Mark as pending
      await this.setStatus(key, 'pending');
      
      // 4. Execute the operation
      const result = await operation();
      
      // 5. Store result and mark completed
      await this.setCompleted(key, result);
      
      return result;
      
    } catch (error) {
      // 6. Mark as failed (allows retry)
      await this.setStatus(key, 'failed');
      throw error;
      
    } finally {
      await this.releaseLock(key);
    }
  }
  
  private async acquireLock(key: string): Promise<boolean> {
    const lockKey = \`lock:\${key}\`;
    const result = await this.redis.set(
      lockKey, 
      'locked',
      'NX',        // Only if not exists
      'EX', this.lockTTL
    );
    return result === 'OK';
  }
  
  private async releaseLock(key: string): Promise<void> {
    await this.redis.del(\`lock:\${key}\`);
  }
  
  private async getExisting(key: string): Promise<IdempotentRequest | null> {
    const data = await this.redis.get(\`idem:\${key}\`);
    return data ? JSON.parse(data) : null;
  }
  
  private async setStatus(key: string, status: string): Promise<void> {
    const data: IdempotentRequest = {
      key,
      status: status as any,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + this.resultTTL * 1000),
    };
    await this.redis.setex(\`idem:\${key}\`, this.resultTTL, JSON.stringify(data));
  }
  
  private async setCompleted(key: string, response: any): Promise<void> {
    const data: IdempotentRequest = {
      key,
      status: 'completed',
      response,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + this.resultTTL * 1000),
    };
    await this.redis.setex(\`idem:\${key}\`, this.resultTTL, JSON.stringify(data));
  }
}

// Usage in payment endpoint
app.post('/api/charge', async (req, res) => {
  const idempotencyKey = req.headers['idempotency-key'];
  
  if (!idempotencyKey) {
    return res.status(400).json({ 
      error: 'Idempotency-Key header required' 
    });
  }
  
  try {
    const result = await idempotencyService.executeIdempotent(
      idempotencyKey,
      async () => {
        // This only runs once per idempotency key
        return await stripe.charges.create({
          amount: req.body.amount,
          currency: 'usd',
          source: req.body.source,
        });
      }
    );
    
    res.json(result);
    
  } catch (error) {
    if (error.message === 'Request in progress') {
      return res.status(409).json({ 
        error: 'Request already processing' 
      });
    }
    throw error;
  }
});`}
                      language="typescript"
                      filename="idempotency.ts"
                    />

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6 overflow-x-auto">
                      <h4 className="font-bold text-foreground mb-3">HTTP Methods & Idempotency</h4>
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border/50">
                            <th className="text-left py-2 text-foreground">Method</th>
                            <th className="text-left py-2 text-foreground">Idempotent?</th>
                            <th className="text-left py-2 text-foreground">Safe?</th>
                            <th className="text-left py-2 text-foreground">Notes</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b border-border/30">
                            <td className="py-2">GET</td>
                            <td className="text-green-400">Yes</td>
                            <td className="text-green-400">Yes</td>
                            <td>No side effects</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2">PUT</td>
                            <td className="text-green-400">Yes</td>
                            <td className="text-red-400">No</td>
                            <td>Replace entire resource</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2">DELETE</td>
                            <td className="text-green-400">Yes</td>
                            <td className="text-red-400">No</td>
                            <td>Deleting twice = same result</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2">POST</td>
                            <td className="text-red-400">No*</td>
                            <td className="text-red-400">No</td>
                            <td>*Unless you implement it!</td>
                          </tr>
                          <tr>
                            <td className="py-2">PATCH</td>
                            <td className="text-yellow-400">Maybe</td>
                            <td className="text-red-400">No</td>
                            <td>Depends on implementation</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <BlogNote type="tip" title="Client-Side Keys">
                      The client should generate idempotency keys (e.g., UUIDs). This way, 
                      if the client crashes and restarts, it can retry with the same key. 
                      Never let the server generate keys for POST requests!
                    </BlogNote>
                  </section>
                </section>

                {/* Resources */}
                <section id="resources" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Resources
                  </h2>

                  <div className="p-6 rounded-xl border border-accent/30 bg-accent/5 mb-6">
                    <h4 className="font-display font-bold text-foreground mb-4">📚 Essential Reading</h4>
                    <ul className="text-muted-foreground space-y-3">
                      <li>
                        <span className="text-accent font-medium">"Designing Data-Intensive Applications"</span>
                        <span className="text-sm ml-2">— Martin Kleppmann (the bible)</span>
                      </li>
                      <li>
                        <span className="text-accent font-medium">"Building Microservices"</span>
                        <span className="text-sm ml-2">— Sam Newman</span>
                      </li>
                      <li>
                        <span className="text-accent font-medium">"Stripe API Idempotency"</span>
                        <span className="text-sm ml-2">— stripe.com/docs</span>
                      </li>
                      <li>
                        <span className="text-accent font-medium">"Kafka: The Definitive Guide"</span>
                        <span className="text-sm ml-2">— Neha Narkhede et al.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl border border-border/50 bg-card/50 mb-6">
                    <h4 className="font-display font-bold text-foreground mb-4">🛠️ Practice Projects</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-foreground font-bold">Beginner:</span>
                        <ul className="text-muted-foreground mt-1 space-y-1">
                          <li>• Implement token bucket rate limiter</li>
                          <li>• Build an idempotent payment API</li>
                          <li>• Create event sourced bank account</li>
                        </ul>
                      </div>
                      <div>
                        <span className="text-foreground font-bold">Advanced:</span>
                        <ul className="text-muted-foreground mt-1 space-y-1">
                          <li>• Build mini Kafka with partitions</li>
                          <li>• Implement distributed rate limiter</li>
                          <li>• Create CQRS event-sourced system</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <BlogNote type="success" title="Key Takeaway">
                    These patterns aren't just theory — they solve real problems at scale. 
                    Understanding when and why to use each pattern will make you a more 
                    effective backend engineer. Start with one pattern, implement it, and 
                    gradually expand your toolkit!
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

export default BackendDistributed;
