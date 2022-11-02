import { ControlBoard } from '../ControlBoard/ControlBoard';
import { Keyboard } from '../Keyboard/Keyboard';
import './SynthSectionStyles.css';

export const SynthSection = () => {
  return (
    <div className='synth'>
      <ControlBoard />
      <Keyboard />
    </div>
  );
};
