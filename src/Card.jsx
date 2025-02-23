const Card = () => {
    return (
        <div>
            <div className="slider" style={{ '--width': '100px', '--height': '50px', '--quantity': '10' }}>
                <div className="list">
                    <div className="item" style={{ '--position': 1 }}><img src="/assets/slider1_1.png" alt="" /></div>
                    <div className="item" style={{ '--position': 2 }}><img src="/assets/slider1_2.png" alt="" /></div>
                    <div className="item" style={{ '--position': 3 }}><img src="/assets/slider1_3.png" alt="" /></div>
                    <div className="item" style={{ '--position': 4 }}><img src="/assets/slider1_4.png" alt="" /></div>
                    <div className="item" style={{ '--position': 5 }}><img src="/assets/slider1_5.png" alt="" /></div>
                    <div className="item" style={{ '--position': 6 }}><img src="/assets/slider1_6.png" alt="" /></div>
                    <div className="item" style={{ '--position': 7 }}><img src="/assets/slider1_7.png" alt="" /></div>
                    <div className="item" style={{ '--position': 8 }}><img src="/assets/slider1_8.png" alt="" /></div>
                    <div className="item" style={{ '--position': 9 }}><img src="/assets/slider1_9.png" alt="" /></div>
                    <div className="item" style={{ '--position': 10 }}><img src="/assets/slider1_10.png" alt="" /></div>
                </div>
            </div>

            <div className="slider" style={{ '--width': '200px', '--height': '200px', '--quantity': '9' }}>
                <div className="list">
                    <div className="item" style={{ '--position': 1 }}><img src="/assets/slider2_1.jpg" alt="" /></div>
                    <div className="item" style={{ '--position': 2 }}><img src="/assets/slider2_2.jpg" alt="" /></div>
                    <div className="item" style={{ '--position': 3 }}><img src="/assets/slider2_3.jpg" alt="" /></div>
                    <div className="item" style={{ '--position': 4 }}><img src="/assets/slider2_4.png" alt="" /></div>
                    <div className="item" style={{ '--position': 5 }}><img src="/assets/slider2_5.png" alt="" /></div>
                    <div className="item" style={{ '--position': 6 }}><img src="/assets/slider2_6.png" alt="" /></div>
                    <div className="item" style={{ '--position': 7 }}><img src="/assets/slider2_7.png" alt="" /></div>
                    <div className="item" style={{ '--position': 8 }}><img src="/assets/slider2_8.png" alt="" /></div>
                    <div className="item" style={{ '--position': 9 }}><img src="/assets/slider2_9.png" alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Card;
