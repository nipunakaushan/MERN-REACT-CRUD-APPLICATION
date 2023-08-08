import Reat, {useEffect} from 'react';

import { useDispatch} from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import { getPosts } from './actions/posts.js';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyle from './styles.js'  

const App = () => {
    const classes = useStyle(); // function call
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    },[dispatch]);

    return (
        <Container>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}> {/* create grid for display sizes */}
                            <Posts /> {/* declare component */}
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Form />   {/* declare component */}                        
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );

}

export default App; 


