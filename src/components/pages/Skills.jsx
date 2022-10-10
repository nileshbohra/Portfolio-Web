import React from "react";
import Slide from "@material-ui/core/Slide";
import SkillCard from "./components/SkillCard";

export default function Skills() {
  return (
    <Slide in={true} direction="up" timeout={1000}>
      <section id="Skills">
        <div className="skillCardCointainer">
          <SkillCard imageUrl="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png" />
          <SkillCard imageUrl="https://miro.medium.com/max/785/1*t_GqJXyfqMDNlkJH4oUN5A.png" />
          <SkillCard imageUrl="https://s3.ap-southeast-1.amazonaws.com/arrowhitech.com/wp-content/uploads/2021/09/01031030/ReactJS.png" />
          <SkillCard imageUrl="https://colorlib.com/wp/wp-content/uploads/sites/2/nodejs-frameworks.png" />
        </div>
        <div className="skillCardCointainer">
          <SkillCard imageUrl="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.png" />
          <SkillCard imageUrl="https://ammarjaved.com/storage/posts/what-is-angularjs.png" />
          <SkillCard imageUrl="https://miro.medium.com/max/1400/1*mtsk3fQ_BRemFidhkel3dA.png" />
          <SkillCard imageUrl="https://images.ctfassets.net/twhs6sq7mv9q/2ygKhYdEDj8QZYr5uBhKaH/886a99a220062bd712cadcdd46997518/sass-logo.jpg" />
        </div>
        <div className="skillCardCointainer">
          <SkillCard imageUrl="https://www.techfor.id/wp-content/uploads/2019/12/html.png" />
          <SkillCard imageUrl="https://armyyazilim.com/wp-content/uploads/2019/10/css.png" />
          <SkillCard imageUrl="https://velog.velcdn.com/images/dohyunkim12/post/78dfde93-8259-49cd-bbe3-36d7828f6ba3/image.jpg" />
          <SkillCard imageUrl="https://cdn.mos.cms.futurecdn.net/cxNHDLoqobrKGHViKU7C7K.jpg" />
        </div>
      </section>
    </Slide>
  );
}
