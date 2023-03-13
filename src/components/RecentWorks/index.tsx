/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import { SocialLink } from '../SocialLink';
import { OutsideLink } from '../../assets/OutsideLink';
import { TableHoverPicture } from '../TableHoverPicture';

const recentWorks = [
  {
    project: 'The Next-Gen Box', year: 2022, type: 'Landing page', link: 'https://dribbble.com/yaschenko', preview: 'https://cdn.dribbble.com/userupload/4213309/file/original-9c2bffae058e02b03ba88559922b3a79.png?compress=1&resize=1600x1200',
  },
  {
    project: 'STANZA', year: 2022, type: 'Landing page', link: 'https://dribbble.com/yaschenko', preview: 'https://cdn.dribbble.com/userupload/4213308/file/original-cd478dc81785b164d300bfc3bc441052.png?compress=1&resize=1600x1200',
  },
  {
    project: 'Fluxflow', year: 2022, type: 'Landing page', link: 'https://dribbble.com/yaschenko', preview: 'https://cdn.dribbble.com/userupload/4213308/file/original-cd478dc81785b164d300bfc3bc441052.png?compress=1&resize=1600x1200',
  },
  {
    project: 'WATT', year: 2022, type: 'Mobile App', link: 'https://dribbble.com/yaschenko', preview: '',
  },
  {
    project: 'Rarepass', year: 2022, type: 'Mobile App', link: 'https://dribbble.com/yaschenko', preview: '',
  },
  {
    project: 'Posters', year: 2022, type: 'Graphic Design', link: 'https://dribbble.com/yaschenko', preview: '',
  },
];

export const RecentWorks: React.FC = () => {
  const [imgUrl, setImgUrl] = useState('');
  const [previewCoords, setPreviewCoords] = useState([0, 0]);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [tableRect, setTableRect] = useState<DOMRect | null>(null);
  const [tiltDegree, setTiltDegree] = useState<number>(0);

  const tableRef = useRef<HTMLTableElement>(null);
  useEffect(() => {
    if (tableRef.current) {
      setTableRect(tableRef.current.getBoundingClientRect());
    }
  }, []);

  const calcTiltDegrees = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
    const currentPercent = (e.clientX - tableRect!.left) / tableRect!.width;
    const tiltDegreeValue = -10 + (10 - -10) * currentPercent;
    setTiltDegree(tiltDegreeValue);
  };

  return (
    <div id="works" className="recent-works">
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
        <table ref={tableRef} className="recent-works__table">
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
              <tr
                onMouseEnter={() => {
                  setIsPreviewVisible(true);
                  setImgUrl(work.preview);
                }}
                onMouseMove={(e) => {
                  setTimeout(() => {
                    setPreviewCoords([e.pageX - 100, e.pageY - 100]);
                    calcTiltDegrees(e);
                  }, 100);
                }}
                onMouseLeave={() => setIsPreviewVisible(false)}
                className="recent-works__table-row"
              >
                <td className="recent-works__table-cell">
                  <span className="recent-works__table-cell-content">{work.project}</span>
                  <div className="recent-works__table-cell-bg" />
                </td>
                <td
                  className="recent-works__table-cell recent-works__table-header-year-cell"
                >
                  <span className="recent-works__table-cell-content">{work.year}</span>
                  <div className="recent-works__table-cell-bg" />
                </td>
                <td
                  className="recent-works__table-cell recent-works__table-header-type-cell"
                >
                  <span className="recent-works__table-cell-content">{work.type}</span>
                  <div className="recent-works__table-cell-bg" />
                </td>
                <td className="recent-works__table-cell recent-works__table-cell--last">
                  <a className="recent-works__table-link" href={work.link}>
                    View full case
                    &nbsp;
                    <OutsideLink />
                  </a>
                  <div className="recent-works__table-cell-bg" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        isPreviewVisible
        && (
          <div className="recent-works__preview-wrapper" style={{ top: previewCoords[1], left: previewCoords[0], transform: `rotate(${tiltDegree}deg)` }}>
            <TableHoverPicture imgUrl={imgUrl} />
          </div>
        )
      }
    </div>
  );
};

export default RecentWorks;
