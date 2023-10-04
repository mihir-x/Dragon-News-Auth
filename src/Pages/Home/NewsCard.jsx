import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const NewsCard = ({ news }) => {

    const { image_url, title, details, _id } = news

    return (
        <div className="card bg-base-100 shadow-xl mt-10">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div>
                    {
                        details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className=" text-purple-800">Read More</Link></p>: <p>{details}</p>
                    }
                </div>

            </div>
        </div>
    );
};

export default NewsCard;

NewsCard.propTypes = {
    news: PropTypes.object
}