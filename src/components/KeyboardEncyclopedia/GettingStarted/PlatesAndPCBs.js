import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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

import Plates from "../../../assets/images/PlatesAndPCBs/plates.jpg";
import PlateKeyboard from "../../../assets/images/PlatesAndPCBs/plate_keyboard.jpg";
import AluminiumPlate from "../../../assets/images/PlatesAndPCBs/aluminium_plate.png";
import BrassPlate from "../../../assets/images/PlatesAndPCBs/brass_plate.jpg";
import PolycarbonatePlate from "../../../assets/images/PlatesAndPCBs/polycarbonate_plate.jpg";
import CarbonFibrePlate from "../../../assets/images/PlatesAndPCBs/carbon_fibre_plate.png";
import AcrylicPlate from "../../../assets/images/PlatesAndPCBs/acrylic_plate.jpg";
import FR4Plate from "../../../assets/images/PlatesAndPCBs/fr4plate.jpg";
import KeyboardMountingStyles from "../../../assets/images/PlatesAndPCBs/keyboard_mounting_styles.png";
import Tofu from "../../../assets/images/PlatesAndPCBs/tofu60.jpg";
import NK65 from "../../../assets/images/PlatesAndPCBs/nk65.jpg";
import Kyuu from "../../../assets/images/PlatesAndPCBs/kyuu.jpg";
import KyuuSideShot from "../../../assets/images/PlatesAndPCBs/kyuu_side_profile.jpg";
import PlatelessMount from "../../../assets/images/PlatesAndPCBs/plateless_keyboard.jpg";
import Polaris from "../../../assets/images/PlatesAndPCBs/polaris.png";
import DZ60 from "../../../assets/images/PlatesAndPCBs/dz60.jpg";
import DZ60Layouts from "../../../assets/images/PlatesAndPCBs/dz60_layouts.jpg";
import KBD67PCBBack from "../../../assets/images/PlatesAndPCBs/KBD67PCB_Back.jpg";
import KBD67PCBFront from "../../../assets/images/PlatesAndPCBs/KBD67PCB_Front.jpg";
import SolderWire from "../../../assets/images/PlatesAndPCBs/solderwire.jpg";
import HakkoStation from "../../../assets/images/PlatesAndPCBs/hakkofx888d.jpg";
import PCBMountedSwitches from "../../../assets/images/PlatesAndPCBs/plate_pcb_mounted_switches.jpg";
import Socket0305 from "../../../assets/images/PlatesAndPCBs/0305_socket.jpg";
import Socket7305 from "../../../assets/images/PlatesAndPCBs/7305_socket.jpg";
import HoltiteSocket from "../../../assets/images/PlatesAndPCBs/holtite_socket.jpg";
import KailhSockets from "../../../assets/images/PlatesAndPCBs/kailh_hotswap_sockets.jpg";
import KailhSocketsPCB from "../../../assets/images/PlatesAndPCBs/kailh_hotswap_sockets_pcb.jpg";
import KeyboardUnderglow from "../../../assets/images/PlatesAndPCBs/keyboard_underglow.jpg";
import LogitechRGBKeyboard from "../../../assets/images/PlatesAndPCBs/logitech_rgb_keyboard.jpg";
import NorthFacingSwitch from "../../../assets/images/PlatesAndPCBs/north_facing_switch.jpg";
import SouthFacingSwitch from "../../../assets/images/PlatesAndPCBs/south_facing_switches.jpg";
import SouthFacingSwitchLit from "../../../assets/images/PlatesAndPCBs/south_facing_switches_lighting.jpg";

