import { ThemeProvider } from 'ThemeProvider';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { Linking, Platform, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

import loadAssetsAsync from './src/utilities/loadAssetsAsync';

SplashScreen.preventAutoHideAsync();

function useSplashScreen(loadingFunction: () => Promise<void>) {
  const [isLoadingCompleted, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadAsync() {
      try {
        await loadingFunction();
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        await SplashScreen.hide();
      }
    }

    loadAsync();
  }, []);

  return isLoadingCompleted;
}

export default function App() {
  const isLoadingCompleted = useSplashScreen(async () => {
    if (Platform.OS === 'ios') {
      StatusBar.setBarStyle('dark-content', false);
    }
    await loadAssetsAsync();
  });

  return <ThemeProvider>{isLoadingCompleted ? <EducationApp /> : null}</ThemeProvider>;
}

const grades = [
  {
    grade: 'Grade 10',
    focus: 'Build strong foundations and prepare for subject choices in Grades 11-12.',
    subjects: [
      'Mathematics',
      'Mathematical Literacy',
      'Physical Sciences',
      'Life Sciences',
      'Geography',
      'History',
      'Accounting',
      'Business Studies',
      'Economics',
      'Life Orientation',
      'English Home Language',
      'English First Additional Language',
      'Afrikaans Home Language',
      'Afrikaans First Additional Language',
      'Information Technology',
      'Consumer Studies',
      'Tourism',
      'Visual Arts',
      'Dramatic Arts',
    ],
  },
  {
    grade: 'Grade 11',
    focus: 'Deepen conceptual understanding and apply knowledge to real-world scenarios.',
    subjects: [
      'Mathematics',
      'Mathematical Literacy',
      'Physical Sciences',
      'Life Sciences',
      'Geography',
      'History',
      'Accounting',
      'Business Studies',
      'Economics',
      'Life Orientation',
      'English Home Language',
      'English First Additional Language',
      'Afrikaans Home Language',
      'Afrikaans First Additional Language',
      'Information Technology',
      'Consumer Studies',
      'Tourism',
      'Visual Arts',
      'Dramatic Arts',
    ],
  },
  {
    grade: 'Grade 12',
    focus: 'Exam readiness for the National Senior Certificate (NSC).',
    subjects: [
      'Mathematics',
      'Mathematical Literacy',
      'Physical Sciences',
      'Life Sciences',
      'Geography',
      'History',
      'Accounting',
      'Business Studies',
      'Economics',
      'Life Orientation',
      'English Home Language',
      'English First Additional Language',
      'Afrikaans Home Language',
      'Afrikaans First Additional Language',
      'Information Technology',
      'Consumer Studies',
      'Tourism',
      'Visual Arts',
      'Dramatic Arts',
    ],
  },
];

