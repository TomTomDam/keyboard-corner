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

import FullSizeKeyboardLayout from "../../../assets/images/LayoutsAndSizes/fullsizekeyboard_layout.png";
import FullSizeKeyboard from "../../../assets/images/LayoutsAndSizes/fullsizekeyboard_keyboard.png";
import TenkeylessLayout from "../../../assets/images/LayoutsAndSizes/tenkeyless_layout.png";
import GloriousGMMK from "../../../assets/images/LayoutsAndSizes/glorious_gmmk_tkl.jpg";
import CompactSeventyFivePercentLayout from "../../../assets/images/LayoutsAndSizes/compact75percentkeyboard_layout.png";
import SpacedSeventyFivePercentLayout from "../../../assets/images/LayoutsAndSizes/spaced-75-layout.jpg";
import VortexRace3 from "../../../assets/images/LayoutsAndSizes/vortex_race_3_75percent.jpg";
import Gok7vKeyboard from "../../../assets/images/LayoutsAndSizes/7v_75percent.jpg";
import SixtyPercentLayout from "../../../assets/images/LayoutsAndSizes/60percentkeyboard_layout.png";
import Fjell from "../../../assets/images/LayoutsAndSizes/fjell_60percent.jpg";
import SixtyFivePercentLayout from "../../../assets/images/LayoutsAndSizes/65percentkeyboard_layout.jpg";
import Kyuu from "../../../assets/images/LayoutsAndSizes/kyuu_65percent.jpg";
import Minivan from "../../../assets/images/LayoutsAndSizes/minivan_40percent.jpg";
import ANSI from "../../../assets/images/LayoutsAndSizes/ANSI-keyboard-layout-min.png";
import ISO from "../../../assets/images/LayoutsAndSizes/ISO-keyboard-layout-min.png";
import JIS from "../../../assets/images/LayoutsAndSizes/JIS-keyboard-layout-min.png";
import HHKB from "../../../assets/images/LayoutsAndSizes/hhkb.jpg";
import Tsangan from "../../../assets/images/LayoutsAndSizes/tsangan_keyboard.jpg";
import Winkeyless from "../../../assets/images/LayoutsAndSizes/winkeyless_keyboard.jpg";
import Dvorak from "../../../assets/images/LayoutsAndSizes/dvorak_layout.png";
import QwertyHeatMap from "../../../assets/images/LayoutsAndSizes/qwerty_heatmap__to_build_a_fire.jpg";
import DvorakHeatMap from "../../../assets/images/LayoutsAndSizes/dvorak_heatmap__to_build_a_fire.jpg";
import Colemak from "../../../assets/images/LayoutsAndSizes/colemak_layout.png";
import VortexCypher from "../../../assets/images/LayoutsAndSizes/vortex_cypher_splitspacebar.jpg";
import TripleSplitSpacebar from "../../../assets/images/LayoutsAndSizes/splitspacebar_middlefn.jpg";
import SplitBackspace from "../../../assets/images/LayoutsAndSizes/splitbackspace.jpg";
import SplitRightShift from "../../../assets/images/LayoutsAndSizes/tgr_jane_v2_splitrightshift.jpg";
import SplitEverything from "../../../assets/images/LayoutsAndSizes/spliteverything.jpg";

