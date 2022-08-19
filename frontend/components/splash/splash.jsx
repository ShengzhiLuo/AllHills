import React from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";


class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currImg: 1,
            curTime: ''
        };
        this.handleImage = this.handleImage.bind(this);
    };
    handleImage() {
        let nextImg = this.state.currImg + 1;
        if (nextImg === 8) nextImg = 1;
        this.setState({ currImg: nextImg });
    };
    componentDidMount() {
        this.interval = setInterval(() => this.handleImage(), 6000);
        this.getTime();
    };
    getTime = () => {
        let today = new Date(),
            curTime = today.getHours();
        this.setState({ curTime });
    };

    userSplash() {
        return (
            (this.props.currentUser ? (
                <h1 className='head-title'>
                    {this.state.curTime < 12 ? "Good Morning" : ""}
                    {this.state.curTime >= 12 && this.state.curTime < 17? "Good Afternoon" : ""}
                    {this.state.curTime >= 17 && this.state.curTime < 24 ? "Good Evening" : ""}, {this.props.currentUser.username}! 
                </h1>
            ): <h1 className='head-title'>Find Your Next Adventure</h1> )
        )
    };

    render() {
        return (
            <div id='splash-bg'>
                <img className={this.state.currImg === 1 ? "background-image" : "background-image hidden"} src={window.splash1} />
                <img className={this.state.currImg === 2 ? "background-image" : "background-image hidden"} src={window.splash2} />
                <img className={this.state.currImg === 3 ? "background-image" : "background-image hidden"} src={window.splash3} />
                <img className={this.state.currImg === 4 ? "background-image" : "background-image hidden"} src={window.splash4} />
                <img className={this.state.currImg === 5 ? "background-image" : "background-image hidden"} src={window.splash5} />
                <img className={this.state.currImg === 6 ? "background-image" : "background-image hidden"} src={window.splash6} />
                <img className={this.state.currImg === 7 ? "background-image" : "background-image hidden"} src={window.splash7} />
                <div className='search-section'>
                    {this.userSplash()}
                    <div className="search-container">
                        <form className="splash-search">
                            <img src={window.search} width="16px" height="16px" className='search-icon' />
                            <input
                                // onChange={this.updateSearch}
                                // onFocus={this.show}
                                // onBlur={this.hide}
                                type="text"
                                className="search-bar"
                                placeholder="Search by park or trail name"
                            />
                            <BsFillArrowRightCircleFill style={{fontSize: "30px", color: "#6b8e23"} } />
                        </form>
                    </div>
                </div>
            </div>
        )
    }

};

export default Splash;