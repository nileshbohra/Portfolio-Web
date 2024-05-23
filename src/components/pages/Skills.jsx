import React from "react";
import Slide from "@material-ui/core/Slide";
import SkillCard from "./components/SkillCard";
import {Grid} from "@material-ui/core";

export default function Skills() {
    return (
      <Slide in={true} direction="up" timeout={1000}>
        <section id="Skills">
          <h1 className="primaryTxt heading">Skills</h1>
          <div className="skillContainer">
            <Grid container justifyContent="space-evenly">
              <Grid item>
                <SkillCard imageUrl="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png" />
              </Grid>
              <Grid item>
                <SkillCard imageUrl="https://miro.medium.com/max/785/1*t_GqJXyfqMDNlkJH4oUN5A.png" />
              </Grid>
              <Grid item>
                <SkillCard imageUrl="https://s3.ap-southeast-1.amazonaws.com/arrowhitech.com/wp-content/uploads/2021/09/01031030/ReactJS.png" />
              </Grid>
              <Grid item>
                <SkillCard imageUrl="https://colorlib.com/wp/wp-content/uploads/sites/2/nodejs-frameworks.png" />
              </Grid>
              <Grid item>
                <SkillCard imageUrl="https://blog.desdelinux.net/wp-content/uploads/2023/07/MySQL.jpg" />
              </Grid>
              <Grid item>
                <SkillCard imageUrl="https://www.edureka.co/blog/wp-content/uploads/2017/05/AngularJS-logo-Deep-Dive-into-AngularJS-Edureka.png" />
              </Grid>
              <Grid item>
                <SkillCard imageUrl="https://miro.medium.com/max/1400/1*mtsk3fQ_BRemFidhkel3dA.png" />
              </Grid>
              <Grid item>
                <SkillCard imageUrl="https://images.ctfassets.net/twhs6sq7mv9q/2ygKhYdEDj8QZYr5uBhKaH/886a99a220062bd712cadcdd46997518/sass-logo.jpg" />
              </Grid>
              <Grid item>
                <SkillCard imageUrl="https://www.techfor.id/wp-content/uploads/2019/12/html.png" />
              </Grid>
              <Grid item>
                <SkillCard imageUrl="https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg" />
              </Grid>
              <Grid item>
                <SkillCard imageUrl="https://velog.velcdn.com/images/dohyunkim12/post/78dfde93-8259-49cd-bbe3-36d7828f6ba3/image.jpg" />
              </Grid>
              <Grid item>
                <SkillCard imageUrl="https://cdn.mos.cms.futurecdn.net/cxNHDLoqobrKGHViKU7C7K.jpg" />
              </Grid>
            </Grid>
          </div>
        </section>
      </Slide>
    );
}