const PlatesAndPCBs = () => {
  const anchorLink = "plates-and-pcbs";
  const chapterList = [
    {
      id: 1,
      name: "Plates",
      subchapters: [
        {
          id: 1,
          name: "Aluminium",
        },
        {
          id: 2,
          name: "Brass",
        },
        {
          id: 3,
          name: "Polycarbonate",
        },
        {
          id: 4,
          name: "Carbon fibre",
        },
        {
          id: 5,
          name: "Acrylic",
        },
        {
          id: 6,
          name: "Plate material comparison chart",
        },
        {
          id: 7,
          name: "Types of plate cuts",
        },
      ],
    },
    {
      id: 2,
      name: "Styles of keyboard mounting",
      subchapters: [
        {
          id: 1,
          name: "Tray mount",
        },
        {
          id: 2,
          name: "Top/Bottom mount",
        },
        {
          id: 3,
          name: "Sandwich mount",
        },
        {
          id: 4,
          name: "Gasket mount",
        },
        {
          id: 5,
          name: "Integrated plate",
        },
        {
          id: 6,
          name: "Plateless mount",
        },
      ],
    },
    {
      id: 3,
      name: "PCBs",
      subchapters: [
        {
          id: 1,
          name: "Components of a PCB",
        },
        {
          id: 2,
          name: "Soldering on a PCB",
        },
        {
          id: 3,
          name: "Plate-mounted vs PCB-mounted switch",
        },
      ],
    },
    {
      id: 4,
      name: "PCB variations",
      subchapters: [
        {
          id: 1,
          name: "Hotswappable PCBs",
        },
        {
          id: 2,
          name: "Underglow RGB",
        },
        {
          id: 3,
          name: "Per-key RGB",
        },
        {
          id: 4,
          name: "North-facing vs. south-facing switches",
        },
      ],
    },
  ];

  return (
    <PageContainer>
      <PageTitle>Plates and PCBs</PageTitle>
      <PageParagraph>
        Two integral components of mechanical keyboards include the <b>plate</b>{" "}
        and the <b>PCB</b>.
      </PageParagraph>
      <PageParagraph>
        A <b>plate</b> is a layer that switches can be mounted into, providing
        your keyboard with a more sturdy construction. It is usually made out of
        a metal, but there are other materials. Each material provides different
        properties, including different acoustics and feel when typing.
      </PageParagraph>
      <PageParagraph>
        A <b>printed circuit board (PCB)</b> sits directly underneath your plate
        and switches. It is what supports and connects your electrical
        components in your keyboard. It uses conductive pads made out of layers
        of copper that are laminated onto another non-conductive layer. These
        components are soldered onto the PCB to both electronically connect and
        physically fasten them to it.
      </PageParagraph>
      <PageParagraph>
        When attempting to use a specific{" "}
        <Link to="/keyboard-encyclopedia/layouts-and-sizes">
          keyboard layout
        </Link>
        , you must ensure the plate and PCB support your chosen layout. For
        example, to build a 60% keyboard, both the PCB and plate must both be
        60% in size. Also, they must be able to support your layout, e.g.
        ANSI/ISO, split right shift, etc.
      </PageParagraph>
      <PageParagraph>
        Firstly, I will outline different plate materials and how they differ in
        sound and feel. Secondly, I will go into different keyboard mounting
        styles. Third, I will provide a general guide to PCBs and soldering onto
        a PCB. Lastly, we will look into some PCB modifications such as hotswap
        and RGB lighting.
      </PageParagraph>

      <TableOfContents chapterList={chapterList} anchorLink={anchorLink} />

      <PageSection>
        <PageSectionHeading id="plates-and-pcbs-1">Plates</PageSectionHeading>
        <PageParagraph>
          Although it is not necessary to use a plate for a mechanical keyboard
          to function, it is highly recommended to use a plate. The plate
          provides a much sturdier build, and reduces switch wobble (the extent
          of switch wobble reduction depends on what plate material is used).
        </PageParagraph>
        <PageParagraph>
          Plates can be made out of a variety of materials, typically metals
          such as aluminium or brass, but can also include plastics such as
          polycarbonate or acrylic. Given the experimental nature of custom
          keyboards, new plate materials are continually being developed and
          tested. Recent examples include POM and FR4.
        </PageParagraph>
        <PageRow>
          <Figure>
            <Image src={Plates} />
            <FigureCaption>Aluminium plates</FigureCaption>
          </Figure>
          <Figure>
            <Image src={PlateKeyboard} />
            <FigureCaption>Plates on a keyboard</FigureCaption>
          </Figure>
        </PageRow>
        <PageSectionSubheading>Plate materials</PageSectionSubheading>
        <PageRow>
          <Figure>
            <Image src={AluminiumPlate} />
            <FigureCaption>60% Aluminium plate</FigureCaption>
          </Figure>
          <Figure>
            <Image src={BrassPlate} />
            <FigureCaption>65% Brass plate</FigureCaption>
          </Figure>
        </PageRow>
        <PageRow>
          <Figure>
            <Image src={PolycarbonatePlate} />
            <FigureCaption>60% Polycarbonate Plate</FigureCaption>
          </Figure>
          <Figure>
            <Image src={CarbonFibrePlate} />
            <FigureCaption>60% Carbon fibre plate</FigureCaption>
          </Figure>
        </PageRow>
        <PageRow>
          <Figure>
            <Image src={AcrylicPlate} />
            <FigureCaption>Acrylic Plate</FigureCaption>
          </Figure>
          <Figure>
            <Image src={FR4Plate} />
            <FigureCaption>60% FR4 Plate</FigureCaption>
          </Figure>
        </PageRow>
      </PageSection>
      <PageSection>
        <PageSectionHeading id="plates-and-pcbs-1.6">
          Plate material comparison chart
        </PageSectionHeading>
        <PageParagraph>
          Typically, the denser the material, the higher pitched the sound that
          is produced when typing with the plate. For example, a metal such as
          brass produces a higher pitched sound than a plastic such as
          polycarbonate.
        </PageParagraph>
        <PageParagraph>
          The amount of flex can be objectively by <b>Young's Modulus (YM)</b>,
          which is a measure of the stiffness of a solid material. YM is
          metrically measured in <b>Gigapascals (GPa)</b>, and YM itself is also
          strongly correlated to density, so we can <i>assume</i> that the
          higher the measure of YM, the greater the density of the material.
        </PageParagraph>
        <PageParagraph>
          This is not an exhaustive list of plate materials out there. Some
          other plate materials exist that are being experimented with, such as
          POM or FR4.
        </PageParagraph>
        <PlateMaterialComparisonChartTable>
          <thead>
            <tr>
              <th>Material</th>
              <th>Young's Modulus (GPa)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aluminium</td>
              <td>69 GPa</td>
            </tr>
            <tr>
              <td>Brass</td>
              <td>102-125 GPa</td>
            </tr>
            <tr>
              <td>Polycarbonate</td>
              <td>2-2.4 GPa</td>
            </tr>
            <tr>
              <td>Carbon fibre</td>
              <td>228 GPa</td>
            </tr>
            <tr>
              <td>Acrylic</td>
              <td>3.2 GPa</td>
            </tr>
          </tbody>
        </PlateMaterialComparisonChartTable>
        <PageSectionSubheading id="plates-and-pcbs-1.7">
          Types of plate cuts
        </PageSectionSubheading>
        <PageParagraph>Standard plate, Half plate, WKL plate.</PageParagraph>
        {/* <Figure>
          <Image src={} />
          <FigureCaption></FigureCaption>
        </Figure> */}
      </PageSection>
      <PageSection>
        <PageSectionHeading id="plates-and-pcbs-2">
          Styles of keyboard mounting
        </PageSectionHeading>
        <Figure>
          <Image src={KeyboardMountingStyles} />
          <FigureCaption>
            Handy little infographic, by Thomas Baart
          </FigureCaption>
        </Figure>
        <PageSectionSubheading id="plates-and-pcbs-2.1">
          Tray mount
        </PageSectionSubheading>
        <Figure>
          <Image src={Tofu} />
          <FigureCaption>
            The TOFU case is a classic tray-mount build
          </FigureCaption>
        </Figure>
        <PageSectionSubheading id="plates-and-pcbs-2.2">
          Top mount/Bottom mount
        </PageSectionSubheading>
        <Figure>
          <Image src={NK65} />
          <FigureCaption>NK65 is a top-mount case</FigureCaption>
        </Figure>
        <PageSectionSubheading id="plates-and-pcbs-2.3">
          Sandwich mount
        </PageSectionSubheading>
        <PageRow>
          <Figure>
            <Image src={Kyuu} />
            <FigureCaption>
              LilyPichu's Kyuu, built by Taeha Types
            </FigureCaption>
          </Figure>
          <Figure>
            <Image src={KyuuSideShot} />
            <FigureCaption>
              Side-profile shot of Kyuu. Notice how the plate is "sandwiched"
              between the top and bottom parts of the case.
            </FigureCaption>
          </Figure>
        </PageRow>
        <PageSectionSubheading id="plates-and-pcbs-2.4">
          Plateless mount
        </PageSectionSubheading>
        <Figure>
          <Image src={PlatelessMount} />
          <FigureCaption>
            Plateless mounted keyboard (PCB-mounted switches)
          </FigureCaption>
        </Figure>
        <PageSectionSubheading id="plates-and-pcbs-2.5">
          Gasket mount
        </PageSectionSubheading>
        <Figure>
          <Image src={Polaris} />
          <FigureCaption>Polaris keyboard</FigureCaption>
        </Figure>
      </PageSection>
      <PageSection>
        <PageSectionHeading id="plates-and-pcbs-3">PCBs</PageSectionHeading>
        <PageParagraph>
          A <b>printed circuit board</b> (PCB) is what allows your keyboard to
          electrically function and to communicate with your computer or other
          device. Components of a PCB are mounted onto the surface of the PCB,
          and there are traces that electrically connect various points of the
          keyboard together. The components are soldered onto the board, with
          solder serving as an electrical connector between the PCB surface and
          the component while also acting as a strong adhesive.
        </PageParagraph>
        <PageRow>
          <Figure>
            <Image src={DZ60} />
            <FigureCaption>KBDFans' DZ60 60% PCB</FigureCaption>
          </Figure>
          <Figure>
            <Image src={DZ60Layouts} />
            <FigureCaption>
              DZ60 can support a multitude of layouts.
            </FigureCaption>
          </Figure>
        </PageRow>
        <PageSectionSubheading id="plates-and-pcbs-3.1">
          Components of a PCB
        </PageSectionSubheading>
        <PageUl>
          <li>
            <b>PCB material</b> - The base material is often made out of
            fiberglass, specifically FR4.
          </li>
          <li>
            <b>Traces</b> - The traces are made out of copper foil, which is
            laminated onto the board with heat and adhesive.
          </li>
          <li>
            <b>Soldermask</b> - A thin plastic layer of soldermask is applied on
            top of the copper layer. It helps to insulate the copper traces from
            accidentally making contact with solder or other conductive parts.
            Therefore, it leaves the solderable parts exposed so they can be
            soldered to. Soldermask is usually green in colour, but it can be
            any colour.
          </li>
          <li>
            <b>Silkscreen</b> - This is applied on top of the soldermask.
            Silkscreen adds readable words and letters to identify components of
            the PCB, which aids with assembly or inspection of the board.
          </li>
          <li>
            <b>Pad</b> - exposed metal to which a component is soldered to. This
            is where your metal switch legs go into. The phrase "lifting a pad"
            means that the pad has detached from the board.
          </li>
        </PageUl>
        <PageRow>
          <Figure>
            <Image src={KBD67PCBFront} />
            <FigureCaption>Top view of KBD67 PCB</FigureCaption>
          </Figure>
          <Figure>
            <Image src={KBD67PCBBack} />
            <FigureCaption>Rear view of KBD67 PCB</FigureCaption>
          </Figure>
        </PageRow>
        <PageSectionSubheading id="plates-and-pcbs-3.2">
          Soldering components onto a PCB
        </PageSectionSubheading>
        <PageParagraph>
          Solder is a low melting point metal alloy used to join two things
          together. Solder provides an electrical and mechanical connection
          between the two things - with regards to keyboard construction, this
          would be the metal switch pins and the PCB's switch pads.
        </PageParagraph>
        <PageParagraph>
          Solder is typically made out of a mix of tin and lead. Leaded solder
          helps the solder melt at a lower temperature and flow nicely;
          conversely, lead-free solder melts at a higher temperature and flows
          quickly which increases the risk of poor joints. Therefore, a mix of
          tin/lead is very much preferred - a good tin/lead ratio is{" "}
          <i>60/40</i> or <i>63/37</i>. In some parts of the world such as
          Europe, leaded solder is banned. However, some European sellers on
          eBay sell genuine leaded solder - if given the choice, it would be
          best to purchase leaded solder over lead-free solder.
        </PageParagraph>
        <PageParagraph>
          Solder often contains a core inside the solder wire containing flux.
          Flux helps to improve electrical contact and mechanical strength in
          solder joints. Two types of flux are mainly used - acid core and rosin
          core. Acid core is used for plumbing, whereas rosin core is used for
          electronics. Therefore, only rosin core solder should be used for our
          purposes.
        </PageParagraph>
        <PageParagraph>
          Solder also comes in a variety of diameters. For soldering switches,{" "}
          <i>0.8mm (0.0131 inches)</i> is recommended. For soldering smaller
          components such as SMD parts, a smaller diameter of{" "}
          <i>0.5mm (0.02 inches)</i> is recommended, though soldering SMD parts
          requires greater soldering skills.
        </PageParagraph>
        <PageRow>
          <Figure>
            <Image src={SolderWire} />
            <FigureCaption>A wild solder wire appeared!</FigureCaption>
          </Figure>
          <Figure>
            <Image src={HakkoStation} />
            <FigureCaption>
              A costly yet widely praised soldering station, the Hakko FX-888D
            </FigureCaption>
          </Figure>
        </PageRow>
        <PageParagraph>
          A solder iron is the equipment used to melt the solder and create
          joints between the component and the PCB. A recommended temperature
          for soldering is between 350°C (662°F) to 370°C (698°F), depending on
          the ambient temperature.
        </PageParagraph>
        <PageSectionSubheading id="plates-and-pcbs-3.3">
          Plate-mounted vs. PCB-mounted switch
        </PageSectionSubheading>
        <PageParagraph>
          Switches can be mounted either onto a plate or directly onto the PCB
          (plateless build).
        </PageParagraph>
        <PageParagraph>
          <b>Plate-mounted</b>
        </PageParagraph>
        <PageUl>
          <li>
            The switches are mounted onto a plate with the PCB underneath the
            plate. Plate-mounted switches have 3 pins (2 metal legs, 1 plastic
            leg).
          </li>
          <li>
            A plate provides a more rigid typing feel, especially when using a
            metal plate. A plate also ensures the switches are mounted securely,
            which can be useful when swapping out switches in a hotswap build.
          </li>
          <li>Costs more to include a plate.</li>
        </PageUl>
        <PageParagraph>
          <b>PCB-mounted</b>
        </PageParagraph>
        <PageUl>
          <li>
            The switches are mounted directly onto the PCB. PCB-mounted switches
            have 5 pins (2 metal legs, 3 plastic legs). The greater number of
            legs reduces switch wobble.
          </li>
          <li>Provides a flexier typing feel.</li>
          <li>Costs less as it does not include a plate.</li>
        </PageUl>
        <Figure>
          <Image src={PCBMountedSwitches} />
        </Figure>
      </PageSection>
      <PageSection>
        <PageSectionHeading id="plates-and-pcbs-4">
          PCB variations
        </PageSectionHeading>
        <PageSectionSubheading id="plates-and-pcbs-4.1">
          Hotswappable PCBs
        </PageSectionSubheading>
        <PageParagraph>
          A hotswap PCB allows you to swap out the switches. These PCBs have
          hotswap sockets that are soldered onto them. The most popular that is
          used by manufacturers are Kailh hotswap sockets. However, it is
          possible to convert a non-hotswap (solder-only) PCB into a hotswap
          PCB. This can be done by soldering these sockets onto the PCB
          yourself.
        </PageParagraph>
        <PageParagraph>
          The different kinds of hotswap sockets include:
        </PageParagraph>
        <PageParagraph>
          <b>1. Mill-Max sockets (0305 and 7305)</b>
        </PageParagraph>
        <PageParagraph>
          Mill-max sockets are placed into the PCB pads and soldered onto the
          pad. Mill-Max sockets are considered the superior choice when
          converting a PCB to hotswap compared to the other options. The
          difference between these 0305 and 7305 are their heights, which
          affects how high the switch will sit from the PCB. In turn, this
          affects whether or not a switch is compatible with the sockets.{" "}
          <i>
            It is recommended to not try soldering Mill-Max sockets at all until
            you have tried soldering a keyboard together at least once.
          </i>
        </PageParagraph>
        <PageParagraph>
          0305 are taller in height, which can limit compatibility. 7305 are
          shorter which makes it more forgiving in regards to compatibility.
          However because it sits so low on the PCB, greater soldering skills
          are required to solder 7305 sockets. Overall, use 0305 if you are not
          as confident with soldering, but you don't mind limiting switch
          compatibility, and use 7305 if you are more confident in soldering.
        </PageParagraph>
        <PageRow>
          <Figure>
            <Image src={Socket0305} />
            <FigureCaption>An 0305 socket</FigureCaption>
          </Figure>
          <Figure>
            <Image src={Socket7305} />
            <FigureCaption>
              A 7305 socket. Notice the shorter lip and length of the 7305
              compared to 0305
            </FigureCaption>
          </Figure>
        </PageRow>
        <PageParagraph>
          <b>2. Holtite sockets</b>
        </PageParagraph>
        <PageParagraph>
          These are similar to Mill-Max as they are also placed into the pads
          and soldered on. However, they do not fit on all PCBs, whereas
          Mill-Max can fit on all PCBs. Therefore, Mill-Max are considered a
          better option for hotswap sockets.
        </PageParagraph>
        <Figure>
          <Image src={HoltiteSocket} />
          <FigureCaption>A holtite socket</FigureCaption>
        </Figure>
        <PageParagraph>
          <b>3. Kailh sockets</b>
        </PageParagraph>
        <PageParagraph>
          These are commonly found on pre-built hotswap PCBs. Kailh hotswap
          sockets are also soldered onto the PCB but sit on the bottom side of
          the PCB. However, they are not as desirable as Mill-Max sockets as
          they are not as durable - they have been reported to break after a
          fewer number of swaps compared to Mill-Max sockets. Therefore, if you
          wish to build a hotswap PCB, it is recommended to use Mill-Max sockets
          instead.
        </PageParagraph>
        <PageRow>
          <Figure>
            <Image src={KailhSockets} />
            <FigureCaption>Kailh hotswap sockets</FigureCaption>
          </Figure>
          <Figure>
            <Image src={KailhSocketsPCB} />
            <FigureCaption>Kailh sockets on a PCB</FigureCaption>
          </Figure>
        </PageRow>
        <PageSectionSubheading id="plates-and-pcbs-4.2">
          Underglow lighting
        </PageSectionSubheading>
        <PageParagraph>
          Keyboard lighting is generated by LEDs that are soldered onto the PCB.
          One type of keyboard lighting is underglow. Underglow is simply
          lighting that glows underneath the board, and it is best used with
          clear/frosted acrylic/polycarbonate cases. However, it will not shine
          through keycaps.
        </PageParagraph>
        <Figure>
          <Image src={KeyboardUnderglow} />
          <FigureCaption>Underglow shines through the case only</FigureCaption>
        </Figure>
        <PageSectionSubheading id="plates-and-pcbs-4.3">
          Backlighting/Per-key lighting
        </PageSectionSubheading>
        <PageParagraph>
          This kind of lighting is commonly found on mass-produced keyboards,
          most notably on gaming brands such as Razer, Logitech, Corsair, etc.
          Backlighting is best paired with shine-through keycaps, as it shines
          through the keycap legends. Backlit PCBs are not commonly found in
          custom mechanical keyboard kits. Some aftermarket PCBs that include
          backlighting do exist, although they are only mainly found in the 60%
          form factor. Examples include: HS60, DZ60RGB V2, and GK64.
        </PageParagraph>
        <PageParagraph>
          You can solder <b>SMD LEDs</b> or in-switch (per-key){" "}
          <b>3mm flangeless LEDs</b> to provide backlighting to your PCB.
        </PageParagraph>
        <PageUl>
          <li>
            <b>SMD LEDs</b> provide backlighting, but it does not provide per
            key lighting. They also require more precise soldering - it is
            recommended to use a smaller diameter of solder wire for SMD
            components (0.5mm).
          </li>
          <li>
            <b>In-switch LEDs</b> provide lighting for each individual key, but
            it is more time consuming to solder in-switch LEDs.
          </li>
        </PageUl>
        <Figure>
          <Image src={LogitechRGBKeyboard} />
          <FigureCaption>Logitech keyboard with backlighting</FigureCaption>
        </Figure>
        <PageSectionSubheading id="plates-and-pcbs-4.4">
          North-facing vs. South-facing switches
        </PageSectionSubheading>
        <PageParagraph>
          Switch orientation can vary among PCBs, referred to as{" "}
          <b>north-facing</b> and <b>south-facing.</b>
        </PageParagraph>
        <PageParagraph>
          North-facing switches are necessary for backlighting so that LEDs can
          shine through the keycap legend, as the legends are typically situated
          near the north-side of the keycap. So f you have a PCB with per-key
          lighting and you wish to show off the lighting with shine-through
          keycaps, <b>north-facing switches</b> are preferred. However, it has
          been found that on shorter height keycaps such as R3 of Cherry profile
          keycaps, north-facing causes interference, which prevents the switch
          from fully pressing down.
        </PageParagraph>
        <Figure>
          <Image src={NorthFacingSwitch} />
          <FigureCaption>
            A north-facing switch. Notice the LED on the north-side and the logo
            on the south-side
          </FigureCaption>
        </Figure>
        <PageParagraph>
          If you have no need for per-key lighting, <b>south-facing switches</b>{" "}
          are preferred as north-facing switches sometimes have{" "}
          <Link to="/keyboard-encyclopedia/keycaps">interference problems</Link>{" "}
          when using them with{" "}
          <Link to="/keyboard-encyclopedia/keycaps">Cherry keycaps</Link>.
        </PageParagraph>
        <PageRow>
          <Figure>
            <Image src={SouthFacingSwitch} />
            <FigureCaption>
              A south-facing switch. Opposite orientation to a north-facing
              switch
            </FigureCaption>
          </Figure>
          <Figure>
            <Image src={SouthFacingSwitchLit} />
            <FigureCaption>
              Notice how only the south-side legends are illuminated on these
              arrow key keycaps
            </FigureCaption>
          </Figure>
        </PageRow>
      </PageSection>
    </PageContainer>
  );
};

export default PlatesAndPCBs;

const PlateMaterialComparisonChartTable = styled.table`
  padding: 1rem;
  margin: 0 auto;
  font-size: 1.1rem;

  & > thead, tbody {
    margin-top: 0.5em;
  }

  & > tbody > tr > td {
    padding-left: 0.5em;
  }
`;
