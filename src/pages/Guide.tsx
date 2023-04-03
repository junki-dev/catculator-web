/** @jsxImportSource @emotion/react */
import EmptyBox from '../components/EmptyBox';

import FemaleIcon from '@mui/icons-material/Female';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Box, Checkbox, css, FormControlLabel, FormGroup, List, ListItem, Modal, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useCallback, useState } from 'react';

const requestsFH = [
  '20분 정도 환기를 시켜주세요.',
  '5~10분 정도 놀아주고, 트릿을 주세요.(1/2)',
  '화장실을 비워주세요.',
  '물을 갈아주세요.',
];

const requestsSH = [
  '5~10분 정도 놀아주고 츄르를 주세요.(2/2)',
  '나가시기 전에 장난감을 몇 개 여기저기 놔주세요.',
  '트릿을 이곳저곳에 많이 숨겨주세요.',
  '나가실 때 유튜브로 "고양이가 좋아하는 영상"을 틀어주세요.',
];

const warning = [
  '입질을 해서 물수도 있으니 조심해주세요.(아픕니다...)',
  '나가실 때 침대있는 방의 장난감 창고 문을 닫아주세요.',
  '나가실 때 방묘문을 닫아주세요.',
];

const etc = [
  '냉장고 위에 과자가 있어요. 편하게 드세요.',
  '냉장고 안에 인스턴스 커피가 있어요. 편하게 드세요.',
  '커피머신 편하게 사용 하세요.(냉동실에 얼음 있음)',
  '물은 부리타 정수기(부엌에 물통)와 컵 사용하시면 됩니다.',
  `처음 떨어져 있어 걱정이 많이 되는데, 잘 부탁 드립니다. 🙇‍♂️🙇‍♂️🙇‍♂️`,
];

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Guide() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState<boolean[]>([false, false, false, false, false, false, false, false]);

  const handleOpen = () => {
    setOpen(!open);

    console.log(open);
    if (open) {
      setChecked([false, false, false, false, false, false, false, false]);
    }
  };

  const handleChecked = useCallback(
    (index: number) => {
      const newChecked = checked.map((val, idx) => {
        if (idx === index) {
          val = !val;
        }
        return val;
      });

      setChecked(newChecked);

      if (newChecked.every((val) => val === true)) handleOpen();
    },
    [checked],
  );

  return (
    <Box component={'div'} sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component={'div'} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            감사합니다.
          </Typography>
        </Box>
      </Modal>

      <EmptyBox flexBasis={'25%'} />
      <Box
        component={'div'}
        sx={{
          flexBasis: '50%',
          paddingTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography css={css({ fontWeight: 'bold', marginBottom: '1.5rem' })} color="#FFD93D" variant="h3">
          조아 설명서
        </Typography>
        <Typography css={css({ fontWeight: 'bold', marginBottom: '1rem' })} color="#B8621B" variant="h6">
          우리 조아 잘 부탁 드립니다.
        </Typography>

        <Grid2 container spacing={2} sx={{ display: 'flex', width: '100%', marginTop: 5, alignItems: 'left' }}>
          <Grid2 xs={2}>
            <Typography css={css({ fontWeight: 'bold', marginBottom: '0.5rem' })} color="#FF8400" variant="h4">
              기본 정보
            </Typography>
          </Grid2>
          <Grid2 xs={5}>
            <Typography css={css({ fontWeight: 'bold', marginBottom: '0.5rem' })} color="#4F200D" variant="h6">
              <List>
                <ListItem>이름: 조아</ListItem>
                <ListItem>나이: 8개월</ListItem>
                <ListItem>
                  성별: 여아
                  <FemaleIcon />
                </ListItem>
                <ListItem>동물병원: 형제동물의료센터(02-889-0575)</ListItem>
              </List>
            </Typography>
          </Grid2>
          <Grid2 xs={5}>
            <Typography css={css({ fontWeight: 'bold', marginBottom: '0.5rem' })} color="#4F200D" variant="h6">
              <List>
                물품 장소
                <ListItem>사료: 자동 급식기 사용, 부족할 경우 침대있는 방 창고</ListItem>
                <ListItem>간식: 티비장 오른쪽 서랍</ListItem>
                <ListItem>장난감: 침대 있는 방 창고</ListItem>
                <ListItem>배변 쓰레기통: 침대 있는 방 화장실 맞은편</ListItem>
                <ListItem>일반 쓰레기통: 티비장 우측</ListItem>
              </List>
            </Typography>
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2} sx={{ display: 'flex', width: '100%', marginTop: 5, alignItems: 'left' }}>
          <Grid2 xs={2}>
            <Typography css={css({ fontWeight: 'bold', marginBottom: '0.5rem' })} color="#FF8400" variant="h4">
              요청 사항
            </Typography>
          </Grid2>
          <Grid2 xs={5}>
            <FormGroup>
              {requestsFH.map((val, idx) => {
                return (
                  <FormControlLabel
                    key={`${idx}-${val}`}
                    control={<Checkbox onChange={() => handleChecked(idx)} tabIndex={-1} checked={checked[idx]} />}
                    label={
                      <Typography css={css({ fontWeight: 'bold' })} color="#4F200D" variant="h6">
                        {val}
                      </Typography>
                    }
                  />
                );
              })}
            </FormGroup>
          </Grid2>
          <Grid2 xs={5}>
            <FormGroup>
              {requestsSH.map((val, idx) => {
                return (
                  <FormControlLabel
                    key={`${idx}-${val}`}
                    control={
                      <Checkbox onChange={() => handleChecked(idx + 4)} tabIndex={-1} checked={checked[idx + 4]} />
                    }
                    label={
                      <Typography css={css({ fontWeight: 'bold' })} color="#4F200D" variant="h6">
                        {val}
                      </Typography>
                    }
                  />
                );
              })}
            </FormGroup>
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2} sx={{ display: 'flex', width: '100%', marginTop: 5, alignItems: 'left' }}>
          <Grid2 xs={2}>
            <Typography css={css({ fontWeight: 'bold', marginBottom: '0.5rem' })} color="#FF8400" variant="h4">
              <WarningAmberIcon /> 주의 사항
            </Typography>
          </Grid2>
          <Grid2 xs={5}>
            <FormGroup>
              {warning.map((val, idx) => {
                return (
                  <FormControlLabel
                    key={`${idx}-${val}`}
                    control={<span tabIndex={-1} />}
                    label={
                      <Typography css={css({ fontWeight: 'bold' })} color="#4F200D" variant="h6">
                        {val}
                      </Typography>
                    }
                  />
                );
              })}
            </FormGroup>
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2} sx={{ display: 'flex', width: '100%', marginTop: 5, alignItems: 'left' }}>
          <Grid2 xs={2}>
            <Typography css={css({ fontWeight: 'bold', marginBottom: '0.5rem' })} color="#FF8400" variant="h4">
              그 외
            </Typography>
          </Grid2>
          <Grid2 xs={5}>
            <FormGroup>
              {etc.map((val, idx) => {
                return (
                  <FormControlLabel
                    key={`${idx}-${val}`}
                    control={<span tabIndex={-1} />}
                    label={
                      <Typography css={css({ fontWeight: 'bold' })} color="#4F200D" variant="h6">
                        {val}
                      </Typography>
                    }
                  />
                );
              })}
            </FormGroup>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}
