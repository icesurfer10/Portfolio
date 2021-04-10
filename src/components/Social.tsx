import React from 'react';
import LinkedIn from './LinkedIn';
import Facebook from './Facebook';
import './social.scss';

const Social: React.FC = () => {
  return (
    <div className="social">
      <LinkedIn />
      <Facebook />
    </div>
  )
}

export default Social;