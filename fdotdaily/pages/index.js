import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';


export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Welcome to FdotRead</title>
        <meta name="description" content="F. Daily: A blogging website made Al-Farhan Production." />
        <link rel="icon" href="/fav.png" />
      </Head>

      {/* <Script src="/sc.js" strategy="lazyOnload"> </Script> */}


      <main className={styles.main}>
        

        <div className={styles.myWrap}>
          <Image className={styles.myImg} src="/homeImg2.jpg" alt="" width={237} height={158}/>
          {/* <img className={styles.myImg} src="/homeImg2.jpg" alt="fdotRead" width={237} height={158} /> */}
        </div>

        <h1 className={styles.title}>
          Fdot Read
        </h1>


        <p className={styles.description}>
          A blog for hunting coders by a hunting coder
        </p>
        <div className={styles.blogs}>
            
            <h2 className={styles.h2}>Popular Blogs</h2>
            <div>
            <h3 className={styles.h3} >How to learn JavaScript in 2022</h3>
            <p className={styles.p}>Javascipt is language on client side. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non vero totam at quasi quidem perspiciatis amet quod placeat illum tempora deleniti, natus sunt hic saepe iure cupiditate libero eum.</p>
            <Link href="http://localhost:3000/blogpost/how-to-learn-js/" ><button className={styles.btn}>Read more</button></Link>
            </div>
            <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022</h3>
            <p className={styles.p}>Javascipt is language on client side.</p>
            <button className={styles.btn}>Read more</button>
            </div>
            <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022</h3>
            <p className={styles.p}>Javascipt is language on client side.</p>
            <button className={styles.btn}>Read more</button>
            
          </div>
        </div>
      </main>

    </div>
  )
}
