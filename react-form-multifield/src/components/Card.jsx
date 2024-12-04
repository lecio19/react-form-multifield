import { useState } from "react";
import style from "./components/card.module.css";
import Posts from "./components/posts";

const PostsData = {
    title: "",
    image: "",
    content: "",
    published: false,
    categories: ""
  };

export default function Card() {
    const [posts, setPosts] = useState(Posts);
    const [formData, setFormData] = useState(PostsData);
 
    
    const publishedPosts = posts.filter((post) => post.published);

    function handleFormData(event) {
        const key = event.target.name;
        const value =
          event.target.type === "checkbox" ? event.target.checked : event.target.value;
    
          const newFormData = {
          ...formData,
          [key]: value,
        };
    
        console.log(newFormData)
    
        setFormData(newFormData);
      }
    
    function addPost(event) {
        event.preventDefault();
    
        const newTitle = formData.title.trim();
        // const newTags = formData.tags.trim();
    
        console.log("BEFORE TRIM")
    
        //if (newTitle === "" || newTags.length === 0) return;
    
        console.log("AFTER TRIM")
    
        const addedPost = {
            title: newTitle,
            image: formData.image || "https://img.freepik.com/vettori-premium/vettore-dell-icona-dell-immagine-predefinita-pagina-immagine-mancante-per-il-design-del-sito-web-o-l-app-mobile-nessuna-foto-disponibile_87543-7509.jpg",
            content: formData.content || "Contenuto non disponibile.",
            // tags: newTags,
            published: formData.published,
            categories: formData.categories
          };

          setPosts([...posts, addedPost]);
          setFormData(PostsData);
        }
          
        function deletePost(id) {
            const updatedPosts = posts.filter((post) => post.id !== id);
            setPosts(updatedPosts);
        }
        
    
  return (
       <main className={style.background}>
        {/* FORM */}
        <div className={style.formContainer}>
          <form onSubmit={addPost} classname={style.formContainer}>

            {/* TITOLO */}
            <div>
              <label htmlFor="title"></label>
              <input
                id="title"
                name="title"
                onChange={handleFormData}
                value={formData.title}
                type="text"
                placeholder="Titolo del post"
              />
            </div>
             
            {/* CONTENUTO */}
            <div>
                <label htmlFor="contenuto"></label>
                <input
                   id="content"
                   name="content"
                   onChange={handleFormData}
                   value={formData.content}
                   type="text"
                   placeholder="Inserisci il contenuto"
                />
            </div>

            {/* IMMAGINE */}
            <div>
              <label htmlFor="img"></label>
                 <input
                 id="image"
                 name="image"
                 onChange={handleFormData}
                 value={formData.image}
                 type="text"
                 placeholder="Inserisci il link"
                />
            </div>
            {/* CATEGORIA */}
            <div>
              <label htmlFor="categories"></label>
              <select  id="published"
                 name="categories"
                 onChange={handleFormData}
                 value={formData.categories}
                 type="select"
                 placeholder="Inserisci il contenuto"> 
              <option value="" disabled>Seleziona una categoria</option>
              <option value='tech'>Tech</option>
              <option value='programmazione'>Programmazione</option>
              </select>
            </div>
            {/* PUBBLICARE */}
            <div>
              <label htmlFor="pubblicare">Spunta per Pubblicare</label>
              <input
                id="published"
                name="published"
                onChange={handleFormData}
                checked={formData.published}
                type="checkbox"
               />
            </div>

            <input
               type="submit"
               value="Aggiungi"
               className={style.submitButton}
            />
            </form>
            </div>


            {/* CARD */}
            <div className={style.container}>
              {publishedPosts.length > 0
              ? publishedPosts.map((post) => (
                  <div key={post.id} className={style.cardbody}>
                      <img src={post.image || '/path-to-default-image.jpg'} alt={post.title || 'Post'} />
                      <h3>
                         {post.title}
                      </h3>
                      <p>Contenuto: {post.content}</p>
                      <h5>Categoria: {post.categories}</h5>
                  <div>
                      <button
                          className={style.submitButton}
                          onClick={() => deletePost(post.id)}
                      >
                          Elimina Post
                      </button>
                  </div>
              </div>
          ))
         : (
          <p>Nessun post pubblicato.</p>
        )}
      </div>
    </main>
   );
} 
        
                
  