const videoLibrary = [
  {
    subject: 'Mathematics',
    topics: [
      {
        title: 'Functions & Graphs',
        links: [
          {
            label: 'Intro to Linear Functions (Gr 10-12)',
            url: 'https://www.youtube.com/results?search_query=south+africa+grade+10+12+linear+functions',
          },
          {
            label: 'Trigonometry Masterclass (NSC Prep)',
            url: 'https://www.youtube.com/results?search_query=grade+12+trigonometry+south+africa',
          },
        ],
      },
      {
        title: 'Algebra & Calculus',
        links: [
          {
            label: 'Algebraic Manipulation',
            url: 'https://www.youtube.com/results?search_query=grade+10+algebra+south+africa',
          },
          {
            label: 'Differentiation & Optimization',
            url: 'https://www.youtube.com/results?search_query=grade+12+calculus+south+africa',
          },
        ],
      },
    ],
  },
  {
    subject: 'Physical Sciences',
    topics: [
      {
        title: 'Mechanics & Motion',
        links: [
          {
            label: 'Newton’s Laws (Gr 10-12)',
            url: 'https://www.youtube.com/results?search_query=grade+11+newton%27s+laws+south+africa',
          },
          {
            label: 'Momentum & Collisions',
            url: 'https://www.youtube.com/results?search_query=grade+12+momentum+south+africa',
          },
        ],
      },
      {
        title: 'Electricity & Matter',
        links: [
          {
            label: 'Circuit Analysis',
            url: 'https://www.youtube.com/results?search_query=grade+11+electric+circuits+south+africa',
          },
          {
            label: 'Chemical Equations',
            url: 'https://www.youtube.com/results?search_query=grade+10+chemical+equations+south+africa',
          },
        ],
      },
    ],
  },
  {
    subject: 'Life Sciences',
    topics: [
      {
        title: 'Human Biology',
        links: [
          {
            label: 'Human Endocrine System',
            url: 'https://www.youtube.com/results?search_query=grade+12+endocrine+system+south+africa',
          },
          {
            label: 'Genetics & Inheritance',
            url: 'https://www.youtube.com/results?search_query=grade+11+genetics+south+africa',
          },
        ],
      },
      {
        title: 'Ecology & Evolution',
        links: [
          {
            label: 'Ecosystems & Energy Flow',
            url: 'https://www.youtube.com/results?search_query=grade+10+ecosystems+south+africa',
          },
          {
            label: 'Natural Selection',
            url: 'https://www.youtube.com/results?search_query=grade+12+natural+selection+south+africa',
          },
        ],
      },
    ],
  },
  {
    subject: 'Commerce & Humanities',
    topics: [
      {
        title: 'Accounting, Business Studies, Economics',
        links: [
          {
            label: 'Accounting Cash Flow Basics',
            url: 'https://www.youtube.com/results?search_query=grade+11+cash+flow+statement+south+africa',
          },
          {
            label: 'Macro & Micro Economics',
            url: 'https://www.youtube.com/results?search_query=grade+12+economics+south+africa',
          },
        ],
      },
      {
        title: 'History & Geography',
        links: [
          {
            label: 'Cold War Overview',
            url: 'https://www.youtube.com/results?search_query=grade+12+history+cold+war+south+africa',
          },
          {
            label: 'Climate & Weather Systems',
            url: 'https://www.youtube.com/results?search_query=grade+11+climate+systems+south+africa',
          },
        ],
      },
    ],
  },
  {
    subject: 'Languages & Life Orientation',
    topics: [
      {
        title: 'Language Skills',
        links: [
          {
            label: 'Essay Writing & Literature',
            url: 'https://www.youtube.com/results?search_query=grade+12+english+essay+writing+south+africa',
          },
          {
            label: 'Afrikaans Comprehension',
            url: 'https://www.youtube.com/results?search_query=grade+11+afrikaans+comprehension+south+africa',
          },
        ],
      },
      {
        title: 'Life Orientation',
        links: [
          {
            label: 'Exam Prep & Study Skills',
            url: 'https://www.youtube.com/results?search_query=life+orientation+study+skills+south+africa',
          },
          {
            label: 'Career Guidance',
            url: 'https://www.youtube.com/results?search_query=grade+12+career+guidance+south+africa',
          },
        ],
      },
    ],
  },
];

