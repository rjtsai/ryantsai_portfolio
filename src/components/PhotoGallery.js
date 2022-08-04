import React, { useState } from "react";
import "./PhotoGallery.css";
import stairs from "../GalleryImages/stairs.jpg";
import disney_1 from "../GalleryImages/disney_1.jpg";
import dole from "../GalleryImages/dole.jpg";
import moderna from "../GalleryImages/moderna.jpg";
import sb from "../GalleryImages/sb.jpg";
import concert_1 from "../GalleryImages/concert_1.jpg";
import concert_2 from "../GalleryImages/concert_2.jpg";
import concert_3 from "../GalleryImages/concert_3.jpg";
import slo from "../GalleryImages/slo.jpg";
import trivia from "../GalleryImages/trivia.jpg";
import dune_1 from "../GalleryImages/dune_1.jpg";
import dune_2 from "../GalleryImages/dune_2.jpg";
import dune_3 from "../GalleryImages/dune_3.jpg";
import dune_4 from "../GalleryImages/dune_4.jpg";
import tt_beach from "../GalleryImages/tt_beach.jpg";
import tt_group from "../GalleryImages/tt_group.jpg";
import snowboard from "../GalleryImages/snowboard.jpg";
import tahoe_1 from "../GalleryImages/tahoe_1.jpg";
import starry_1 from "../GalleryImages/starry_1.jpg";
import starry_2 from "../GalleryImages/starry_2.jpg";
import fam_1 from "../GalleryImages/fam_1.jpg";
import onewheel from "../GalleryImages/onewheel.jpg";
import musical from "../GalleryImages/musical.jpg";
import phone from "../GalleryImages/phone.jpg";
import mom from "../GalleryImages/mom.jpg";

const Gallery = () => {
  let data = [
    { src: disney_1, caption: "Found some cool headwear" },
    {
      src: dole,
      caption:
        "The Dole Whip @ Disneyland makes my top 3 icecream spots for sure",
    },
    { src: sb, caption: "The boys" },
    { src: trivia, caption: "Champions of the weekly Woodstocks trivia night" },
    { src: concert_2, caption: "One of the best sets ever @ Countdown NYE" },
    { src: concert_3, caption: "@ Countdown NYE" },
    { src: moderna, caption: "A Covid-era staple" },
    { src: starry_2, caption: "Night hike above the clouds" },
    {
      src: starry_1,
      caption:
        "Street lights in SLO are pretty much nonexistent. This is the upside",
    },
    { src: dune_1, caption: "@ Pismo dunes" },
    { src: dune_2, caption: "@ Pismo dunes" },
    { src: dune_3, caption: "@ Pismo dunes" },
    { src: dune_4, caption: "@ Pismo dunes" },
    { src: snowboard, caption: "First time snowboarding— did not go well" },
    { src: tahoe_1, caption: "One of many tahoe trips" },
    { src: tt_group, caption: "Theta Tau SLO Founding Class photoshoot" },
    { src: tt_beach, caption: "Theta Tau SLO founders :)" },
    { src: concert_1, caption: "Head in the clouds!" },
    { src: fam_1, caption: "Little sister's highschool graduation" },
    { src: onewheel, caption: "My favorite toy at the moment" },
    { src: slo, caption: "My first SLO outing after moving into college" },
    {
      src: musical,
      caption: "Joined the musical because it seemed fun, turns out it was",
    },
    { src: phone, caption: "My first cell phone, thanks dad!" },
    { src: mom, caption: "Me and my mom" },
  ];
  const [model, setModel] = useState(false);
  const [tempSrc, setTempSrc] = useState("");
  const [tempCaption, setTempCaption] = useState("");
  const displayImg = (src, caption) => {
    setTempSrc(src);
    setTempCaption(caption);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempSrc} />
        <i className="fa-solid fa-xmark" onClick={() => setModel(false)} />
        <div className="caption">{tempCaption}</div>
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <>
              <div
                className="image"
                key={index}
                onClick={() => displayImg(item.src, item.caption)}
              >
                <img src={item.src} style={{ width: "100%" }} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
