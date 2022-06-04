import { compose } from 'redux';

import * as S from './Wrapper.styled';
import { useEffect } from 'react';
import { connector, Props } from './types'

const Container = (props: Props): JSX.Element => {
  const {
    loading = true,
    trackList = [],
    thunkGetTrack,
  }: Props = props;

  const getTracker = () => {
    const code = 'QB924591372BR'
    thunkGetTrack(code);
  }

  return (
    <S.Main>
      OI<button onClick={getTracker}>click me</ button>
    </S.Main>
  );
};

export default compose(connector(Container));