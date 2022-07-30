import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Link from "../../atoms/Link/Link";

interface Project {
    repo: string;
    live: string;
    title: string;
    image: string;
    description: string;
    techs: string[];
}

type Props = {
    projectDetail: Project;
    alt: boolean;
};

export default function CardProyect({ projectDetail, alt = true}: Props) {
  return (
    <Card sx={{ width: "350px", height: "350px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={projectDetail.image}
          alt={projectDetail.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div"> 
            {projectDetail.title}
          </Typography>
          <Typography variant="body2" color="text.secondary"> 
            {projectDetail.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <Link link={projectDetail.repo}><GitHubIcon sx={{color: "black"}}/></Link>          
        </IconButton>
        <IconButton aria-label="share" >
          <Link link={projectDetail.live}><LiveTvIcon sx={{color: "black"}}/></Link> 
        </IconButton>
      </CardActions>
    </Card>
  );
}
