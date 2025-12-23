import { ArrowLeft, Clock, Calendar, Smartphone } from "lucide-react";
import BackToBlogs from "@/components/blog/BackToBlogs";
import TableOfContents from "@/components/blog/TableOfContents";
import MobileTableOfContents from "@/components/blog/MobileTableOfContents";
import CodeBlock from "@/components/blog/CodeBlock";
import RunnableCode from "@/components/blog/RunnableCode";
import BlogNote from "@/components/blog/BlogNote";

const tocItems = [
  { id: 'introduction', title: 'Introduction', level: 2 },
  { id: 'what-is-react-native', title: 'What is React Native?', level: 3 },
  { id: 'why-react-native', title: 'Why Choose React Native?', level: 3 },
  { id: 'getting-started', title: 'Getting Started', level: 2 },
  { id: 'expo-vs-cli', title: 'Expo vs React Native CLI', level: 3 },
  { id: 'installation', title: 'Installation', level: 3 },
  { id: 'first-app', title: 'Your First App', level: 3 },
  { id: 'core-components', title: 'Core Components', level: 2 },
  { id: 'view-text', title: 'View & Text', level: 3 },
  { id: 'image-scrollview', title: 'Image & ScrollView', level: 3 },
  { id: 'touchables', title: 'Touchable Components', level: 3 },
  { id: 'lists', title: 'Lists (FlatList & SectionList)', level: 3 },
  { id: 'styling', title: 'Styling in React Native', level: 2 },
  { id: 'stylesheet', title: 'StyleSheet API', level: 3 },
  { id: 'flexbox', title: 'Flexbox Layout', level: 3 },
  { id: 'navigation', title: 'Navigation', level: 2 },
  { id: 'stack-navigation', title: 'Stack Navigation', level: 3 },
  { id: 'tab-navigation', title: 'Tab Navigation', level: 3 },
  { id: 'state-management', title: 'State Management', level: 2 },
  { id: 'usestate-useeffect', title: 'useState & useEffect', level: 3 },
  { id: 'context-api', title: 'Context API', level: 3 },
  { id: 'platform-specific', title: 'Platform-Specific Code', level: 2 },
  { id: 'native-features', title: 'Native Features', level: 2 },
  { id: 'camera-location', title: 'Camera & Location', level: 3 },
  { id: 'push-notifications', title: 'Push Notifications', level: 3 },
  { id: 'debugging', title: 'Debugging', level: 2 },
  { id: 'deployment', title: 'Deployment', level: 2 },
  { id: 'app-store', title: 'App Store & Play Store', level: 3 },
  { id: 'resources', title: 'Resources', level: 2 },
];

