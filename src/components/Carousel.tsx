import React, {useEffect} from 'react';
import '../App.css';
import "./CarouselStyle.css";
import Windmills from "../images/Windmills.png"
import Tallneck from "../images/Tallneck.png"
import FrostSlug from "../images/OwenL_DigitalGlazingFrost_V01.png"
import BB8 from "../images/OwenL_SketchJournal2_Ver06 .png"
import CorvoBianco from "../images/CorvoBianco.png"

const Carousel = () => {

    let slideIndex : number = 1;
    useEffect(() => {
        console.log("page loaded");
        showSlides(slideIndex);
    },);


    // Next/previous controls
    function changeSlides(n : number) {
        showSlides(slideIndex += n);
    }

    // Set slide to a number
    function setCurrentSlide(n : number) {
        showSlides(slideIndex = n);
    }

    function showSlides(num : number){
        let i : number;
        //Get main images
        let slides : HTMLCollectionOf<Element> = document.getElementsByClassName("images");
        //Get thumbnails
        let dots : HTMLCollectionOf<Element> = document.getElementsByClassName("gallery_image");
        let captionText : HTMLElement | null = document.getElementById("caption");
        if (num > slides.length) {slideIndex = 1}
        if (num < 1) {slideIndex = slides.length}
        // Hide all of the main images
        for (i = 0; i < slides.length; i++) {
            if(slides[i] instanceof HTMLElement) {
                slides[i].className = "images images_hidden";
            }
        }
        // Set all thumbnails to default
        for (i = 0; i < dots.length; i++) {
            dots[i].className = "gallery_image";
        }
        //Select active image and show it
        slides[slideIndex-1].className = "images images_active";
        //Select active thumbnail
        dots[slideIndex-1].className = "gallery_image active";
        // Set caption text
        // @ts-ignore
         captionText.innerHTML = dots[slideIndex-1].alt;
    }


    return (
        <div className={"page_object"}>
            <div className={"box"}>
                <div className="images">
                    <div className="numbertext">1 / 5</div>
                    <img className={"image_style"} src={Windmills} alt={"null"}/>
                </div>
                <div className="images">
                    <div className="numbertext">2 / 5</div>
                    <img className={"image_style"} src={CorvoBianco} alt={"null"}/>
                </div>
                <div className="images">
                    <div className="numbertext">3 / 5</div>
                    <img className={"image_style"} src={Tallneck} alt={"null"}/>
                </div>
                <div className="images">
                    <div className="numbertext">4 / 5</div>
                    <img className={"image_style"} src={BB8} alt={"null"}/>
                </div>
                <div className="images">
                    <div className="numbertext">5 / 5</div>
                    <img className={"image_style"} src={FrostSlug} alt={"null"}/>
                </div>
                {/*Buttons*/}
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="prev" onClick={() => changeSlides(-1)}>&#10094;</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="next" onClick={() => changeSlides(1)}>&#10095;</a>

                {/*Caption*/}
                <div className="caption-container">
                    <p id="caption"></p>
                </div>

                {/*Gallery*/}

                <div className="row">
                    <div className="column">
                        <img className="gallery_image g_hidden" src={Windmills}
                             onClick={() => setCurrentSlide(1)} alt="Windmills"/>
                    </div>
                    <div className="column">
                        <img className="gallery_image g_hidden" src={CorvoBianco}
                             onClick={() => setCurrentSlide(2)} alt="Corvo Bianco"/>
                    </div>
                    <div className="column">
                        <img className="gallery_image g_hidden" src={Tallneck}
                             onClick={() => setCurrentSlide(3)} alt="Tallneck"/>
                    </div>
                    <div className="column">
                        <img className="gallery_image g_hidden" src={BB8}
                             onClick={() => setCurrentSlide(4)} alt="BB-8"/>
                    </div>
                    <div className="column">
                        <img className="gallery_image g_hidden" src={FrostSlug}
                             onClick={() => setCurrentSlide(5)} alt="Frost Slug"/>
                    </div>
                </div>

                </div>
            </div>
            )
            }
export default Carousel;