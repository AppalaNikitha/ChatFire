import "./detail.css";

const Detail = () => {
    return (
        <div className='detail'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h3>Nikitha</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                </div>
                <div className="photos">
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="https://www.bing.com/th?id=OIP.q9_93Lj25mF5KSVNCZj2dgHaEK&w=224&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img src="./download.png" alt="" />
                    </div>
                </div>

                <div className="photos">
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="https://www.bing.com/th?id=OIP.q9_93Lj25mF5KSVNCZj2dgHaEK&w=224&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img src="./download.png" alt="" />
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
            </div>
        </div>
    );
};

export default Detail;
