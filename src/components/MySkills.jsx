import React from 'react';

const MySkills = () => {
    return (
     <>
     <div className="card">
  <div className="header">My Skills</div>
  <div className="body">
    <div className="skill">
      <div className="skill-name html">HTML</div>
      <div className="skill-level">
        <div style="width: 90%" class="skill-percent"></div>
      </div>
      <div className="skill-percent-number">90%</div>
    </div>
    <div className="skill">
      <div className="skill-name css">CSS</div>
      <div className="skill-level">
        <div style="width: 80%" class="skill-percent"></div>
      </div>
      <div class="skill-percent-number">80%</div>
    </div>
    <div className="skill">
      <div className="skill-name js">JavaScript</div>
      <div className="skill-level">
        <div style="width: 75%" class="skill-percent"></div>
      </div>
      <div className="skill-percent-number">75%</div>
    </div>
  </div>
</div>

     
     </>
    );
}

export default MySkills;
