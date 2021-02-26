import React from "react";
import styled from "styled-components";
import {
  PageContainer,
  PageTitle,
  PageSection,
  PageSectionHeading,
  PageSectionSubheading,
  PageParagraph,
  PageUl,
  PageOl,
  PageRow,
} from "../../../assets/styles/Layout";
import {
  Figure,
  FigureCaption,
  Image,
  ImageTextContainer,
} from "../../../assets/styles/Modules";
import TableOfContents from "../TableOfContents";

import GMKBento from "../../../assets/images/Keycaps/GMK_Bento.jpeg";
import KeycapShine from "../../../assets/images/Keycaps/keycap-shine.jpg";
import KuroShiro from "../../../assets/images/Keycaps/epbt_kuro_shiro.jpg";
import POMKeycaps from "../../../assets/images/Keycaps/POM_Keycaps.jpg";
import TaiHaoMiami from "../../../assets/images/Keycaps/oem_taihao_miami_poker2.jpg";
import CherryOEMComparison from "../../../assets/images/Keycaps/cherry_oem.png";
import GMKLaser from "../../../assets/images/Keycaps/gmk_laser.jpg";
import JTKKeycaps from "../../../assets/images/Keycaps/jtk_keycaps.jpg";
import OEMAndSA from "../../../assets/images/Keycaps/oem_vs_sa.jpg";
import SACarbon from "../../../assets/images/Keycaps/sa_carbon.jpg";
import DSAMiami from "../../../assets/images/Keycaps/DSA_Miami.jpg";
import XDACanvas from "../../../assets/images/Keycaps/xda_canvas_keyboard.jpg";
import XDACanvasCloseup from "../../../assets/images/Keycaps/XDA_canvas_closeup.jpg";
import KATMilkshake from "../../../assets/images/Keycaps/kat_milkshake.jpg";
import KAMWraith from "../../../assets/images/Keycaps/KAM_Wraith.png";
import MT3devtty from "../../../assets/images/Keycaps/mt3_devtty_keyboard.jpg";
import PadPrintedKeycaps from "../../../assets/images/Keycaps/pad-printed-keycaps.jpg";
import LaserEtchedKeycaps from "../../../assets/images/Keycaps/laser_etched_keycaps.jpg";
import EPBT9009 from "../../../assets/images/Keycaps/epbt_9009.jpg";
import KuroShiroDyeSub from "../../../assets/images/Keycaps/epbt_kuro_shiro_dyesub.png";
import DoubleShotCrossSection from "../../../assets/images/Keycaps/doubleshot_keycap_cross_section.jpg";
import DoubleShotUnderneath from "../../../assets/images/Keycaps/doubleshot_keycap_underneath.jpg";
import GMKSkeletor from "../../../assets/images/Keycaps/gmk_skeletor.jpg";
import GengarArtisan from "../../../assets/images/Keycaps/artisan_gengar.jpg";
import SiriusArtisan from "../../../assets/images/Keycaps/artisan_sirius_odyssey.jpg";

