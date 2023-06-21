import './Loader.scss';

function Loader() {
    return (
        <div className="spinner-wrapper">
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Loader;
