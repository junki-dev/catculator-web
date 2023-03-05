import { Box, Typography } from '@mui/material';

interface IDesc {
  text: string;
}

const howToUseDesc: IDesc[] = [
  { text: '1. 반려묘의 몸무게를 입력하세요.' },
  { text: '2. 반려묘의 생일을 입력하세요.' },
  { text: '3. 반려묘의 에너지 요구량을 선택하세요.' },
  { text: '4. 반려묘에게 급여하는 사료를 선택하거나, 없을 경우 칼로리를 입력하세요.' },
  { text: '5. [계산하기] 버튼을 눌러, 급여할 사료량을 계산하세요.' },
  { text: '6. [MORE INFO] 버튼으로 반료묘의 추가 정보를 확인하세요.' },
];

interface ManualProps {
  flexBasis: string | number;
}

export default function Manual({ flexBasis }: ManualProps) {
  return (
    <Box
      component={'div'}
      sx={{ display: { xs: 'none' }, height: '100%', width: '10%', flexBasis, padding: '10rem 2rem 0 0' }}
    >
      <Typography variant="h5">What is catculator?</Typography>
      <Typography variant="body1">Catulator는 반려묘의 생애주기 및 상태에 따라 사료량을 계산해줍니다. </Typography>
      <br />
      <Typography variant="h5">How To Use?</Typography>
      {howToUseDesc.map((desc, idx) => (
        <Typography key={idx} variant="body1">
          {desc.text}
        </Typography>
      ))}
    </Box>
  );
}
