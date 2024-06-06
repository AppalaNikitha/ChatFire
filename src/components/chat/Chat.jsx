import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const handleEmoji = e => {
        setText((prev) => prev + e.emoji);
        setOpen(false);
    };

    console.log(text);

    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Nikitha</span>
                        <p>Hey, how are you?</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <img src="" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat iusto iure in suscipit cumque ullam possimus optio neque, dicta voluptatem distinctio voluptatibus commodi et enim architecto culpa, placeat, consequuntur nulla!</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://th.bing.com/th?id=OIP.rUT2A_d8icaTRW-g-V0FgwHaI5&w=228&h=274&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat iusto iure in suscipit cumque ullam possimus optio neque, dicta voluptatem distinctio voluptatibus commodi et enim architecto culpa, placeat, consequuntur nulla!</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat iusto iure in suscipit cumque ullam possimus optio neque, dicta voluptatem distinctio voluptatibus commodi et enim architecto culpa, placeat, consequuntur nulla!</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat iusto iure in suscipit cumque ullam possimus optio neque, dicta voluptatem distinctio voluptatibus commodi et enim architecto culpa, placeat, consequuntur nulla!</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat iusto iure in suscipit cumque ullam possimus optio neque, dicta voluptatem distinctio voluptatibus commodi et enim architecto culpa, placeat, consequuntur nulla!</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat iusto iure in suscipit cumque ullam possimus optio neque, dicta voluptatem distinctio voluptatibus commodi et enim architecto culpa, placeat, consequuntur nulla!</p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div> {/* Added this closing tag */}
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={text}
                    onChange={e => setText(e.target.value)}
                />

                <div className="emoji">
                    <img src="./emoji.png" alt="" onClick={() => setOpen(prev => !prev)} />

                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    );
}

export default Chat;
