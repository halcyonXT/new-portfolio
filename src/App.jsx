import React from 'react'
import LOGO from './assets/logo.png'
import PROJLOGO from './assets/projects.png'
import { TextAnimation } from './gradientAnimation';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Video } from '@splidejs/splide-extension-video';


let screens = [
    ["landing", "Landing"],
    ["about", "About"],
    ["proj", "Projects"],
    ["archess-r", "Archess Reloaded"],
    ["typerate", "Typerate"],
    ["huid", "H.U.I.D."],
    ["collocus", "Collocus Chat"],
    ["yttomp3", "YT TO MP3"],
    ["noteplace", "Noteplace"],
    ["archess", "Archess"],
    ["cgol", "CGoL"],
    ["pong", "PONG!"],
]

let SIDEBAR_TOTAL_PADDING = 10; // in percent

let doScroll = false;
function App() {
    const polka1Ref = React.useRef(null);
    const polka2Ref = React.useRef(null);
    const root2Ref = React.useRef(null);
    const [mouseMoveActiveOn, setMouseMoveActiveOn] = React.useState("landing");
    const MMAORef = React.useRef(null);
    MMAORef.current = mouseMoveActiveOn;

    const [sidebarHovered, setSidebarHovered] = React.useState(false)


    const polkaScrollParallax = (e) => {
        doScroll = !doScroll;

        if (!doScroll) return;
        let scroll = e.target.scrollTop;

        polka1Ref.current.style.top = "-" + (scroll / 4) + "px";
        polka2Ref.current.style.top = "-" + (scroll / 8) + "px";
    }

    const setMMAO = (arg) => {
        TextAnimation.changeActivePanel(arg);
        setMouseMoveActiveOn(arg);
    }

    React.useEffect(() => {
        root2Ref.current.addEventListener('scroll', function () {

            const snapChildren = document.querySelectorAll('[data-id]');
            const container = root2Ref.current;
            
            const containerRect = container.getBoundingClientRect();

            snapChildren.forEach(child => {
                const rect = child.getBoundingClientRect();


                if (rect.top >= containerRect.top && rect.bottom <= containerRect.bottom) {
                    if (MMAORef.current !== child.dataset.id) {
                        setMMAO(child.dataset.id);
                    }
                }
            });
        });
    }, [])

    return (
        <>
            <div className="polka polka1" ref={polka1Ref}></div>
            <div className="polka polka2" ref={polka2Ref}></div>
            <div className={`sidebar ${sidebarHovered ? "hovered" : ""}`} onMouseEnter={() => setSidebarHovered(true)} onMouseLeave={() => setSidebarHovered(false)}>
                {
                    screens.map(pair => {
                        let color = pair[0] === MMAORef.current ? {background: "rgba(255, 255, 255, .4)"} : {};
                        return <a 
                            className={`within-sidebar ${color.background ? "active" : ""}`} 
                            href={"#" + pair[0] + "-a"} 
                            style={
                                {
                                    height: `${(100 - SIDEBAR_TOTAL_PADDING) / screens.length}%`,
                                    ...color
                                }
                        }>
                            <div className='within-sidebar-info'>{pair[1]}</div>
                        </a>
                    })
                }
            </div>
            <div className='root2 snap-parent' ref={root2Ref} onScroll={polkaScrollParallax}>
                <div id="nbg"></div>
                <div data-id="landing" id="landing-a" className="full-viewport-si snap-item">
                    <Logo mouseMoveActiveOn={mouseMoveActiveOn}/>
                    <div className="sublogo noselect">
                        FULL-STACK WEB DEVELOPER
                    </div>
                    <div className="buttons">

                    </div>
                </div>
                <About/>
                <ProjectsTitleCard/>
                <div data-id="archess-r" id="archess-r-a" className="full-viewport-si snap-item">
                    <div id="archess-r" className="title noselect" style={{margin: 0, padding: 0}}>
                        ARCHESS RELOADED
                    </div>
                    
                    <div className="card">
                        <div className="card-navbar">
                            <div className="tech-stack-wrapper">
                                <div className="tech-stack-text">
                                    <span data-title>Main stack:&nbsp;</span>React, Express.js, Node.js, MongoDB (MERN)
                                </div>
                                <div className="tech-stack-text">
                                    <span data-title>Other:&nbsp;</span>Socket.io, Mongoose, GSAP
                                </div>
                            </div>
                            <div className="card-navbar-buttons-wrapper">
                                <a href="https://jumpshare.com/s/XK2vWfUKj0DxX3S014c3" target='_blank'>
                                    <button className="card-navbar-button fullwidth" style={{marginBottom: '.35rem'}}>
                                        Research document&nbsp;&nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.25rem" viewBox="0 -960 960 960" fill="#ffffff"><path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                                    </button>
                                </a>
                                <a href="https://github.com/halcyonXT/archess-reloaded" target='_blank'>
                                    <button className="card-navbar-button" style={{marginBottom: '.35rem'}}>
                                        Github&nbsp;&nbsp;
                                        <svg style={{fill: "white"}} height="1.25rem" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#FFFFFF"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="text" style={{marginBottom: "1.5rem"}}>
                            Archess Reloaded is a full-stack web application aimed at chess fans of all skill levels, giving them the ability to play chess with friends online or locally and against AI in a variety of difficulties. The application uses an independent ELO system that simulates, but is independent of, the FIDE system.
                        </div>
                        <Splide options={{
                            type: "loop",
                            width: "100%",

                        }}>
                            <SplideSlide>
                                <iframe width="100%" style={{aspectRatio: "700 / 340", borderRadius: "12px"}} src="https://www.youtube.com/embed/LJyBx8q-sp8?si=bE0iWkYIPERNfIIB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="true"></iframe>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/NNG6ZCc/Screenshot-2024-07-19-145948.png" alt="Screenshot-2024-07-19-145948" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/nQ9QRwn/Screenshot-2024-07-19-145954.png" alt="Screenshot-2024-07-19-145954" border="0" />
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/BgpjRVm/Screenshot-2024-07-19-150001.png" alt="Screenshot-2024-07-19-150001" border="0" />
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/Wf5JBwt/Screenshot-2024-07-19-150018.png" alt="Screenshot-2024-07-19-150018" border="0" />
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/k5k0GsR/Screenshot-2024-07-19-150029.png" alt="Screenshot-2024-07-19-150029" border="0" />
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/d6vhJbZ/Screenshot-2024-07-19-150144.png" alt="Screenshot-2024-07-19-150144" border="0" />
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/CVryzxL/Screenshot-2024-07-19-150053.png" alt="Screenshot-2024-07-19-150053" border="0" />
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/TMmXLk8/Screenshot-2024-07-19-150106.png" alt="Screenshot-2024-07-19-150106" border="0" />
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/pWSf4sQ/Screenshot-2024-07-19-150201.png" alt="Screenshot-2024-07-19-150201" border="0" />
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/7Q0h15r/Screenshot-2024-07-19-150218.png" alt="Screenshot-2024-07-19-150218" border="0" />
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/M5n21HX/Screenshot-2024-07-19-150044.png" alt="Screenshot-2024-07-19-150044" border="0" />
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/8Kzz2VQ/Screenshot-2024-07-19-150124.png" alt="Screenshot-2024-07-19-150124" border="0" />
                            </SplideSlide>
                        </Splide>
                    </div>
                    
                </div>
                <div data-id="typerate" id="typerate-a" className="full-viewport-si snap-item">
                    <div id="typerate" className="title noselect" style={{margin: 0, padding: 0}}>
                        TYPERATE
                    </div>
                    
                    <div className="card">
                        <div className="card-navbar">
                            <div className="tech-stack-wrapper">
                                <div className="tech-stack-text">
                                    <span data-title>Main stack:&nbsp;</span>React, Express.js, Node.js, MongoDB (MERN)
                                </div>
                                <div className="tech-stack-text">
                                    <span data-title>Other:&nbsp;</span>Chart.js, jQuery, Mongoose
                                </div>
                            </div>
                            <div className="card-navbar-buttons-wrapper">
                                <a href="https://jumpshare.com/s/XK2vWfUKj0DxX3S014c3" target='_blank'>
                                    <button className="card-navbar-button" style={{marginBottom: '.35rem'}}>
                                        Research document&nbsp;&nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.25rem" viewBox="0 -960 960 960" fill="#ffffff"><path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                                    </button>
                                </a>
                                <a href="https://github.com/halcyonXT/typerate" target='_blank'>
                                    <button className="card-navbar-button" style={{marginBottom: '.35rem'}}>
                                        Frontend&nbsp;&nbsp;
                                        <svg style={{fill: "white"}} height="1.25rem" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#FFFFFF"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></svg>
                                    </button>
                                </a>
                                <a href="https://github.com/halcyonXT/typerate-backend" target='_blank'>
                                    <button className="card-navbar-button" style={{marginBottom: '.35rem'}}>
                                        Backend&nbsp;&nbsp;
                                        <svg style={{fill: "white"}} height="1.25rem" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#FFFFFF"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="text" style={{marginBottom: "1.5rem"}}>
                            Typerate is a full-stack web application that, at its core, serves to measure typing speed. It offers a wide range of functionalities to improve your typing skills, including support for different languages, customizable environments and detailed user statistics.
                        </div>
                        <Splide options={{
                            type: "loop",
                            width: "100%",

                        }}>
                            <SplideSlide>
                                <iframe width="100%" style={{aspectRatio: "700 / 340", borderRadius: "12px"}} src="https://www.youtube.com/embed/uEI7DYHlJAw?si=HSi1n-DqmNkSmDGW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="true"></iframe>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/Twm8mMz/t2.png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/hsPPcgv/t1.png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/82JMj5S/t3.png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/qDRXnjP/t4.png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/vXwRF5N/t5.png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/BtM9GjM/t6.png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/xjvvSMv/t7.png" alt="t2" border="0"/>
                            </SplideSlide>
                        </Splide>
                    </div>
                    
                </div>
                <div data-id="huid" id="huid-a" className="full-viewport-si snap-item">
                    <div id="huid" className="title noselect" style={{margin: 0, padding: 0}}>
                        H.U.I.D.
                    </div>
                    
                    <div className="card">
                        <div className="card-navbar">
                            <div className="tech-stack-wrapper">
                                <div className="tech-stack-text">
                                    <span data-title>Main stack:&nbsp;</span>React
                                </div>
                                <div className="tech-stack-text">
                                    <span data-title>Other:&nbsp;</span>PrismJS
                                </div>
                            </div>
                            <div className="card-navbar-buttons-wrapper">
                                <a href="https://halcyonxt.github.io/ui-designer-tool/" target='_blank'>
                                    <button className="card-navbar-button" style={{marginBottom: '.35rem'}}>
                                        Live website&nbsp;&nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.25rem" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                                    </button>
                                </a>
                                <a href="https://github.com/halcyonXT/ui-designer-tool" target='_blank'>
                                    <button className="card-navbar-button" style={{marginBottom: '.35rem'}}>
                                        Github&nbsp;&nbsp;
                                        <svg style={{fill: "white"}} height="1.25rem" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#FFFFFF"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="text" style={{marginBottom: "1.5rem"}}>
                            HUID (Halcyon's UI Designer) is a web application UI component designing tool for the popular ThreeJS-based .io game Starblast. Before the making of this tool, modders of the game could only create "components" through an imperative code-only way. The tool facilitates the process and makes it interactive. Though unrelated to the current running theme of my projects, as one of my more complex projects I felt it deserved a spot. As it's made through pure React, it also serves as a demonstration of my level of mastery of the library.
                        </div>
                        <Splide options={{
                            type: "loop",
                            width: "100%",
                        }}>
                            <SplideSlide>
                                <iframe width="100%" style={{aspectRatio: "700 / 340", borderRadius: "12px"}} src="https://www.youtube.com/embed/FpSkwDPVjds?si=nE-DeJAFjq_DPeHy;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="true"></iframe>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://raw.githubusercontent.com/halcyonXT/project-storage/main/portfolio%20simple/huid%20(1).png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://raw.githubusercontent.com/halcyonXT/project-storage/main/portfolio%20simple/huid%20(2).png" alt="t2" border="0"/>
                            </SplideSlide>
                        </Splide>
                    </div>
                    
                </div>
                <div data-id="collocus" id="collocus-a" className="full-viewport-si snap-item">
                    <div id="collocus" className="title noselect" style={{margin: 0, padding: 0}}>
                        Collocus chat
                    </div>
                    
                    <div className="card">
                        <div className="card-navbar">
                            <div className="tech-stack-wrapper">
                                <div className="tech-stack-text">
                                    <span data-title>Main stack:&nbsp;</span>React, Express.js, Node.js, MongoDB (MERN)
                                </div>
                                <div className="tech-stack-text">
                                    <span data-title>Other:&nbsp;</span>GraphQL, Apollo, Socket.io, TailwindCSS
                                </div>
                            </div>
                            <div className="card-navbar-buttons-wrapper">
                                <a href="https://github.com/halcyonXT/collocus-chat" target='_blank'>
                                    <button className="card-navbar-button" style={{marginBottom: '.35rem'}}>
                                        Github&nbsp;&nbsp;
                                        <svg style={{fill: "white"}} height="1.25rem" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#FFFFFF"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="text" style={{marginBottom: "1.5rem"}}>
                            Collocus Chat is a full-stack web application meant to enable real-time chatting between users. A good chunk of time was also invested in making smooth animations and a responsive, elegant design using TailwindCSS. The app enables group chat creation between an arbitrary amount of users, all in real-time. The client-server communication is done through Apollo and GraphQL.
                        </div>
                        <Splide options={{
                            type: "loop",
                            width: "100%",
                        }}>
                            <SplideSlide>
                                <img className='within-splide' src="https://raw.githubusercontent.com/halcyonXT/project-storage/main/portfolio%20simple/collocus%20(1).png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://raw.githubusercontent.com/halcyonXT/project-storage/main/portfolio%20simple/collocus%20(2).png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://raw.githubusercontent.com/halcyonXT/project-storage/main/portfolio%20simple/collocus%20(3).png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://raw.githubusercontent.com/halcyonXT/project-storage/main/portfolio%20simple/collocus%20(4).png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://raw.githubusercontent.com/halcyonXT/project-storage/main/portfolio%20simple/collocus%20(5).png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://raw.githubusercontent.com/halcyonXT/project-storage/main/portfolio%20simple/collocus%20(655).png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://raw.githubusercontent.com/halcyonXT/project-storage/main/portfolio%20simple/collocus%20(7).png" alt="t2" border="0"/>
                            </SplideSlide>
                        </Splide>
                    </div>
                    
                </div>
                <div data-id="yttomp3" id="yttomp3-a" className="full-viewport-si snap-item">
                    <div id="yttomp3" className="title noselect" style={{margin: 0, padding: 0}}>
                        YT TO MP3
                    </div>
                    
                    <div className="card">
                        <div className="card-navbar">
                            <div className="tech-stack-wrapper">
                                <div className="tech-stack-text">
                                    <span data-title>Main stack:&nbsp;</span>React, Express.js, Node.js
                                </div>
                                <div className="tech-stack-text">
                                    <span data-title>Other:&nbsp;</span>FFMPEG
                                </div>
                            </div>
                            <div className="card-navbar-buttons-wrapper">
                                <a href="https://github.com/halcyonXT/yt-to-mp3" target='_blank'>
                                    <button className="card-navbar-button" style={{marginBottom: '.35rem'}}>
                                        Github&nbsp;&nbsp;
                                        <svg style={{fill: "white"}} height="1.25rem" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#FFFFFF"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="text" style={{marginBottom: "1.5rem"}}>
                        A simple application built using Express.js, React and Node.js. Ytdl is used for communication and transmission of YT video data. It can be used in two modes, individual and bulk. Individual mode first scans the given link and provides information about the file to be downloaded before starting the download. Bulk mode receives an arbitrary number of youtube links separated by the "," character and, after click the "download" button is clicked, downloads them all in sequence, in mp3 format.
                        </div>
                        <Splide options={{
                            type: "loop",
                            width: "100%",
                        }}>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/vZX7Rvd/mp31.png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/2KTvcNp/mp32.png" alt="t2" border="0"/>
                            </SplideSlide>
                        </Splide>
                    </div>
                    
                </div>
                <div data-id="noteplace" id="noteplace-a" className="full-viewport-si snap-item">
                    <div id="noteplace" className="title noselect" style={{margin: 0, padding: 0}}>
                        Noteplace
                    </div>
                    
                    <div className="card">
                        <div className="card-navbar">
                            <div className="tech-stack-wrapper">
                                <div className="tech-stack-text">
                                    <span data-title>Main stack:&nbsp;</span>Javascript
                                </div>
                                <div className="tech-stack-text">
                                    <span data-title>Other:&nbsp;</span>None
                                </div>
                            </div>
                            <div className="card-navbar-buttons-wrapper">
                                <a href="https://halcyonxt.github.io/noteplace/" target='_blank'>
                                    <button className="card-navbar-button" style={{marginBottom: '.35rem'}}>
                                        Live website&nbsp;&nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.25rem" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                                    </button>
                                </a>
                                <a href="https://github.com/halcyonXT/noteplace" target='_blank'>
                                    <button className="card-navbar-button" style={{marginBottom: '.35rem'}}>
                                        Github&nbsp;&nbsp;
                                        <svg style={{fill: "white"}} height="1.25rem" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#FFFFFF"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="text" style={{marginBottom: "1.5rem"}}>
                            An advanced, modern note-taking site that uses its own typesetting system, built entirely in vanilla JavaScript, without any libraries. After a few months of using React for the front-end, I challenged myself to rebuild a vanilla JS web application without the help of libraries. In addition to its own typesetting system, it uses a very intuitive user interface with elegant colors in a dichromatic style. The design is responsive and can be used on the phone. Some functionalities are outdated and only available on Chromium-based browsers.
                        </div>
                        <Splide options={{
                            type: "loop",
                            width: "100%",
                        }}>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/8b7NhZ9/noteplace-preview.png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/nbPL2dP/noteplace-edit.png" alt="t2" border="0"/>
                            </SplideSlide>
                        </Splide>
                    </div>
                    
                </div>
                <div data-id="archess" id="archess-a" className="full-viewport-si snap-item">
                    <div id="archess" className="title noselect" style={{margin: 0, padding: 0}}>
                        Archess
                    </div>
                    
                    <div className="card">
                        <div className="card-navbar">
                            <div className="tech-stack-wrapper">
                                <div className="tech-stack-text">
                                    <span data-title>Main stack:&nbsp;</span>React
                                </div>
                                <div className="tech-stack-text">
                                    <span data-title>Other:&nbsp;</span>None
                                </div>
                            </div>
                            <div className="card-navbar-buttons-wrapper">
                                <a href="https://halcyonxt.github.io/archess/" target='_blank'>
                                    <button className="card-navbar-button" style={{marginBottom: '.35rem'}}>
                                        Live website&nbsp;&nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.25rem" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                                    </button>
                                </a>
                                <a href="https://github.com/halcyonXT/archess" target='_blank'>
                                    <button className="card-navbar-button" style={{marginBottom: '.35rem'}}>
                                        Github&nbsp;&nbsp;
                                        <svg style={{fill: "white"}} height="1.25rem" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#FFFFFF"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="text" style={{marginBottom: "1.5rem"}}>
                            Old version of the project that won first place in the 2024 national competition (Archess reloaded). A nice representation of the progression between my skills then and now. A simple application for playing chess locally, on one computer. Built with React and using a pastel color theme, which can be changed in the input settings. Compiler of available moves is self-made.
                        </div>
                        <Splide options={{
                            type: "loop",
                            width: "100%",
                        }}>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/g3XD02V/ar1.png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/MCJ21Jr/ar2.png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/9bj02b8/ar3.png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/pwYZnbZ/ar4.png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/QKNCpbk/ar5.png" alt="t2" border="0"/>
                            </SplideSlide>
                        </Splide>
                    </div>
                    
                </div>
                <div data-id="cgol" id="cgol-a" className="full-viewport-si snap-item">
                    <div id="cgol" className="title noselect" style={{margin: 0, padding: 0}}>
                        CGoL
                    </div>
                    
                    <div className="card">
                        <div className="card-navbar">
                            <div className="tech-stack-wrapper">
                                <div className="tech-stack-text">
                                    <span data-title>Main stack:&nbsp;</span>Javascript
                                </div>
                                <div className="tech-stack-text">
                                    <span data-title>Other:&nbsp;</span>None
                                </div>
                            </div>
                            <div className="card-navbar-buttons-wrapper">
                                <a href="https://halcyonxt.github.io/conwaysGameOfLife/" target='_blank'>
                                    <button className="card-navbar-button" style={{marginBottom: '.35rem'}}>
                                        Live website&nbsp;&nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.25rem" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                                    </button>
                                </a>
                                <a href="https://github.com/halcyonXT/conwaysGameOfLife" target='_blank'>
                                    <button className="card-navbar-button" style={{marginBottom: '.35rem'}}>
                                        Github&nbsp;&nbsp;
                                        <svg style={{fill: "white"}} height="1.25rem" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#FFFFFF"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="text" style={{marginBottom: "1.5rem"}}>
                            CGoL is short for "Conway's Game of Life", a cellular automata devised by John Horton Conway. It is a zero-player game, meaning that it's evolution is determined by its initial state, requiring no further input. This is a recreation of CGoL made with Javascript and one of my earliest JS projects.
                        </div>
                        <Splide options={{
                            type: "loop",
                            width: "100%",
                        }}>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/ggnSmMf/cgol.png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/598v8k3/cgol2.png" alt="t2" border="0"/>
                            </SplideSlide>
                        </Splide>
                    </div>
                    
                </div>
                <div data-id="pong" id="pong-a" className="full-viewport-si snap-item">
                    <div id="pong" className="title noselect" style={{margin: 0, padding: 0}}>
                        PONG!
                    </div>
                    
                    <div className="card">
                        <div className="card-navbar">
                            <div className="tech-stack-wrapper">
                                <div className="tech-stack-text">
                                    <span data-title>Main stack:&nbsp;</span>Javascript
                                </div>
                                <div className="tech-stack-text">
                                    <span data-title>Other:&nbsp;</span>None
                                </div>
                            </div>
                            <div className="card-navbar-buttons-wrapper">
                                <a href="https://halcyonxt.github.io/" target='_blank'>
                                    <button className="card-navbar-button" style={{marginBottom: '.35rem'}}>
                                        Live website&nbsp;&nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.25rem" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                                    </button>
                                </a>
                                <a href="https://github.com/halcyonXT/halcyonXT.github.io" target='_blank'>
                                    <button className="card-navbar-button" style={{marginBottom: '.35rem'}}>
                                        Github&nbsp;&nbsp;
                                        <svg style={{fill: "white"}} height="1.25rem" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#FFFFFF"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="text" style={{marginBottom: "1.5rem"}}>
                        My first project ever made in Javascript. For its place on this list, far better than expected. It could use various optimizations and changes, but what can we expect from a beginner project. It contains various functionalities such as progressive ball acceleration, random angle of trajectory, a menu that offers options such as changing the sensitivity of the paddle as well as dynamic sensitivity depending on the speed of the ball, and many themes. A good representation of my roots in Javascript and front-end development.
                        </div>
                        <Splide options={{
                            type: "loop",
                            width: "100%",
                        }}>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/xCJHcbG/pong-1.png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/Hq1BSN4/pong-2.png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/ZV3NQBf/pong-4.png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/8snyHkR/pong-5.png" alt="t2" border="0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img className='within-splide' src="https://i.ibb.co/Mnh6Vxp/pong-6.png" alt="t2" border="0"/>
                            </SplideSlide>
                        </Splide>
                    </div>
                    
                </div>
            </div>
        </>

    )
}

/**
<a href="https://ibb.co/G37xMDh"></a>
<a href="https://ibb.co/sm55QrX"></a>
 */


let bubbleActivateTimer = null;
const About = (props) => {
    const [whichBubbleActive, setWhichBubbleActive] = React.useState(null);


    const registerBubbleActivation = (which, enter = true) => {
        clearTimeout(bubbleActivateTimer);

        if (enter) {
            bubbleActivateTimer = setTimeout(() => {
                setWhichBubbleActive(which);
            }, 250)
        } else setWhichBubbleActive(null);
    }

    const registerBubbleClick = (which) => {
        if (whichBubbleActive === which) {
            setWhichBubbleActive(null);
        } else {
            setWhichBubbleActive(which);
        }
    }

    return (
        <div data-id="about" id="about-a" className="full-viewport-si snap-item">
            <div id="about" className="title noselect">
                ABOUT ME
            </div>
            <div className="card">
                <div className="text">
                    My name is&nbsp;
                        <span 
                            onMouseEnter={() => registerBubbleActivation("name", true)}
                            onClick={() => registerBubbleClick("name")}
                            onMouseLeave={() => registerBubbleActivation("name", false)}
                            style={{position: 'relative', textDecoration: 'underline'}}>
                            Aleksandar{/*Milošević*/}
                            <div className="bubble-popup-wrap" style={{display: whichBubbleActive === "name" ? "flex" : "none"}}>
                                <div className="bubble-popup-arrow"></div>
                                <div className="bubble-popup-bubble">
                                    Alexander {/*Miloshevich*/}
                                </div>
                            </div>
                        </span> 
                    &nbsp;, and I'm a full-stack web developer based in Serbia.
                    <br/><br/>
                    Since my youth, I have enjoyed all activities involving creativity, and throughout the years, I have strived to participate in more of them.  <br/><br/>
                    In my last years of middle school, I began playing around with programming, specifically Python. Then I noticed something was amiss, the visual aspect. <br/><br/>
                    Some time later I discovered the wonderful world of front-end web development, the perfect creative outlet I've always sought.&nbsp;
                    Ever since then I've geniunely enjoyed making projects I find fun, non-conforming striking visual experiences and creative solutions. <br/><br/>
                    Since then I've grown into a full-stack developer and I keep marching forward every day.
                </div>
            </div>
        </div>
    )
}


const ProjectsTitleCard = () => {
    return (
        <div data-id="proj" id="proj-a" className="full-viewport-si snap-item">
            <img src={PROJLOGO} className="logoimg noselect" /> 
            <div id="proj" className="title noselect" style={{margin: 0, padding: 0, fontSize: "5rem", lineHeight: "1"}}>
                PROJECTS
            </div>
            <div className="sublogo noselect" style={{marginTop: "-.25rem"}}>
                A REVIEW OF MY MORE RELEVANT PROJECTS
            </div>
            <div className="card" style={{marginTop: ".5rem", padding: 0}}>
                <a href='#archess-r-a' className="project-item">
                    <h6>ARCHESS RELOADED</h6>
                    <p>2024&nbsp;&nbsp;/&nbsp;&nbsp;Full-stack&nbsp;&nbsp;/&nbsp;&nbsp;MERN+&nbsp;&nbsp;/&nbsp;&nbsp;<span style={{color: "white", textShadow: "0px 0px 5px rgba(255,255,255,0.4)"}}>Tournament-winning</span></p>
                </a>
                <a href='#typerate-a' className="project-item">
                    <h6>TYPERATE</h6>
                    <p>2023&nbsp;&nbsp;/&nbsp;&nbsp;Full-stack&nbsp;&nbsp;/&nbsp;&nbsp;MERN&nbsp;&nbsp;/&nbsp;&nbsp;<span style={{color: "white", textShadow: "0px 0px 5px rgba(255,255,255,0.4)"}}>Tournament-winning</span></p>
                </a>
                <a href='#huid-a' className="project-item">
                    <h6>H.U.I.D.</h6>
                    <p>2024&nbsp;&nbsp;/&nbsp;&nbsp;Front-end&nbsp;&nbsp;/&nbsp;&nbsp;React</p>
                </a>
                <a href='#collocus-a' className="project-item">
                    <h6>Collocus chat</h6>
                    <p>2023&nbsp;&nbsp;/&nbsp;&nbsp;Full-stack&nbsp;&nbsp;/&nbsp;&nbsp;MERN+</p>
                </a>
                <a href='#yttomp3-a' className="project-item">
                    <h6>YT-TO-MP3</h6>
                    <p>2023&nbsp;&nbsp;/&nbsp;&nbsp;Full-stack&nbsp;&nbsp;/&nbsp;&nbsp;ERN</p>
                </a>
                <a href='#noteplace-a' className="project-item">
                    <h6>Noteplace</h6>
                    <p>2023&nbsp;&nbsp;/&nbsp;&nbsp;Front-end&nbsp;&nbsp;/&nbsp;&nbsp;Vanilla JS</p>
                </a>
                <a href='#archess-a' className="project-item">
                    <h6>Archess</h6>
                    <p>2023&nbsp;&nbsp;/&nbsp;&nbsp;Front-end&nbsp;&nbsp;/&nbsp;&nbsp;React</p>
                </a>
                <a href='#cgol-a' className="project-item">
                    <h6>CGoL</h6>
                    <p>2023&nbsp;&nbsp;/&nbsp;&nbsp;Front-end&nbsp;&nbsp;/&nbsp;&nbsp;Vanilla JS</p>
                </a>
                <a href='#pong-a' className="project-item">
                    <h6>PONG!</h6>
                    <p>2023&nbsp;&nbsp;/&nbsp;&nbsp;Front-end&nbsp;&nbsp;/&nbsp;&nbsp;Vanilla JS</p>
                </a>
            </div>
        </div>
    )
}





let main =    {x: 0, y: 0};
let cyan =    {x: 0, y: 0};
let magenta = {x: 0, y: 0};
let t1, t2;
const Logo = (props) => {
    const logoRef = React.useRef(null);


    React.useEffect(() => {

        TextAnimation.init();

    
    }, [props.mouseMoveActiveOn]);

    return (
        <>
            <img src={LOGO} className="logoimg noselect" /> 
            <div id="sl"></div>
            <div id="mainlogo" className="logo noselect" ref={logoRef}>
                HALCYON
            </div>
        </>
    )
}

export default App
