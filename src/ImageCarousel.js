import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./ImageCarousel.css";

const ImageCarousel = ({children}) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  const MAX_VISIBILITY = 3;
  return (
    <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><FontAwesomeIcon icon={faChevronLeft}/></button>}
      {React.Children.map(children, (child, i) => (
        <div className='carousel-card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><FontAwesomeIcon icon={faChevronRight}/></button>}
    </div>
  );
};

export default ImageCarousel;