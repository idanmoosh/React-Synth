import { useSelector } from 'react-redux';
import * as Tone from 'tone';

export const Key = props => {
  const wave = useSelector(state => {
    return state.counter.wave;
  });
  const duration = useSelector(state => {
    return state.counter.duration;
  });

  const distortionamount = useSelector(state => {
    return state.counter.distortion;
  });
  const osc = new Tone.Oscillator(props.frequency, wave);
  const reverb = new Tone.Reverb(duration, -5).toDestination();
  const distortion = new Tone.Distortion(distortionamount).toDestination();
  osc.fan(reverb, distortion);

  const handleDown = e => {
    Tone.start();
    osc.start();
  };

  const handleUp = e => {
    osc.stop();
  };

  return (
    <div
      className={props.className}
      onMouseDown={handleDown}
      onMouseUp={handleUp}></div>
  );
};