const ReactNativeGuide = () => {
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
                <span className="text-sm font-medium uppercase tracking-wider">Mobile Development</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                React Native for Beginners
                <span className="block text-primary mt-2">Build Mobile Apps with React</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Build native mobile apps for iOS and Android using JavaScript and React.
                A complete beginner's guide to React Native development.
              </p>

              {/* Featured image */}
              <div className="mt-8 rounded-xl overflow-hidden border border-border/50 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop"
                  alt="Mobile App Development"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mt-8">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  December 22, 2024
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  30 min read
                </span>
              </div>
            </div>

            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Introduction</h2>
              <p className="text-lg text-muted-foreground mb-4">
                React Native is a powerful framework that lets you build real native mobile apps
                using JavaScript and React. Unlike hybrid apps that run in a WebView, React Native
                compiles to actual native code, giving you the performance and feel of a true native app.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Created by Facebook (now Meta) in 2015, React Native has become one of the most
                popular frameworks for cross-platform mobile development, used by companies like
                Instagram, Airbnb, Uber Eats, Discord, and Pinterest.
              </p>

              <div className="grid grid-cols-3 gap-4 my-8">
                <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                  <div className="text-3xl font-bold text-primary mb-1">2015</div>
                  <div className="text-xs text-muted-foreground">Year Released</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                  <div className="text-3xl font-bold text-primary mb-1">2</div>
                  <div className="text-xs text-muted-foreground">Platforms (iOS & Android)</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                  <div className="text-3xl font-bold text-primary mb-1">90%+</div>
                  <div className="text-xs text-muted-foreground">Code Reuse</div>
                </div>
              </div>

              <section id="what-is-react-native" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">What is React Native?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  React Native is a JavaScript framework for building native mobile applications.
                  It uses the same design principles as React, letting you compose a rich mobile UI
                  from declarative components.
                </p>

                <div className="p-4 rounded-lg border border-border/50 bg-card/50 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Language:</span>
                      <span className="text-foreground ml-2">JavaScript / TypeScript</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">UI Framework:</span>
                      <span className="text-foreground ml-2">React</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Platforms:</span>
                      <span className="text-foreground ml-2">iOS, Android (+ Web, Windows, macOS)</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Rendering:</span>
                      <span className="text-foreground ml-2">Native Components</span>
                    </div>
                  </div>
                </div>
              </section>

              <section id="why-react-native" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Why Choose React Native?</h3>

                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                    <h4 className="font-bold text-green-400 mb-2">✅ Advantages</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Single codebase for iOS & Android</li>
                      <li>• Native performance & feel</li>
                      <li>• Hot reloading for fast development</li>
                      <li>• Large community & ecosystem</li>
                      <li>• Reuse web React knowledge</li>
                      <li>• Access to native APIs</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg border border-amber-500/30 bg-amber-500/5">
                    <h4 className="font-bold text-amber-400 mb-2">⚠️ Considerations</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Larger app size than native</li>
                      <li>• Some native code may be needed</li>
                      <li>• Platform-specific bugs possible</li>
                      <li>• Dependency on third-party libs</li>
                      <li>• Learning curve for native modules</li>
                      <li>• Updates may break compatibility</li>
                    </ul>
                  </div>
                </div>

                <BlogNote type="info" title="React Native vs Flutter">
                  React Native uses JavaScript and native components, while Flutter uses Dart and
                  its own rendering engine. Choose React Native if your team knows React/JavaScript,
                  or Flutter for potentially better performance with complex animations.
                </BlogNote>
              </section>
            </section>

            {/* Getting Started */}
            <section id="getting-started" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Getting Started</h2>

              <div className="rounded-xl overflow-hidden border border-border/50 my-6">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop"
                  alt="Getting Started with React Native"
                  className="w-full h-48 object-cover"
                />
              </div>

              <section id="expo-vs-cli" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Expo vs React Native CLI</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  There are two main ways to start a React Native project:
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
                    <h4 className="font-bold text-primary mb-2">🚀 Expo (Recommended for Beginners)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• No Xcode or Android Studio needed initially</li>
                      <li>• Instant testing on physical devices</li>
                      <li>• Pre-built native modules included</li>
                      <li>• Over-the-air updates</li>
                      <li>• Easier to get started</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                    <h4 className="font-bold text-foreground mb-2">⚙️ React Native CLI</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Full control over native code</li>
                      <li>• Required for custom native modules</li>
                      <li>• Smaller app size possible</li>
                      <li>• More complex setup</li>
                      <li>• Requires Xcode / Android Studio</li>
                    </ul>
                  </div>
                </div>

                <BlogNote type="tip" title="Start with Expo">
                  For beginners, we strongly recommend starting with Expo. You can always "eject"
                  to a bare React Native project later if you need custom native code.
                </BlogNote>
              </section>

              <section id="installation" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Installation</h3>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Prerequisites:</strong> Make sure you have Node.js (v18+) installed on your machine.
                </p>

                <CodeBlock
                  code={`# Create a new Expo project
npx create-expo-app@latest MyFirstApp

# Navigate to project directory
cd MyFirstApp

# Start the development server
npx expo start`}
                  language="bash"
                  filename="Terminal"
                />

                <p className="text-muted-foreground leading-relaxed my-4">
                  After running these commands, you'll see a QR code in your terminal. Scan it with:
                </p>

                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                  <li><strong>iOS:</strong> Camera app → Scan QR code → Open in Expo Go</li>
                  <li><strong>Android:</strong> Expo Go app → Scan QR code</li>
                </ul>

                <CodeBlock
                  code={`# Alternative: React Native CLI (for advanced users)
npx react-native@latest init MyFirstApp

# Run on iOS (requires Mac with Xcode)
cd MyFirstApp
npx react-native run-ios

# Run on Android (requires Android Studio)
npx react-native run-android`}
                  language="bash"
                  filename="React Native CLI Setup"
                />
              </section>

              <section id="first-app" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Your First App</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Let's look at the basic structure of a React Native app:
                </p>

                <CodeBlock
                  code={`// App.js - Your main application file
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to React Native! 🎉</Text>
      <Text style={styles.subtitle}>
        Edit App.js and save to see changes
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});`}
                  language="jsx"
                  filename="App.js"
                />

                <BlogNote type="info" title="Key Differences from React Web">
                  Notice we use <code>View</code> instead of <code>div</code>, and <code>Text</code>
                  instead of <code>p</code> or <code>span</code>. React Native has its own set of
                  core components that map to native UI elements.
                </BlogNote>
              </section>
            </section>

            {/* Core Components */}
            <section id="core-components" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Core Components</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                React Native provides a set of core components that map to native UI elements.
                Let's explore the most important ones:
              </p>

              <section id="view-text" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">View & Text</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <code className="px-1.5 py-0.5 bg-secondary rounded text-sm">View</code> is the
                  fundamental container component (like <code>div</code> in web).
                  <code className="px-1.5 py-0.5 bg-secondary rounded text-sm ml-1">Text</code> is
                  used for displaying text content.
                </p>

                <CodeBlock
                  code={`import { View, Text } from 'react-native';

function WelcomeCard() {
  return (
    <View style={{
      backgroundColor: '#f0f0f0',
      padding: 20,
      borderRadius: 10,
      margin: 10,
    }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
      }}>
        Welcome!
      </Text>
      <Text style={{ color: '#666' }}>
        This is a simple card component
      </Text>
    </View>
  );
}`}
                  language="jsx"
                  filename="WelcomeCard.js"
                />

                <BlogNote type="warning" title="Important">
                  All text must be wrapped in a <code>Text</code> component. Unlike web, you cannot
                  place raw text directly inside a <code>View</code>.
                </BlogNote>
              </section>

              <section id="image-scrollview" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Image & ScrollView</h3>

                <CodeBlock
                  code={`import { Image, ScrollView, View, Text } from 'react-native';

function ImageGallery() {
  return (
    <ScrollView>
      {/* Local image */}
      <Image
        source={require('./assets/photo.png')}
        style={{ width: 200, height: 200 }}
      />

      {/* Remote image - must specify dimensions */}
      <Image
        source={{ uri: 'https://example.com/image.jpg' }}
        style={{ width: 300, height: 200 }}
        resizeMode="cover"
      />

      {/* More content... */}
      <View style={{ height: 1000 }}>
        <Text>Scroll to see more!</Text>
      </View>
    </ScrollView>
  );
}

// resizeMode options: 'cover', 'contain', 'stretch', 'center'`}
                  language="jsx"
                  filename="ImageGallery.js"
                />
              </section>

              <section id="touchables" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Touchable Components</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  React Native provides several touchable components for handling user interactions:
                </p>

                <CodeBlock
                  code={`import {
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  Text,
  Alert,
} from 'react-native';

function ButtonExamples() {
  const handlePress = () => {
    Alert.alert('Button Pressed!', 'You tapped the button');
  };

  return (
    <>
      {/* TouchableOpacity - fades on press (most common) */}
      <TouchableOpacity
        onPress={handlePress}
        style={{
          backgroundColor: '#007AFF',
          padding: 15,
          borderRadius: 8,
          marginBottom: 10,
        }}
        activeOpacity={0.7}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>
          TouchableOpacity
        </Text>
      </TouchableOpacity>

      {/* Pressable - newer, more flexible API */}
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => ({
          backgroundColor: pressed ? '#005BB5' : '#007AFF',
          padding: 15,
          borderRadius: 8,
          opacity: pressed ? 0.8 : 1,
        })}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>
          Pressable (Recommended)
        </Text>
      </Pressable>
    </>
  );
}`}
                  language="jsx"
                  filename="ButtonExamples.js"
                />

                <BlogNote type="tip" title="Use Pressable">
                  <code>Pressable</code> is the newer, more flexible API. It provides better
                  customization for pressed states and supports hover on web platforms.
                </BlogNote>
              </section>

              <section id="lists" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Lists (FlatList & SectionList)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For rendering lists of data, use <code>FlatList</code> for simple lists and
                  <code>SectionList</code> for grouped data:
                </p>

                <CodeBlock
                  code={`import { FlatList, View, Text, StyleSheet } from 'react-native';

const DATA = [
  { id: '1', title: 'Learn React Native' },
  { id: '2', title: 'Build First App' },
  { id: '3', title: 'Deploy to App Store' },
  { id: '4', title: 'Celebrate! 🎉' },
];

function TodoList() {
  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Text style={styles.itemNumber}>{index + 1}</Text>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={() => (
        <Text style={styles.header}>My Todo List</Text>
      )}
      ListEmptyComponent={() => (
        <Text style={styles.empty}>No items yet!</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  itemNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 15,
    color: '#007AFF',
  },
  itemTitle: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
  },
  empty: {
    textAlign: 'center',
    padding: 20,
    color: '#999',
  },
});`}
                  language="jsx"
                  filename="TodoList.js"
                />

                <RunnableCode
                  code={`// FlatList key props explained
const listProps = {
  data: [],           // Array of items to render
  renderItem: null,   // Function to render each item
  keyExtractor: null, // Function to extract unique key
  horizontal: false,  // Horizontal scrolling
  numColumns: 1,      // Number of columns (grid)
  onRefresh: null,    // Pull-to-refresh handler
  refreshing: false,  // Is refreshing state
};

Object.keys(listProps).join('\\n');`}
                  language="javascript"
                  filename="FlatList Props"
                  onRun={() => {
                    const props = [
                      'data - Array of items to render',
                      'renderItem - Function to render each item',
                      'keyExtractor - Extract unique key for each item',
                      'horizontal - Enable horizontal scrolling',
                      'numColumns - Create a grid layout',
                      'onRefresh - Pull-to-refresh callback',
                      'refreshing - Control refresh indicator',
                      'onEndReached - Infinite scroll callback',
                    ];
                    return props.join('\n');
                  }}
                />
              </section>
            </section>

            {/* Styling */}
            <section id="styling" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Styling in React Native</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                React Native uses JavaScript objects for styling, similar to inline styles in React
                but with camelCase property names. There's no CSS - everything is done in JS!
              </p>

              <section id="stylesheet" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">StyleSheet API</h3>

                <CodeBlock
                  code={`import { StyleSheet, View, Text } from 'react-native';

function StyledComponent() {
  return (
    <View style={styles.container}>
      {/* Single style */}
      <Text style={styles.title}>Hello World</Text>

      {/* Multiple styles (array) */}
      <Text style={[styles.text, styles.bold]}>
        Bold Text
      </Text>

      {/* Conditional styles */}
      <Text style={[
        styles.text,
        isActive && styles.activeText,
      ]}>
        Conditional
      </Text>

      {/* Inline + stylesheet combined */}
      <Text style={[styles.text, { color: 'red' }]}>
        Custom Color
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
  activeText: {
    color: '#007AFF',
  },
});`}
                  language="jsx"
                  filename="StyledComponent.js"
                />

                <BlogNote type="info" title="Why StyleSheet.create?">
                  <code>StyleSheet.create</code> validates styles at compile time, provides better
                  performance through caching, and enables better tooling support. Always prefer it
                  over plain objects.
                </BlogNote>
              </section>

              <section id="flexbox" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Flexbox Layout</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  React Native uses Flexbox for layout, but with some differences from CSS:
                </p>

                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                  <li><code>flexDirection</code> defaults to <code>'column'</code> (not row)</li>
                  <li><code>alignContent</code> defaults to <code>'flex-start'</code></li>
                  <li><code>flexShrink</code> defaults to <code>0</code></li>
                </ul>

                <CodeBlock
                  code={`import { View, Text, StyleSheet } from 'react-native';

function FlexboxExamples() {
  return (
    <View style={styles.container}>
      {/* Row layout */}
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: '#FF6B6B' }]} />
        <View style={[styles.box, { backgroundColor: '#4ECDC4' }]} />
        <View style={[styles.box, { backgroundColor: '#45B7D1' }]} />
      </View>

      {/* Space between */}
      <View style={styles.spaceBetween}>
        <Text>Left</Text>
        <Text>Center</Text>
        <Text>Right</Text>
      </View>

      {/* Flex grow */}
      <View style={styles.row}>
        <View style={[styles.box, { flex: 1, backgroundColor: '#96CEB4' }]} />
        <View style={[styles.box, { flex: 2, backgroundColor: '#FFEAA7' }]} />
        <View style={[styles.box, { flex: 1, backgroundColor: '#DDA0DD' }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20, // gap is supported in React Native!
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  box: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
});`}
                  language="jsx"
                  filename="FlexboxExamples.js"
                />

                <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                  <h4 className="font-bold text-foreground mb-3">Common Flexbox Properties</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <code className="text-primary">flexDirection</code>
                    <span className="text-muted-foreground">row, column, row-reverse, column-reverse</span>
                    <code className="text-primary">justifyContent</code>
                    <span className="text-muted-foreground">flex-start, center, flex-end, space-between, space-around</span>
                    <code className="text-primary">alignItems</code>
                    <span className="text-muted-foreground">flex-start, center, flex-end, stretch</span>
                    <code className="text-primary">flex</code>
                    <span className="text-muted-foreground">number (how much space to take)</span>
                    <code className="text-primary">gap</code>
                    <span className="text-muted-foreground">spacing between children</span>
                  </div>
                </div>
              </section>
            </section>

            {/* Navigation */}
            <section id="navigation" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Navigation</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                React Navigation is the standard library for navigation in React Native.
                It provides stack, tab, and drawer navigation patterns.
              </p>

              <CodeBlock
                code={`# Install React Navigation
npm install @react-navigation/native

# Install dependencies for Expo
npx expo install react-native-screens react-native-safe-area-context

# Install stack navigator
npm install @react-navigation/native-stack

# Install bottom tabs (optional)
npm install @react-navigation/bottom-tabs`}
                language="bash"
                filename="Terminal"
              />

              <section id="stack-navigation" className="mb-12 mt-8">
                <h3 className="text-2xl font-semibold mb-4">Stack Navigation</h3>

                <CodeBlock
                  code={`// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Details',
            headerStyle: { backgroundColor: '#007AFF' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}`}
                  language="jsx"
                  filename="App.js"
                />

                <CodeBlock
                  code={`// screens/HomeScreen.js
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      {/* Navigate to Details */}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {
          itemId: 42,
          otherParam: 'Hello from Home!',
        })}
      />
    </View>
  );
}

// screens/DetailsScreen.js
function DetailsScreen({ route, navigation }) {
  // Get params passed from previous screen
  const { itemId, otherParam } = route.params;

  return (
    <View style={styles.container}>
      <Text>Item ID: {itemId}</Text>
      <Text>Param: {otherParam}</Text>

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}`}
                  language="jsx"
                  filename="screens/HomeScreen.js"
                />
              </section>

              <section id="tab-navigation" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Tab Navigation</h3>

                <CodeBlock
                  code={`import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}`}
                  language="jsx"
                  filename="TabNavigation.js"
                />
              </section>
            </section>

            {/* State Management */}
            <section id="state-management" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">State Management</h2>

              <section id="usestate-useeffect" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">useState & useEffect</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  React hooks work exactly the same in React Native as they do in React web:
                </p>

                <CodeBlock
                  code={`import { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <Text style={{ color: 'red' }}>Error: {error}</Text>
        <Button title="Retry" onPress={fetchUsers} />
      </View>
    );
  }

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 15, borderBottomWidth: 1, borderColor: '#eee' }}>
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          <Text style={{ color: '#666' }}>{item.email}</Text>
        </View>
      )}
    />
  );
}`}
                  language="jsx"
                  filename="UserList.js"
                />
              </section>

              <section id="context-api" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Context API</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For global state like user authentication or theme, use React Context:
                </p>

                <CodeBlock
                  code={`// context/AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // API call to login
    const userData = await api.login(email, password);
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for easy access
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

// Usage in App.js
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        {/* Your app */}
      </NavigationContainer>
    </AuthProvider>
  );
}

// Usage in any component
function ProfileScreen() {
  const { user, logout } = useAuth();

  return (
    <View>
      <Text>Welcome, {user?.name}!</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}`}
                  language="jsx"
                  filename="context/AuthContext.js"
                />
              </section>
            </section>

            {/* Platform Specific */}
            <section id="platform-specific" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Platform-Specific Code</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sometimes you need different behavior or styling for iOS and Android:
              </p>

              <CodeBlock
                code={`import { Platform, StyleSheet, View, Text } from 'react-native';

function PlatformExample() {
  return (
    <View style={styles.container}>
      <Text>You are on: {Platform.OS}</Text>
      <Text>Version: {Platform.Version}</Text>

      {/* Conditional rendering */}
      {Platform.OS === 'ios' ? (
        <Text>iOS specific content</Text>
      ) : (
        <Text>Android specific content</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // Platform-specific values
    paddingTop: Platform.OS === 'ios' ? 50 : 30,

    // Or use Platform.select for cleaner code
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});`}
                language="jsx"
                filename="PlatformExample.js"
              />

              <BlogNote type="tip" title="Platform-Specific Files">
                You can also create platform-specific files: <code>Component.ios.js</code> and
                <code>Component.android.js</code>. React Native will automatically import the
                correct one based on the platform.
              </BlogNote>
            </section>

            {/* Native Features */}
            <section id="native-features" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Native Features</h2>

              <div className="rounded-xl overflow-hidden border border-border/50 my-6">
                <img
                  src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800&h=400&fit=crop"
                  alt="Mobile Phone Features"
                  className="w-full h-48 object-cover"
                />
              </div>

              <section id="camera-location" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Camera & Location</h3>

                <CodeBlock
                  code={`# Install Expo packages for native features
npx expo install expo-camera
npx expo install expo-location
npx expo install expo-image-picker`}
                  language="bash"
                  filename="Terminal"
                />

                <CodeBlock
                  code={`// Camera Example
import { useState } from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function CameraExample() {
  const [image, setImage] = useState(null);

  const takePhoto = async () => {
    // Request permission
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      alert('Camera permission required!');
      return;
    }

    // Open camera
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Take Photo" onPress={takePhoto} />
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 300, height: 300, marginTop: 20 }}
        />
      )}
    </View>
  );
}`}
                  language="jsx"
                  filename="CameraExample.js"
                />

                <CodeBlock
                  code={`// Location Example
import { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import * as Location from 'expo-location';

function LocationExample() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLocation = async () => {
    setLoading(true);

    // Request permission
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      alert('Location permission required!');
      setLoading(false);
      return;
    }

    // Get current location
    const currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation.coords);
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title={loading ? 'Getting location...' : 'Get My Location'}
        onPress={getLocation}
        disabled={loading}
      />
      {location && (
        <View style={{ marginTop: 20 }}>
          <Text>Latitude: {location.latitude.toFixed(6)}</Text>
          <Text>Longitude: {location.longitude.toFixed(6)}</Text>
        </View>
      )}
    </View>
  );
}`}
                  language="jsx"
                  filename="LocationExample.js"
                />
              </section>

              <section id="push-notifications" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Push Notifications</h3>

                <CodeBlock
                  code={`# Install notifications package
npx expo install expo-notifications expo-device`}
                  language="bash"
                  filename="Terminal"
                />

                <CodeBlock
                  code={`import { useState, useEffect, useRef } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

// Configure how notifications are handled when app is in foreground
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

function NotificationExample() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const notificationListener = useRef();

  useEffect(() => {
    registerForPushNotifications().then(token => {
      setExpoPushToken(token);
    });

    // Listen for incoming notifications
    notificationListener.current = Notifications.addNotificationReceivedListener(
      notification => {
        console.log('Notification received:', notification);
      }
    );

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
    };
  }, []);

  const sendLocalNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hello! 👋",
        body: "This is a local notification",
        data: { customData: 'some data' },
      },
      trigger: { seconds: 2 },
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Push Token: {expoPushToken}</Text>
      <Button title="Send Local Notification" onPress={sendLocalNotification} />
    </View>
  );
}

async function registerForPushNotifications() {
  if (!Device.isDevice) {
    alert('Push notifications require a physical device');
    return;
  }

  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') {
    alert('Push notification permission required!');
    return;
  }

  const token = await Notifications.getExpoPushTokenAsync();
  return token.data;
}`}
                  language="jsx"
                  filename="NotificationExample.js"
                />
              </section>
            </section>

            {/* Debugging */}
            <section id="debugging" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Debugging</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                React Native provides several debugging tools:
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                  <h4 className="font-bold text-foreground mb-2">1. React Native Debugger</h4>
                  <p className="text-sm text-muted-foreground">
                    Standalone app with React DevTools, Redux DevTools, and network inspection.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                  <h4 className="font-bold text-foreground mb-2">2. Flipper</h4>
                  <p className="text-sm text-muted-foreground">
                    Meta's debugging platform with layout inspector, network, and database tools.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                  <h4 className="font-bold text-foreground mb-2">3. Console.log</h4>
                  <p className="text-sm text-muted-foreground">
                    Simple but effective! Logs appear in Metro bundler terminal or debug console.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                  <h4 className="font-bold text-foreground mb-2">4. Expo DevTools</h4>
                  <p className="text-sm text-muted-foreground">
                    Web interface for Expo projects with logs, device management, and more.
                  </p>
                </div>
              </div>

              <CodeBlock
                code={`// Debugging tips

// 1. Console logging
console.log('Debug info:', someVariable);
console.warn('Warning message');
console.error('Error message');

// 2. Inspect network requests
// In Expo: Shake device → Debug Remote JS

// 3. Performance monitoring
import { PerformanceObserver } from 'react-native';

// 4. Error boundaries for catching render errors
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Text>Something went wrong!</Text>;
    }
    return this.props.children;
  }
}`}
                language="jsx"
                filename="debugging.js"
              />
            </section>

            {/* Deployment */}
            <section id="deployment" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Deployment</h2>

              <section id="app-store" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">App Store & Play Store</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With Expo, you can build and submit apps using EAS (Expo Application Services):
                </p>

                <CodeBlock
                  code={`# Install EAS CLI
npm install -g eas-cli

# Login to your Expo account
eas login

# Configure your project for builds
eas build:configure

# Build for iOS (requires Apple Developer account)
eas build --platform ios

# Build for Android
eas build --platform android

# Build for both platforms
eas build --platform all

# Submit to App Store
eas submit --platform ios

# Submit to Play Store
eas submit --platform android`}
                  language="bash"
                  filename="Terminal"
                />

                <BlogNote type="warning" title="Requirements">
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><strong>iOS:</strong> Apple Developer account ($99/year)</li>
                    <li><strong>Android:</strong> Google Play Developer account ($25 one-time)</li>
                  </ul>
                </BlogNote>

                <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                  <h4 className="font-bold text-foreground mb-3">App Store Submission Checklist</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>✅ App icon (1024x1024 for iOS, 512x512 for Android)</li>
                    <li>✅ Splash screen</li>
                    <li>✅ App screenshots for various device sizes</li>
                    <li>✅ App description and keywords</li>
                    <li>✅ Privacy policy URL</li>
                    <li>✅ Age rating questionnaire</li>
                    <li>✅ In-app purchase configuration (if applicable)</li>
                  </ul>
                </div>
              </section>
            </section>

            {/* Resources */}
            <section id="resources" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Resources</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Continue learning with these resources:
              </p>

              <div className="p-6 rounded-xl border border-accent/30 bg-accent/5 mb-6">
                <h4 className="font-display font-bold text-foreground mb-4">📚 Official Documentation</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li>
                    <a href="https://reactnative.dev/docs/getting-started" target="_blank" rel="noopener noreferrer"
                       className="text-primary hover:underline">
                      React Native Official Docs
                    </a>
                    <span className="text-sm ml-2">— Comprehensive official guide</span>
                  </li>
                  <li>
                    <a href="https://docs.expo.dev/" target="_blank" rel="noopener noreferrer"
                       className="text-primary hover:underline">
                      Expo Documentation
                    </a>
                    <span className="text-sm ml-2">— Expo guides and API reference</span>
                  </li>
                  <li>
                    <a href="https://reactnavigation.org/docs/getting-started" target="_blank" rel="noopener noreferrer"
                       className="text-primary hover:underline">
                      React Navigation Docs
                    </a>
                    <span className="text-sm ml-2">— Navigation library documentation</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-border/50 bg-card/50 mb-6">
                <h4 className="font-display font-bold text-foreground mb-4">🎓 Learning Resources</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li>• React Native Express (free online course)</li>
                  <li>• The Complete React Native + Hooks Course (Udemy)</li>
                  <li>• React Native in Action (Manning book)</li>
                  <li>• Expo's Snack Playground (online code editor)</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-border/50 bg-card/50">
                <h4 className="font-display font-bold text-foreground mb-4">🧩 Useful Libraries</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <code className="text-accent">react-native-reanimated</code>
                  <span className="text-muted-foreground">Advanced animations</span>
                  <code className="text-accent">react-native-gesture-handler</code>
                  <span className="text-muted-foreground">Touch gestures</span>
                  <code className="text-accent">react-query</code>
                  <span className="text-muted-foreground">Data fetching</span>
                  <code className="text-accent">zustand</code>
                  <span className="text-muted-foreground">State management</span>
                  <code className="text-accent">nativewind</code>
                  <span className="text-muted-foreground">Tailwind for RN</span>
                  <code className="text-accent">react-native-paper</code>
                  <span className="text-muted-foreground">Material Design UI</span>
                </div>
              </div>

              <BlogNote type="success" title="You're Ready!">
                You now have a solid foundation in React Native. Start building your first app
                and learn by doing! Remember: the best way to learn is to build real projects.
              </BlogNote>
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

export default ReactNativeGuide;