const Keycaps = () => {
  const anchorLink = "keycaps";
  const chapterList = [
    {
      id: 1,
      name: "Keycap materials",
      subchapters: [
        {
          id: 1,
          name: "ABS",
        },
        {
          id: 2,
          name: "PBT",
        },
        {
          id: 3,
          name: "POM",
        },
      ],
    },
    {
      id: 2,
      name: "Keycap profiles",
      subchapters: [
        {
          id: 1,
          name: "OEM (Tai-Hao)",
        },
        {
          id: 2,
          name: "Cherry (GMK, JTK)",
        },
        {
          id: 3,
          name: "SA",
        },
        {
          id: 4,
          name: "DSA",
        },
        {
          id: 5,
          name: "XDA",
        },
        {
          id: 6,
          name: "KAT",
        },
        {
          id: 7,
          name: "KAM",
        },
        {
          id: 8,
          name: "MT3",
        },
      ],
    },
    {
      id: 3,
      name: "Keycap printing",
      subchapters: [
        {
          id: 1,
          name: "Pad printing",
        },
        {
          id: 2,
          name: "Laser etching",
        },
        {
          id: 3,
          name: "Dye sublimation",
        },
        {
          id: 4,
          name: "Double-shot moulding",
        },
      ],
    },
    {
      id: 4,
      name: "Artisan keycaps",
      subchapters: [
        {
          id: 1,
          name: "What's the point in artisan keycaps?",
        },
      ],
    },
    {
      id: 5,
      name: "Conclusion",
      subchapters: [],
    },
  ];

  return (
    <PageContainer>
      <PageTitle id="keycaps">Keycaps</PageTitle>
      <PageParagraph>
        Keycaps are those plastic tops that you are touching with your finger
        when typing. Keycaps are inscribed with <b>legends</b> (the writing on
        the keycap that indicates what the key does), but some custom keycap
        sets may not have legends. Keycaps are manufactured in a variety of
        different colours, materials and profiles, which results in an endless
        variety of keyboard aesthetics, feels, and sound profiles.
      </PageParagraph>
      <PageParagraph>
        Part of the popularity of custom keyboards can be accredited to the
        aesthetic appeal of custom keycaps. Within the keyboard community, new
        varieties of keycaps are continually being developed which allows for
        greater creative expression and further experimentation. I will outline
        common materials that keycaps are made out of, the keycap profiles and
        how keycaps are printed, and what all of these things mean for you as
        the keyboard user.
      </PageParagraph>

      <TableOfContents chapterList={chapterList} anchorLink={anchorLink} />

      <PageSection>
        <PageSectionHeading id="keycaps-1">Keycap materials</PageSectionHeading>
        <PageParagraph>
          Keycaps are made by injection moulding thermoplastic. A thermoplastic
          is a plastic material that become pliable or mouldable at higher
          temperatures and solidifies when cooled. In this process, the
          thermoplastic is melted and then injected under pressure into a steel
          mould that results in a keycap.
        </PageParagraph>
        <PageSectionSubheading id="keycaps-1.1">ABS</PageSectionSubheading>
        <PageParagraph>
          ABS, short for "acrylonitrile butadiene styrene", is the most commonly
          used plastic for making keycaps, due to its inexpensiveness and ease
          of handling. ABS is quite smooth to the touch, almost like Lego.
          Thanks to its low melting point, a process known as{" "}
          <a href="#keycaps-3.4">double-shot moulding</a> allows ABS keycaps to
          be made in very vibrant colours. Some keycap manufacturers, such as
          the German company GMK, charge a high premium for their ABS keycaps
          compared to ordinary ABS keycaps. This is because their keycaps are
          printed using an intricate double-shot moulding process as mentioned
          before, which is very labour-intensive.
        </PageParagraph>
        <Figure>
          <Image src={GMKBento} />
          <FigureCaption>
            GMK Bento keycap set on a Satisfaction75 keyboard, by /u/Ojrobot
          </FigureCaption>
        </Figure>
        <PageParagraph>
          Despite these features, ABS does have some downsides. Firstly, if left
          under the sun or exposed to UV light, ABS will gradually turn yellow
          over time. Also, ABS keycaps can develop shine on them after frequent
          typing, due to the natural oils of our hands as well as friction
          "sanding down" the keycaps when typing.
        </PageParagraph>
        <Figure>
          <Image src={KeycapShine} />
          <FigureCaption>
            An example of ABS keycap shine after long-term use
          </FigureCaption>
        </Figure>
        <PageSectionSubheading id="keycaps-1.2">PBT</PageSectionSubheading>
        <PageParagraph>
          Short for "polybutylene terephthalate", PBT is a more durable
          thermoplastic compared to ABS. There are many differences when
          comparing ABS to PBT:
        </PageParagraph>
        <PageOl>
          <li>
            PBT is denser and thicker which contributes to its deeper sound when
            typing compared to ABS.
          </li>
          <li>PBT feels rougher to the touch compared to ABS.</li>
          <li>
            Where ABS keycaps take a few years to develop shine, PBT keycaps may
            only begin to exhibit shine after multiple decades.
          </li>
          <li>
            Its greater resiliency is lended to its higher tolerance for heat.
            However, this makes it a lot more difficult to perform moulding
            processes with it, e.g. double-shot moulding. Therefore,
            manufacturers are unable to produce vibrant colours in PBT keycaps
            like they can in ABS keycaps.
          </li>
        </PageOl>
        <PageParagraph>
          Due to its higher melting point, when the PBT keycaps are printed
          using double-shot moulding, this can sometimes cause warped keycaps,
          especially for larger keys such as the spacebar. However,{" "}
          <a href="https://www.youtube.com/watch?v=Y-qWET4BUYI">
            this issue can be easily fixed
          </a>
          .
        </PageParagraph>
        <Figure>
          <Image src={KuroShiro} />
          <FigureCaption>ePBT Kuro Shiro</FigureCaption>
        </Figure>
        <PageSectionSubheading id="keycaps-1.3">POM</PageSectionSubheading>
        <PageParagraph>
          Short for "polyoxymethylene", POM is almost a hybrid between ABS and
          PBT - it feels quite smooth to the touch like ABS, but is fairly
          durable like PBT. Although not as popular as ABS or PBT, it has been
          gaining some traction in the keyboard community due to its deep
          "thock" sound profile. Legends are printed using{" "}
          <a href="#keycaps-3.2">laser-etching</a>.
        </PageParagraph>
        <Figure>
          <Image src={POMKeycaps} />
          <FigureCaption>
            Rainbow Jelly POM keycaps, by /u/partiallysplendid
          </FigureCaption>
        </Figure>
      </PageSection>
      <PageSection>
        <PageSectionHeading id="keycaps-2">Keycap profiles</PageSectionHeading>
        <PageParagraph>
          A keycap profile refers to the shapes of each row of keycaps.
          Different profiles offer different
          <i>ergonomics</i> and <i>aesthetics</i>.
        </PageParagraph>
        <PageSectionSubheading id="keycaps-2.1">OEM</PageSectionSubheading>
        <PageParagraph>
          The most common keycap profile for pre-built mechanical keyboards is
          OEM. It has a concave cylindrical top (higher on edges than center) to
          accommodate the curve of a fingertip.
        </PageParagraph>
        <PageSectionSubheading id="keycaps-2.1.1">
          Tai-Hao
        </PageSectionSubheading>
        <PageParagraph>
          One example of an aftermarket keycap manufacturer is Tai-Hao, who
          offer a wide range of keycap sets at a fairly low cost.
        </PageParagraph>
        <Figure>
          <Image src={TaiHaoMiami} />
          <FigureCaption>Tai Hao Miami on Vortex Poker 2</FigureCaption>
        </Figure>
        <PageSectionSubheading id="keycaps-2.2">Cherry</PageSectionSubheading>
        <PageParagraph>
          Cherry profile is very similar to OEM except it has a slightly lower
          profile than OEM, as Cherry keycaps are shorter in height than OEM.
        </PageParagraph>
        <Figure>
          <Image src={CherryOEMComparison} />
          <FigureCaption>
            Comparison between OEM and Cherry profiles
          </FigureCaption>
        </Figure>
        <PageSectionSubheading id="keycaps-2.2.1">GMK</PageSectionSubheading>
        <PageParagraph>
          GMK, a keycap manufacturing company based in Germany, are well known
          for creating premium-quality keycap sets in the Cherry profile.
        </PageParagraph>
        <Figure>
          <Image src={GMKLaser} />
          <FigureCaption>GMK Laser, by /u/diegojasso_</FigureCaption>
        </Figure>
        <PageSectionSubheading id="keycaps-2.2.2">JTK</PageSectionSubheading>
        <PageParagraph>
          JTK, a manufacturer based in China, are another Cherry-profile keycap
          manufacturer that also provide higher quality keycaps. However, one
          thing is that JTK offer a much smaller selection in keycap sets
          compared to GMK. Furthermore, they lack the consistency of the legends
          on the keycaps. Sometimes, there may be inconsistent thicknesses to
          the edges or the alignment of the legends may not be completely
          symmetrical. Unless you <i>really</i> look closely at the legends,
          these are not huge drawbacks and their much cheaper price compared to
          GMK products still gives them a competitive edge in the keycap
          industry.
        </PageParagraph>
        <Figure>
          <Image src={JTKKeycaps} />
          <FigureCaption>
            JTK Black on White. Notice the inconsistent thickness of the legends
          </FigureCaption>
        </Figure>
        <PageSectionSubheading id="keycaps-2.3">SA</PageSectionSubheading>
        <PageParagraph>
          SA, short for Spherical All (rows), was developed by Signature
          Plastics, a plastics manufacturer based in the USA. SA is most notable
          for its very high profile. It also has a sculpted, concave spherical
          top, which is sometimes referred to as a "deep dish" shape. Some
          people find typing on SA off-putting due to its height. This could
          potentially cause wrist injuries, unless a wrist rest is used to
          accommodate for the keycap height.
        </PageParagraph>
        <PageRow>
          <Figure>
            <Image src={OEMAndSA} />
            <FigureCaption>
              OEM keycap (left) compared to an SA keycap (right)
            </FigureCaption>
          </Figure>
          <Figure>
            <Image src={SACarbon} />
            <FigureCaption>SA Carbon</FigureCaption>
          </Figure>
        </PageRow>
        <PageSectionSubheading id="keycaps-2.4">DSA</PageSectionSubheading>
        <PageParagraph>
          DSA is another profile developed by Signature Plastics. It is noted
          for its uniform height across the entire keyboard. This provides it
          with a flat profile which gives it a certain aesthetic. DSA also has a
          concave spherical/"deep dish" shape like SA. However, unorthodox
          typers (as opposed to touch typers) may find it difficult to type on
          DSA keycaps due to the rows being the same height. Also, due to its
          low profile, it can be difficult to remove DSA keycaps off the
          switches.
        </PageParagraph>
        <Figure>
          <Image src={DSAMiami} />
          <FigureCaption>
            DSA Miami on KBD67 MKII, by /u/mattpatty9
          </FigureCaption>
        </Figure>
        <PageSectionSubheading id="keycaps-2.5">XDA</PageSectionSubheading>
        <PageParagraph>
          XDA is similar to DSA in that it also has a uniform height with a flat
          profile. It is also non-sculpted - it does not have a spherical shape
          for your fingertips but instead it is completely flat.
        </PageParagraph>
        <PageRow>
          <Figure>
            <Image src={XDACanvas} />
            <FigureCaption>Massdrop x MiTo XDA Canvas</FigureCaption>
          </Figure>
          <Figure>
            <Image src={XDACanvasCloseup} />
            <FigureCaption>
              Notice the completely flat (non-sculpted) keycaps
            </FigureCaption>
          </Figure>
        </PageRow>
        <PageSectionSubheading id="keycaps-2.6">KAT</PageSectionSubheading>
        <PageParagraph>
          KAT is basically SA keycaps at an OEM height, which makes it more
          appealing for those who love the shape of SA but do not like the tall
          height of SA.
        </PageParagraph>
        <Figure>
          <Image src={KATMilkshake} />
          <FigureCaption>KAT Milkshake</FigureCaption>
        </Figure>
        <PageSectionSubheading id="keycaps-2.7">KAM</PageSectionSubheading>
        <PageParagraph>
          KAM is similar to DSA in that it is another flat profile. However, one
          difference is that it has a larger surface area on top of the keycaps.
        </PageParagraph>
        <Figure>
          <Image src={KAMWraith} />
          <FigureCaption>KAM Wraith</FigureCaption>
        </Figure>
        <PageSectionSubheading id="keycaps-2.8">MT3</PageSectionSubheading>
        <PageParagraph>
          Designed by Matt3o, the inspiration for this profile was drawn from
          the IBM Beamspring keyboards that were used in the 1970s. It has a
          high profile like SA, but one interesting difference to SA is that it
          features deeper "deep dish" keycap tops. Some describe the MT3 keycaps
          as "finger huggers" when typing on them.
        </PageParagraph>
        <Figure>
          <Image src={MT3devtty} />
          <FigureCaption>
            Drop + Matt3o MT3 dev/tty, by /u/mheadroom
          </FigureCaption>
        </Figure>
      </PageSection>
      <PageSection>
        <PageSectionHeading id="keycaps-3">Keycap printing</PageSectionHeading>
        <PageSectionSubheading id="keycaps-3.1">
          Pad printing
        </PageSectionSubheading>
        <PageParagraph>
          Pad printing is the most common method of keycap printing. Pads are
          dipped into ink, then pressed onto the keycap to form a layer of ink
          on top. A disadvantage of this method is that the legend is prone to
          fading.
        </PageParagraph>
        <Figure>
          <Image src={PadPrintedKeycaps} />
          <FigureCaption>
            Pad-printed keycaps on your typical office keyboard
          </FigureCaption>
        </Figure>
        <PageSectionHeading id="keycaps-3.2">Laser etching</PageSectionHeading>
        <PageParagraph>
          Laser etching uses a concentrated laser beam that melts the plastic to
          essentially "burn" legends onto the keycap. They are characterised by
          a pale gray colour due to the natural colour of the charred plastic.
          Although laser-etched legends will not fade quickly over time and
          laser-etched keycaps are relatively cheap to buy, the fixed colour of
          the legends limits the colour combinations you can use for
          laser-etched keycaps. Therefore, this method is only used for white or
          grey keycaps, otherwise the visibility and contrast between the legend
          and the keycap colour would be too low for people to see.
        </PageParagraph>
        <Figure>
          <Image src={LaserEtchedKeycaps} />
          <FigureCaption>Laser-etched keycaps</FigureCaption>
        </Figure>
        <PageSectionSubheading id="keycaps-3.3">
          Dye sublimation
        </PageSectionSubheading>
        <PageParagraph>
          Dye sublimation involves applying dye onto the plastic using a heat
          press. This triggers a process known as "sublimation", meaning the dye
          is converted from a solid to a gaseous state without ever becoming a
          liquid. Heating the plastic's surface makes it permeable, which
          enables the dye to penetrate the plastic and form the desired result.
          It is the preferred printing method for PBT keycaps, due to PBT
          possessing a high resistance to heat, and it is a much safer option
          for printing PBT keycaps than double-shot moulding.
        </PageParagraph>
        <Figure>
          <Image src={EPBT9009} />
          <FigureCaption>
            ePBT 9009 - an example of dye sublimated keycaps
          </FigureCaption>
        </Figure>
        <PageParagraph>
          A problem with dye sublimation is that the dye must always be darker
          than the material it is being used to dye. Therefore, it is physically
          impossible to print white lettering (as nothing is brighter than
          white), or to print on black keycaps (nothing is darker than black).
          However, a process known as <b>reverse dye sublimation</b> has
          recently arisen which can tackle this problem. In this case, the
          legend is the base colour and everything around it is dyed.
        </PageParagraph>
        <PageParagraph>
          Despite its advantages, the reverse dye-sublimation process itself
          carries a lot of manufacturing risks - it is a very labour-intensive
          process because the dye and the plastic needs to be aligned perfectly
          by someone while the heat press is applied. Furthermore, due to manual
          application of heat, the process is more prone to human error, which
          can lead to warped keycaps.
        </PageParagraph>
        <Figure>
          <Image src={KuroShiroDyeSub} />
          <FigureCaption>
            ePBT Kuro/Shiro is an example of using reverse dye sublimation.
            However, this caused a lot of delay before it was shipped out
          </FigureCaption>
        </Figure>
        <PageSectionSubheading id="keycaps-3.4">
          Double-shot moulding
        </PageSectionSubheading>
        <PageParagraph>
          Double-shot moulding is considered to be the best method of printing
          long-lasting keycaps with crisp-looking legends. It consists of a
          two-step process: first, the legend is moulded in plastic. The initial
          plastic mould is then placed into another mould. The plastics are then
          subjected to heat to combine both moulds into a single keycap. Because
          the legends become part of the entire keycap, the legends will never
          wear off. This method also allows for highly contrasting colours as
          the printed legend is not affected by the base keycap colour.
        </PageParagraph>
        <PageParagraph>
          Most double-shot keycap sets use ABS. This is because ABS does not
          shrink quickly and does not warp when heat is applied to it compared
          to other plastics. It is also possible to have double-shot PBT,
          although it is more difficult to carry out because it does shrink
          quicker and is more prone to warping.
        </PageParagraph>
        <PageRow>
          <Figure>
            <Image src={DoubleShotCrossSection} />
            <FigureCaption>
              Cross-section cut of a double-shot keycap, courtesy of
              /u/ripster55
            </FigureCaption>
          </Figure>
          <Figure>
            <Image src={DoubleShotUnderneath} />
            <FigureCaption>
              What a double-shot keycap looks like underneath - notice the
              striped pattern
            </FigureCaption>
          </Figure>
        </PageRow>
        <PageParagraph>
          GMK is well known for their premium quality ABS keycap sets. All GMK
          sets use double-shot moulding - as it is a very labour-intensive
          process, GMK therefore command a premium for their products.
        </PageParagraph>
        <Figure>
          <Image src={GMKSkeletor} />
          <figcaption>GMK Skeletor on ALF DC60, by /u/SugaaH</figcaption>
        </Figure>
        <PageParagraph>
          A naming convention for keycap sets goes as follows: "Keycap profile +
          Keycap set name" e.g. "SA Pulse".{" "}
        </PageParagraph>
        <PageParagraph>
          Another convention goes as follows: "Manufacturer + Keycap set name".
          E.g. "GMK Bento". Having the manufacturer's name guarantees a certain
          material, profile and keycap printing method that is used for their
          products. For example, GMK strictly manufacture ABS Cherry profile
          double-shot keycaps, respectively. However, not all manufacturers
          strictly use the same material unless stated otherwise, e.g. the
          manufacturer ePBT primarily make PBT sets, but they also make ABS
          sets.{" "}
          <i>
            You are responsible for using this information to guide your
            decisions - be sure to read the product description!
          </i>
        </PageParagraph>
      </PageSection>
      <PageSection>
        <PageSectionSubheading id="keycaps-4">
          Artisan keycaps
        </PageSectionSubheading>
        <PageParagraph>
          Artisan keycaps are hand-crafted and unique keycaps that are created
          by random members of the community.
        </PageParagraph>
        <PageSectionSubheading id="keycaps-4.1">
          What's the point in artisan keycaps?
        </PageSectionSubheading>
        <PageParagraph>
          So you got yourself a nice keycap set that you like. But you feel like
          it's missing something. Or you just want to flex on your friends even
          harder. That's what artisan keycaps are for! Check out a couple here.
        </PageParagraph>
        <PageRow>
          <Figure>
            <Image src={GengarArtisan} />
            <FigureCaption>An Artisan Gengar keycap</FigureCaption>
          </Figure>
          <Figure>
            <Image src={SiriusArtisan} />
            <FigureCaption>
              Sirius Odyssey. The possibilies are endless!
            </FigureCaption>
          </Figure>
        </PageRow>
      </PageSection>
      <PageSection>
        <PageSectionHeading id="keycaps-5">Conclusion</PageSectionHeading>
        <PageParagraph></PageParagraph>
      </PageSection>
    </PageContainer>
  );
};

export default Keycaps;
