import React, { useState, useMemo, useCallback } from 'react';
import { Button } from '@mui/material';

import cvRecords from '../providers/data/cv.json';

import Meta from './../components/Meta';
import Resume from './../components/resume';

const resume = cvRecords.filter((val) => !val.cvOnly);

function ResumeCvPage(_props) {
  const [fullCV, setFullCV] = useState(false);

  const showLongShort = useCallback(() => {
    setFullCV(!fullCV);
  }, [fullCV]);

  const buttonText = useMemo(
    () => 'View as ' + (fullCV ? 'Résume' : 'Curriculum Vitae'),
    [fullCV]
  );

  return (
    <>
      <Meta title="Résume / CV - Keith Stolte" />
      <Button
        variant="outlined"
        color="primary"
        size="large"
        onClick={showLongShort}
        fullWidth={true}
      >
        {buttonText}
      </Button>
      <Resume cv={fullCV ? cvRecords : resume} />
    </>
  );
}

export default ResumeCvPage;
