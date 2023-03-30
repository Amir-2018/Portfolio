import  profile  from "../assets/img/amir.jpg";
function fn(){
  document.querySelector("#header").classList.toggle("animm") ; 
  
}
const Main = () => {
    return ( 
        <div>
        <i class="bi bi-list mobile-nav-toggle d-xl-none" onClick={fn}></i>

            <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
                    <div class="hero-container" >
                        <h1>Amir Maalaoui</h1>
                        <p>I'm <span >Software engeneer</span></p>
                     </div>
            </section>

            <main id="main">
                <section id="about" class="about">
                    <div class="container">

                        <div class="section-title">
                        <h2>About</h2>
                        <p>I'm Amir Maalaoui, a 24-year-old highly motivated and skilled software engineering student with a proven track record in full-stack development. With proficiency in front-end languages such as HTML/CSS, JavaScript, and React, as well as back-end frameworks such as Node.js, MongoDB, and Express, I'm equipped to handle a wide range of software development projects. My passion for technology and programming, combined with exceptional problem-solving abilities, make me a valuable addition to any team.</p>
                        </div>

                        <div class="row">
                            <div class="col-lg-4" >
                            <img src="" class="img-fluid" alt=""/>
                        </div>
                        <div class="col-lg-8 pt-4 pt-lg-0 content" >
                            <h3>Software engeneer &amp; Web Developer.</h3>
                            <p >
                           PERSONAL INFROMATIONS
                            </p>
                            <div class="row">
                            <div class="col-lg-6">
                                <ul>
                                <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>23 January 1999</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+216 93 379 344 </span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>Country:</strong> <span>Tunisia</span></li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <ul>
                                <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Engeneer</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>amir.maalaoui270@gmail.com</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                            </div>
                           
                        </div>
                        </div>

                    </div>
                </section>
                

    <section id="skills" class="skills section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Skills</h2>
        
        </div>

        <div class="row skills-content">

          <div class="col-lg-6" >

            <div class="progress">
              <span class="skill">HTML <i class="val">95%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-barHTML" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">CSS <i class="val">75%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-barCSS" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">JavaScript <i class="val">75%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-barJS" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <div class="col-lg-6" >

            <div class="progress">
              <span class="skill">Express <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-barExpress" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">MongoDB <i class="val">65%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-barMongo" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Reactjs <i class="val">65%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-barReact" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    <section id="sumarry" class="resume">
      <div class="container">

        <div class="section-title">
          <h2>Sumarry</h2>
        </div>

        <div class="row">
          <div class="col-lg-6" >
            <div class="resume-item pb-0">
              <h4>Amir Maalaoui</h4>
              <p><em>Innovative and deadline-driven Web Developper with 4 years of experience  developing websites and mobile applications.</em></p>
              <ul>
                <li>Tunisia Bizerte</li>
                <li>(+216) 93 379 344</li>
                <li>amir.maalaoui207@gmail.com</li>
              </ul>
            </div>

            <div class="section-title" id="education">
             <h2>Education</h2>
            </div>
            <div class="resume-item">
              <h4>Master of Fine Arts &amp; Graphic Design</h4>
              <h5>2018 - 2019</h5>
              <p><em> Baccalaureate in Experimental Science</em></p>
            </div>


            <div class="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2019 - 2020</h5>
              <p><em>1st year fundamental license in computer science (LFI)</em></p>
            </div>

            <div class="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2020 - 2021</h5>
              <p><em>2nd year fundamental license in computer science (LFI)</em></p>
            </div>

            <div class="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2021 - 2022</h5>
              <p><em>3rd year fundamental license in computer science (LFI)</em></p>
            </div>

            <div class="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2022 - 2023</h5>
              <p><em>computer engineering in web and multimedia technology</em></p>
            </div>

            <div class="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2023 - 2024</h5>
              <p><em>software engineering</em></p>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Senior graphic design specialist</h4>
              <h5>2019 - Present</h5>
              <p><em>Experion, New York, NY </em></p>
              <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Graphic design specialist</h4>
              <h5>2017 - 2018</h5>
              <p><em>Stepping Stone Advertising, New York, NY</em></p>
              <ul>
                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="section-title " id="internship">
          <h2>Internships</h2>
        </div>
        
            <div class="col-lg-6" >
                
                <div class="resume-item">
                <h4>educational robot to teach programming to young children</h4>
                <h3>Fablab</h3>
                <h5>2021 - Present</h5>
                
                <p>This project is being carried out in collaboration with a hardware team to develop a product in the form of an educational robot that allows children to learn programming by manipulating blocks to create a program that will be executed by the robot.</p>
                </div>
                <div class="resume-item">
                <h4>project for the creation and management of restaurants</h4>
                <h5>2022 - Present</h5>
                <h3>Quadratech</h3>
                
                <p>
                The purpose of this project is to enable restaurant owners to create an account and establish their own restaurant, which will be visible online. Additionally, the project provides a dashboard where restaurant owners can view various statistics related to their restaurant's performance."
                </p>
                
                </div>
            </div>
        </div>
        

        
        

 </section>

 <section id="sumarry" class="resume">
      <div class="container">

     

      

        <div class="section-title " id="freelance">
          <h2>Freealance</h2>
        </div>
        
            <div class="col-lg-6" >
                
                <div class="resume-item">
                <h4>Store Manager</h4>
                <h3>Quadratech</h3>
                <h5>2022</h5>
                
                <p>Store Manager is a tool that enables store owners to create and manage their stores and counters. The platform allows for geographic tracking of stores and counters, providing valuable insights and statistics for counters</p>                              </div>
                <div class="resume-item">
                <h4>Online doctore (PFE)</h4>
                <h5>2022</h5>
                <h3>Student</h3>
                
                <p>
                        Our online doctor-finding project is designed to simplify the process of connecting patients with healthcare providers. With our platform, patients can easily search for and book appointments with doctors based on their specialties, ratings, and availability              
                    </p> 
                
                </div>
            </div>
        </div>
        

        
        

 </section>
 
 

    <section id="contact" class="contact">
        <div class="container">
        <div class="section-title">
          <h2>Contact</h2>
        </div>

        <div class="col-lg-8  col-md-12" >
        <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
       
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
        </div>
    </div>

    

  
 </section>

   
            </main>
        </div>
        
     );
}
 
export default Main;