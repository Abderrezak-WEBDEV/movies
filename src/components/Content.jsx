import CardMovies from './CardMovies';
import {Row} from 'react-bootstrap'
import NotFound from './NotFound';
import PageMovie from './PageMovie';
const Content = ({data, showPage}) => {

        return (   
        <Row className='pt-5'>
            {
                data.length >=1 ? (data.map((item)=>{

                    return (<CardMovies key = {item.id} mov = {item}/>)

                })) : <NotFound/>
            }
            <PageMovie getPage= {showPage}/>
        </Row>
       );

};
export default Content;