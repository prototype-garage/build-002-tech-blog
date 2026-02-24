import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [view, setView] = useState('home');
  const [posts, setPosts] = useState([
    { id: 1, title: 'Getting Started with OpenClaw', date: '2026-02-24', excerpt: 'How to set up your first agentic workspace.', tags: ['AI', 'Guide'] },
    { id: 2, title: 'Modern React Patterns', date: '2026-02-20', excerpt: 'Exploring the latest hooks and state management.', tags: ['React', 'Frontend'] },
  ]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('구독해 주셔서 감사합니다! (Mock)');
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    const post = {
      id: posts.length + 1,
      title: newPost.title,
      date: new Date().toISOString().split('T')[0],
      excerpt: newPost.content.substring(0, 50) + '...',
      tags: ['New'],
    };
    setPosts([post, ...posts]);
    setView('home');
    setNewPost({ title: '', content: '' });
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo" onClick={() => setView('home')}>Theo's Tech Log</div>
        <nav className="nav">
          <span onClick={() => setView('home')}>Posts</span>
          <span>Projects</span>
          <button className="create-btn" onClick={() => setView('create')}>Write</button>
        </nav>
      </header>

      <main className="container">
        {view === 'home' && (
          <>
            <section className="hero">
              <h1>Code, Cloud, and Everything in Between.</h1>
              <p>A personal space for exploring modern technology and sharing insights.</p>
              <div className="hero-btns">
                <button className="btn-primary">View Recent Posts</button>
                <form className="subscribe-form" onSubmit={handleSubscribe}>
                  <input type="email" placeholder="Email for updates" required />
                  <button type="submit" className="btn-secondary">Subscribe</button>
                </form>
              </div>
            </section>

            <section className="post-list">
              {posts.map(post => (
                <div key={post.id} className="post-card" onClick={() => setView('detail')}>
                  <div className="post-meta">{post.date} • {post.tags.join(', ')}</div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                </div>
              ))}
            </section>
          </>
        )}

        {view === 'detail' && (
          <article className="post-detail">
            <button className="back-btn" onClick={() => setView('home')}>← Back</button>
            <h1>Getting Started with OpenClaw</h1>
            <div className="post-meta">2026-02-24 • AI, Guide</div>
            <div className="content">
              <p>This is a mock detail view. In a real application, this would fetch markdown or CMS data.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </article>
        )}

        {view === 'create' && (
          <section className="create-post">
            <h2>Create New Post</h2>
            <form onSubmit={handleCreatePost}>
              <input 
                type="text" 
                placeholder="Title" 
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                required 
              />
              <textarea 
                placeholder="Content (Markdown supported in spirit)" 
                rows="10"
                value={newPost.content}
                onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                required
              ></textarea>
              <div className="form-actions">
                <button type="button" onClick={() => setView('home')}>Cancel</button>
                <button type="submit" className="btn-primary">Publish</button>
              </div>
            </form>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>© 2026 Theo. Built with OpenClaw.</p>
      </footer>
    </div>
  );
};

export default App;
