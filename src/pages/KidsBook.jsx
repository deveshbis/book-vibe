import kids1 from '../assets/kids1.webp'
import kids2 from '../assets/kids2.webp'
import kids3 from '../assets/kids3.webp'

const KidsBook = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:px-32 gap-3'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={kids1} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">After a Swim by Idries Shah</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-green-500">Read</button>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={kids2} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Speak First and Lose by Idries Shah</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-green-500">Read</button>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={kids3} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">The Ants and the Pen by Idries Shah</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-green-500">Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidsBook;