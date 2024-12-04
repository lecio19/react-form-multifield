import { useState } from "react";
import style from "./components/card.module.css";
import posts from "./components/posts";


export default function Card() {
    const [title, setTitle] = useState('');
    const [tag, setTags] = useState('')
    const [posts, setPosts] = useState(Posts); 
    
    const publishedPosts = posts.filter((post) => post.published);
    
    function addPost(event) {
        event.preventDefault();
    
        const newTitle = title.trim();
        if (newTitle === '') return;
    
        const newTags = tag
        .trim()
        .toLocaleUpperCase()
        .split('-')

        if (newTags === '') return;

        const addedPost = {
          title: newTitle,
          image: kinderpinguìsrc,
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
          tags: newTags,
          published: true,
        };
       
        console.log(addedPost)
    
        setPosts([...posts, addedPost]);
        setTags([])
        setTitle('');
        console.log('Post aggiunto!');
    }
  return (
    <>
       <main className={style.background}>
        {/* FORM */}
        <div className={style.formContainer}>
          <form onSubmit={addPost} action="">

            {/* TITOLO */}
            <input
              type="text"
              onChange={(event) => setTitle(event.target.value)}
              value={title}
              placeholder="Inserisci il titolo del post"
              className={style.newPost}
            />
          
              {/* TAG */}
              <input
              type="text"
              onChange={(event) => setTags(event.target.value)}
              value={tag}
              placeholder="Inserisci Tags"
              className={style.newPost}
            />

            <input type="submit" value="Aggiungi" className={style.submitButton} />
          </form>
        </div>

        {/* CARD */}
        <div className={style.container}>
          {publishedPosts.length > 0
            ? publishedPosts.map((post) => (
                <div key={post.id} className={style.cardbody}>
                  <img src={post.image || '/path-to-default-image.jpg'} alt={post.title || 'Post'} />
                  <h3>
                    {post.title} {post.id}
                  </h3>
                  <h5 style={{ color: post.tags.includes("html") ? "red" : "blue" }}>
                    Tag: {post.tags}
                  </h5>
                  <p>Contenuto: {post.content}</p>
                </div>
              ))
            : <p>Nessun post pubblicato.</p>}
        </div>
      </main>
    </>
  );
}