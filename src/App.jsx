import './App.css';
import Layout from './components/Layout';
import PostList from './components/PostList';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import UserForm from './components/UserForm';
import EventExamples from './components/EventExamples';
import ContactForm from './components/ContactForm';
import TodoList from './components/TodoList';
import LikesDemo from './components/LikesDemo';

function App() {
  return (
    <Layout>
      <main className="main-content">
        <h2>Welcome to CommunityHub</h2>
        <PostList />
        <section className="components-section">
          <h3>Interactive Components</h3>
          <Counter />
          <Toggle />
          <LikesDemo />
        </section>
        <section className="forms-section">
          <h3>Forms</h3>
          <UserForm />
          <ContactForm />
          <TodoList />
          <EventExamples />
        </section>
      </main>
    </Layout>
  );
}

export default App;
