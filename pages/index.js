import style from "../styles/index.module.css"
import Image from "next/image"
import Link from "next/link"


export default function Home(props) {
  props = props.props
  return (
    <>
      <section id="welcome" className={`${style.welcomeSection} ${style.section}`}>
        <div className={style.welcomeImage}>
          <div>
            <Image src="/profilePicture.png" alt="Prifile picture" width={960} height={1280} className={style.welcomeImageClass} />
          </div>
        </div>
        <div className={style.welcomeText}>
          <span className={style.welcomeTextW}>Welcome,</span>
          <span className={style.welcomeDesc}>I am a responsive web designer. I know HTML, CSS, Js with front end frameworks like React and backend frameworks like Next, Django etc.
            I am also very familar with python.</span>
        </div>
      </section>

      <section id="knowledge" className={`${style.section} ${style.skillSection}`}>
        <h2 className={style.sectHead}>My knowledge:-</h2>


        <div className={style.tables}>
          <div className={`${style.tableSect}`}>
            <h3 className={style.sectHead2}>Languages</h3>
            <table className={style.sectTable}>
              <thead>
                <tr>
                  <th>Languages</th>
                  <th>Very low</th>
                  <th>low</th>
                  <th>Intermideate</th>
                  <th>Good</th>
                  <th>Excilent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>HTML</th>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                </tr>
                <tr>
                  <th>CSS</th>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                </tr>
                <tr>
                  <th>JS</th>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableRedCell}`} >error</i>
                  </td>
                </tr>
                <tr>
                  <th>Python</th>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                </tr>
                <tr>
                  <th>Dart</th>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableRedCell}`} >error</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableRedCell}`} >error</i>
                  </td>
                </tr>
                <tr>
                  <th>C/C++</th>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableRedCell}`} >error</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableRedCell}`} >error</i>
                  </td>
                </tr>
                <tr>
                  <th>Java</th>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableRedCell}`} >error</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableRedCell}`} >error</i>
                  </td>
                  <td>
                    <i className={`material-icons ${style.tableRedCell}`} >error</i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={style.sideTable}>
            <div className={style.tableSect}>
              <h3 className={style.sectHead2}>Frameworks</h3>
              <table className={style.sectTable}>
                <thead>
                  <tr>
                    <th>Frameworks</th>
                    <th>Very low</th>
                    <th>low</th>
                    <th>Intermideate</th>
                    <th>Good</th>
                    <th>Excilent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Django</th>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                  </tr>
                  <tr>
                    <th>ReactJs</th>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableRedCell}`} >error</i>
                    </td>
                  </tr>
                  <tr>
                    <th>NextJs</th>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                  </tr>
                  <tr>
                    <th>Flutter</th>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableRedCell}`} >error</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableRedCell}`} >error</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableRedCell}`} >error</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableRedCell}`} >error</i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


            <div className={style.tableSect}>
              <h3 className={style.sectHead2}>Skills</h3>
              <table className={style.sectTable}>
                <thead>
                  <tr>
                    <th>Skills</th>
                    <th>Very low</th>
                    <th>low</th>
                    <th>Intermideate</th>
                    <th>Good</th>
                    <th>Excilent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Website Design</th>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                  </tr>
                  <tr>
                    <th>Website Development</th>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                  </tr>
                  <tr>
                    <th>PSD to HTML</th>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                  </tr>
                  <tr>
                    <th>Data Scraping</th>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                  </tr>
                  <tr>
                    <th>Web Researcs</th>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableGreenCell}`} >verified</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableRedCell}`} >error</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableRedCell}`} >error</i>
                    </td>
                    <td>
                      <i className={`material-icons ${style.tableRedCell}`} >error</i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="previousProjects" className={`${style.section} ${style.prevoiusProjectsSection}`}>
        <h2 className={style.sectHead}>My Previous Projects</h2>
        <div className={style.projCards}>
          {
            props.map((element) => {
              return (
                <div className={style.projectCard} key={element.slug}>
                  <h3 className={style.projCardTitle}>{element.shortTitle}</h3>
                  <p className={style.projCardDesc}>{element.description.substring(0,275)+"..."}</p>
                  <Link href={"project/"+element.slug}><a className={style.projCardBtn}>More info!</a></Link>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}


export async function getServerSideProps(context) {
  var props = await fetch('http://localhost:3000/api/getProjects')
  props = await props.json()
  return {
    props: { "props": props },
  }
}