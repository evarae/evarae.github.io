import useWindowDimensions from '../../components/windowDimensions';
import CustomBar from '../../components/CustomBar';

function Contact() {

    const { height, width } = useWindowDimensions();

    return(
        <div>
            <CustomBar></CustomBar>
            <p>Contact page</p>
        </div>

    );
}

export default Contact;