import React from 'react';
import emp2 from "../../Images/emp2.png";
import skype from "../../Images/skype.png";
import pin from "../../Images/pinterest.png";
import beh from "../../Images/behance.png";
import dribbble from "../../Images/dribbble.png";

const Resume = () => {
  return (
    <div>
      <div className='resume' id="resume-id">
        <h2>Resume</h2><hr className='resume-hr' />
        <div className='resume-flex'>
          <div className='resume-content'>
            <div className='resume-content-1'>
              <h3><b>Work Experience</b></h3>
              <hr />
              <h4><div className="dotEd"></div> <b>Advanced Technology Consulting Services(ATCS)</b></h4>
              <h6><b>Designation:- Junior Developer</b></h6>
              <h6><b>Technology :- Java Developer</b></h6>
              <b className='cllgName'>01/2022- 07/2022</b>
            </div>

            <div className='resume-content-2'>
              <h3><b>Education</b></h3>
              <hr />
              <div className="dot"></div>
              <h4><b className='cllgName'>SGBIT college Belagavi
              </b></h4>
              <b className='cllgName'>Bachelor of Computer Science & Engineering 7.8 CGPA</b><br/>
              <b className='cllgName'>2018 - 2021</b>
            </div>
            <div className='resume-content-2'>
              <div className="dotPoly"></div>
              <h4><b className='cllgName'>Government Polytechnic College</b></h4>
              <b className='cllgName'>Diploma in Computer Science & Engineering  71%</b><br/>
              <b className='cllgName'>2015 - 2018</b>
            </div>
          </div>
          <div className='resume-right'>
            <div className='resume-guy'>
              <div>
                <img className='resume-guy-pic' src={emp2} alt="" />
              </div>
              <div className='platforms'>
                <div><img className='platform-img' src={skype} alt="" /></div>
                <div><img className='platform-img' src={pin} alt="" /></div>
                <div><img className='platform-img' src={dribbble} alt="" /></div>
                <div><img className='platform-img' src={beh} alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;

{/* <div className="dotEd"></div>
<div className="dipEdu">Acharya Shrimanrayan Polytechnic</div>
<button className='highYear'>2014 - 2017</button>
</div>
<p className='bachCompTech dipName'>Diploma in Computer Science & Engineering</p>
</div> */}