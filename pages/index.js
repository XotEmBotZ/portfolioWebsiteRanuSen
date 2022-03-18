import style from "../styles/index.module.css"
import Image from "next/image"


export default function Home() {
  return (
    <>
      <section id="wolcome" className={style.welcomeSection}>
        <div className={style.welcomeImage}>
          {/* <Image/> */}
        </div>
        <div className={style.welcomeText}>
          <span className={style.welcomeText}>Welcome,</span>
          I am a responsive web designer. I know HTML, CSS, Js with front end frameworks like React and backend frameworks like Next, Django etc.
          I am also very familar with python.
          </div>
      </section>
    </>
  )
}
