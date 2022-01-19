import useWindowDimensions from '../../components/windowDimensions';
import CustomBar from '../../components/CustomBar';
import "../../index.css"

function Contact() {

    const { height, width } = useWindowDimensions();

    return(
        <div>
            <CustomBar></CustomBar>
            <div className='myStyle'>
                <p>Contact page</p>
            </div>
        </div>

    );
}

export default Contact;