/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {/* {siteConfig.title} */}
    <img width="800" src={imgUrl('tamods-logo.png')} />
    <small>{siteConfig.tagline}</small>
  </h2>
  
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        {/* <Logo img_src={imgUrl('docusaurus.svg')} /> */}
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('doc_user_install.html', language)}>Get TAMods</Button>
            {/* <Button href={docUrl('doc_user_tutorial.html', language)}>Learn About The Features</Button> */}
            <Button href={docUrl('doc_dev_intro.html', language)}>Read Developer Docs</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'Create fully modular custom HUDs with TAMods',
        // image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Custom HUDs',
      },
      {
        content: 'Display, replay and record capping routes in-game',
        // image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Route Recording',
      },
      {
        content: 'Want the SAP20 back? A spinfusor that fires purple discs?',
        // image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Weapon Visuals Modification',
      },
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Customisation with a comprehensive Lua API</h2>
    <MarkdownBlock>
      Build custom HUDs, record and replay routes, customise weapon models, import custom hitsounds, record game stats and much more...
    </MarkdownBlock>
  </div>
);

const LearnHow = props => (
  <Block layout="twoColumn" background="light">
    {[
      {
        content: '',
        image: imgUrl('screen_hud.jpg'),
        imageAlign: 'right',
        title: 'Feature Demonstration',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Talk about trying this out',
        image: imgUrl('screen_route.jpg'),
        imageAlign: 'left',
        title: 'Route Recording',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('screen_sap.jpg'),
        imageAlign: 'right',
        title: 'Weapon Visuals Modification',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          {/* <Features /> */}
          <FeatureCallout />
          {/* <LearnHow /> */}
          {/* <TryOut /> */}
          {/* <Description /> */}
          {/* <Showcase language={language} /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
