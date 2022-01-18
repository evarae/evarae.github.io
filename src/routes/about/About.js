import useWindowDimensions from '../../components/windowDimensions';
import CustomBar from '../../components/CustomBar';

function About() {

    const { height, width } = useWindowDimensions();

    return(
        <div>
            <CustomBar></CustomBar>
            <p>About page</p>
        </div>

    );
}

export default About;