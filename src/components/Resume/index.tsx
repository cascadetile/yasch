/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useContext } from 'react';
import { StarLarge } from '../../assets/StarLarge';
import { StarMedium } from '../../assets/StarMedium';
import { ThemeContext } from '../../contexts';
import { ResumeGroup } from '../ResumeGroup';
import { ResumeGroupItem } from '../ResumeGroupItem';
import { ResumeStoryOnMe } from '../ResumeStoryOnMe';
import { SocialLink } from '../SocialLink';
import './style.css';

const codev = `Responsible for user flows, wireframes & prototypes, creating conceptions, 
competitive usability evaluations, brainstorming, gathering requirements, communication 
with client and developers. Desktop/Mobile/Web3/Fintech Experience.`;
const cultway = `Responsible to ensure that the design was intuitive and user-friendly. 
Creation of wireframes, ideas validation, user experience and visual design. Creation, 
improving and supporting design system while creating and improving product.`;
const h1agency = `As intern was responsible for creating prototypes, improving 
interfaces/web pages, creating components and updating design system`;
const education = 'Bachelor\'s degree, Foreign Languages and Literatures';
const hobbies = `I enjoy exploring my creative side through drawing portraits 
and playing computer games in my free time. I also have a strong passion for literature 
and often spend my time reading and discussing classic and contemporary novels. 
In addition, I have a keen interest in history and enjoy learning about the past and 
how it has shaped the world we live in today.`;

export const Resume: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="resume">
      <div className="resume__star-large">
        <StarLarge theme={theme === 'dark' ? '#373737' : '#CBCBCB'} />
      </div>
      <div className="resume__star-medium">
        <StarMedium theme={theme === 'dark' ? '#373737' : '#CBCBCB'} />
      </div>
      <div className="resume__name-and-story">
        <div>
          <div className={`resume__name resume__name--${theme}`}>Vladislav Yaschenkov</div>
          <div className={`resume__position resume__position--${theme}`}>UX/UI Designer</div>
        </div>
        <ResumeStoryOnMe />
      </div>
      <div className="resume__groups">
        <ResumeGroup title="Experience" marginTop={0} />
        <ResumeGroupItem
          title="co.dev"
          subtitle="Brea, California · Remote"
          jobRole="UX/UI Designer"
          time="Sep 2022 – Present"
          text={codev}
        />
        <ResumeGroupItem
          title="Cultway"
          subtitle="Berlin, Germany · Remote"
          jobRole="UX/UI Designer"
          time="Feb 2023 – Present"
          text={cultway}
        />
        <ResumeGroupItem
          title="H1 Agency"
          subtitle="Lviv, Ukraine · Remote"
          jobRole="UX/UI Designer"
          time="Aug 2022 – Sep 2022"
          text={h1agency}
        />
        <ResumeGroup title="Education" marginTop={64} />
        <ResumeGroupItem
          title="Kryvyi Rih State Pedagogical University"
          time="Sep 2017 – Sep 2022"
          text={education}
        />
        <ResumeGroup title="Hobbies" marginTop={64} />
        <ResumeGroupItem
          text={hobbies}
        />
        <div className="resume__links">
          <SocialLink link="https://www.linkedin.com/in/pinkaversa" text="LinkedIn" />
          <SocialLink link="https://dribbble.com/PinkAversa" text="Dribbble" />
          <SocialLink link="https://www.behance.net/aversa" text="Behance" />
        </div>
      </div>
    </div>
  );
};

export default Resume;
