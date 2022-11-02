import './KeybordStyles.css';
import { Key } from './Key';
export const Keyboard = () => {
  return (
    <div className='set'>
      <Key className='white c key' frequency={261.63} />
      <Key className='black cs key' frequency={277.18} />
      <Key className='white d key' frequency={293.66} />
      <Key className='black ds key' frequency={311.13} />
      <Key className='white e key' frequency={329.63} />
      <Key className='white f key' frequency={349.23} />
      <Key className='black fs key' frequency={367} />
      <Key className='white g key' frequency={392} />
      <Key className='black gs key' frequency={415.3} />
      <Key className='white a key' frequency={440} />
      <Key className='black as key' frequency={466.16} />
      <Key className='white b key' frequency={493.88} />
      <Key className='white c key' frequency={523.25} />
    </div>
  );
};
