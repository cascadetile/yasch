/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import './style.css';
import { SocialLink } from '../SocialLink';
import { OutsideLink } from '../../assets/OutsideLink';

const recentWorks = [
  {
    project: 'The Next-Gen Box', year: 2022, type: 'Landing page', link: 'https://dribbble.com/yaschenko',
  },
  {
    project: 'STANZA', year: 2022, type: 'Landing page', link: 'https://dribbble.com/yaschenko',
  },
  {
    project: 'Fluxflow', year: 2022, type: 'Landing page', link: 'https://dribbble.com/yaschenko',
  },
  {
    project: 'WATT', year: 2022, type: 'Mobile App', link: 'https://dribbble.com/yaschenko',
  },
  {
    project: 'Rarepass', year: 2022, type: 'Mobile App', link: 'https://dribbble.com/yaschenko',
  },
  {
    project: 'Posters', year: 2022, type: 'Graphic Design', link: 'https://dribbble.com/yaschenko',
  },
];

export const RecentWorks: React.FC = () => {
  return (
    <div className="recent-works">
      <div className="recent-works__title-and-links">
        <div className="recent-works__title-wrapper">
          <h2 className="recent-works__title">Recent works</h2>
          &nbsp;
          <span className="recent-works__amount">
            (
            {`0${recentWorks.length.toString()}`}
            )
          </span>
        </div>
        <div className="recent-works__links">
          <SocialLink link="https://dribbble.com/PinkAversa" text="Dribbble" />
          <SocialLink link="https://www.behance.net/aversa" text="Behance" />
        </div>
      </div>
      <div className="recent-works__table-wrapper">
        <table className="recent-works__table">
          <thead>
            <tr>
              <th className="recent-works__table-header-cell">Project</th>
              <th
                className="recent-works__table-header-cell recent-works__table-header-year-cell"
              >
                Year
              </th>
              <th
                className="recent-works__table-header-cell recent-works__table-header-type-cell"
              >
                Type
              </th>
              <th className="recent-works__table-header-cell">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {recentWorks.map((work) => (
              <tr>
                <td className="recent-works__table-cell">{work.project}</td>
                <td
                  className="recent-works__table-cell recent-works__table-header-year-cell"
                >
                  {work.year}
                </td>
                <td
                  className="recent-works__table-cell recent-works__table-header-type-cell"
                >
                  {work.type}
                </td>
                <td className="recent-works__table-cell recent-works__table-cell--last">
                  <a className="recent-works__table-link" href={work.link}>
                    View full case
                    &nbsp;
                    <OutsideLink />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentWorks;
