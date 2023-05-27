/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import axios from 'axios';
import './style.css';
import { SocialLink } from '../SocialLink';
import { OutsideLink } from '../../assets/OutsideLink';
import { TableHoverPicture } from '../TableHoverPicture';
import { ThemeContext } from '../../contexts';

interface IRecentWork {
  project: string,
  year: number,
  type: string,
  link: string,
  preview: string
}

export const RecentWorks: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [imgUrl, setImgUrl] = useState('');
  const [previewCoords, setPreviewCoords] = useState([0, 0]);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [tableRect, setTableRect] = useState<DOMRect | null>(null);
  const [tiltDegree, setTiltDegree] = useState<number>(0);
  const [data, setData] = useState<IRecentWork[]>([]);

  const [width, setWidth] = useState<number>(window.innerWidth);

  const tableRef = useRef<HTMLTableElement>(null);

  const updateTableRect = () => {
    if (tableRef.current) {
      setTableRect(tableRef.current.getBoundingClientRect());
    }
  };
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    updateTableRect();
  };

  const isMobile = width <= 768;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://raw.githubusercontent.com/cascadetile/yasch/master/recent-works.json',
      );
      setData(result.data);
    };
    fetchData();

    updateTableRect();

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const calcTiltDegrees = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
    const currentPercent = (e.clientX - tableRect!.left) / tableRect!.width;
    const tiltDegreeValue = -10 + (10 - -10) * currentPercent;
    setTiltDegree(tiltDegreeValue);
  };

  return (
    <div className={`recent-works__wrapper recent-works__wrapper--${theme}`}>
      <div id="works" className="anchor recent-works">
        <div className="recent-works__title-and-links">
          <div className="recent-works__title-wrapper">
            <h2 className={`recent-works__title recent-works__title--${theme}`}>Recent works</h2>
            &nbsp;
            <span className="recent-works__amount">
              (
              {`0${data.length.toString()}`}
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
                <th className={`recent-works__table-header-cell recent-works__table-cell--${theme}`}>Project</th>
                <th
                  className={`recent-works__table-header-cell recent-works__table-cell--${theme} recent-works__table-header-year-cell`}
                >
                  Year
                </th>
                <th
                  className={`recent-works__table-header-cell recent-works__table-cell--${theme} recent-works__table-header-type-cell`}
                >
                  Type
                </th>
                <th className={`recent-works__table-header-cell recent-works__table-cell--${theme}`}>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {data.map((work) => (
                <tr
                  onMouseEnter={() => {
                    if (!isMobile) {
                      setIsPreviewVisible(true);
                      setImgUrl(work.preview);
                    }
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
                  <td className={`recent-works__table-cell recent-works__table-cell--${theme}`}>
                    <a href={work.link} target="_blank" rel="noopener noreferrer" className={`recent-works__table-cell-content recent-works__table-cell-content--${theme}`}>{work.project}</a>
                    <div className={`recent-works__table-cell-bg recent-works__table-cell-bg--${theme}`} />
                  </td>
                  <td
                    className={`recent-works__table-cell recent-works__table-header-year-cell recent-works__table-cell--${theme}`}
                  >
                    <a href={work.link} target="_blank" rel="noopener noreferrer" className={`recent-works__table-cell-content recent-works__table-cell-content--${theme}`}>{work.year}</a>
                    <div className={`recent-works__table-cell-bg recent-works__table-cell-bg--${theme}`} />
                  </td>
                  <td
                    className={`recent-works__table-cell recent-works__table-header-type-cell recent-works__table-cell--${theme}`}
                  >
                    <a href={work.link} target="_blank" rel="noopener noreferrer" className={`recent-works__table-cell-content recent-works__table-cell-content--${theme}`}>{work.type}</a>
                    <div className={`recent-works__table-cell-bg recent-works__table-cell-bg--${theme}`} />
                  </td>
                  <td className={`recent-works__table-cell recent-works__table-cell--last recent-works__table-cell--${theme}`}>
                    <a href={work.link} target="_blank" rel="noopener noreferrer" className={`recent-works__table-cell-content recent-works__table-cell-content--${theme}`}>
                      Visit
                      &nbsp;
                      <OutsideLink />
                    </a>
                    <div className={`recent-works__table-cell-bg recent-works__table-cell-bg--${theme}`} />
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
    </div>
  );
};

export default RecentWorks;
