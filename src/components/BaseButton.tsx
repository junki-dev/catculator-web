import { Button } from '@mui/material';

interface BaseButtonProps {
  label: string;
  color: string;
  hoveredColor?: string;
  backgroundColor?: string;
  disabled?: boolean;
  onClick: () => void;
}

export default function BaseButton({
  label,
  color,
  hoveredColor,
  backgroundColor,
  disabled = false,
  onClick,
}: BaseButtonProps) {
  return (
    <Button
      sx={{
        p: 1,
        width: '100%',
        color,
        fontWeight: 'bold',
        '&:hover': { background: hoveredColor },
        background: backgroundColor,
      }}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {label}
    </Button>
  );
}
