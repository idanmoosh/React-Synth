import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Slider,
} from '@mui/material';
import './ControlBoardStyles.css';

import { useSelector, useDispatch } from 'react-redux';
import {
  setWave,
  setDuration,
  selectWave,
  setDistortion,
} from '../../features/oscSlice';

export const ControlBoard = props => {
  const wave = useSelector(selectWave);
  const dispatch = useDispatch();

  return (
    <div className='controlBoard'>
      <FormControl focused={true} size='small'>
        <FormLabel id='radio-buttons-wave-form'>Wave Shape</FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue={wave}
          name='radio-buttons-group'
          onChange={e => {
            dispatch(setWave(e.target.value));
          }}>
          <FormControlLabel value='sine' control={<Radio />} label='Sine' />
          <FormControlLabel value='square' control={<Radio />} label='Square' />
          <FormControlLabel
            value='sawtooth'
            control={<Radio />}
            label='Sawtooth'
          />
        </RadioGroup>
        <FormLabel id='slider-duration'>Reverb</FormLabel>
        <Slider
          aria-label='Always visible'
          defaultValue={0}
          step={0.5}
          min={0.1}
          max={10}
          onChange={e => {
            dispatch(setDuration(e.target.value));
          }}
          valueLabelDisplay='on'
        />
        <FormLabel id='slider-duration'>Distortion</FormLabel>
        <Slider
          aria-label='Always visible'
          defaultValue={0}
          step={1}
          min={0}
          max={20}
          onChange={e => {
            dispatch(setDistortion(e.target.value));
          }}
          valueLabelDisplay='on'
        />
      </FormControl>
    </div>
  );
};
