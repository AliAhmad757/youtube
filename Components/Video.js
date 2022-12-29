import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import millify from 'millify';

export default function RecipeReviewCard({ title, bestThumbnail, author, uploadedAt, views, descriptionShort, name, bestAvatar , url}) {
  console.log(author)

  const verifyIcon = <CheckCircleIcon />;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ minHeight: "400px" }}>
        <CardMedia
          component="img"
          image={bestThumbnail?.url || bestAvatar?.url}
          width="300px"
          height="250px"
          alt={"best-thumbnail"}
        />
        <CardContent>
          <a href={url}>
            <Typography variant="body2" color="text.secondary">
              {title?.substr(0, 60) + "..." || descriptionShort}
            </Typography>
          </a>
        </CardContent>
        <CardHeader
          avatar={
            <Avatar alt="Remy Sharp" src={author?.bestAvatar?.url} />
          }
          title={author?.verified ?  verifyIcon: author?.name || name}
          subheader={millify(views) + " Views ~" + uploadedAt}
        />
      </Card>
    </Grid >
  );
}