function EducationApp() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.heroCard}>
        <Text style={styles.heroTitle}>SA Education Hub</Text>
        <Text style={styles.heroSubtitle}>Grades 10-12 · NSC-ready learning for every subject</Text>
        <View style={styles.heroRow}>
          <Badge text="Curriculum-aligned" />
          <Badge text="Study plans" />
          <Badge text="Video tutorials" />
        </View>
        <Text style={styles.heroDescription}>
          Explore South African CAPS-aligned learning paths, topic summaries, and tutorial videos for
          every subject. Plan your week, track progress, and get exam-ready with focused revision.
        </Text>
      </View>

      <SectionTitle title="Grade Pathways" subtitle="Structured learning maps for Grades 10-12." />
      {grades.map((grade) => (
        <View key={grade.grade} style={styles.card}>
          <Text style={styles.cardTitle}>{grade.grade}</Text>
          <Text style={styles.cardSubtitle}>{grade.focus}</Text>
          <View style={styles.subjectGrid}>
            {grade.subjects.map((subject) => (
              <View key={`${grade.grade}-${subject}`} style={styles.subjectChip}>
                <Text style={styles.subjectText}>{subject}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}

      <SectionTitle
        title="Tutorial Video Library"
        subtitle="Curated topic playlists for every subject and grade."
      />
      {videoLibrary.map((entry) => (
        <View key={entry.subject} style={styles.card}>
          <Text style={styles.cardTitle}>{entry.subject}</Text>
          {entry.topics.map((topic) => (
            <View key={`${entry.subject}-${topic.title}`} style={styles.topicBlock}>
              <Text style={styles.topicTitle}>{topic.title}</Text>
              {topic.links.map((link) => (
                <Pressable
                  key={`${entry.subject}-${topic.title}-${link.label}`}
                  style={styles.linkRow}
                  onPress={() => Linking.openURL(link.url)}>
                  <Text style={styles.linkText}>{link.label}</Text>
                  <Text style={styles.linkArrow}>↗</Text>
                </Pressable>
              ))}
            </View>
          ))}
        </View>
      ))}

      <SectionTitle title="Study Tools" subtitle="Everything you need to stay organized." />
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Weekly Planner</Text>
        <Text style={styles.cardSubtitle}>
          Set learning goals, allocate time per subject, and prioritize weak topics.
        </Text>
        <View style={styles.toolsGrid}>
          <ToolCard title="Smart Timetable" description="Auto-balance subjects across the week." />
          <ToolCard title="Revision Tracker" description="Track completed topics and past papers." />
          <ToolCard title="Exam Countdown" description="Plan milestones before NSC exams." />
        </View>
      </View>

      <SectionTitle title="Support & Guidance" subtitle="Built for learners, teachers, and parents." />
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Get the right help</Text>
        <View style={styles.supportList}>
          <SupportItem text="Past papers, memos, and exam tips by subject." />
          <SupportItem text="Career guidance aligned to subject choices." />
          <SupportItem text="Teacher lesson packs and classroom-ready slides." />
          <SupportItem text="Parent progress summaries and study reminders." />
        </View>
      </View>
    </ScrollView>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {subtitle ? <Text style={styles.sectionSubtitle}>{subtitle}</Text> : null}
    </View>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{text}</Text>
    </View>
  );
}

function ToolCard({ title, description }: { title: string; description: string }) {
  return (
    <View style={styles.toolCard}>
      <Text style={styles.toolTitle}>{title}</Text>
      <Text style={styles.toolDescription}>{description}</Text>
    </View>
  );
}

function SupportItem({ text }: { text: string }) {
  return (
    <View style={styles.supportItem}>
      <Text style={styles.supportBullet}>•</Text>
      <Text style={styles.supportText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f6f8fb',
    gap: 24,
  },
  heroCard: {
    backgroundColor: '#122238',
    borderRadius: 24,
    padding: 24,
    gap: 16,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#d6e2f5',
  },
  heroRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  heroDescription: {
    fontSize: 14,
    color: '#e8efff',
    lineHeight: 20,
  },
  badge: {
    backgroundColor: '#1f3a5f',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  badgeText: {
    color: '#d6e2f5',
    fontSize: 12,
    fontWeight: '600',
  },
  sectionHeader: {
    gap: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1c2738',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#4e5a6a',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 20,
    gap: 12,
    shadowColor: '#0b1320',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1c2738',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#4e5a6a',
    lineHeight: 20,
  },
  subjectGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  subjectChip: {
    backgroundColor: '#edf2ff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  subjectText: {
    color: '#31405a',
    fontSize: 12,
    fontWeight: '600',
  },
  topicBlock: {
    gap: 6,
    paddingBottom: 8,
  },
  topicTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1c2738',
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#f3f6ff',
  },
  linkText: {
    color: '#2d59c9',
    fontSize: 13,
    fontWeight: '600',
  },
  linkArrow: {
    color: '#2d59c9',
    fontWeight: '700',
  },
  toolsGrid: {
    gap: 12,
  },
  toolCard: {
    backgroundColor: '#f7f9ff',
    padding: 14,
    borderRadius: 14,
    gap: 6,
  },
  toolTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1c2738',
  },
  toolDescription: {
    fontSize: 13,
    color: '#4e5a6a',
  },
  supportList: {
    gap: 10,
  },
  supportItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  supportBullet: {
    fontSize: 18,
    color: '#2d59c9',
  },
  supportText: {
    fontSize: 14,
    color: '#4e5a6a',
    flex: 1,
  },
});
