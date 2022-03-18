import style from "../styles/index.module.css"
import Image from "next/image"


export default function Home() {
  return (
    <>
      <section id="welcome" className={`${style.welcomeSection} ${style.section}`}>
        <div className={style.welcomeImage}>
          <div>
            <Image src="/profilePicture.png" alt="Prifile picture" width={960} height={1280} className={style.welcomeImageClass}/>
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
              <tr>
                <th>Languages</th>
                <th>Very low</th>
                <th>low</th>
                <th>Intermideate</th>
                <th>Good</th>
                <th>Excilent</th>
              </tr>
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
            </table>
          </div>

          <div className={style.sideTable}>
            <div className={style.tableSect}>
              <h3 className={style.sectHead2}>Frameworks</h3>
              <table className={style.sectTable}>
                <tr>
                  <th>Frameworks</th>
                  <th>Very low</th>
                  <th>low</th>
                  <th>Intermideate</th>
                  <th>Good</th>
                  <th>Excilent</th>
                </tr>
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
              </table>
            </div>


            <div className={style.tableSect}>
              <h3 className={style.sectHead2}>Skills</h3>
              <table className={style.sectTable}>
                <tr>
                  <th>Skills</th>
                  <th>Very low</th>
                  <th>low</th>
                  <th>Intermideate</th>
                  <th>Good</th>
                  <th>Excilent</th>
                </tr>
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
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
