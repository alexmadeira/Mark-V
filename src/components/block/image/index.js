import React, { Component } from "react";

import classNames from "classnames";
class Image extends Component {
  static propTypes = {};
  state = {
    loaded: false
  };

  onImageLoaded() {
    setTimeout(() => {
      this.setState({
        loaded: true
      });
    }, 1000);
  }

  render() {
    const {
        state: { loaded },
        props: { className, src, alt }
      } = this,
      classImage = classNames(className, "lt-image", { _loaded: loaded });

    return (
      <div className={classImage}>
        <img className="preload" src={src.preload} alt="preload" />
        <img
          className="content"
          src={src.content}
          alt={alt}
          onLoad={this.onImageLoaded.bind(this)}
        />
      </div>
    );
  }
}

export default Image;
