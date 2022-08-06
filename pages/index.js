import Layout from "../components/Layout";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

import amy from "../public/img/AmyThiel.jpg";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="hero">
          <div className="hero-intro">
            <div className="hero-intro-bg">
              <Parallax className="img-frame img-frame-1" speed={-5}></Parallax>
              <Parallax className="img-frame img-frame-2" speed={-7}></Parallax>
            </div>

            <div className="hero-intro-content">
              <h1>Sollicitudin Inceptos Mollis Vehicula Euismod</h1>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Maecenas sed diam eget risus
                varius blandit sit amet non magna.
              </p>
              <span>Signature Here</span>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-container">
              <Image src={amy} layout="responsive" alt="Amy Thiel" />
            </div>
          </div>
        </div>
        <p>
          Donec id elit non mi porta gravida at eget metus. Morbi leo risus,
          porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada
          magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat
          porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus
          mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum
          faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum
          faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel
          eu leo. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Vestibulum id ligula porta felis euismod
          semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor. Donec sed odio dui. Integer posuere erat a ante venenatis
          dapibus posuere velit aliquet. Nullam quis risus eget urna mollis
          ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed
          posuere consectetur est at lobortis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet
          rutrum faucibus dolor auctor. Donec id elit non mi porta gravida at
          eget metus. Etiam porta sem malesuada magna mollis euismod.
        </p>
        <p>
          Donec id elit non mi porta gravida at eget metus. Morbi leo risus,
          porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada
          magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat
          porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus
          mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum
          faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum
          faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel
          eu leo. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Vestibulum id ligula porta felis euismod
          semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor. Donec sed odio dui. Integer posuere erat a ante venenatis
          dapibus posuere velit aliquet. Nullam quis risus eget urna mollis
          ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed
          posuere consectetur est at lobortis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet
          rutrum faucibus dolor auctor. Donec id elit non mi porta gravida at
          eget metus. Etiam porta sem malesuada magna mollis euismod.
        </p>
        <p>
          Donec id elit non mi porta gravida at eget metus. Morbi leo risus,
          porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada
          magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat
          porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus
          mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum
          faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum
          faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel
          eu leo. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Vestibulum id ligula porta felis euismod
          semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor. Donec sed odio dui. Integer posuere erat a ante venenatis
          dapibus posuere velit aliquet. Nullam quis risus eget urna mollis
          ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed
          posuere consectetur est at lobortis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet
          rutrum faucibus dolor auctor. Donec id elit non mi porta gravida at
          eget metus. Etiam porta sem malesuada magna mollis euismod.
        </p>
        <p>
          Donec id elit non mi porta gravida at eget metus. Morbi leo risus,
          porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada
          magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat
          porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus
          mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum
          faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum
          faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel
          eu leo. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Vestibulum id ligula porta felis euismod
          semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor. Donec sed odio dui. Integer posuere erat a ante venenatis
          dapibus posuere velit aliquet. Nullam quis risus eget urna mollis
          ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed
          posuere consectetur est at lobortis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet
          rutrum faucibus dolor auctor. Donec id elit non mi porta gravida at
          eget metus. Etiam porta sem malesuada magna mollis euismod.
        </p>
        <p>
          Donec id elit non mi porta gravida at eget metus. Morbi leo risus,
          porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada
          magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat
          porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus
          mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum
          faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum
          faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel
          eu leo. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Vestibulum id ligula porta felis euismod
          semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor. Donec sed odio dui. Integer posuere erat a ante venenatis
          dapibus posuere velit aliquet. Nullam quis risus eget urna mollis
          ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed
          posuere consectetur est at lobortis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet
          rutrum faucibus dolor auctor. Donec id elit non mi porta gravida at
          eget metus. Etiam porta sem malesuada magna mollis euismod.
        </p>
        <Parallax speed={-10} translateX={["0px", "100px"]}>
          <h1>I'm the parallax</h1>
        </Parallax>
      </Layout>
    </>
  );
}
