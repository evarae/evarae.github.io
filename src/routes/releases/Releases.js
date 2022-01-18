import CustomBar from '../../components/CustomBar';
import useWindowDimensions from '../../components/windowDimensions';

function Releases() {

    const { height, width } = useWindowDimensions();

    return(
        <div>
            <CustomBar></CustomBar>
            <p>Releases page</p>
        </div>

    );
}

export default Releases;