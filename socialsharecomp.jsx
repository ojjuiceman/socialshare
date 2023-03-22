import * as React from 'react';
import { Link } from "react-router-dom";
import { useButtonStyles } from "../Styles/Onboarding/useButtonStyles";
import { makeStyles } from '@mui/styles';
import ClipboardJS from 'clipboard';
import {
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    FacebookShareButton,
    FacebookIcon,
    EmailShareButton,
    EmailIcon,
    LivejournalIcon
} from "react-share";
import { IosShare} from '@mui/icons-material';

import { Popover, Button } from "@mui/material";

new ClipboardJS ('.btn');

const SocialSharebtn = () => {

    const useStyles = makeStyles(theme => ({
        root: {
            margin: "0 auto",
            textDecoration: "underline",
            color: theme.palette.primary.main,
            fontWeight: theme.typography.h4.fontWeight,
        }
    }),
    )
    
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
    return (
        <div>
            <Button className={classes.root} aria-describedby={id}  onClick={handleClick}>
            
            <IosShare >
            
            </IosShare>
            
            </Button>
            <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
         
            >
             <TwitterShareButton
        title=""
        url=""
        source=""
    >
        <TwitterIcon  round bgStyle={{ fill: "#FFD200" }} />
    </TwitterShareButton>
    <FacebookShareButton
        url=""
        hashtag=""
    >
        <FacebookIcon  round bgStyle={{ fill: "#FFD200" }} />
    </FacebookShareButton>
    <LinkedinShareButton url="">
        <LinkedinIcon  round bgStyle={{ fill: "#FFD200" }} />
    </LinkedinShareButton>
    <EmailShareButton url="" subject="" body="">
            <EmailIcon round bgStyle={{ fill: "#FFD200" }} />
    </EmailShareButton>
    
    <LivejournalIcon
            class="btn" 
            data-clipboard-target="#hp" 
            round bgStyle={{ fill: "#FFD200" }}>
     </LivejournalIcon>
     
     <input id="hp" value=""/>
    
     
            </Popover>
        </div>

);
};

export default SocialSharebtn;