const LayoutsAndSizes = () => {
  const anchorLink = "layouts-and-sizes";
  const chapterList = [
    {
      id: 1,
      name: "Sizes",
      subchapters: [
        {
          id: 1,
          name: "Full-size",
        },
        {
          id: 2,
          name: "Tenkeyless (TKL) / 80%",
        },
        {
          id: 3,
          name: "75%",
        },
        {
          id: 4,
          name: "60%",
        },
        {
          id: 5,
          name: "65%",
        },
        {
          id: 6,
          name: "40%",
        },
      ],
    },
    {
      id: 2,
      name: "Layouts",
      subchapters: [
        {
          id: 1,
          name: "ANSI, ISO and JIS",
        },
        {
          id: 2,
          name: "HHKB (Happy Hacking Keyboard)",
        },
        {
          id: 3,
          name: "Tsangan",
        },
        {
          id: 4,
          name: "Winkeyless",
        },
        {
          id: 5,
          name: "Dvorak",
        },
        {
          id: 6,
          name: "Colemak",
        },
      ],
    },
    {
      id: 3,
      name: "Layout customisations",
      subchapters: [
        {
          id: 1,
          name: "Split spacebar",
        },
        {
          id: 2,
          name: "Split backspace",
        },
        {
          id: 1,
          name: "Split right shift",
        },
      ],
    },
    {
      id: 4,
      name: "Which keyboard size is right for me?",
      subchapters: [],
    },
    {
      id: 5,
      name: "What about the layout?",
      subchapters: [],
    },
    {
      id: 6,
      name: "Conclusion",
      subchapters: [],
    },
  ];

  return (
    <PageContainer>
      <PageTitle>Layouts and Sizes</PageTitle>
      <PageParagraph>
        Keyboards come in a variety of different shapes and sizes to fit
        anyone's needs. First, let's establish the difference between keyboard
        layouts and keyboard sizes. Then I'll outline common keyboard layouts
        and sizes.
      </PageParagraph>
      <PageSection>
        <PageSectionHeading>
          Difference between keyboard layouts and sizes
        </PageSectionHeading>
        <PageParagraph>
          A <b>keyboard layout</b> is the specific arrangement of the keys on a
          keyboard. Examples include:
        </PageParagraph>
        <PageUl>
          <li>ANSI - American Standard</li>
          <li>ISO - European Standard</li>
          <li>JIS - Japanese Standard</li>
        </PageUl>
        <PageParagraph>
          Different layouts vary in the physical appearance of key sizes and
          placements, and total keys on the keyboard.
        </PageParagraph>
        <PageParagraph>
          A <b>keyboard size</b> is the physical shape and size of the keyboard.
          Examples include:
        </PageParagraph>
        <PageUl>
          <li>Full-size</li>
          <li>Tenkeyless (TKL) / 80%</li>
          <li>75%</li>
          <li>60%</li>
        </PageUl>
        <PageParagraph>
          This is not the entire list of layouts and sizes I will be covering in
          this article. Confused at this point? Don't fret! Please read on, as I
          shall go into more detail below.
        </PageParagraph>
      </PageSection>

      <TableOfContents chapterList={chapterList} anchorLink={anchorLink}/>

      <PageSection>
        <PageSectionHeading id="layouts-and-sizes-1">Sizes</PageSectionHeading>
        <PageSectionSubheading id="layouts-and-sizes-1.1">
          Full-size
        </PageSectionSubheading>
        <PageParagraph>
          This is the most common and most accessible type of keyboard you can
          see or use. This keyboard size features everything for any use case,
          for example a number pad, arrow keys and function keys.
        </PageParagraph>
        <PageRow>
          <Figure>
            <Image src={FullSizeKeyboardLayout} />
            <FigureCaption></FigureCaption>
          </Figure>
          <Figure>
            <Image src={FullSizeKeyboard} />
            <FigureCaption>
              Your everyday Microsoft full-size keyboard
            </FigureCaption>
          </Figure>
        </PageRow>
        <PageSectionSubheading id="layouts-and-sizes-1.2">
          Tenkeyless (TKL) / 80%
        </PageSectionSubheading>
        <PageParagraph>
          One step below the full-size is the Tenkeyless (TKL). It is basically
          a full-size without a number pad. This layout is quite common amongst
          gamers who require more desk space to move their mouse more freely,
          and have no need for a dedicated number pad, whilst also wanting to
          retain most of the functionality of a full-size keyboard.
        </PageParagraph>
        <PageRow>
          <Figure>
            <Image src={TenkeylessLayout} />
            <FigureCaption></FigureCaption>
          </Figure>
          <Figure>
            <Image src={GloriousGMMK} />
            <FigureCaption>Glorious GMMK TKL</FigureCaption>
          </Figure>
        </PageRow>
        <PageSectionSubheading id="layouts-and-sizes-1.3">
          75%
        </PageSectionSubheading>
        <PageParagraph>
          Further down the line, the 75% is a more cramped version of the TKL -
          it offers almost the same features as a TKL, but now the keys are
          closer to each other. You retain the F keys and nav keys, but you
          don't get immediate access to every nav key (
          <a href="#">unless you use Fn layers</a>). For the average person,
          though, some of the nav keys such as Scroll Lock and Pause Break are
          never used, making it an easier transition to go from a TKL to a 75%.
        </PageParagraph>
        <PageParagraph>
          There are two variants of the 75% - the <b>compact</b> and{" "}
          <b>spaced</b> 75% layouts. One advantage is that it further reduces
          desk space usage. With the compact 75%, because the keys are close
          together, mistyping becomes more common. However, a spaced 75% layout
          alleviates this problem.
        </PageParagraph>
        <PageRow>
          <Figure>
            <Image src={CompactSeventyFivePercentLayout} />
            <FigureCaption>A compact 75% layout.</FigureCaption>
          </Figure>
          <Figure>
            <Image src={SpacedSeventyFivePercentLayout} />
            <FigureCaption>
              A spaced 75% layout. Notice the spacing between the keys.
            </FigureCaption>
          </Figure>
        </PageRow>
        <PageRow>
          <Figure>
            <Image src={VortexRace3} />
            <FigureCaption>Vortex Race 3, a compact 75% keyboard</FigureCaption>
          </Figure>
          <Figure>
            <Image src={Gok7vKeyboard} />
            <FigureCaption>
              7v keyboard, designed by gok. A spaced 75 keyboard.
            </FigureCaption>
          </Figure>
        </PageRow>
        <PageSectionSubheading id="layouts-and-sizes-1.4">
          60%
        </PageSectionSubheading>
        <PageParagraph>
          A very common size amongst MK enthusiasts, it removes anything on the
          right of the Enter key, as well as the function keys. This is often
          the cut-off point for most beginner MK hobbyists, as it offers a
          minimal and aesthetically appealing look without removing too much
          functionality.
        </PageParagraph>
        <PageParagraph>
          An obvious downside is that you are unable to immediately access
          specialised keys, such as the Function row or even the arrow keys.
          Fortunately, 60% keyboards are programmed to enable the user to do
          this with one extra step. To access the Function keys, the Fn key is
          used in combination with the number row. Arrow keys may also be
          accessible by using Fn with WASD, for example.
        </PageParagraph>
        <PageRow>
          <Figure>
            <Image src={SixtyPercentLayout} />
            <FigureCaption>A typical 60% layout</FigureCaption>
          </Figure>
          <Figure>
            <Image src={Fjell} />
            <FigureCaption>
              Mekanisk Fjell with GMK Modern Dolch, custom-built by Taeha Types
            </FigureCaption>
          </Figure>
        </PageRow>
        <PageSectionSubheading id="layouts-and-sizes-1.5">
          65%
        </PageSectionSubheading>
        <PageParagraph>
          The 65% is near identical to the 60%, with some exceptions. It strikes
          a fine balance between convenience and minimalism by including arrow
          keys and some extra keys for utility on the right.
        </PageParagraph>
        <PageRow>
          <Figure>
            <Image src={SixtyFivePercentLayout} />
            <FigureCaption>One possible 65% layout</FigureCaption>
          </Figure>
          <Figure>
            <Image src={Kyuu} />
            <FigureCaption>
              Kyuu with GMK Olivia in a kyuute colorway, courtesy of /u/Cankr
            </FigureCaption>
          </Figure>
        </PageRow>
        <PageSectionSubheading id="layouts-and-sizes-1.6">
          40%
        </PageSectionSubheading>
        <PageParagraph>
          As minimal as it gets, the 40% offers the bare necessities with the
          alphabet keys and your typical modifier keys. It foregoes most keys of
          a traditional keyboard, even going so far as to disregard the number
          row.
        </PageParagraph>
        <Figure>
          <Image src={Minivan} />
          <FigureCaption>Minivan keyboard</FigureCaption>
        </Figure>
      </PageSection>

      <PageSection>
        <PageSectionHeading id="layouts-and-sizes-2">
          Layouts
        </PageSectionHeading>
        <PageParagraph>
          In this section, I will go into the various layouts that keyboards
          have to offer.
        </PageParagraph>
        <PageSectionSubheading id="layouts-and-sizes-2.1">
          ANSI, ISO and JIS
        </PageSectionSubheading>
        <PageParagraph>
          These are layouts that you commonly see on a keyboard. These three
          layouts correspond to certain regions of the world. ANSI is typical to
          America, ISO for Europe and JIS for Japan. Highlighted below are the
          differences between the layouts:
        </PageParagraph>
        <PageRow>
          <RowFigure>
            <Image src={ANSI} />
            <FigureCaption>ANSI layout</FigureCaption>
          </RowFigure>
          <RowFigure>
            <Image src={ISO} />
            <FigureCaption>ISO layout</FigureCaption>
          </RowFigure>
          <RowFigure>
            <Image src={JIS} />
            <FigureCaption>JIS layout</FigureCaption>
          </RowFigure>
        </PageRow>
        <PageParagraph>
          ANSI, ISO and JIS layouts are universal layouts that can fit on any
          keyboard size. Sometimes though, different keyboard layouts are
          affixed to different keyboard sizes e.g. HHKB layout fits on a 60%
          keyboard size. But wait, what exactly is a HHKB layout? Keep on
          reading to find out more!
        </PageParagraph>
        <PageSectionSubheading id="layouts-and-sizes-2.2">
          HHKB (Happy Hacking Keyboard)
        </PageSectionSubheading>
        <PageParagraph>
          Pioneered by Japanese computer scientist Eiiti Wada and later
          developed by PFU Limited, the Happy Hacking Keyboard (HHKB) layout was
          originally designed with Unix programmers in mind.
        </PageParagraph>
        <PageParagraph>
          Within the MK community, this layout has become popularized due to its
          compact and intuitive arrangement of keys, ensuring a more efficient
          and ergonomic typing experience, especially for programmers who make
          regularly make use of modifier keys. This layout fits on a 60%
          keyboard size. Notable features of this layout include:
        </PageParagraph>
        <PageUl>
          <li>
            Caps Lock is replaced by Control key, which puts Control in a more
            ergonomic location. Caps Lock is now accessible with Fn + Tab
          </li>
          <li>
            Backspace replaces ANSI Pipe/Backslash key, the latter moving up and
            separated into 1u Pipe and 1u Backslash keys
          </li>
          <li>
            Removal of Function row, number row, arrow keys and number pad for a
            compact layout
          </li>
          <li>
            Right Shift is split into a smaller Shift key and includes an Fn key
            to enable usage of Function row and other keys
          </li>
        </PageUl>
        <Figure>
          <Image src={HHKB} />
          <FigureCaption>HHKB Professional 2 Keyboard</FigureCaption>
        </Figure>
        <PageSectionSubheading id="layouts-and-sizes-2.3">
          Tsangan
        </PageSectionSubheading>
        <PageParagraph>
          Tsangan is almost the same as the HHKB layout - the only difference is
          the bottom row. It reintroduces the Control keys at the blockers in
          the bottom corners that is present in the HHKB layout.
        </PageParagraph>
        <Figure>
          <Image src={Tsangan} />
          <FigureCaption>A Tsangan layout keyboard</FigureCaption>
        </Figure>
        <PageSectionSubheading id="layouts-and-sizes-2.4">
          Winkeyless
        </PageSectionSubheading>
        <PageParagraph>
          Winkeyless is similar to Tsangan layout. The only difference is that
          there are no Windows keys on the bottom row. This layout was first
          present on vintage style keyboards e.g. IBM Model M.
        </PageParagraph>
        <PageParagraph>
          Some enthusiasts enjoy the idea of removing the Windows key to prevent
          them from accidentally pressing the Windows key. Some also like the
          layout for the aesthetic it provides. If you wish to use the Windows
          key on a Winkeyless layout, it can simply be remapped to another key,
          although most Winkeyless owners forego the Windows key entirely.
        </PageParagraph>
        <Figure>
          <Image src={Winkeyless} />
          <FigureCaption>A Winkeyless layout keyboard</FigureCaption>
        </Figure>
        <PageSectionSubheading id="layouts-and-sizes-2.5">
          Dvorak
        </PageSectionSubheading>
        <PageParagraph>
          Dvorak is an alternative to the standard QWERTY layout, first
          developed by American educational psychologist August Dvorak and his
          brother-in-law and professor of education William Dealey. They
          designed this layout based on scientific study of the psychology and
          physiology of typing. Their overall goal was to design a layout that
          requires less finger motion, which in turn reduces mistyping errors,
          increases typing speed and reduces repetitive strain injuries.
        </PageParagraph>
        <Figure>
          <Image src={Dvorak} />
          <FigureCaption>Dvorak layout</FigureCaption>
        </Figure>
        <PageParagraph>
          It may look strange, but let's out bring a little experiment. Here is
          a heat map when typing up a block of text on a QWERTY layout:
        </PageParagraph>
        <PageRow>
          <Figure>
            <Image src={QwertyHeatMap} />
            <FigureCaption>
              Notice how the key presses are relatively far away from each other
            </FigureCaption>
          </Figure>
          <Figure>
            <Image src={DvorakHeatMap} />
            <FigureCaption>
              See how the frequently pressed keys are conveniently located on
              the home row?
            </FigureCaption>
          </Figure>
        </PageRow>
        <PageParagraph>
          More information about this typing experiment can be found here:{" "}
          <a
            href="http://xahlee.info/kbd/keyboard_dvorak_layout.html"
            target="_blank"
          >
            http://xahlee.info/kbd/keyboard_dvorak_layout.html
          </a>
        </PageParagraph>
        <PageSectionSubheading id="layouts-and-sizes-2.6">
          Colemak
        </PageSectionSubheading>
        <PageParagraph>
          Designed by Shai Coleman, Colemak is yet another QWERTY alternative.
          It shares the same design goals as Dvorak (decrease typing errors,
          faster typing, reduce fatigue), however it works on Dvorak's
          shortcomings by providing an easier to learn layout for those who are
          already familiar with QWERTY.
        </PageParagraph>
        <Figure>
          <Image src={Colemak} />
          <FigureCaption>Colemak layout</FigureCaption>
        </Figure>
        <PageParagraph>
          So the question is: Dvorak or Colemak? Read this article to find out:{" "}
          <a
            href="http://xahlee.info/kbd/dvorak_vs_colemak.html"
            target="_blank"
          >
            http://xahlee.info/kbd/dvorak_vs_colemak.html
          </a>
        </PageParagraph>
      </PageSection>

      <PageSection>
        <PageSectionHeading id="layouts-and-sizes-3">
          Layout customisations
        </PageSectionHeading>
        <PageParagraph>
          Given the flexibility of custom keyboards, people may wish to go a
          step further and include a specialised customisation to their usual
          layout. Some prebuilt keyboards even include these customisations for
          those who are looking for it. I will outline three customisations you
          may include in your layout.
        </PageParagraph>
        <PageSectionSubheading id="layouts-and-sizes-3.1">
          Split spacebar
        </PageSectionSubheading>
        <PageParagraph>
          The split spacebar (obviously) splits your spacebar into extra keys.
          Because people tend to press the left side of the spacebar, it can be
          worthwhile to split the spacebar into two, the left key being spacebar
          and the right key often being used for backspace or delete.
        </PageParagraph>
        <Figure>
          <Image src={VortexCypher} />
          <FigureCaption>Vortex Cypher with split spacebar</FigureCaption>
        </Figure>
        <PageParagraph>
          Another split spacebar option includes further splitting the spacebar
          into three keys. One use case for the middle key could be to use it as
          an Fn key in the middle.
        </PageParagraph>
        <Figure>
          <Image src={TripleSplitSpacebar} />
          <FigureCaption>Triple split spacebar, by /u/utgnadnart</FigureCaption>
        </Figure>
        <PageSectionSubheading id="layouts-and-sizes-3.2">
          Split backspace
        </PageSectionSubheading>
        <Figure>
          <Image src={SplitBackspace} />
          <FigureCaption>
            This keyboard splits the Backspace into Backspace and Num Lock
          </FigureCaption>
        </Figure>
        <PageSectionSubheading id="layouts-and-sizes-3.3">
          Split right shift
        </PageSectionSubheading>
        <PageParagraph>
          The traditionally massive right shift key is split into two separate
          keys.
        </PageParagraph>
        <Figure>
          <Image src={SplitRightShift} />
          <FigureCaption>TGR Jane V2 with split right shift</FigureCaption>
        </Figure>
        <PageParagraph>
          You may even consider doing a combination of these customisations to
          suit your typing needs. Check out this sweet keyboard that combines
          all three of the above customisations!
        </PageParagraph>
        <Figure>
          <Image src={SplitEverything} />
          <FigureCaption>
            Custom-built keyboard using Banana Split PCB - split spacebar, split
            backspace AND split right shift! By /u/lkeet
          </FigureCaption>
        </Figure>
      </PageSection>

      <PageSection>
        <PageSectionHeading id="layouts-and-sizes-4">
          Which keyboard size is right for me?
        </PageSectionHeading>
        <PageParagraph>
          As you can see, there are a lot of different keyboard sizes out there
          for you to choose from. The sheer number of variety at hand can make
          your decision more difficult - do you need desk space, do you require
          arrow keys for quality of life? What do I choose?!
        </PageParagraph>
        <PageParagraph>
          Look no further! I have created a simple table to follow that outlines
          most people's requirements.
        </PageParagraph>
        <div></div>
      </PageSection>

      <PageSection>
        <PageSectionHeading id="layouts-and-sizes-5">
          What about the layout?
        </PageSectionHeading>
        <PageParagraph></PageParagraph>
        <div></div>
      </PageSection>

      <PageSection>
        <PageSectionHeading id="layouts-and-sizes-6">
          Conclusion
        </PageSectionHeading>
        <PageParagraph></PageParagraph>
      </PageSection>
    </PageContainer>
  );
};

export default LayoutsAndSizes;

const RowFigure = styled(Figure)`
  & > img {
    max-width: 80%;
  }
`;
