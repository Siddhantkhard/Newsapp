import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { resolvePath } from "react-router-dom";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    name: "country",
    pageSize: 8,
    category: general,
  };
  static PropTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [
    {
      source: { id: null, name: "BBC News" },
      author: null,
      title:
        "Republican debate: Five takeaways as Haley and DeSantis face off - BBC.com",
      description:
        "The Republican candidates traded insults and clashed on key issues just days before the Iowa caucuses.",
      url: "https://www.bbc.com/news/world-us-canada-67942133",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/360D/production/_132273831_gettyimages-1915747874.jpg",
      publishedAt: "2024-01-11T08:22:17Z",
      content:
        "By Bernd Debusmann JrBBC News, Des Moines, Iowa\r\nRepublican presidential candidates Ron DeSantis and Nikki Haley squared off in a tense debate on Wednesday, trading barbs just days before the Iowa ca… [+6546 chars]",
    },
    {
      source: { id: null, name: "CoinDesk" },
      author: "Shaurya Malwa",
      title:
        "Bitcoin ETFs Secure Approval Exactly 15 Years After Hal Finney’s Iconic ‘Running Bitcoin’ Tweet - CoinDesk",
      description:
        "Finney, who died in August 2014, was also the first person besides Bitcoin’s pseudonymous creator, Satoshi Nakamoto, to download and run Bitcoin’s software.",
      url: "https://www.coindesk.com/markets/2024/01/11/bitcoin-etfs-secure-approval-exactly-15-years-after-hal-finneys-iconic-running-bitcoin-tweet/",
      urlToImage:
        "https://www.coindesk.com/resizer/vX7wIluweaYmBMX_irsKcO5DTk0=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/PZ7QSE54NJEEJIIBDYR6IWUVDM.png",
      publishedAt: "2024-01-11T07:21:00Z",
      content:
        "Running bitcoin, were the words of legendary cypherpunk Hal Finney on Jan. 11, 2009, shortly before becoming the first person to download and receive bitcoin (BTC) two days later.\r\nThis tweet introdu… [+2152 chars]",
    },
    {
      source: { id: null, name: "CBS Sports" },
      author: "",
      title:
        "Nick Saban somehow lived up to his own impossible standard leaving Alabama still at the top of his game - CBS Sports",
      description:
        "Saban's seven national championships, immense coaching tree and 49 first-round picks leave an incomparable legacy",
      url: "https://www.cbssports.com/college-football/news/nick-saban-somehow-lived-up-to-his-own-impossible-standard-leaving-alabama-still-at-the-top-of-his-game/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2024/01/11/5d050796-b300-4659-8856-90b3894a2d70/thumbnail/1200x675/955dd11c06ce08e82366c98faa44c888/nick-saban-alabama-closeup-rose-2023-g.png",
      publishedAt: "2024-01-11T06:09:00Z",
      content:
        "In a guarded moment a few years ago, Nick Saban revealed one of his biggest fears. \r\nCan you imagine, he said, if one of his Alabama teams ever went 8-4? For virtually any other coach, that's not ter… [+9267 chars]",
    },
    {
      source: { id: null, name: "WION" },
      author: "WION Web Team",
      title:
        "Radio signal that took 8 billion years to reach Earth came from seven interacting galaxies - WION",
      description:
        "Radio signal that took 8 billion years to reach Earth came from seven interacting galaxies",
      url: "https://www.wionews.com/science/source-of-mysterious-radio-signal-that-took-8-billion-years-to-reach-earth-revealed-678566",
      urlToImage:
        "https://cdn.wionews.com/sites/default/files/2024/01/10/404873-frbs.png",
      publishedAt: "2024-01-11T05:46:04Z",
      content:
        "Scientists have uncovered the source of the mysterious radio signal that took eight billion years to reach us.\r\nA new research presented during the 243rd meeting of the American Astronomical Society … [+2318 chars]",
    },

    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Navy helicopter crashes into California waters with six inside - CBS 8 San Diego",
      description:
        "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
      url: "https://www.youtube.com/watch?v=RbBRmpkyOzg",
      urlToImage: null,
      publishedAt: "2024-01-12T06:07:22Z",
      content: null,
    },
    {
      source: { id: null, name: "Deadline" },
      author: "Anthony D'Alessandro",
      title:
        "‘Top Gun 3’ In The Works At Paramount Following Tom Cruise Warner Bros Pact - Deadline",
      description:
        "Even though Tom Cruise inked a non-exclusive pact at Warner Bros earlier this week, it looks like he’ll continue to be busy with Paramount for some time. Reports tonight are that Top Gun 3 is…",
      url: "http://deadline.com/2024/01/top-gun-3-tom-cruise-1235722328/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2023/08/MCDTOGU_PA043.jpg?w=1024",
      publishedAt: "2024-01-12T05:35:00Z",
      content:
        "Even though Tom Cruise inked a non-exclusive pact at Warner Bros earlier this week, it looks like he’ll continue to be busy with Paramount for some time. Reports tonight are that Top Gun 3is in devel… [+1624 chars]",
    },
    {
      source: { id: "financial-times", name: "Financial Times" },
      author: null,
      title:
        "Live news: Chinese trade declines in 2023 as global demand ebbs - Financial Times",
      description: null,
      url: "https://www.ft.com/content/ae641cf6-76c8-42ba-aba1-8ae9e601037d",
      urlToImage: null,
      publishedAt: "2024-01-12T05:06:13Z",
      content:
        "Then $29 per 3 months. Today's FT for easy reading on any device, with a brand new app. Please note this does not include access to ft.com or the FT main app.",
    },
    {
      source: { id: null, name: "NBCSports.com" },
      author: "Mike Florio",
      title:
        'Robert Kraft: Removing personnel power from Bill Belichick would have created "confusion" - NBC Sports',
      description:
        "On Monday, now-former Patriots coach Bill Belichick addressed the possibility of relinquishing personnel control moving forward.",
      url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/robert-kraft-removing-personnel-power-from-bill-belichick-would-have-created-confusion",
      urlToImage:
        "https://nbcsports.brightspotcdn.com/dims4/default/5fca89b/2147483647/strip/true/crop/1920x1080+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fhdliveextra-a.akamaihd.net%2FHD%2Fimage_sports%2FNBCU_Sports_Group_-_nbcsports%2F956%2F506%2Fnbc_pftpm_belichickmutuallyparts_240111.jpg",
      publishedAt: "2024-01-12T04:58:18Z",
      content:
        "On Monday, now-former Patriots coach Bill Belichick addressed the possibility of relinquishing personnel control moving forward. If it was a message to owner Robert Kraft, it didnt prevent the decisi… [+2445 chars]",
    },
    {
      source: { id: "espn", name: "ESPN" },
      author: null,
      title:
        "Thunder beat Trail Blazers by 62 for largest win in franchise history - ESPN",
      description:
        "The Thunder rolled past the Trail Blazers 139-77 on Thursday night, a 62-point victory that matched the fifth-largest rout in NBA history.",
      url: "https://www.espn.com/nba/story/_/id/39290454/thunder-beat-trail-blazers-62-largest-win-franchise-history",
      urlToImage:
        "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0112%2Fr1276415_1296x729_16%2D9.jpg",
      publishedAt: "2024-01-12T04:21:00Z",
      content:
        "Jan 11, 2024, 11:21 PM ET\r\nOKLAHOMA CITY -- Shai Gilgeous-Alexander scored 31 points, Josh Giddey had a triple-double and the Oklahoma City Thunder rolled past the Portland Trail Blazers 139-77 on Th… [+4158 chars]",
    },
    {
      source: { id: "the-hill", name: "The Hill" },
      author: "Sarah Polus",
      title:
        "House Republican wanted Hunter Biden to testify when Democrats offered: ‘I would have raised my hand’ - The Hill",
      description:
        "Rep. Andy Biggs (R-Ariz.) said he would have requested to hear Hunter Biden speak had he been in the room at the time Democrats made the offer during a Wednesday hearing. The son of President Biden made a surprise appearance at a markup of the House Oversight…",
      url: "https://thehill.com/homenews/4404449-house-republican-wanted-hunter-biden-testify-when-democrats-offered/",
      urlToImage:
        "https://thehill.com/wp-content/uploads/sites/2/2023/10/biggsandy_092823gn01_w.jpg?w=1280",
      publishedAt: "2024-01-12T03:42:00Z",
      content:
        "Skip to content\r\nRep. Andy Biggs (R-Ariz.) said he would have requested to hear Hunter Biden speak had he been in the room at the time Democrats made the offer during a Wednesday hearing.\r\nThe son of… [+1388 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "Graham Kates, Katrina Kaufman",
      title:
        "Trump makes closing argument on final day of New York fraud trial, disregarding judge's restrictions - CBS News",
      description:
        "Former President Donald Trump disregarded limits​ imposed by the judge overseeing his civil fraud trial in New York and addressed the court during closing arguments.",
      url: "https://www.cbsnews.com/news/trump-attends-closing-arguments-new-york-fraud-trial/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2024/01/11/c97a4695-029b-40e8-bcc4-39772ee7fb1c/thumbnail/1200x630/ea7a2a7d34712809cb62929d5cc67f38/gettyimages-1917511648.jpg?v=2194e1912ab0b51d957839e2d5977664",
      publishedAt: "2024-01-12T02:45:00Z",
      content:
        "Former President Donald Trump disregarded restrictions imposed by the judge overseeing his civil fraud trial in New York and addressed the court during closing arguments on Thursday, raging against t… [+12381 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Hannah Grossman",
      title:
        "Harvard sued for violating Jewish students' civil rights, allowing 'antisemitism cancer' to grow on campus - Fox News",
      description:
        "Harvard University was sued by Kasowitz Benson Torres for allegedly violating Jewish students' civil rights by allowing 'antisemitism cancer' to metastasize on campus.",
      url: "https://www.foxnews.com/media/harvard-sued-violating-jewish-students-civil-rights-allowing-antisemitism-cancer-grow-campus",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2024/01/Harvard-Sued-.jpg",
      publishedAt: "2024-01-12T02:31:00Z",
      content:
        'Harvard University is being sued by students for what they claim is an "antisemitism cancer" growing on campus, accusing the institution of "hir[ing] professors who support anti-Jewish violence" and … [+3597 chars]',
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?${this.props.country}category=${this.props.category}&apikey=085b1b8d584b4f5a8aadc4456ab210ed&page:&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parseData = await data.json;
    this.setState({
      articles: parseData.articles,
      totalarticles: parseData.totalResults,
    });
  }
  handlepreviousclick = async () => {
    if (
      this.setState.page - 1 >
      Math.ceil(this.statetotalResult / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=uscategory=${
        this.props.category
      }&apikey=085b1b8d584b4f5a8aadc4456ab210ed&page:${
        this.setState.page - 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parseddata = await data.json;
      this.setState({
        page: this.setState.page - 1,
        articles: parseddata.articles,
      });
    }
  };

  handlenextclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=uscategory=${
      this.props.category
    }&apikey=085b1b8d584b4f5a8aadc4456ab210ed&page:${
      this.setState.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseddata = await data.json;
    this.setState({
      page: this.setState.page + 1,
      articles: parseddata.articles,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey top headlines!</h2>
        this is a news component
        <div className="row ">
          {this.state.articles.map((elements) => {
            return (
              <div className="col-md-4" key={elements.url}>
                <NewsItem
                  title={elements.title ? elements.title.slice(0, 45) : ""}
                  description={
                    elements.description
                      ? elements.description.slice(0, 88)
                      : ""
                  }
                  imageUrl={elements.urlToImage}
                  newsurl={elements.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlepreviousclick}
          >
            &larr;PREVIOUS
          </button>
          <button
            disabled={
              this.setState.page - 1 >
              Math.ceil(this.statetotalResult / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handlenextclick}
          >
            NEXT&rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
