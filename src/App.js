import { PureComponent } from "react";
import './App.scss';

class Fourcard extends PureComponent {
  render() {
    return (
      <div className="conatainer_main">

        <div className="card_header">
          <h1 className="header_title">Reliable, efficient delivery</h1>
          <h2 className="header_subtitle">Powered by Technology</h2>
          <p className="header_paragraph">
            Our Artificial Intelligence powered tools use millions of project data points
            to ensure that your project is successful
          </p>
        </div>

        <div className="cards">
          <div className="card_supervisor">
            <h1 className="card_title">Supervisor</h1>
            <p className="card_paragraph">Monitors activity to identify project roadblocks</p>
            <div className="card_image">
              <img src="images/icon-supervisor.svg" />
            </div>
          </div>

          <div className="card_team-builder">
            <h1 className="card_title">Team Builder</h1>
            <p className="card_paragraph">Scans our talent network to create the optimal team for your project</p>
            <div className="card_image">
              <img src="images/icon-team-builder.svg" />
            </div>
          </div>

          <div className="card_karma">
            <h1 className="card_title">Karma</h1>
            <p className="card_paragraph">Regularly evaluates our talent to ensure quality</p>
            <div className="card_image">
              <img src="images/icon-karma.svg" />
            </div>
          </div>

          <div className="card_calculator">
            <h1 className="card_title">Calculator</h1>
            <p className="card_paragraph">Uses data from past projects to provide better delivery estimates</p>
            <div className="card_image">
              <img src="images/icon-calculator.svg" />
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default Fourcard;

