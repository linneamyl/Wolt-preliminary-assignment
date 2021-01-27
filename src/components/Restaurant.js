import { Blurhash } from "react-blurhash";
import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function Restaurant(props) {
    
    let restaurant = props;
    let isOnline = restaurant.content.online ? 'Online' : 'Offline';
    const [onlineStatus, setOnlineStatus] = useState('')

    useEffect(() => {
      checkStatus()
    })

    function checkStatus() {
        if (isOnline === 'Online') {
            setOnlineStatus('Open') 
        } else {
            setOnlineStatus('Closed')
        }
    }
  
    return (
        <Card key={props.id} style={{display: 'inline-block', margin: '20px'}}> 
            <CardActionArea>
                <CardMedia>
                    <Blurhash
                        hash={restaurant.content.blurhash}
                        style={{height:'250px', width:'275px'}}>
                    </Blurhash>
                    <Typography style={{position: 'absolute', bottom: '70px', left: '20px', fontSize: '20px'}} >
                           {onlineStatus}
                    </Typography>
                </CardMedia>
                <CardContent>
                    <Typography style={{justifyContent: 'center', fontSize: '15px', fontWeight: 'bold'}} variant="h5" >
                        {restaurant.content.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>        
    ) 
}
