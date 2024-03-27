import ebook1 from '../assets/ebook1.jpg'
import ebook2 from '../assets/ebook2.jpg'
import ebook4 from '../assets/ebook4.jpg'

const Ebook = () => {
    return (
        <div className='grid grid-cols-3 gap-1 px-32'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={ebook1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Be clear and concise
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If readers  understand your ebook title, they  be interested in whats inside. Avoid convoluted and wordy titles to ensure your readers can quickly and easily figure out what they are going to get inside the ebook.</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">First Edition</div>
                        <div className="badge badge-outline"> expert</div>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={ebook2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Grab their attention
                        <div className="badge badge-secondary">INTERESTING</div>
                    </h2>
                    <p>When an ebook title resonates with someone or they can see themselves benefiting from the information, they’re more likely to download the content. This is why your ebook title should use words that make people feel inspired, excited or motivated.</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Brainstorm</div>
                        <div className="badge badge-outline">impression</div>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={ebook4} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Consider using a subtitle
                        <div className="badge badge-secondary">OLD</div>
                    </h2>
                    <p>Sometimes your ebook title will be short, catchy and memorable, but it may not provide enough information to really communicate what the ebook is about. You can add a subtitle to give your ebook title breathing room while providing further context on whats inside. Remember, a subtitle should also be clear and concise.</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">memorable</div>
                        <div className="badge badge-outline">communicate</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ebook;