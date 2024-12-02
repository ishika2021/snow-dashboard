import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }:{theme:any}) => ({
  height: 3,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#A8C5DA",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

interface MapTagProps {
  name: string,
  value: number,
  label: string
}

const MapTag = ({ name, value, label }:MapTagProps) => {
    
  return (
    <Stack sx={{ flexGrow: 1 }} className="map-tag-wrapper">
      <div className="tag-header">
        <span>{name}</span>
        <span>{label}</span>
      </div>
      <BorderLinearProgress variant="determinate" value={value} />
    </Stack>
  );
  
}

export default MapTag;